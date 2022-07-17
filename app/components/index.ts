import type { ButtonInteraction } from 'discord.js'
import component_move from './move'

const moveList: Record<
	string,
	{
		name: string
		execute: (interaction: ButtonInteraction) => Promise<void>
	}
> = {
	component_move,
}

export default moveList
