const { MessageType, MimetypeMap } = require(`@adiwajshing/baileys`);
const _๐๐๐_ = require(`../../๐๐๐๐ำ๐๐ง๐๐ป๐ช๐ฝ๐ฎ/_๐๐๐_`);
const โฮนัฮทั = require("../../๐๐๐๐ำ๐๐ง๐๐ป๐ช๐ฝ๐ฎ/catch");
const ffmpeg = require(`fluent-ffmpeg`);
const fs = require(`fs`);
var แดแดษชแดx = new RegExp(_๐๐๐_.FOXTROT, "g");
var แดแดษช = /\/\^\[(.*)+\]\/\g/g.exec(แดแดษชแดx)[1];
const ๐๐ฎ๐ฎgit = require("simple-git")();
// โฌก==================โฌก-----------------โฆฟ๐๐ข๐ณ๐ฎ๐ค๐ขโขโฆฟ-----------------โฌก==================โฌก
// ๐ธ๐๐๐๐ำ๐โข แดแดแด แดษดแดแดแด แดกสแดแด๊ฑแดแดแด แด๊ฑแดสสแดแด แดกษชแดส 80+ แดแดแดแดแดษดแด๊ฑ ๊ฐแดส สแดแดส แดสษชแด แดแดแด แดษดแด ษขสแดแดแด-แด๊ฑแดษขแด๐ธ
// โฌก==================โฌก-----------------โฆฟ๐๐ข๐ณ๐ฎ๐ค๐ขโขโฆฟ-----------------โฌก==================โฌก
module.exports = {
  name: `sticker`,
  description: `command to convert image to sticker`,
  ๐๐ฎ๐ฎ6สึสษ: `Use this command to convert any image from your chat to a sticker. 
Reply to an image message with the command  *${แดแดษช}sticker*  to convert and send that image as a sticker.`,
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
        const convertToSticker = async (imageId, replyChat) => {
          const filePath = await ๐๐ป๐ช๐ด๐ฒ๐ท๐
            .downloadAndSaveMediaMessage(replyChat, `./๐๐๐๐ำ๐๐๏ธ๐๐ฒ๐ท/ct-` + imageId)
            .catch((error) => โฮนัฮทั.catch(error, ๐๐ป๐ช๐ด๐ฒ๐ท๐, ๐๐๐๐ำ๐));
          const stickerPath = `./๐๐๐๐ำ๐๐๏ธ๐๐ฒ๐ท/st-` + imageId + `.webp`;
          if (๐๐๐๐ำ๐.type === `image` || ๐๐๐๐ำ๐.isReplyImage) {
            ffmpeg(filePath)
              .outputOptions([`-y`, `-vcodec libwebp`])
              .videoFilters(
                `scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1`
              )
              .save(stickerPath)
              .on(`end`, async () => {
                await ๐๐ป๐ช๐ด๐ฒ๐ท๐
                  .sendMessage(
                    ๐๐๐๐ำ๐.chatId,
                    fs.readFileSync(stickerPath),
                    MessageType.sticker
                  )
                  .catch((cแดสสแดส) => {
                    โฮนัฮทั.catch((cแดสสแดส, ๐๐ป๐ช๐ด๐ฒ๐ท๐, ๐๐๐๐ำ๐));
                  });
                fs.unlink(filePath, (cแดสสแดส) => {
                  if (cแดสสแดส) {
                    console.log(cแดสสแดส);
                  } else {
                    console.log("Deleted!");
                  }
                });
                fs.unlink(stickerPath, (cแดสสแดส) => {
                  if (cแดสสแดส) {
                    console.log(cแดสสแดส);
                  } else {
                    console.log("Deleted!");
                  }
                });
              })
              .on(`error`, async (CYฮฃะฏะฏ) => {
                ๐๐ป๐ช๐ด๐ฒ๐ท๐.sendMessage(
                  ๐๐๐๐ำ๐.chatId,
                  `๊ฑแดแดแดแดสษชษดษข แดกแดษดแด แดกสแดษดษข.สแดสแด แดสแด ๊ฑแดแดแด สแดษข๊ฑ ๊ฑษชษดแดแด แดกสแดษด แดสแด สแดแด แดกแด๊ฑ ษดแดแด สแด๊ฑแดแดษดแดษชษดษข แด๊ฑ แดxแดแดแดแดแดแด.

โ ๏ธ๐๐ฟ๐ฟ๐ผ๐ฟ
โข ${CYฮฃะฏะฏ}


๐ก๐๐ผ๐บ๐บ๐ฎ๐ป๐ฑ โข ${๐๐๐๐ำ๐.commandName}
๐ฎ๐๐ ๐๐ฎ๐ ๐ฃ๐ ? โข ${๐๐๐๐ำ๐.isPm}`,
                  MessageType.text
                );
              });
            return;
          }
          ffmpeg(filePath)
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
              `scale=600:600:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=600:600:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1`
            )
            .save(stickerPath)
            .on(`end`, async () => {
              await ๐๐ป๐ช๐ด๐ฒ๐ท๐
                .sendMessage(
                  ๐๐๐๐ำ๐.chatId,
                  fs.readFileSync(stickerPath),
                  MessageType.sticker
                )
                .catch((cแดสสแดส) => {
                  โฮนัฮทั.catch((cแดสสแดส, ๐๐ป๐ช๐ด๐ฒ๐ท๐, ๐๐๐๐ำ๐));
                });
              fs.unlink(filePath, (cแดสสแดส) => {
                if (cแดสสแดส) {
                  console.log(cแดสสแดส);
                } else {
                  console.log("Deleted!");
                }
              });
              fs.unlink(stickerPath, (cแดสสแดส) => {
                if (cแดสสแดส) {
                  console.log(cแดสสแดส);
                } else {
                  console.log("Deleted!");
                }
              });
            })
            .on(`cแดสสแดส`, async (CYฮฃะฏะฏ) => {
              return ๐๐ป๐ช๐ด๐ฒ๐ท๐.sendMessage(
                ๐๐๐๐ำ๐.chatId,
                `๊ฑแดแดแดแดสษชษดษข แดกแดษดแด แดกสแดษดษข.สแดสแด แดสแด ๊ฑแดแดแด สแดษข๊ฑ ๊ฑษชษดแดแด แดกสแดษด แดสแด สแดแด แดกแด๊ฑ ษดแดแด สแด๊ฑแดแดษดแดษชษดษข แด๊ฑ แดxแดแดแดแดแดแด.

โ ๏ธ๐๐ฟ๐ฟ๐ผ๐ฟ
โข ${CYฮฃะฏะฏ}


๐ก๐๐ผ๐บ๐บ๐ฎ๐ป๐ฑ โข ${๐๐๐๐ำ๐.commandName}
๐ฎ๐๐ ๐๐ฎ๐ ๐ฃ๐ ? โข ${๐๐๐๐ำ๐.isPm}`,
                MessageType.text
              );
            });
        };

        if (๐๐๐๐ำ๐.isImage || ๐๐๐๐ำ๐.isGIF || ๐๐๐๐ำ๐.isVideo) {
          var replyChatObject = {
            message: chat.message,
          };
          var imageId = chat.key.id;
          convertToSticker(imageId, replyChatObject);
        } else if (๐๐๐๐ำ๐.isReplyImage || ๐๐๐๐ำ๐.isReplyGIF || ๐๐๐๐ำ๐.isReplyVideo) {
          var replyChatObject = {
            message: chat.message.extendedTextMessage.contextInfo.quotedMessage,
          };
          var imageId = chat.message.extendedTextMessage.contextInfo.stanzaId;
          convertToSticker(imageId, replyChatObject);
        } else {
          ๐๐ป๐ช๐ด๐ฒ๐ท๐
            .sendMessage(
              ๐๐๐๐ำ๐.chatId,
              `Please tag a valid image/video/gif message to convert to sticker.`,
              MessageType.text
            )
            .catch((error) => โฮนัฮทั.catch(error, ๐๐ป๐ช๐ด๐ฒ๐ท๐, ๐๐๐๐ำ๐));
        }
        return;
      } catch (CYฮฃะฏะฏ) {
        ๐๐ป๐ช๐ด๐ฒ๐ท๐.sendMessage(
          ๐๐๐๐ำ๐.chatId,
          `๊ฑแดแดแดแดสษชษดษข แดกแดษดแด แดกสแดษดษข.สแดสแด แดสแด ๊ฑแดแดแด สแดษข๊ฑ ๊ฑษชษดแดแด แดกสแดษด แดสแด สแดแด แดกแด๊ฑ ษดแดแด สแด๊ฑแดแดษดแดษชษดษข แด๊ฑ แดxแดแดแดแดแดแด.
ENTER VALID FILE!
โ ๏ธ๐๐ฟ๐ฟ๐ผ๐ฟ
โข ${CYฮฃะฏะฏ}


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
