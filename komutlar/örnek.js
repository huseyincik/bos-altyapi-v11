const Discord = require('discord.js');
exports.run = async (client, message, args) => {

message.channel.send('Merhaba Discord, ben geldim!') // Kullanıldığı kanala mesaj gönderir, bu kısmı ayarlayabilirsiniz.

};

exports.conf = {
 enabled: true, // Komutun aktif olup olmadığını belirtir. Komutu aktif etmek için true, de-aktif etmek için false yazmanız yeterlidir.
 guildOnly: false, // Komutun sunucuda kullanma zorunluluğu olup olmadığını belirtir. Zorunlu kılmak için true, her yerde kullanılmasını sağlamak için false yazmanız yeterlidir.
 aliases: ['alternatif'], // Komutun alternatiflerini belirtirsiniz.
 permLevel: 0 // Komutun yetki seviyesini belirtir.
};

exports.help = {
 name: 'komut-ismi', // Komut ayarlanan isimle kullanılır.
 description: 'Bu bir komut!', // Komutun açıklamasını belirtirsiniz.
 usage: 'komut-ismi' // Komutun nasıl kullanılacağını belirtirsiniz.
};
