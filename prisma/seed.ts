import { PrismaClient } from '@prisma/client'
import playbooks from './playbooksSeed'
import moves from './movesSeed'
import sources from './sourcesSeed'

const prisma = new PrismaClient()

async function seed() {
	for (const playbook of playbooks) {
		await prisma.playbook.upsert({
			create: playbook,
			update: playbook,
			where: { name: playbook.name },
		})
	}
	for (const source of sources) {
		await prisma.source.upsert({
			create: { name: source },
			update: { name: source },
			where: { name: source },
		})
	}
	for (const move of moves) {
		if (move.playbook) {
			const playbook = await prisma.playbook.findFirst({
				where: { name: move.playbook },
			})
			if (!playbook) return

			await prisma.move.upsert({
				create: { name: move.name, text: move.text, playbookId: playbook.id },
				update: { name: move.name, text: move.text, playbookId: playbook.id },
				where: { name: move.name },
			})
		}
		if (move.source) {
			const source = await prisma.source.findFirst({
				where: { name: move.source },
			})
			if (!source) return

			await prisma.move.upsert({
				create: { name: move.name, text: move.text, sourceId: source.id },
				update: { name: move.name, text: move.text, sourceId: source.id },
				where: { name: move.name },
			})
		}
	}

	console.log(`Database has been seeded. 🌱`)
}

seed()
	.catch((e) => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
