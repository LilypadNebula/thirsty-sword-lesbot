import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import invariant from "tiny-invariant";
import nacl from "tweetnacl";

export const action: ActionFunction = async ({ request }) => {
  if (request.method !== "POST") {
    return json({ message: "Method not allowed" }, 405);
  }

  const signature = request.headers.get(
    "X-Signature-Ed25519"
  );
  invariant(signature, 'No signature header')
  const timestamp = request.headers.get("X-Signature-Timestamp")
  invariant(timestamp, 'No signature timestamp')
  const PUBLIC_KEY = process.env["DISCORD_PUBLIC_KEY"];
  invariant(PUBLIC_KEY, 'No public key')
  const body = await request.text();
  const valid = nacl.sign.detached.verify(
    new TextEncoder().encode(timestamp + body),
    hexToUint8Array(signature),
    hexToUint8Array(PUBLIC_KEY),
  );
  if (!valid) {
    return json(
      { error: "Invalid request" },
      { status: 401, },
    );
  }


};


function hexToUint8Array(hex: string) {
  return new Uint8Array(hex.match(/.{1,2}/g)!.map((val) => parseInt(val, 16)));
}