import type { RESTPostAPIApplicationCommandsJSONBody } from 'discord-api-types/v10'
import type { CommandInteraction } from 'discord.js'
import move from './move'

const moveList: Record<
	string,
	{
		data: RESTPostAPIApplicationCommandsJSONBody
		execute: (interaction: CommandInteraction) => Promise<void>
	}
> = {
	move,
}

export default moveList
