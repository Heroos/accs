const Discord = require("discord.js");
const client = new Discord.Client();

client.on('message', message => {
var prefix = ".";

  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id == 175465689027444736) return;


if (message.content.startsWith(prefix + 'playing')) {
  if (message.author.id !== '175465689027444736') return message.reply('only for the botowner ')
client.user.setGame(argresult);
    message.channel.sendMessage(**${argresult}** : Playing changed to)
    message.react(":white_check_mark:")

} else

if (message.content.startsWith(prefix + 'stream')) {
  if (message.author.id !== '175465689027444736') return message.reply('only for the botowner ')
client.user.setGame(argresult, "http://twitch.tv/y04zgamer%22");
    message.channel.sendMessage(**${argresult}** streem changed to)
    message.react(":white_check_mark:")

} else

if (message.content.startsWith(prefix + 'watching')) {
  if (message.author.id !== '175465689027444736') return message.reply('only for the botowner ')
    client.user.setActivity(argresult, {type : 'watching'});
 message.channel.sendMessage(**${argresult}** : Watching changed to)
 message.react(":white_check_mark:")
}
 });
 
 
 client.login(process.env.BOT_TOKEN);
