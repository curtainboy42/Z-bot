console.log("NodeJS Version: " + process.version)

import DiscordJS, { Client, Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const myIntents = new Intents();
myIntents.add(Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_PRESENCES,);

const client = new Client({ intents: myIntents });

client.login(process.env.TOKEN)

client.on('ready', () => {
    console.log('Z-Bot is now active');
});

const catchErr = err => {
  console.log(err)
}

function randomInt(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}


client.on('messageCreate', message => {
  if (!message.author.bot) {
    var msg = message.content.toLowerCase();
    var author = message.author.id
    switch (msg) {

      case 'a* belle':
      case 'gay star belle':
      case 'belle':
        var num = randomInt(1,2);
        console.log(num);
          if (num == 1) {
            message.reply('https://media.discordapp.net/attachments/948493845950263307/954367048090259456/3D258F22-A305-4BA6-A7D4-9FC11D3A9C47.jpg?width=507&height=676')
          }
          else if (num == 2) {
            message.reply('https://cdn.discordapp.com/attachments/948493845950263307/954369611195891722/395999F9-9C56-4BED-AEF8-5F077DA30B55.jpg')
          }
        break;

      case 'korea':
        message.reply('*Varsh didn\'t like that*');
        break;

      case 'kate edgar':
        message.reply('You mean Korea town?');
        break;

      case 'scarlet':
        var num = randomInt(1,2);
        console.log(num);
          if (num == 1) {
            message.reply('https://cdn.discordapp.com/attachments/338668921022316544/778787103495421962/xMPkg06.gif')
          }
          else if (num == 2) {
            message.reply('https://cdn.discordapp.com/attachments/912553636079489024/954354656191082506/unknown.png');
          }
        break;
      
      case 'varsh':
        message.reply('You mean the Korean whisperer?')
        break;

      case 'mako':
        var num = randomInt(1,2);
        console.log(num);
          if (num == 1) {
            message.reply('https://cdn.discordapp.com/attachments/948855968211558410/954527705557254254/271244320_1023165181595457_4180166898758729721_n.jpg')
          }
          else if (num == 2) {
            message.reply('https://cdn.discordapp.com/attachments/948855968211558410/954527954992513104/unknown.png')
          }
        break;

      case 'zach11':
        message.reply('https://cdn.discordapp.com/attachments/912553636079489024/950031283684274206/Screen_Shot_2022-03-07_at_03.05.04.png')
        break;
    }
    switch (author) {
      case '260394253505527809':
        var num = randomInt(1,100);
        console.log(num);
        if (num == 1) {
          message.reply('Nice one, Zach <:BE_Zach:950707702013763594>');
        }
        break;

      case '275065878880583680':
        var num = randomInt(1,100);
        console.log(num);
        if (num == 1) {
          message.reply('One of these days you\'re going to have to tell me how you managed to get all those A* grades, Belle.');
        }
        break; 
        
      case '383822595755343872':
        var num = randomInt(1,100);
        console.log(num);
        if (num == 1) {
          message.reply('Damn what are you doing with all that ass :sob:');
        }
        break;

      case '251180212681703436':
        var num = randomInt(1,100);
        console.log(num);
        if (num == 1) {
          message.reply('Good one, Andrew <:BE_Andrew:954356976320651274>');
        }
        break;              
    }
  }
  else {
    return;
  }
});
