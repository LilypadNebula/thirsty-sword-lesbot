import { prisma } from '../db.server'
import Fuse from 'fuse.js'

export async function getPlaybookContainsName(name: string) {
	return prisma.playbook.findFirst({
		where: { name: { contains: name, mode: 'insensitive' } },
	})
}
export async function getClosestPlaybook(name: string) {
	const playbooks = await prisma.playbook.findMany()

	const fuse = new Fuse(playbooks, {
		keys: ['name'],
		includeScore: true,
		threshold: 0.3,
	})
	return fuse.search(name)[0]
}
