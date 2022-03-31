console.log("NodeJS Version: " + process.version)

import DiscordJS, { Client, Intents } from 'discord.js'
import fs, { writeFile } from 'fs'
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

const prefix = '%';

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
      case 'prep school belle':
      case 'npc belle':
        var num = randomInt(1,2);
        console.log(num);
          if (num == 1) {
            message.reply('https://media.discordapp.net/attachments/948493845950263307/954367048090259456/3D258F22-A305-4BA6-A7D4-9FC11D3A9C47.jpg?width=507&height=676')
          }
          else if (num == 2) {
            message.reply('https://cdn.discordapp.com/attachments/948493845950263307/954369611195891722/395999F9-9C56-4BED-AEF8-5F077DA30B55.jpg')
          }
        break;

      case 'belle curve':
        //message.reply('https://cdn.discordapp.com/attachments/912553636079489024/956885208005767229/Screen_Shot_2022-03-26_at_01.00.06.png')
        message.reply('https://cdn.discordapp.com/attachments/912553636079489024/956885665394610196/unknown.png')
        break;

      case 'korea':
        message.reply('*Varsh didn\'t like that*');
        break;
      
      case 'jason':
        message.reply('https://media.discordapp.net/attachments/946333875632758785/956328045692719114/unknown.png')
        break;

      case 'dank':
        var num = randomInt(1,5);
        if (num == 1) {
          message.reply('https://cdn.discordapp.com/attachments/867623156800684035/956888725458124820/Screenshot_1.png')
        } 
        else if (num == 2) {
          message.reply('https://media.discordapp.net/attachments/912553636079489024/957256313358913556/unknown.png')
        }
        else if (num == 3) {
          message.reply('https://media.discordapp.net/attachments/912553636079489024/957283531288092772/unknown.png')
        }
        else if (num == 4) {
          message.reply('https://cdn.discordapp.com/attachments/912553636079489024/957977308793294858/unknown.png')
        }
        else if (num == 5) {
          message.reply('https://media.discordapp.net/attachments/912553636079489024/957977952442789958/unknown.png')
        }
        break;
      
      case 'kia':
        var num = randomInt(1,2)
        if (num == 1) {
          message.reply('https://cdn.discordapp.com/attachments/902345458393944065/957586958165618688/unknown.png')
        }
        else if (num == 2) {
          message.reply('https://cdn.discordapp.com/attachments/902345458393944065/957608618457452554/unknown.png')
        }
        break;

      case 'hanyi':
        var num = randomInt(1,4);
        if (num == 1) {
          message.reply('https://www.cosgroves.com/resources/images/project/5a83b7fb56c90.jpeg');
        }
        else if (num == 2) {
          message.reply('https://cdn.discordapp.com/attachments/902345458393944065/957235061181284412/unknown.png')
        }
        //else if (num == 3) {
          //message.reply('https://media.discordapp.net/attachments/912553636079489024/957253833078243368/Screen_Shot_2022-03-27_at_01.24.55.png')
        //}
        else if (num == 3) {
          message.reply('https://media.discordapp.net/attachments/902345458393944065/957480353013047336/unknown.png')
        }
        else if (num == 4) {
          message.reply('https://cdn.discordapp.com/attachments/912553636079489024/958332238884372542/unknown.png')
        }
        break;

      case 'kate edger':
      case 'kate edgar':
        message.reply('You mean Korea town?');
        break;
      
      case 'andrew':
        message.reply('https://media.discordapp.net/attachments/912553636079489024/952152041663373342/Screen_Shot_2022-03-12_at_23.32.12.png')
        break;

      case 'ash':
        message.reply('https://cdn.discordapp.com/attachments/912553636079489024/957199411707015168/unknown.png');
        break;

      case 'coco':
        message.reply('https://cdn.discordapp.com/attachments/902345458393944065/958218811310506024/unknown.png')
        break;

      case 'scarlet bet':
        message.reply('https://cdn.discordapp.com/attachments/902345458393944065/957291755768791081/unknown.png');
        break;

      case 'scarlet':
        var num = randomInt(1,3);
        console.log(num);
          if (num == 1) {
            message.reply('https://cdn.discordapp.com/attachments/338668921022316544/778787103495421962/xMPkg06.gif')
          }
          else if (num == 2) {
            message.reply('https://cdn.discordapp.com/attachments/912553636079489024/954354656191082506/unknown.png');
          }
          else if (num == 3) {
            message.reply('https://cdn.discordapp.com/attachments/902345458393944065/957234266255802428/unknown.png')
          }
        break;
      
      case 'varsh':
        var num = randomInt(1,2);
        console.log(num);
          if (num == 1) {
        message.reply('You mean the Korean whisperer?')
          }
          else if (num == 2) {
            message.reply('https://cdn.discordapp.com/attachments/912553636079489024/956137645682073621/unknown.png')
          }
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

      case 'zach1':
        var num = randomInt(1,4);
        console.log(num);
          if (num == 1) {
            message.reply('https://cdn.discordapp.com/attachments/912553636079489024/950031283684274206/Screen_Shot_2022-03-07_at_03.05.04.png')
            }
          else if (num == 2) {
            message.reply('https://cdn.discordapp.com/attachments/912553636079489024/956888729690198067/unknown.png')
            }
          else if (num == 3) {
            message.reply('https://media.discordapp.net/attachments/912553636079489024/958289243745189888/catboyzach.png?width=676&height=676')
          }
          else if (num == 4) {
            message.reply('https://cdn.discordapp.com/attachments/912553636079489024/958684189178347600/Screenshot_20220331-000819_Discord.jpg')
          }
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

client.on('messageCreate', message => {
  if(message.author.bot || !message.content.startsWith(prefix)) {
    return;
  }

  const args = message.content.slice(prefix.length).split(/ %/);
  const command = args.shift().toLowerCase();

  if(command === 'test'){
    var person = message.author.id;
    var a = randomInt(1,4)
    var b = randomInt(1,4)
    var c = randomInt(1,4)
    var d = randomInt(1,4)
    console.log(a.toString() + ' ' + b.toString() + ' ' + c.toString() + ' ' + d.toString() );
    if (a == b == c == d)  {
      message.channel.send('Type 1')
    }
    else if (a == b == c || a == c == d || a == b == d || b == c == d) {
      message.channel.send('Type 2')
    }
    else {
      message.channel.send('Type 7')
    }
  }
});
