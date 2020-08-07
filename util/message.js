const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

module.exports = message => {
 let client = message.client;
 let kontrol = ''
 let permler = ['', 'MANAGE_MESSAGES', 'BAN_MEMBERS', 'MANAGE_GUILD' 'ADMINISTRATOR']
 if(message.author.bot) return;
 if(!message.content.startsWith(ayarlar.prefix)) return;

 let command = message.content.split(' ')[0].slice(ayarlar.prefix.length);
 let args = message.content.split(' ').slice(1);
 let cmd;

 if(client.commands.has(command)) {
  cmd = client.commands.get(command);
 } else if(client.aliases.has(command)) {
  cmd = client.commands.get(client.aliases.get(command));
 }
  if(cmd) {
   if(!cmd.conf.enabled && !ayarlar.sahip.includes(message.author.id)) return message.channel.send(`Üzgünüm, sahibim \`${cmd.help.name}\` isimli komutu devre dışı bırakmış.`)
   let x = cmd.conf.permLevel.replace(cmd.conf.permLevel, permler[Number(cmd.conf.permLevel)])
   if(cmd.conf.guildOnly && !message.guild) return message.channel.send(`Bu komut sadece sunucularda çalışabilir.`)
   if(permler.includes(x) && !message.member.hasPermission(x)) return message.channel.send(`Bu komutu kullanabilmek için \`${x}\` yetkisine sahip olmalısın.`)
    cmd.run(client, message, args);
  }
};
