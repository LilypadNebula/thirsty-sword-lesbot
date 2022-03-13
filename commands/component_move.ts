import {
  APIEmbed,
  APIInteractionResponseChannelMessageWithSource,
} from "https://raw.githubusercontent.com/discordjs/discord-api-types/main/deno/v9.ts";
import { parse } from "https://deno.land/std/encoding/yaml.ts";
import { Move } from "../types.ts";
import { randomLesbianColor } from "../util.ts";

export default async (
  value: string
): Promise<APIInteractionResponseChannelMessageWithSource> => {
  const contents = await Deno.readTextFile("moves.yaml");
  const moves = parse(contents) as Record<string, Move>;

  const embed: APIEmbed = {
    title: "",
    description: "",
    color: 0x000000,
    fields: [],
  };
  const move = moves[value];
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
  const response: APIInteractionResponseChannelMessageWithSource = {
    type: 7,
    data: {
      content: "",
      components: [],
      embeds: [embed],
    },
  };
  return response;
};
