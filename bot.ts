// Require the necessary discord.js classes
import { Client, Intents } from 'discord.js'
import 'dotenv/config'
import commands from './app/commands'

const { token } = process.env

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!')
})

client.on('interactionCreate', async (interaction) => {
	if (interaction.isCommand()) {
		const command = commands[interaction.commandName]
		if (!command)
			return await interaction.reply('No command with that name, sorry!')
		try {
			await command.execute(interaction)
		} catch (error) {
			console.error(error)
			await interaction.reply({
				content: 'There was an error while executing this command',
				ephemeral: true,
			})
		}
	}
})

// Login to Discord with your client's token
client.login(token)
