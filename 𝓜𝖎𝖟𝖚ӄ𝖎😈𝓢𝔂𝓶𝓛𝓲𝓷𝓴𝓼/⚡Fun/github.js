const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const _๐๐๐_ = require(`../../๐๐๐๐ำ๐๐ง๐๐ป๐ช๐ฝ๐ฎ/_๐๐๐_`);
const โฮนัฮทั = require("../../๐๐๐๐ำ๐๐ง๐๐ป๐ช๐ฝ๐ฎ/catch");
const got = require(`got`);
var แดแดษชแดx = new RegExp(_๐๐๐_.FOXTROT, "g");
var แดแดษช = /\/\^\[(.*)+\]\/\g/g.exec(แดแดษชแดx)[1];
const ๐๐ฎ๐ฎgit = require("simple-git")();
// โฌก==================โฌก-----------------โฆฟ๐๐ข๐ณ๐ฎ๐ค๐ขโขโฆฟ-----------------โฌก==================โฌก
// ๐ธ๐๐๐๐ำ๐โข แดแดแด แดษดแดแดแด แดกสแดแด๊ฑแดแดแด แด๊ฑแดสสแดแด แดกษชแดส 80+ แดแดแดแดแดษดแด๊ฑ ๊ฐแดส สแดแดส แดสษชแด แดแดแด แดษดแด ษขสแดแดแด-แด๊ฑแดษขแด๐ธ
// โฌก==================โฌก-----------------โฆฟ๐๐ข๐ณ๐ฎ๐ค๐ขโขโฆฟ-----------------โฌก==================โฌก
module.exports = {
  name: `github`,
  description: `Get the github profile by command  *${แดแดษช}github <user>*  
or replying  *${แดแดษช}github*`,
  async handle(๐๐ป๐ช๐ด๐ฒ๐ท๐, chat, ๐๐๐๐ำ๐, arg) {
    // โฌก==================โฌก-----------------โฆฟ๐๐ข๐ณ๐ฎ๐ค๐ขโขโฆฟ-----------------โฌก==================โฌก
    await ๐๐ฎ๐ฎgit.fetch();
    var Sender = ๐๐๐๐ำ๐.sender;
    var ษดแดแดก๐๐ฎ๐ฎ6 = await ๐๐ฎ๐ฎgit.log(["KrakinzLab..origin/KrakinzLab"]);
    personsending = Sender.substring(0, Sender.length - 15);
    // โฌก==================โฌก-----------------โฆฟ๐๐ข๐ณ๐ฎ๐ค๐ขโขโฆฟ-----------------โฌก==================โฌก
    if (ษดแดแดก๐๐ฎ๐ฎ6.total != 0) {
      await ๐๐ป๐ช๐ด๐ฒ๐ท๐
        .sendMessage(
          ๐๐๐๐ำ๐.logGroup,
          `โฌก *็ช๐๐๐ำ๐* by โญ๐ฏ๐ำ๐ฆ๐ซ๐ท๐๐๐ โฌก

๐๐ฅ๐๐๐ฉ๐๐ค๐๐๐ฃ๐๐๐ฃ๐
*โข๐๐ญ๐ฆ๐ข๐ด๐ฆ ๐๐ฑ๐ฅ๐ข๐ต๐ฆ ๐๐ด๐ช๐ฏ๐จ *${แดแดษช}update* ๐ฐ๐ณ ๐ณ๐ฆ๐ฅ๐ฆ๐ฑ๐ญ๐ฐ๐บ ๐๐ข๐ณ๐ฎ๐ค๐ขโข!`,
          MessageType.text
        )
        .catch((error) => โฮนัฮทั.catch(error, ๐๐ป๐ช๐ด๐ฒ๐ท๐, ๐๐๐๐ำ๐));
    }
    // โฌก==================โฌก-----------------โฆฟ๐๐ข๐ณ๐ฎ๐ค๐ขโขโฆฟ-----------------โฌก==================โฌก
    if (๐๐๐๐ำ๐.chatId === "120363025343298860@g.us" && !๐๐๐๐ำ๐.isSenderSUDO) {
      await ๐๐ป๐ช๐ด๐ฒ๐ท๐
        .sendMessage(
          ๐๐๐๐ำ๐.chatId,
          `โฌก *็ช๐๐๐ำ๐* by โญ๐ฏ๐ำ๐ฆ๐ซ๐ท๐๐๐ โฌก

*โข@${personsending}*,
ใท๏ธ๐๐ซ๐จ๐ฎ๐ฉ๐https://chat.whatsapp.com/Ih78PSfbxhn6hIS2D09S5S`,
          MessageType.text,
          {
            contextInfo: {
              mentionedJid: [๐๐๐๐ำ๐.sender],
            },
          }
        )
        .catch((error) => โฮนัฮทั.catch(error, ๐๐ป๐ช๐ด๐ฒ๐ท๐, ๐๐๐๐ำ๐));
      return;
      // โฌก==================โฌก-----------------โฆฟ๐๐ข๐ณ๐ฎ๐ค๐ขโขโฆฟ-----------------โฌก==================โฌก
    } else {
      try {
        let user_name = ``;
        if (๐๐๐๐ำ๐.isReply) {
          user_name = ๐๐๐๐ำ๐.replyMessage;
        } else {
          if (arg.length === 0) {
            return await ๐๐ป๐ช๐ด๐ฒ๐ท๐
              .sendMessage(
                ๐๐๐๐ำ๐.chatId,
                {
                  url: _๐๐๐_.ARC,
                },
                MessageType.image,
                {
                  mimetype: Mimetype.jpeg,
                  caption: `*โ ๏ธSeems like someone forgot to give Github Account name!*

*Usage Example*
${แดแดษช}github <account name>`,
                }
              )
              .catch((cแดสสแดส) => {
                โฮนัฮทั.catch((cแดสสแดส, ๐๐ป๐ช๐ด๐ฒ๐ท๐, ๐๐๐๐ำ๐));
              });
          }
          user_name = arg[0];
        }
        let userResponse = await got(
          `https://api.github.com/users/` + user_name
        );
        let user = JSON.parse(userResponse.body);
        Object.keys(user).forEach(function (key) {
          if (user[key] === null || user[key] === ``) {
            user[key] = `N/A`;
          }
        });
        let caption =
          `*๐ค Name :* ` +
          user.name +
          `\n*๐ป Link :* ` +
          user.html_url +
          `\n*๐ง Type :* ` +
          user.type +
          `\n*๐ข Company :* ` +
          user.company +
          `\n*๐ญ Blog :* ` +
          user.blog +
          `\n*๐ Location :* ` +
          user.location +
          `\n*๐ Bio :* ` +
          user.bio +
          `\n*โค๏ธ Followers :* ` +
          user.followers +
          `\n*๐๏ธ Following :* ` +
          user.following +
          `\n*๐ Public Repos :* ` +
          user.public_repos +
          `\n*๐ Public Gists :* ` +
          user.public_gists +
          `\n*๐ Profile Created :* ` +
          user.created_at +
          `\n*โ๏ธ Profile Updated :* ` +
          user.updated_at;
        if (user.public_repos > 0) {
          let reposResponse = await got(user.repos_url);
          let reposData = JSON.parse(reposResponse.body);
          repos = reposData[0].name;
          for (let i = 1; i < reposData.length && i < 5; i++) {
            repos += ` | ` + reposData[i].name;
          }
          caption += `\n*๐ Some Repos :* ` + repos;
        }
        try {
          await ๐๐ป๐ช๐ด๐ฒ๐ท๐
            .sendMessage(
              ๐๐๐๐ำ๐.chatId,
              {
                url: user.avatar_url,
              },
              MessageType.image,
              {
                mimetype: Mimetype.png,
                caption: caption,
                thumbnail: null,
              }
            )
            .catch((error) => โฮนัฮทั.catch(error, ๐๐ป๐ช๐ด๐ฒ๐ท๐, ๐๐๐๐ำ๐));
        } catch (cแดสสแดส) {
          ๐๐ป๐ช๐ด๐ฒ๐ท๐.sendMessage(๐๐๐๐ำ๐.chatId, caption, MessageType.text);
        }
      } catch (cแดสสแดส) {
        await ๐๐ป๐ช๐ด๐ฒ๐ท๐.sendMessage(
          ๐๐๐๐ำ๐.chatId,
          `๊ฑแดแดแดแดสษชษดษข แดกแดษดแด แดกสแดษดษข.สแดสแด แดสแด ๊ฑแดแดแด สแดษข๊ฑ ๊ฑษชษดแดแด แดกสแดษด แดสแด สแดแด แดกแด๊ฑ ษดแดแด สแด๊ฑแดแดษดแดษชษดษข แด๊ฑ แดxแดแดแดแดแดแด.
ACCOUNT NOT FOUND
โ ๏ธ๐๐ฟ๐ฟ๐ผ๐ฟ
โข ${cแดสสแดส}


๐ก๐๐ผ๐บ๐บ๐ฎ๐ป๐ฑ โข ${๐๐๐๐ำ๐.commandName}
๐ฎ๐๐ ๐๐ฎ๐ ๐ฃ๐ ? โข ${๐๐๐๐ำ๐.isPm}`,
          MessageType.text
        );
      }
    }
  },
};
// ===============================================================================
// ๐ฎ๐๐๐๐ำ๐โข ๐๐ฅ๐ท๐ข๐ฏ๐ค๐ฆ ๐๐ฉ๐ข๐ต๐ด๐ข๐ฑ๐ฑ ๐๐ด๐ฆ๐ณ๐ฃ๐ฐ๐ต ๐๐ช๐ต๐ฉ 80+ ๐๐ฐ๐ฎ๐ฎ๐ข๐ฏ๐ฅ๐ด ๐ง๐ฐ๐ณ ๐ฃ๐ฐ๐ต๐ฉ ๐๐ณ๐ช๐ท๐ข๐ต๐ฆ ๐ข๐ฏ๐ฅ ๐๐ถ๐ฃ๐ญ๐ช๐ค..
// ===============================================================================
