import {APIEmbed, APIInteractionResponseChannelMessageWithSource, APIApplicationCommandInteractionDataOptionWithValues} from 'https://raw.githubusercontent.com/discordjs/discord-api-types/main/deno/v9.ts';
import {parse} from 'https://deno.land/std/encoding/yaml.ts'
import {Move} from '../types.ts'
import {randomLesbianColor} from '../util.ts'

export default async (params: APIApplicationCommandInteractionDataOptionWithValues[]): Promise<APIInteractionResponseChannelMessageWithSource> => {
  const enteredName = params[0].value as string
  const name = enteredName.toLowerCase().replace(/[^a-zA-Z ]/g, "")
  const contents = await Deno.readTextFile('moves.yaml')
  const moves = parse(contents) as Record<string, Move>
  const embed: APIEmbed = {
    title: '',
    description: '',
    color: 0x000000,
    fields: []
  }
  if (moves.hasOwnProperty(name)){
    const move = moves[name]
    embed.title = move.name
    embed.description = move.text
    embed.color = randomLesbianColor()
    embed.fields = []
    if (move.playbook != undefined) {
      embed.fields.push({name: 'Playbook', value: move.playbook})
    }
    if (move.source != undefined) {
      embed.fields.push({name: 'Source', value: move.source})
    }
  } else {
    embed.title = 'Error: Move Not Found',
    embed.description = `Could not find a move with the name '${name}', could you check that you typed it correctly? In the future this will show you potential moves that you meant, but Lily isn't there yet`
    embed.color = 0xF32E2E
  }
  const response: APIInteractionResponseChannelMessageWithSource = {
    type: 4,
    data: {
      embeds: [embed]
    }

  }

  return response
}