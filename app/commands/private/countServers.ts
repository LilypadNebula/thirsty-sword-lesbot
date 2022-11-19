import { SlashCommandBuilder } from '@discordjs/builders'
import type { CommandInteraction } from 'discord.js'

export default {
	data: new SlashCommandBuilder()
		.setName('countservers')
		.setDescription('Get the number of servers this bot is in')
		.toJSON(),
	async execute(interaction: CommandInteraction) {
		const serverCount = interaction.client.guilds.cache.size
		await interaction.reply(`Bot is in ${serverCount} guilds`)
	},
}
