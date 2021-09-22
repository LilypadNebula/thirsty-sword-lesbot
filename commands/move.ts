import {
  APIApplicationCommandInteractionDataOptionWithValues,
  APIEmbed,
  APIInteractionResponseChannelMessageWithSource,
} from "https://raw.githubusercontent.com/discordjs/discord-api-types/main/deno/v9.ts";
import { parse } from "https://deno.land/std/encoding/yaml.ts";
import { Move } from "../types.ts";
import { randomLesbianColor } from "../util.ts";
// @deno-types="https://deno.land/x/fuse/dist/fuse.d.ts"
import Fuse from "https://deno.land/x/fuse/dist/fuse.esm.min.js";

export default async (
  params: APIApplicationCommandInteractionDataOptionWithValues[],
): Promise<APIInteractionResponseChannelMessageWithSource> => {
  const enteredName = params[0].value as string;
  const name = enteredName.toLowerCase().replace(/[^a-zA-Z ]/g, "");
  const contents = await Deno.readTextFile("moves.yaml");
  const moves = parse(contents) as Record<string, Move>;
  const response: APIInteractionResponseChannelMessageWithSource = {
    type: 4,
    data: {},
  };
  const embed: APIEmbed = {
    title: "",
    description: "",
    color: 0x000000,
    fields: [],
  };
  if (moves.hasOwnProperty(name)) {
    const move = moves[name];
    embed.title = move.name;
    embed.description = move.text;
    embed.color = randomLesbianColor();
    embed.fields = [];
    if (move.playbook != undefined) {
      embed.fields.push({ name: "Playbook", value: move.playbook });
    }
    if (move.source != undefined) {
      embed.fields.push({ name: "Source", value: move.source });
    }
    response.data.embeds = [embed];
  } else {
    const fuse = new Fuse(Object.keys(moves), { includeScore: true });
    const results = fuse.search(name).slice(0, 5);
    response.data.content =
      `Could not find a move with the name '${name}', did you mean one of these?`;
    const buttons = results.map((v) => ({
      type: 2,
      label: moves[v.item].name,
      style: 1,
      custom_id: `component_move|${v.item}`,
    }));
    response.data.components = [{ type: 1, components: buttons }];
  }

  return response;
};
