const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const Anime_Images = require(`anime-images-api`);
const _๐๐๐_ = require(`../../๐๐๐๐ำ๐๐ง๐๐ป๐ช๐ฝ๐ฎ/_๐๐๐_`);
const download = require(`download-file`);
const ffmpeg = require(`fluent-ffmpeg`);
const Kolor = require(`chalk`);
const API = new Anime_Images();
const fs = require(`fs`);
var แดแดษชแดx = new RegExp(_๐๐๐_.FOXTROT, "g");
var แดแดษช = /\/\^\[(.*)+\]\/\g/g.exec(แดแดษชแดx)[1];
const ๐๐ฎ๐ฎgit = require("simple-git")();
// โฌก==================โฌก-----------------โฆฟ๐๐ข๐ณ๐ฎ๐ค๐ขโขโฆฟ-----------------โฌก==================โฌก
// ๐ธ๐๐ฎ๐ฎ6โข แดแดแด แดษดแดแดแด แดกสแดแด๊ฑแดแดแด แด๊ฑแดสสแดแด แดกษชแดส 80+ แดแดแดแดแดษดแด๊ฑ ๊ฐแดส สแดแดส แดสษชแด แดแดแด แดษดแด ษขสแดแดแด-แด๊ฑแดษขแด๐ธ
// โฌก==================โฌก-----------------โฆฟ๐๐ข๐ณ๐ฎ๐ค๐ขโขโฆฟ-----------------โฌก==================โฌก
module.exports = {
  name: `slap`,
  description: `I know you like anime slap`,
  async handle(๐๐ป๐ช๐ด๐ฒ๐ท๐, chat, ๐๐๐๐ำ๐, arg) {
    const ๐๐ฎ๐ฎgit = require("simple-git")();
    await ๐๐ฎ๐ฎgit.fetch();
    var ษดแดแดก๐๐ฎ๐ฎ6 = await ๐๐ฎ๐ฎgit.log(["KrakinzLab..origin/KrakinzLab"]);
    if (ษดแดแดก๐๐ฎ๐ฎ6.total != 0) {
      console.log(ษดแดแดก๐๐ฎ๐ฎ6);
      var Sender = ๐๐๐๐ำ๐.sender;
      var personsending = Sender.substring(0, Sender.length - 15);
      await ๐๐ป๐ช๐ด๐ฒ๐ท๐
        .sendMessage(
          ๐๐๐๐ำ๐.logGroup,
          `โฌก *็ช๐๐๐ำ๐* by โญ๐ฏ๐ำ๐ฆ๐ซ๐ท๐๐๐ โฌก
โ ๐๐๐6 ๐๐ฅ๐๐๐ฉ๐ ๐๐๐ฃ๐๐๐ฃ๐

*โข๐๐ญ๐ฆ๐ข๐ด๐ฆ ๐๐ฑ๐ฅ๐ข๐ต๐ฆ ๐๐ด๐ช๐ฏ๐จ *${แดแดษช}update* ๐ฐ๐ณ ๐ณ๐ฆ๐ฅ๐ฆ๐ฑ๐ญ๐ฐ๐บ ๐๐ข๐ณ๐ฎ๐ค๐ขโข!`,
          MessageType.text
        )
        .catch((error) => โฮนัฮทั.catch(error, ๐๐ป๐ช๐ด๐ฒ๐ท๐, ๐๐๐๐ำ๐));
    } else {
      console.log("No commits to pull");
    }
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
    } else {
      let { image } = await API.sfw.slap();
      if (image === undefined) {
        return await ๐๐ป๐ช๐ด๐ฒ๐ท๐.sendMessage(
          ๐๐๐๐ำ๐.chatId,
          {
            url: `https://i.postimg.cc/KcNwHtZt/ltr.png`,
          },
          MessageType.image,
          {
            mimetype: Mimetype.png,
            caption: `Seems Like No Image Was Found.\nPlease Try Again Later!`,
          }
        );
      } else {
        console.log(image);
        download(
          image,
          {
            directory: `./๐๐๐๐ำ๐๐๏ธ๐๐ฒ๐ท/`,
            filename: `slap-${chat.key.id}.gif`,
          },
          function (err) {
            0;
            if (err) {
              return console.log(err);
            } else console.log(`Download Done...`);
            const FP = `./๐๐๐๐ำ๐๐๏ธ๐๐ฒ๐ท/slap-${chat.key.id}.gif`;
            const SP = `./๐๐๐๐ำ๐๐๏ธ๐๐ฒ๐ท/slap-${chat.key.id}.webp`;
            ffmpeg(FP)
              .duration(8)
              .outputOptions([
                `-y`,
                `-vcodec libwebp`,
                `-lossless 1`,
                `-qscale 1`,
                `-preset default`,
                `-loop 0`,
                `-an`,
                `-vsync 0`,
                `-s 600x600`,
              ])
              .videoFilters(
                `scale=600:600:flags=lanczos:force_original_aspect_ratio=decrease,
  format=rgba,
  pad=600:600:(ow-iw)/2:(oh-ih)/2:color=#00000000,
  setsar=1`
              )
              .save(SP)
              .on(`end`, async () => {
                await ๐๐ป๐ช๐ด๐ฒ๐ท๐
                  .sendMessage(
                    ๐๐๐๐ำ๐.chatId,
                    fs.readFileSync(SP),
                    MessageType.sticker
                  )
                  .catch((CYฮฃะฏะฏ) =>
                    ๐๐ป๐ช๐ด๐ฒ๐ท๐.sendMessage(
                      ๐๐๐๐ำ๐.chatId,
                      `๊ฑแดแดแดแดสษชษดษข แดกแดษดแด แดกสแดษดษข.สแดสแด แดสแด ๊ฑแดแดแด สแดษข๊ฑ ๊ฑษชษดแดแด แดกสแดษด แดสแด สแดแด แดกแด๊ฑ ษดแดแด สแด๊ฑแดแดษดแดษชษดษข แด๊ฑ แดxแดแดแดแดแดแด.
  
  โ ๏ธ๐๐ฟ๐ฟ๐ผ๐ฟ
  โข ${CYฮฃะฏะฏ}
  
  
  ๐ก๐๐ผ๐บ๐บ๐ฎ๐ป๐ฑ โข ${๐๐๐๐ำ๐.commandName}
  ๐ฎ๐๐ ๐๐ฎ๐ ๐ฃ๐ ? โข ${๐๐๐๐ำ๐.isPm}`,
                      MessageType.text
                    )
                  );
                fs.unlink(FP, (cแดสสแดส) => {
                  if (cแดสสแดส) {
                    console.log(Kolor.redBright(cแดสสแดส));
                  } else {
                    console.log(Kolor.greenBright(`Deleted> ${FP}`));
                  }
                });
                fs.unlink(SP, (cแดสสแดส) => {
                  if (cแดสสแดส) {
                    console.log(Kolor.redBright(cแดสสแดส));
                  } else {
                    console.log(Kolor.greenBright(`Deleted> ${SP}`));
                  }
                });
              });
          }
        );
      }
    }
  },
};
// ===============================================================================
// ๐ฎ๐๐ฎ๐ฎ6โข ๐๐ฅ๐ท๐ข๐ฏ๐ค๐ฆ ๐๐ฉ๐ข๐ต๐ด๐ข๐ฑ๐ฑ ๐๐ด๐ฆ๐ณ๐ฃ๐ฐ๐ต ๐๐ช๐ต๐ฉ 80+ ๐๐ฐ๐ฎ๐ฎ๐ข๐ฏ๐ฅ๐ด ๐ง๐ฐ๐ณ ๐ฃ๐ฐ๐ต๐ฉ ๐๐ณ๐ช๐ท๐ข๐ต๐ฆ ๐ข๐ฏ๐ฅ ๐๐ถ๐ฃ๐ญ๐ช๐ค..
// ===============================================================================
