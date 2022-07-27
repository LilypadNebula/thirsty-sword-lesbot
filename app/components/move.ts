import type { ButtonInteraction } from 'discord.js'

import type { APIEmbed } from 'discord-api-types/v10'
import type { InteractionUpdateOptions } from 'discord.js'

import { getMoveById } from '~/models/move.server'

import { randomLesbianColor } from '~/utils'

export default {
	name: 'component_move',
	async execute(interaction: ButtonInteraction) {
		const [_, value] = interaction.customId.split('|', 2)
		if (!value)
			return await interaction.update({
				components: [],
				content: 'Something went wrong, there was no move sent',
			})
		const move = await getMoveById(value)
		if (!move)
			return await interaction.update({
				components: [],
				content: 'Something went wrong, there was no move sent',
			})

		const embed: APIEmbed = {
			title: '',
			description: '',
			color: 0x000000,
			fields: [],
		}
		embed.title = move.name
		embed.description = move.text
		embed.color = randomLesbianColor()
		embed.fields = []
		if (move.playbook != undefined) {
			embed.fields.push({ name: 'Playbook', value: move.playbook.name })
		}
		if (move.source != undefined) {
			embed.fields.push({ name: 'Source', value: move.source.name })
		}
		const options: InteractionUpdateOptions = {
			content: null,
			components: [],
			embeds: [embed],
		}
		return await interaction.update(options)
	},
}
