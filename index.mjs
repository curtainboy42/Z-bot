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

client.on('messageCreate', message => {
    if (message.content.toLowerCase() === 'korea') {
      message.reply('*Varsh didn\'t like that*');
    }

    else if (message.content.toLowerCase() === 'scarlet') {
      message.reply('https://cdn.discordapp.com/attachments/912553636079489024/954354656191082506/unknown.png');
    }

    else if (message.content.toLowerCase() === 'belle') {
      var num = Math.random();
      console.log(num);
        if (num > 0.5) {
          message.reply('https://media.discordapp.net/attachments/948493845950263307/954367048090259456/3D258F22-A305-4BA6-A7D4-9FC11D3A9C47.jpg?width=507&height=676')
        }

        //else if (num > 0.3 && num < 0.6) {
          //message.reply('https://cdn.discordapp.com/attachments/948493845950263307/954369399161258004/IMG_5956.png')
        //}

        else if (num < 0.5) {
          message.reply('https://cdn.discordapp.com/attachments/948493845950263307/954369611195891722/395999F9-9C56-4BED-AEF8-5F077DA30B55.jpg')
        }

        else {
          return;
        }
    }

    else if (message.content.toLowerCase() === 'varsh') {
      message.reply('You mean the Korean whisperer?')
    }

    else if (message.author.id == 260394253505527809) {
      num = Math.random();
      console.log(num);
        if (num < 0.1) {
          message.reply('One of these days you\'re going to have to tell me how you achieve all those A* grades, Belle.')
        }
    }
});

