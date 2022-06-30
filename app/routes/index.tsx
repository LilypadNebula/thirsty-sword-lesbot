export default function Index() {
	return (
		<main className="flex h-full flex-col justify-between bg-gradient-to-b from-lesbianOrange to-lesbianPink p-4 text-center font-main text-white">
			<div>
				<p className="p-2 font-header text-5xl">Thirsty Sword Lesbot</p>
				<p>
					A Discord bot designed to assist with playing the TTRPG Thirsty Sword
					Lesbians
				</p>
			</div>
			<div className="flex flex-col justify-around lg:flex-row">
				<div className="w-1/4">
					<p className="mt-4 text-xl underline md:mt-0">Current features</p>
					<ul className="space-y-2">
						<li>Searching moves by name</li>
						<li>Displaying details of a move in a channel</li>
					</ul>
				</div>
				<div className="w-1/4">
					<p className="mt-2 text-xl underline md:mt-0">Upcoming features</p>
					<ul className="space-y-2">
						<li>Viewing moves by playbook</li>
						<li>
							Viewing the relationship questions and Truths of Heart and Blade
							for a playbook
						</li>
					</ul>
				</div>
			</div>
			<a
				href="http://discord.lesbot.gay"
				target="_blank"
				rel="noopener noreferrer"
				className="mx-auto w-64 rounded border-4 border-white shadow-lg"
			>
				Click here to add it to your server!
			</a>
			<div className="text-xs">
				<img
					src="/pbl.png"
					alt="Powered By Lesbians logo"
					className="mx-auto h-32"
				/>
				<p>
					This app uses material from the Thirsty Sword Lesbians roleplaying
					game (found at https://swordlesbians.com), designed by April Kit Walsh
					and published by Evil Hat Productions, LLC, pursuant to the open
					license available at poweredbylesbians.com.
				</p>
				<p>
					Thirsty Sword Lesbians™ is a trademark of April Kit Walsh. The Powered
					by Lesbians Logo is © April Kit Walsh, and is used pursuant to the
					open licensing terms at http://poweredbylesbians.com
				</p>
			</div>
		</main>
	)
}
