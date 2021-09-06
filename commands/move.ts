import {APIEmbed, APIInteractionResponseChannelMessageWithSource} from 'https://raw.githubusercontent.com/discordjs/discord-api-types/main/deno/v9.ts';


export default (): APIInteractionResponseChannelMessageWithSource => {
  const embed: APIEmbed = {
    "title": `njknlnlnl`,
    "description": `huiiubvyyuguygbhjlblhjkbjlkbhljblhbhjbhbhbhbhjbhblbklbklblbyulbylbhlbhlblibilbuilbuilbiulbuilbuilbilbilbuibuibuibiulbi`,
    "color": 0x00FFFF,
    "fields": [
      {
        "name": `Playbook`,
        "value": `The Slut`
      }
    ]
  }
  const response: APIInteractionResponseChannelMessageWithSource = {
    type: 4,
    data: {
      embeds: [embed]
    }

  }

  return response
}