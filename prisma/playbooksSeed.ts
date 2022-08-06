import type { Playbook } from '@prisma/client'

const playbooks: Omit<Playbook, 'id' | 'createdAt' | 'updatedAt'>[] = [
	{
		name: 'The Beast',
		smitten: [
			'What have you done that you are sure they view as inappropriate?',
		],
		conflict: [
			'What awakens the beast inside you?',
			'How could I get you to kiss me?',
		],
		smittenMove: 'Smitten Kitten',
		conflictMove: 'The Bloody Truth',
	},
	{
		name: 'The Chosen',
		smitten: [
			`How do our respective stations make it impossible to be together?`,
		],
		conflict: [
			'What do you hope for your future?',
			'What do you fear is your destiny?',
		],
		smittenMove: 'Love Is Not My Destiny',
		conflictMove: 'Inescapable Conclusions',
	},
	{
		name: 'The Devoted',
		smitten: ['How does pursuing them conflict with your Devotion?'],
		conflict: [
			'What are you willing to risk death for?',
			'What kind of deeds earn your loyalty?',
		],
		smittenMove: 'My Heart is Not Mine to Give',
		conflictMove: 'What Will You Fight For?',
	},
	{
		name: 'The Infamous',
		smitten: ['Why do you think they would be wrong to forgive you?'],
		conflict: [
			'What are you most ashamed of?',
			'How could I get you to betray your ideals?',
		],
		smittenMove: 'Undeserving',
		conflictMove: 'Your Wicked Heart',
	},
	{
		name: 'The Nature Witch',
		smitten: [
			`What is a clear challenge to being with them that you're overlooking because of your naivete?`,
		],
		conflict: [
			'What makes you feel loved?',
			'What do you hope for the future?',
		],
		smittenMove: 'Love Conquers All',
		conflictMove: 'Clear-Hearted Insight',
	},
	{
		name: 'The Scoundrel',
		smitten: ['Why would your romance never last?'],
		conflict: [
			'What would make you run away with me?',
			'Where did you learn to fight?',
		],
		smittenMove: 'To Love and Lose',
		conflictMove: 'Repartée',
	},
	{
		name: 'The Seeker',
		smitten: ['Which of your values do they openly violate or decry?'],
		conflict: [
			'What prejudice do you hold?',
			'What tradition do you most value?',
		],
		smittenMove: "I Don't Belong",
		conflictMove: 'Not So Different',
	},
	{
		name: 'The Spooky Witch',
		smitten: [
			'What obvious thing about you are you sure would make them reject you?',
		],
		conflict: ['What makes you insecure?', 'What haunts you?'],
		smittenMove: 'Why Did I Bring Up the Snails?',
		conflictMove: 'Whispered Secrets',
	},
	{
		name: 'The Trickster',
		smitten: [
			'What secret do you have that you think would make them reject you if they knew?',
		],
		conflict: [
			'Who do you want me to be?',
			'What are you most afraid of right now?',
		],
		smittenMove: 'A Beautiful Lie',
		conflictMove: 'I See Through You',
	},
	{
		name: 'The Bloody',
		smitten: ['What makes being vulnerable with them difficult?'],
		conflict: [
			'What is it that drives you to fight?',
			`What's the one thing you cannot stand to lose?`,
		],
		smittenMove: 'Do I See Fire?',
		conflictMove: 'The Heart that Wields the Blade',
	},
	{
		name: 'The Dream Mirror',
		smitten: [
			'Why do you think you must keep up your performance to have any chance with them?',
		],
		conflict: [
			'What desire or fantasy have you hidden from others?',
			'How have prior relationships fallen short of expectations?',
		],
		smittenMove: 'Love Interest',
		conflictMove: 'Secret Confessions',
	},
	{
		name: 'The Ensemble',
		smitten: [
			`How would pursuing them make my partner feel unloved or unneeded?`,
			`Why do they need you more than your partner does?`,
		],
		conflict: [
			'What is your most pressing relationship need?',
			'What special joy or service would you offer a partner?',
		],
		smittenMove: 'Wandering Eyes',
		conflictMove: 'Outflanked',
	},
	{
		name: 'The Hologoddess',
		smitten: ['How are they incompatible with your operating system?'],
		conflict: [
			'How do you fit into the world around you?',
			'Who do you hate the most?',
			'Who will mourn you?',
		],
		smittenMove: 'Compatibility Check',
		conflictMove: 'Search Engine Optimization',
	},
	{
		name: 'The Investigator',
		smitten: [
			'What secret or mystery about you am I irresistibly drawn in by?',
		],
		conflict: [
			'What are you hiding?',
			'What connection do you have to the Toxic Powers?',
			'Will you help me investigate a mystery?',
		],
		smittenMove: 'A New Special Interest',
		conflictMove: 'Riposte',
	},
	{
		name: 'The Legion',
		smitten: ['Why are you certain that your Tragedy will make you lose them?'],
		conflict: [
			' What can I say or do to strike at your deepest tragedy?',
			'Who were you and I in a past life?',
		],
		smittenMove: 'Divest of My Armor',
		conflictMove: "Under Heaven's Eyes",
	},
	{
		name: 'The Matriarch',
		smitten: ['How could dating them negatively affect your family?'],
		conflict: [
			'Who do you love?',
			'How could I help you deal with your problem?',
		],
		smittenMove: 'If You Wanna Be My Lover',
		conflictMove: 'Master of the Heart',
	},
	{
		name: 'The Naga',
		smitten: [
			`What's the worst way you fear they might break or betray your trust?`,
		],
		conflict: [
			'Who hurt you the most?',
			'What would it take to move past this trauma?',
		],
		smittenMove: 'Are You My End?',
		conflictMove: 'Show Yourself',
	},
	{
		name: 'The Sun Hand',
		smitten: ['What unwise thing do you think you could do to impress them?'],
		conflict: [
			`What's something you recently lied about?`,
			'Who do you wish were here right now?',
		],
		smittenMove: 'Self-Destructing Courtship',
		conflictMove: 'Vulnerability Mirror',
	},
	{
		name: 'The Troubadour',
		smitten: [
			'Why do you think they will never be able to accept the real you?',
		],
		conflict: [
			'What kind of Art are you into?',
			'How can I get you to like me?',
		],
		smittenMove: 'Ugly on the Inside',
		conflictMove: 'Mass Appeal',
	},
]

export default playbooks
