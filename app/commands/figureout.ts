import { SlashCommandBuilder } from '@discordjs/builders'
import type { APIEmbed } from 'discord-api-types/v10'
import type { CommandInteraction } from 'discord.js'
import {
	getClosestPlaybook,
	getPlaybookContainsName,
} from '../models/playbook.server'
import { randomLesbianColor } from '../utils'

export default {
	data: new SlashCommandBuilder()
		.setName('figureout')
		.setDescription(
			'Get the additonal Figure Out A Person questions during physical conflict for a playbook'
		)
		.addStringOption((option) =>
			option
				.setName('playbook')
				.setDescription(
					'Enter the playbook name, e.g. "The Beast", "Beast", "beast"'
				)
				.setRequired(true)
		)
		.toJSON(),
	async execute(interaction: CommandInteraction) {
		const textToSearch = interaction.options.getString('playbook')
		if (!textToSearch) {
			await interaction.reply('Please enter a playbook to search')
			return
		}
		let playbook = await getPlaybookContainsName(textToSearch)
		if (!playbook) {
			const closeMatch = await getClosestPlaybook(textToSearch)
			if (!closeMatch) {
				await interaction.reply(
					`I couldn't find a playbook containing ${textToSearch}`
				)
				return
			}
			playbook = closeMatch.item
		}

		const embed: APIEmbed = {
			title: playbook.conflictMove,
			description: `When you **Figure Out a Person** during physical conflict, you may ask one additional question from this list, even on a 6-:
      ${playbook.conflict.reduce((prev, curr) => {
				return `${prev}
        -${curr}`
			}, '')}`,
			color: randomLesbianColor(),
			fields: [{ name: 'Playbook', value: playbook.name }],
		}
		await interaction.reply({ embeds: [embed] })
	},
}
