import {
  json,
  serve,
  validateRequest,
} from "https://deno.land/x/sift@0.3.5/mod.ts";
// TweetNaCl is a cryptography library that we use to verify requests
// from Discord.
import nacl from "https://cdn.skypack.dev/tweetnacl?dts";
import {
  APIChatInputApplicationCommandInteraction,
  APIInteraction,
  APIMessageComponentInteraction,
} from "https://raw.githubusercontent.com/discordjs/discord-api-types/main/deno/v9.ts";

import commands from "./commands/command.ts";
// For all requests to "/" endpoint, we want to invoke home() handler.
serve({
  "/": home,
});

// The main logic of the Discord Slash Command is defined in this function.
async function home(request: Request) {
  // validateRequest() ensures that a request is of POST method and
  // has the following headers.
  const { error } = await validateRequest(request, {
    POST: {
      headers: ["X-Signature-Ed25519", "X-Signature-Timestamp"],
    },
  });
  if (error) {
    return json({ error: error.message }, { status: error.status });
  }

  // verifySignature() verifies if the request is coming from Discord.
  // When the request's signature is not valid, we return a 401 and this is
  // important as Discord sends invalid requests to test our verification.
  const { valid, body } = await verifySignature(request);
  if (!valid) {
    return json(
      { error: "Invalid request" },
      {
        status: 401,
      },
    );
  }

  const interaction: APIInteraction = JSON.parse(body);
  const { type } = interaction;
  // Discord performs Ping interactions to test our application.
  // Type 1 in a request implies a Ping interaction.
  if (type === 1) {
    return json({
      type: 1, // Type 1 in a response is a Pong interaction response type.
    });
  }

  // Type 2 in a request is an ApplicationCommand interaction.
  // It implies that a user has issued a command.
  if (type === 2) {
    const { data } = interaction as APIChatInputApplicationCommandInteraction;
    const params = data.options;
    const response = await commands[data.name](params);

    return json(response);
  }

  // Type 3 is a Component interaction, either a button clicked or select menu
  if (type == 3) {
    const { data } = interaction as APIMessageComponentInteraction;
    const [command, value] = data.custom_id.split("|", 2);
    const response = await commands[command](value);

    return json(response);
  }
  // We will return a bad request error as a valid Discord request
  // shouldn't reach here.
  return json({ error: "bad request" }, { status: 400 });
}

/** Verify whether the request is coming from Discord. */
async function verifySignature(
  request: Request,
): Promise<{ valid: boolean; body: string }> {
  const PUBLIC_KEY = Deno.env.get("DISCORD_PUBLIC_KEY")!;
  // Discord sends these headers with every request.
  const signature = request.headers.get("X-Signature-Ed25519")!;
  const timestamp = request.headers.get("X-Signature-Timestamp")!;
  const body = await request.text();
  const valid = nacl.sign.detached.verify(
    new TextEncoder().encode(timestamp + body),
    hexToUint8Array(signature),
    hexToUint8Array(PUBLIC_KEY),
  );

  return { valid, body };
}

/** Converts a hexadecimal string to Uint8Array. */
function hexToUint8Array(hex: string) {
  return new Uint8Array(hex.match(/.{1,2}/g)!.map((val) => parseInt(val, 16)));
}
