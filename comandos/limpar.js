const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Permissões insuficientes.");
  if(!args[0]) return message.channel.send("Especifique o número de mensagens que devem ser limpadas, **entre 1 e 9**.");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`Foram removidas ${args[0]} mensagens.`).then(msg => msg.delete(2000));
});

}

module.exports.help = {
  name: "limpar"
}
