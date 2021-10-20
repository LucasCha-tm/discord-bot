const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {

    message.channel.send(`L'invitation du bot est https://discordapp.com/oauth2/authorize?client_id=859096417061568563&scope=bot&permissions=2146958847`)
};

module.exports.config = {
    name: "invite"
};

