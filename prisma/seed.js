const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function seed() {
	const beast = await prisma.playbook.upsert({
		data: {
			name: 'The Beast',
			smitten:
				'What have you done that you are sure they view as inappropriate?',
			conflict1: 'What awakens the beast inside you?',
			conflict2: 'How could I get you to kiss me?',
		},
	})

	await prisma.move.upsert({
		data: {
			playbookId: beast.id,
			name: 'Transform',
			text: `You have a bestial form, which you can assume at will and must assume whenever your Feral hits 4. When you do, tell everyone what the beast in you looks like, increase your Feral to 4 if it’s not there already, and roll +Daring:
      10+: Choose 2 
      7-9: Choose 1
      You are in harmony with your beast and may clear a Condition
      You are magnificent and little escapes your notice; you gain leverage or an
      opportunity with a monster
      Pain is nothing to you; ignore the next time you would Stagger while
      transformed
      You can move in ways no ordinary person could
      You revert to your usual form when your Feral drops below 4. While transformed,
      you may mark a Condition to avoid reducing your Feral, as often as you like.`,
		},
	})

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
