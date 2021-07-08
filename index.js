const Discord = require('discord.js')
const config = require('./config.json')
const client = new Discord.Client()

client.on("guildMemberAdd", member => {
  let embed = new Discord.MessageEmbed()
      .setColor("color que tu veut ")
      .setTimestamp()
      .setImage(member.user.displayAvatarURL({ dynamic: true }))
      member.guild.channels.cache.get(config.salon).send(embed)
  });

client.login(config.token)