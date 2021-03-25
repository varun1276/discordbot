const { prefix } = require("../config.json")
module.exports = {
	name: 'help',
  cooldown: 60,
  guildOnly: false,
  ownerOnly: false,
  nsfw: false,
	description: 'Posts help message',
	execute(message) {
    const { commands } = message.client;
    const fieldsData = commands.reduce(function(result, command) {
      if(!command.ownerOnly) {
        result.push({
          "name": prefix + command.name,
          "value": command.description,
          "inline": true
        })
      }
      return result
    }, [])
    message.channel.send({
      "embed": {
        "title": "Discordbot-ps5-chan",
        "description": "List of commands: ",
        "url": "https://linktr.ee/Valuz",
        "color": 9442302,
        "thumbnail": {
          "url": "https://i.imgur.com/4DFSkH1.jpg"
        },
        "author": {
          "name": "Ps5-chan",
          "url": "https://linktr.ee/Valuz",
          "icon_url": "https://i.imgur.com/4DFSkH1.jpg"
        },
        "footer": {
          "icon_url": "https://i.imgur.com/4DFSkH1.jpg",
          "text": "Here Is Your Help :)"
        },
        "fields": fieldsData
      }
    })
	}
}