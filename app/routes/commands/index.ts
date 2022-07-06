import type { ActionFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import invariant from 'tiny-invariant'
import nacl from 'tweetnacl'
import moveList from '../../commands'
import type {
	APIChatInputApplicationCommandInteraction,
	APIInteraction,
	APIMessageComponentInteraction,
} from 'discord-api-types/v10'

export const action: ActionFunction = async ({ request }) => {
	if (request.method !== 'POST') {
		return json({ message: 'Method not allowed' }, 405)
	}

	const signature = request.headers.get('X-Signature-Ed25519')
	invariant(signature, 'No signature header')
	const timestamp = request.headers.get('X-Signature-Timestamp')
	invariant(timestamp, 'No signature timestamp')
	const PUBLIC_KEY = process.env['DISCORD_PUBLIC_KEY']
	invariant(PUBLIC_KEY, 'No public key')
	const body = await request.text()
	const valid = nacl.sign.detached.verify(
		new TextEncoder().encode(timestamp + body),
		hexToUint8Array(signature),
		hexToUint8Array(PUBLIC_KEY)
	)
	if (!valid) {
		return json({ error: 'Invalid request' }, { status: 401 })
	}
	const interaction: APIInteraction = JSON.parse(body)
	const { type } = interaction
	// Discord performs Ping interactions to test our application.
	// Type 1 in a request implies a Ping interaction.
	if (type === 1) {
		return json({
			type: 1, // Type 1 in a response is a Pong interaction response type.
		})
	}

	// Type 2 in a request is an ApplicationCommand interaction.
	// It implies that a user has issued a command.
	if (type === 2) {
		const { data } = interaction as APIChatInputApplicationCommandInteraction
		const params = data.options
		const move = moveList[data.name]
		if (!move) return json({ error: 'bad request' }, { status: 400 })
		const response = await move(params)

		return json(response)
	}

	// Type 3 is a Component interaction, either a button clicked or select menu
	if (type == 3) {
		const { data } = interaction as APIMessageComponentInteraction
		const [command, value] = data.custom_id.split('|', 2)
		const move = moveList[command]
		if (!move) return json({ error: 'bad request' }, { status: 400 })
		const response = await move(value)

		return json(response)
	}

	return json({ error: 'bad request' }, { status: 400 })
}

function hexToUint8Array(hex: string) {
	return new Uint8Array(hex.match(/.{1,2}/g)!.map((val) => parseInt(val, 16)))
}
