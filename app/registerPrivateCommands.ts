import { REST } from '@discordjs/rest'
import 'dotenv/config'
import type { RESTPostAPIApplicationCommandsJSONBody } from 'discord-api-types/v10'
import { Routes } from 'discord-api-types/v10'
import invariant from 'tiny-invariant'
import privateCommands from './commands/private'

const { clientId, token, privateServerId } = process.env

invariant(clientId, 'Client ID is not defined')
invariant(token, 'Token is not defined')
invariant(privateServerId, 'Private server ID is not defined')

const commandArray: RESTPostAPIApplicationCommandsJSONBody[] = []

for (const c in privateCommands) {
	commandArray.push(privateCommands[c].data)
}

const rest = new REST({ version: '10' }).setToken(token)

rest
	.put(Routes.applicationGuildCommands(clientId, privateServerId), {
		body: commandArray,
	})
	.then(() =>
		console.log('Successfully registered private application commands.')
	)
	.catch(console.error)
