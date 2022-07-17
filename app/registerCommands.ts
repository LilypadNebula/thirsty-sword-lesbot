import { REST } from '@discordjs/rest'
import type { RESTPostAPIApplicationCommandsJSONBody } from 'discord-api-types/v10'
import { Routes } from 'discord-api-types/v10'
import invariant from 'tiny-invariant'
import commands from './commands'

const { clientId, token } = process.env

invariant(clientId, 'Client ID is not defined')
invariant(token, 'Token is not defined')

const commandArray: RESTPostAPIApplicationCommandsJSONBody[] = []

for (const c in commands) {
	commandArray.push(commands[c].data)
}

const rest = new REST({ version: '10' }).setToken(token)

rest
	.put(Routes.applicationCommands(clientId), { body: commandArray })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error)
