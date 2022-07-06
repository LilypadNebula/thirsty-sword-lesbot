import { SlashCommandBuilder } from '@discordjs/builders'
import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v10'
import invariant from 'tiny-invariant'
const { clientId, token } = process.env

invariant(clientId, 'Client ID is not defined')
invariant(token, 'Token is not defined')

const commands = [
	new SlashCommandBuilder()
		.setName('move')
		.setDescription('Search moves')
		.addStringOption((option) =>
			option
				.setName('name')
				.setDescription(
					'Enter the move name to go directly to a move, or a keyword to see the closest 5 moves'
				)
				.setRequired(true)
		),
].map((command) => command.toJSON())

const rest = new REST({ version: '10' }).setToken(token)

rest
	.put(Routes.applicationCommands(clientId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error)
