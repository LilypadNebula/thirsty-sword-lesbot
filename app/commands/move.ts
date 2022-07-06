import { getMoveByName, searchMoveNames } from '../models/move.server'
import type {
	APIEmbed,
	APIInteractionResponseChannelMessageWithSource,
} from 'discord-api-types/v10'
import { randomLesbianColor } from '~/utils'

export default async (
	searchText: string
): Promise<APIInteractionResponseChannelMessageWithSource> => {
	const response: APIInteractionResponseChannelMessageWithSource = {
		type: 4,
		data: {},
	}
	const embed: APIEmbed = {
		title: '',
		description: '',
		color: 0x000000,
		fields: [],
	}
	const move = await getMoveByName(searchText)
	if (move != null) {
		embed.title = move.name
		embed.description = move.text
		embed.color = randomLesbianColor()
		embed.fields = []
		if (move.playbook != undefined) {
			embed.fields.push({ name: 'Playbook', value: move.playbook.name })
		}
		if (move.source != undefined) {
			embed.fields.push({ name: 'Source', value: move.source })
		}
	}
	const results = await searchMoveNames(searchText)
	if (results.length === 0) {
		response.data.content =
			"A move wasn't found with those search terms, please try again with different keywords"
		return response
	}
	response.data.content = `Did you mean one of these?`
	const buttons = results.map((v) => ({
		type: 2,
		label: v.item.name,
		style: 1,
		custom_id: `component_move|${v.item.id}`,
	}))
	response.data.components = [{ type: 1, components: buttons }]
	return response
}
