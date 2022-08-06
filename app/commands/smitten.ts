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
		.setName('smitten')
		.setDescription('Get the Smitten question for a playbook')
		.addStringOption((option) =>
			option
				.setName('playbook')
				.setDescription(
					'Enter the playbook name, either like this: "The Beast" or like this "Beast"'
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
			title: playbook.smittenMove,
			description: `When you become Smitten with someone, say why, give them a String, and answer ${
				playbook.smitten.length > 1
					? 'one of the following questions'
					: 'this question'
			}:
      ${playbook.smitten.reduce((prev, curr) => {
				return `${prev}
        -${curr}`
			}, '')}`,
			color: randomLesbianColor(),
			fields: [{ name: 'Playbook', value: playbook.name }],
		}
		await interaction.reply({ embeds: [embed] })
	},
}
