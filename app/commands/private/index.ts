import type { RESTPostAPIApplicationCommandsJSONBody } from 'discord-api-types/v10'
import type { CommandInteraction } from 'discord.js'
import countservers from './countServers'

const moveList: Record<
	string,
	{
		data: RESTPostAPIApplicationCommandsJSONBody
		execute: (interaction: CommandInteraction) => Promise<void>
	}
> = {
	countservers,
}

export default moveList
