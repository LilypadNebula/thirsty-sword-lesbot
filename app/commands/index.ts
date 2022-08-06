import type { RESTPostAPIApplicationCommandsJSONBody } from 'discord-api-types/v10'
import type { CommandInteraction } from 'discord.js'
import move from './move'
import smitten from './smitten'
import figureout from './figureout'

const moveList: Record<
	string,
	{
		data: RESTPostAPIApplicationCommandsJSONBody
		execute: (interaction: CommandInteraction) => Promise<void>
	}
> = {
	move,
	smitten,
	figureout,
}

export default moveList
