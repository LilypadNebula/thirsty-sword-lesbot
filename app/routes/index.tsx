export default function Index() {
  return (
    <main className="text-center font-main p-4 bg-gradient-to-b from-lesbianOrange to-lesbianPink h-full flex flex-col justify-between text-white">
      <div>
        <p className="text-5xl font-header p-2">
          Thirsty Sword Lesbot
        </p>
        <p>A Discord bot designed to assist with playing the TTRPG Thirsty Sword Lesbians</p>
      </div>
      <div className="flex flex-col lg:flex-row justify-around">
        <div className="w-1/4">
          <p className="text-xl underline mt-4 md:mt-0">Current features</p>
          <ul className="space-y-2">

            <li>Searching moves by name</li>
            <li>Displaying details of a move in a channel</li>
          </ul>
        </div>
        <div className="w-1/4">
          <p className="text-xl underline mt-2 md:mt-0">Upcoming features</p>
          <ul className="space-y-2">
            <li>Viewing moves by playbook</li>
            <li>Viewing the relationship questions and Truths of Heart and Blade for a playbook</li>
          </ul>
        </div>
      </div>
      <a href="http://discord.lesbot.gay" target="_blank" rel="noopener noreferrer" className="border-4 border-white rounded shadow-lg w-64 mx-auto">Click here to add it to your server!</a>
      <div className="text-xs">
        <img src="/pbl.png" alt="Powered By Lesbians logo" className="h-32 mx-auto" />
        <p>This app uses material from the Thirsty Sword Lesbians roleplaying game (found at https://swordlesbians.com), designed by April Kit Walsh and published by Evil Hat Productions, LLC, pursuant to the open license available at poweredbylesbians.com.</p>
        <p>Thirsty Sword Lesbians™ is a trademark of April Kit Walsh. The Powered by Lesbians Logo is © April Kit Walsh, and is used pursuant to the open licensing terms at http://poweredbylesbians.com</p>

      </div>
    </main>
  )
}
