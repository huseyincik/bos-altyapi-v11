const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require('../ayarlar.json');

module.exports = client => {
 console.log(`${moment().locale('tr').format('LLL')} - Bot aktif edildi.`);
 console.log(`${moment().locale('tr').format('LLL')} - Herhangi bir sorununuz olduğunda https://discord.gg/jCbUMhX linkli sunucuya katılmayı unutmayın!`);
 client.user.setActivity(`K-kim oyun`);
};
