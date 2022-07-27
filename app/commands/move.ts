import { getMoveByName, searchMoveNames } from '../models/move.server'
import type { APIEmbed } from 'discord-api-types/v10'
import { SlashCommandBuilder } from '@discordjs/builders'
import { randomLesbianColor } from '../utils'
import type { CommandInteraction, InteractionReplyOptions } from 'discord.js'

async function getMoveResponseOptions(
	searchText: string
): Promise<InteractionReplyOptions> {
	const move = await getMoveByName(searchText)
	if (move != null) {
		const embed: APIEmbed = {
			title: move.name,
			description: move.text,
			color: randomLesbianColor(),
		}
		embed.fields = []
		if (move.playbook != undefined) {
			embed.fields.push({ name: 'Playbook', value: move.playbook.name })
		}
		if (move.source != undefined) {
			embed.fields.push({ name: 'Source', value: move.source.name })
		}
		return { embeds: [embed] }
	}
	const results = await searchMoveNames(searchText)
	if (results.length === 0) {
		return {
			content:
				"A move wasn't found with those search terms, please try again with different keywords",
		}
	}
	const buttons = results.slice(0, 5).map((v) => ({
		type: 2,
		label: v.item.name,
		style: 1,
		custom_id: `component_move|${v.item.id}`,
	}))
	const components = [{ type: 1, components: buttons }]
	return { content: 'Did you mean one of these?', components }
}

export default {
	data: new SlashCommandBuilder()
		.setName('move')
		.setDescription('Search moves')
		.addStringOption((option) =>
			option
				.setName('name')
				.setDescription(
					'Enter the move name to go directly to a move, or a keyword to see the closest 5 moves'
				)
				.setRequired(true)
		)
		.toJSON(),
	async execute(interaction: CommandInteraction) {
		const textToSearch = interaction.options.getString('name')
		if (!textToSearch) {
			await interaction.reply('Please enter a move to search')
			return
		}
		const options = await getMoveResponseOptions(textToSearch)
		await interaction.reply(options)
	},
}
