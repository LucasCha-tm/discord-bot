const Discord = require("discord.js");

module.exports.run = async(bot,message,args) => {
  let inviteembed = new Discord.MessageEmbed()

        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('LucasCha Uttilitaire !')
        .setDescription('__**Le bot possède :**__\n\n `?say`,\n`?embed`,\n`?ban`,\n`?unban`,\n`?kick`, \n`?8ball`, *Réponse aléatoire*\n`?pf`, *Pile ou Face*\n`?members`, \n`?invite`, *Inviter le bot sur votre server*\n *compte tout les membres présent sûr le discord !*\n\n __**Me DM si besoin !**__ 🥰')
        .setTimestamp()
        .setFooter('By Ah LucasCha ™#0300 ', 'https://cdn.discordapp.com/attachments/765158755905961984/793196593821646868/PP_du_Serveur.gif')
        .setImage('')
  message.channel.send(embed)  
  }


  module.exports.config = {
    name: 'help' 
    }
