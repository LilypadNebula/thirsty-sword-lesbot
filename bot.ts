// Require the necessary discord.js classes
import { Client, Intents } from 'discord.js'
import 'dotenv/config'
import commands from './app/commands'
import components from './app/components'

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
	if (interaction.isButton()) {
		const { customId } = interaction
		const [id] = customId.split('|', 2)
		const component = components[id]
		if (!component)
			return await interaction.update({
				components: [],
				content: 'Something went wrong with this interaction',
			})
		try {
			await component.execute(interaction)
		} catch (error) {
			console.error(error)
			await interaction.update({
				components: [],
				content: 'Something went wrong with this interaction',
			})
		}
	}
})

// Login to Discord with your client's token
client.login(token)
