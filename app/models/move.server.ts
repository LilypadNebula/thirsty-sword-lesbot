import { prisma } from '~/db.server'
import Fuse from 'fuse.js'

export async function getMoveByName(name: string) {
	return await prisma.move.findFirst({
		where: { name },

		include: {
			playbook: {
				select: {
					name: true,
				},
			},
		},
	})
}

/** Uses Fuse.js to fuzzy search move names,
 * since Primsa doesn't support it yet */
export async function searchMoveNames(text: string) {
	const moves = await prisma.move.findMany()
	const fuse = new Fuse(moves, { keys: ['name'], includeScore: true })
	return fuse.search(text)
}
