const express = require("express");
const app = express();

app.listen(() => console.log("Blood"));
require('events').EventEmitter.defaultMaxListeners = 30;
app.use('/ping', (req, res) => {
  res.send(new Date());
});

const Discord = require('discord.js');
const client = new Discord.Client();
const cmd = require("node-cmd");
const ms = require("ms");
const fs = require('fs');
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const simpleytapi = require('simple-youtube-api')
const util = require("util")
const gif = require("gif-search");
const jimp = require("jimp");
const guild = require('guild');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const pretty = require("pretty-ms");
const moment = require('moment');
const request = require('request');
const dateFormat = require('dateformat');



const prefix = "#" //هنا تحط بادثه بوت/برفكس 
const developers = "856842798212710401" //هنا تحط ايدي اونر 



client.on('ready', () => {

  var ms = 10000;

  var setGame = [`${prefix}help`];//الحالة 

  var i = -1;

  var j = 0;

  setInterval(function() {

    if (i == -1) {

      j = 1;

    }

    if (i == (setGame.length) - 1) {

      j = -1;

    }

    i = i + j;

    client.user.setGame(setGame[i]);

  }, ms);

});








client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help") {
          const embed = new Discord.RichEmbed()
     .setColor('RANDOM')
   .setDescription(`**__Command List__**
 **==========================================**

  ** ${prefix}user | لمعرفه معلومات عنك او عن شخص
  ${prefix}server | لعرض معلومات السرفر
  ${prefix}avatar | لعرض صوره حسابك او حساب شخص
  ${prefix}avatar server | لعرض صورة السرفر
  ${prefix}bot | لعرض معلومات البوت
  ${prefix}short | لصنع رابط مختصر لرابط
  ${prefix}allbot | لمعرفه البوتات التي داخل السرفر
  ${prefix}ping | لمعرفه البينج **

  **==========================================**
  **:zap: Admin command :zap:**
  
  **
  ${prefix}ban | لتبنيد شخص
  ${prefix}unban | لفك التبنيد
  ${prefix}bans | لمعرفه المبندون
  ${prefix}mute | لاعطاء ميوت
  ${prefix}unmute | لفك الميوت
  ${prefix}lock | لقفل روم
  ${prefix}unlock | لفتح الروم
  ${prefix}kick | لطرد عضو من السرفر
  ${prefix}clear | لمسح الرسائل
  ${prefix}say | البوت يردد كلامك
  ${prefix}role | لاعطاء رول لشخص
  ${prefix}move | لسحب شخص للفويس
  ${prefix}show | لاظهار الروم 
  ${prefix}hide | لاخفاء الروم
 **
  **==========================================**

	** :zap: Protection Command :zap:' **

  ** ${prefix}antibots on | لمنع دخول البوتات السرفر
  ${prefix}antibots off | لسماح دخول البوتات السرفر
  ${prefix}antilinks on | لمنع نشر الينكات
  ${prefix}antilinks off | لسماح نشر الينكات **

	**==========================================**
 Bokamal system`)
   message.channel.send({embed});


    }
});

  




  




 
 




//hide 
 
client.on('message', message => {
        if(message.content === prefix + "hide") {
        if(!message.channel.guild) return;
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Perms :x:');
               message.channel.overwritePermissions(message.guild.id, {
               READ_MESSAGES: false
   })
                message.channel.send('**تـم أخفـاء الشـات**')
   }
  });
 
 
  client.on('message', message => {
        if(message.content === prefix + "show") {
        if(!message.channel.guild) return;
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(':x:');
               message.channel.overwritePermissions(message.guild.id, {
               READ_MESSAGES: true
   })
                message.channel.send('**تـم أظهـار الشـات**')
   }
  });
 
 //server


client.on('message', shark => {

  if (shark.content === (prefix + "server")) {
    var s1 = shark.guild.createdAt.getFullYear()
    var s2 = shark.guild.createdAt.getMonth()
    var s3 = shark.guild.createdAt.getDate()

    let embed = new Discord.RichEmbed()

      .addField('**اسم السيرفر🔠** :', shark.guild.name).addField('**ايدي السيرفر🆔️**:', shark.guild.id).addField('**تاريخ الانشاء 📅**: ', s3 + "/" + s2 + "/" + s1).addField('** مملوك بواسطة 👑 **: ',
        shark.guild.owner).addField('**الأعضاء👥**: ', shark.guild.memberCount).addField('** المنطقة🌍**: ', shark.guild.region).addField('**  عدد الرومات:door:**: ', shark.guild.channels.size).addField('**عدد الرولات 🔒**: ', shark.guild.roles.size).setDescription(' ')
      .setColor("")
      .setDescription(`${shark.guild.name}`)
    shark.channel.sendEmbed(embed);
  }

});

//ping
client.on('message', message => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "ping")) {
    if (!message.channel.guild) return;
    message.channel
    var ping = `${Date.now() - message.createdTimestamp}`
    var api = `${Math.round(client.ws.ping)}`
    message.channel.send('pong').then(m => {
      m.edit(`\`\`\`js\nTime taken: ${ping} ms\nDiscord API: ${api} ms\`\`\``);
    })
  }
})



//avatar

client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + "avatar")) {
    const mention = message.mentions.users.first()

    if (!mention) return console.log("")
    let embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setAuthor(`${mention.username}#${mention.discriminator}`, `${mention.avatarURL}`)
      .setTitle("Avatar Link")
      .setURL(`${mention.avatarURL}`)
      .setImage(`${mention.avatarURL}`)
      .setFooter(`Requested By ${message.author.tag}`, `${message.author.avatarURL}`)
    message.channel.send(embed)
  }
})



//avatar server

client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + "avatar server")) {
    let doma = new Discord.RichEmbed()
      .setColor("BLACK")
      .setAuthor(message.guild.name, message.guild.iconURL)
      .setTitle("Avatar Link")
      .setURL(message.guild.iconURL)
      .setImage(message.guild.iconURL)
      .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL)
    message.channel.send(doma)
  } else if (message.content.startsWith(prefix + "avatar")) {
    let args = message.content.split(" ")[1]
    var avt = args || message.author.id;
    client.fetchUser(avt).then(user => {
      avt = user;
      let embed = new Discord.RichEmbed()
        .setColor("BLACK")
        .setAuthor(`${avt.tag}`, avt.avatarURL)
        .setTitle("Avatar Link")
        .setURL(avt.avatarURL)
        .setImage(avt.avatarURL)
        .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL)
      message.channel.send(embed)
    })
  }
});

//bot info

client.on('message', message => {
  if (message.content.startsWith(prefix + "bot")) {
    message.channel.send({
      embed: new Discord.RichEmbed()
        .setAuthor(client.user.username, client.user.avatarURL)
        .setThumbnail(client.user.avatarURL)
        .setColor('RANDOM')
        .setTitle('``Info The Bot`` ')
        .addField('``My Ping``', `${Date.now() - message.createdTimestamp}` + 'MS', true)
        .addField('``servers``', [client.guilds.size], true)
        .addField('``channels``', ` ${client.channels.size} `, true)
        .addField('``Users``', ` ${client.users.size} `, true)
        .addField('``My Name``', ` ${client.user.tag} `, true)
        .addField('``My ID``', ` ${client.user.id} `, true)
        .addField('``My Prefix``', ` ! `, true)
    })
  }
});

//all bot in server

client.on('message', message => {
  if (!message.channel.guild) return;

  if (message.content.startsWith(prefix + 'allbot')) {
    if (!message.channel.guild) return;

    if (message.author.bot) return;
    let i = 1;
    const botssize = message.guild.members.filter(m => m.user.bot).map(m => `${i++} - <@${m.id}>`);
    const embed = new Discord.RichEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL)
      .setDescription(`**Found ${message.guild.members.filter(m => m.user.bot).size} bots in this Server**
${botssize.join('\n')}`)
      .setFooter(client.user.username, client.user.avatarURL)
      .setTimestamp();
    message.channel.send(embed)

  }
});

//user

client.on("message", pixelbot => {

  if (pixelbot.content.startsWith(prefix + "user")) {

    if (pixelbot.author.bot) return;
    if (!pixelbot.guild)
      return pixelbot.reply("**:x: - This Command is only done on Servers**");
    pixelbot.guild.fetchInvites().then(invites => {

      let personalInvites = invites.filter(
        i => i.inviter.id === pixelbot.author.id
      );
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var roles = pixelbot.member.roles
        .map(roles => `**__${roles.name}__ |**`)
        .join(` `);
      let pixeluser = new Discord.RichEmbed()
        .setColor("#00000")
        .setTitle(" :beginner: :heartpulse:   | User Info")
        .setAuthor(pixelbot.author.username, pixelbot.author.avatarURL)
        .addField("**✽ Name :**   ", pixelbot.author.username, true)
        .addField("**✽ Tag :**   ", pixelbot.author.discriminator, true)
        .addField("**✽ ID :** ", pixelbot.author.id, true)
        .addField(
          "**✽ Joined At :**   ",
          moment(pixelbot.joinedAt).format("D/M/YYYY h:mm a "),
          true
        )
        .addField(
          "**✽ Created At :**    ",
          moment(pixelbot.author.createdAt).format("D/M/YYYY h:mm a "),
          true
        )
        .addField("**✽ Total invites :**    ", inviteCount, true)
        .setTimestamp();

      pixelbot.channel.sendEmbed(pixeluser).then(c => { });
    });
  }
});

//kick

client.on("message", message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
    if (message.author.bot) return;
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");

    if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))
      return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
    if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS"))
      return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
    let user = message.mentions.users.first();
    let reason = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
    if (!reason) return message.reply("**اكتب سبب الطرد**");
    if (!message.guild.member(user).kickable)
      return message.reply(
        "**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**"
      );
    if (
      message.mentions.members.first().highestRole.position >=
      message.member.highestRole.position
    )
      return message.channel.send("ما تقدر تطرد شخص رتبته اعلى منك!");

    message.guild.member(user).kick();

    const kickembed = new Discord.RichEmbed()
      .setAuthor(`KICKED!`, user.displayAvatarURL)
      .setColor("RANDOM")
      .setTimestamp()
      .addField("**User:**", "**[ " + `${user.tag}` + " ]**")
      .addField("**By:**", "**[ " + `${message.author.tag}` + " ]**")
      .addField("**Reason:**", "**[ " + `${reason}` + " ]**");
    message.channel.send({
      embed: kickembed
    });
  }
});


//ban
client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
    if (!message.channel.guild) return message.reply('** This command only for servers**');

    if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
    if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
    let user = message.mentions.users.first();

    if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
    if (!message.guild.member(user)
      .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**");


    message.guild.member(user).ban(7, user);

    message.channel.send(`**:white_check_mark: ${user.tag} banned from the server ! :airplane: **  `)

  }
});


//unban
client.on('message', message => {
  ;
  let user = message.mentions.users.first() || client.users.get(message.content.split(' ')[1])
  if (message.content.startsWith(prefix + 'unban')) {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('❌|**\`ADMINISTRATOR\`لا توجد لديك رتبة`**');
    if (!user) return message.channel.send(`Do this ${prefix} <@ID user> \n or \n ${prefix}unban ID user`);
    message.guild.unban(user);
    message.guild.owner.send(`لقد تم فك الباند عن الشخص \n ${user} \n By : <@${message.author.id}>`)
    var embed = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURl)
      .setColor("RANDOM")
      .setTitle('**●Unban** !')
      .addField('**●User Unban :** ', `${user}`, true)
      .addField('**●By :**', ` <@${message.author.id}> `, true)
      .setAuthor(message.guild.name)
    message.channel.sendEmbed(embed)
  }
});


//all ban
client.on('message', message => {
  if (message.content.startsWith(prefix + "bans")) {
    if (!message.channel.guild) return;
    message.channel
    message.guild.fetchBans()
      .then(bans => message.channel.send(`:small_orange_diamond: **Server Ban List :** ${bans.size} `))
      .catch(console.error);
  }
});



//mute
client.on("message", message => {
  if (message.author.bot) return;

  let command = message.content.split(" ")[0];

  if (command === prefix + "mute") {
    if (message.author.bot) return;
    if (!message.member.hasPermission("MANAGE_ROLES"))
      return message
        .reply("** لا يوجد لديك برمشن 'Manage Roles' **")
        .catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find(gg => gg.name === "log");
    let muteRole = client.guilds
      .get(message.guild.id)
      .roles.find(gg => gg.name === "Muted");
    if (!muteRole)
      return message
        .reply("** لا يوجد رتبة الميوت 'Muted' **")
        .catch(console.error);
    if (message.mentions.users.size < 1)
      return message
        .reply("** يجب عليك منشنت شخص اولاً**")
        .catch(console.error);

    const embed = new Discord.RichEmbed()
      .setColor(0x00ae86)
      .setTimestamp()
      .addField("الأستعمال:", "اسكت/احكي")
      .addField(
        "تم ميوت:",
        `${user.username}#${user.discriminator} (${user.id})`
      )
      .addField(
        "بواسطة:",
        `${message.author.username}#${message.author.discriminator}`
      );

    if (
      !message.guild
        .member(client.user)
        .hasPermission("MANAGE_ROLES_OR_PERMISSIONS")
    )
      return message
        .reply("** لا يوجد لدي برمشن Manage Roles **")
        .catch(console.error);

    if (message.guild.member(user).roles.has(muteRole.id)) {
      return message
        .reply("** تم التفعيل **")
        .catch(console.error);
    } else {
      message.guild
        .member(user)
        .addRole(muteRole)
        .then(() => {
          return message
            .reply("**تم التفعيل**")
            .catch(console.error);
        });
    }
  }


});


//clear

client.on("message", function(message) {
  if (!message.channel.guild) return;
  if (message.author.bot) return;
  if (message.author.id === client.user.id) return;
  if (message.author.equals(client.user)) return;
  if (!message.content.startsWith(prefix)) return;

  var args = message.content.substring(prefix.length).split(" ");
  switch (args[0].toLocaleLowerCase()) {
    case "clear":
      message.delete();
      if (!message.channel.guild) return;
      if (message.member.hasPermission(0x2000)) {
        if (!args[1]) {
          message.channel.fetchMessages().then(messages => {
            message.channel.bulkDelete(messages);
            var messagesDeleted = messages.array().length;
            message.channel
              .send(
                " " +
                  "**```fix\n" +
                  messagesDeleted +
                  " " +
                  ": عدد الرسائل التي تم مسحها" +
                  "```**"
              )
              .then(m => m.delete(5000));
          });
        } else {
          let messagecount = parseInt(args[1]);
          message.channel
            .fetchMessages({ limit: messagecount })
            .then(messages => message.channel.bulkDelete(messages));
          message.channel
            .send(
              " " +
                "**```fix\n" +
                args[1] +
                " " +
                ": عدد الرسائل التي تم مسحها" +
                "```**"
            )
            .then(m => m.delete(5000));
          message.delete(60000);
        }
      } else {
        var manage = new Discord.RichEmbed()
          .setDescription("You Do Not Have Permission MANAGE_MESSAGES :(")
          .setColor("RANDOM");
        message.channel.sendEmbed(manage);
        return;
      }
  }
});

//unmute
 
client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.author.bot) return;

  let command = message.content.split(" ")[0];

  if (message.content.split(" ")[0].toLowerCase() === prefix + "unmute") {
    if (!message.member.hasPermission('MANAGE_ROLES')) return;
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'log');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply(" I Can’t Find 'Muted' Role ").catch(console.error).then(message => message.delete(4000))
    if (message.mentions.users.size < 1) return message.reply(' Error : ``Mention a User``').catch(console.error).then(message => message.delete(4000))
    if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return;

    if (message.guild.member(user).removeRole(muteRole.id)) {
      return message.reply("User Has Been UnMuted.").catch(console.error).then(message => message.delete(4000))
    } else {
      message.guild.member(user).removeRole(muteRole).then(() => {
        return message.reply("User Has Been UnMuted.").catch(console.error).then(message => message.delete(4000))
      });
    }

  };

});


//nick
client.on("message", message => {
  if (message.content.startsWith(prefix + "setnick")) {
    if (message.author.bot || message.channel.type == "dm" || !message.member.hasPermission("MANAGE_NICKNAMES") || !message.guild.member(client.user).hasPermission("MANAGE_NICKNAMES")) return;
    var user = message.mentions.members.first();
    var args = message.content.split(" ").slice(2);
    var nick = args.join(" ");
    if (!user || !args) return message.channel.send(`**• | Usage:** ${prefix}setnick \`\`@Name\`\` nickname`);
    message.guild.member(user.user).setNickname(`${nick}`);
    message.channel.send(`Successfully changed **${user}** nickname to **${nick}**`);
  }
});


//lock

client.on("message", ninja => {
  if (ninja.content === prefix + "lock") {
    if (!ninja.channel.guild)
      if (!ninja.channel.guild) return;

    if (!ninja.member.hasPermission("MANAGE_MESSAGES"))
      return ninja.reply("**ليس لديك صلاحيات**");
    ninja.channel
      .overwritePermissions(ninja.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        ninja.reply("**تم قفل الشات :no_entry: **");
      });
  }
  if (ninja.content === prefix + "unlock") {
    if (!ninja.channel.guild)
      if (!ninja.channel.guild) return;

    if (!ninja.member.hasPermission("MANAGE_MESSAGES"))
      return ninja.reply("**ليس لديك صلاحيات**");
    ninja.channel
      .overwritePermissions(ninja.guild.id, {
        SEND_MESSAGES: true
      })
      .then(() => {
        ninja.reply("**تم فتح الشات :white_check_mark:**");
      });
  }
});

//say

client.on('message', msg => {
  if (msg.author.bot) return;
  let args = msg.content.split(" ").slice(1).join(" ")
  if (msg.content.startsWith(prefix + "say")) {
    msg.delete(100);
    const embed = new Discord.RichEmbed()
      .setColor(``)
      .setDescription(args)
    msg.channel.sendEmbed(embed)
  }
});



//roles

client.on("message", message => {
  let roleembed = new Discord.RichEmbed()
    .setDescription(`
أمثله على الأوامر :
-role @mention rolename : لأعطاء رتبة لعضو معين
-role all rolename : لأعطاء رتبة للجميع
-role humans rolename : لأعطاء رتبة للاشخاص فقط
-role bots rolename : لأعطاء رتبة لجميع البوتات`)
    .setFooter('Requested by ' + message.author.username, message.author.avatarURL)
  var args = message.content.split(' ').slice(1);
  var msg = message.content.toLowerCase();
  if (!message.guild) return;
  if (!msg.startsWith(prefix + 'role')) return;
  if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__ليس لديك صلاحيات__**');
  if (msg.toLowerCase().startsWith(prefix + 'roleembed')) {
    if (!args[0]) return message.channel.sendEmbed(roleembed)
    if (!args[1]) return message.channel.sendEmbed(roleembed)
    var role = msg.split(' ').slice(2).join(" ").toLowerCase();
    var role1 = message.guild.roles.filter(r => r.name.toLowerCase().indexOf(role) > -1).first();
    if (!role1) return message.reply('**:x: يرجى وضع الرتبة المراد اعطاءها الى الشخص**'); if (message.mentions.members.first()) {
      message.mentions.members.first().addRole(role1);
      return message.reply('**:white_check_mark: [ ' + role1.name + ' ] رتبة [ ' + args[0] + ' ] تم اعطاء الى **');
    }
    if (args[0].toLowerCase() == "all") {
      message.guild.members.forEach(m => m.addRole(role1))
      return message.reply('**:white_check_mark: [ ' + role1.name + ' ] تم اعطاء الى الكل رتبة**');
    } else if (args[0].toLowerCase() == "bots") {
      message.guild.members.filter(m => m.user.bot).forEach(m => m.addRole(role1))
      return message.reply('**:white_check_mark: [ ' + role1.name + ' ] تم اعطاء الى البوتات رتبة**');
    } else if (args[0].toLowerCase() == "humans") {
      message.guild.members.filter(m => !m.user.bot).forEach(m => m.addRole(role1))
      return message.reply('**:white_check_mark: [ ' + role1.name + ' ] تم اعطاء الى البشريين رتبة**');
    }
  } else {
    if (!args[0]) return message.reply('**:x: يرجى وضع الشخص المراد اعطائها الرتبة**');
    if (!args[1]) return message.reply('**:x: يرجى وضع الرتبة المراد اعطائها للشخص**');
    var role = msg.split(' ').slice(2).join(" ").toLowerCase();
    var role1 = message.guild.roles.filter(r => r.name.toLowerCase().indexOf(role) > -1).first();
    if (!role1) return message.reply('**:x: يرجى وضع الرتبة المراد اعطائها للشخص**'); if (message.mentions.members.first()) {
      message.mentions.members.first().addRole(role1);
      return message.reply('**:white_check_mark: [ ' + role1.name + ' ] رتبة [ ' + args[0] + ' ] تم اعطاء **');
    }
    if (args[0].toLowerCase() == "all") {
      message.guild.members.forEach(m => m.addRole(role1))
      return message.reply('**:white_check_mark: [ ' + role1.name + ' ] تم اعطاء الكل رتبة**');
    } else if (args[0].toLowerCase() == "bots") {
      message.guild.members.filter(m => m.user.bot).forEach(m => m.addRole(role1))
      return message.reply('**:white_check_mark: [ ' + role1.name + ' ] تم اعطاء البوتات رتبة**');
    } else if (args[0].toLowerCase() == "humans") {
      message.guild.members.filter(m => !m.user.bot).forEach(m => m.addRole(role1))
      return message.reply('**:white_check_mark: [ ' + role1.name + ' ] تم اعطاء البشريين رتبة**');
    }
  }
});




//short

const shorten = require('isgd');
client.on('message', ninja => {

  if (ninja.content.startsWith(prefix + 'short')) {
    if (!ninja.channel.guild) return;
    ninja.channel
    if (!ninja.member.hasPermission('ADMINISTRATOR'))
      return ninja.channel.send('**ليس لديك صلاحيات**');
    let args = ninja.content.split(" ").slice(1);
    if (!args[0]) return ninja.channel.send('**استعمل**: ' + prefix + 'short <رابط>')
    if (!args[1]) {
      shorten.shorten(args[0], function(res) {
        if (res.startsWith('Error:')) return ninja.channel.send('**Usage**: ' + prefix + 'short <link>');
        ninja.channel.send(`اختصار الرابط:**${res}**`);
      })
    } else {
      shorten.custom(args[0], args[1], function(res) {
        if (res.startsWith('Error:')) return ninja.channel.send(`اختصار الرابط:**${res}**`);
        ninja.channel.send(`اختصار الرابط:**${res}**`);
      })
    }
  }
});



//un link
client.on("message", async message => {
  if (message.content.includes("discord.gg")) {
    if (message.member.hasPermission("MANAGE_GUILD")) return;
    if (!message.channel.guild) return;
    message.delete();
  }
});



client.on('message', ninja => {
  if (!ninja.channel.guild) return;
  if (ninja.content.startsWith(prefix + 'move')) {
    if (!ninja.channel.guild)
      ninja.channel
    if (ninja.member.hasPermission("MOVE_MEMBERS")) {
      if (ninja.mentions.users.size === 0) {
        return ninja.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " + prefix + "move [USER]``")
      }
      if (ninja.member.voiceChannel != null) {
        if (ninja.mentions.members.first().voiceChannel != null) {
          var authorchannel = ninja.member.voiceChannelID;
          var usermentioned = ninja.mentions.members.first().id;
          var embed = new Discord.RichEmbed()
            .setTitle("Succes!")
            .setColor("#000000")
            .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك✅ `)
          var embed = new Discord.RichEmbed()
            .setTitle(`You are Moved in ${ninja.guild.name}`)
            .setColor("RANDOM")
            .setDescription(`**<@${ninja.author.id}> Moved You To His Channel!\nServer --> ${ninja.guild.name}**`)
          ninja.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => ninja.channel.send(embed))
          ninja.guild.members.get(usermentioned).send(embed)
        } else {
          ninja.channel.send("``لا تستطيع سحب " + ninja.mentions.members.first() + " `يجب ان يكون هذه العضو في روالعضو ليس في روم الصوتي`")
        }
      } else {
        ninja.channel.send("**``انت لست في الروم الصوتي``**")
      }
    } else {
      ninja.react("❌")
    }
  }
});




let antibots = JSON.parse(fs.readFileSync('./antibots.json', 'utf8'));
client.on('message', message => {
  if (message.content.startsWith(prefix + "antibots on")) {
    if (!message.channel.guild) return message.reply('**This Command Only For Servers**');
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('**Sorry But You Dont Have Permission** `ADMINISTRATOR`');
    antibots[message.guild.id] = {
      onoff: 'On',
    }
    message.channel.send(`**✅ The AntiBots Is __𝐎𝐍__ !**`)
    fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
      if (err) console.error(err)
        .catch(err => {
          console.error(err);
        });
    });
  }

})



client.on('message', message => {
  if (message.content.startsWith(prefix + "antibots off")) {
    if (!message.channel.guild) return message.reply('**This Command Only For Servers**');
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('**Sorry But You Dont Have Permission** `ADMINISTRATOR`');
    antibots[message.guild.id] = {
      onoff: 'Off',
    }
    message.channel.send(`**⛔ The AntiBots Is __𝐎𝐅𝐅__ !**`)
    fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
      if (err) console.error(err)
        .catch(err => {
          console.error(err);
        });
    });
  }

})

client.on("guildMemberAdd", member => {
  if (!antibots[member.guild.id]) antibots[member.guild.id] = {
    onoff: 'Off'
  }
  if (antibots[member.guild.id].onoff === 'Off') return;
  if (member.user.bot) return member.kick()
})

fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
  if (err) console.error(err)
    .catch(err => {
      console.error(err);
    });

})



let spread = JSON.parse(fs.readFileSync('./antilinks.json' , 'utf8'));
 
 
client.on('message', message => {
    if(message.content.startsWith(prefix + "antilinks off")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
spread[message.guild.id] = {
onoff: 'Off',
}
message.channel.send(`**⛔ The AntiSpread Is __𝐎𝐅𝐅__ !**`)
          fs.writeFile("./spread.json", JSON.stringify(spread), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }
 
        })
        client.on('message', message => {
    if(message.content.startsWith(prefix + "antilinks on")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
spread[message.guild.id] = {
onoff: 'On',
}
message.channel.send(`**✅ The AntiSpread Is __𝐎𝐍__ !**`)
          fs.writeFile("./spread.json", JSON.stringify(spread), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }
 
        })
    client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('http://www.gmail.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**⛔ The Antispread ON ! So You Cant spread Here !**`)
    }
});
 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://www.snapchat.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
 
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**⛔ The Antispread ON ! So You Cant spread Here !**`)
    }
});
 
 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://www.instagram.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**⛔ The Antispread ON ! So You Cant spread Here !**`)
    }
});
 
 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://www.twitter.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**⛔ The Antispread ON ! So You Cant spread Here !**`)
    }
});
 
 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('http://www.facebook.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**⛔ The Antispread ON ! So You Cant spread Here !**`)
    }
});
 
 
 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://www.youtube.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**⛔ The Antispread ON ! So You Cant spread Here !**`)
    }
 
});
 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://www.discordapp.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**⛔ The Antispread ON ! So You Cant spread Here !**`)
    }
 
});
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://discord.gg/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**⛔ The Antispread ON ! So You Cant spread Here !**`)
    }
 
});







client.login(process.env.token);