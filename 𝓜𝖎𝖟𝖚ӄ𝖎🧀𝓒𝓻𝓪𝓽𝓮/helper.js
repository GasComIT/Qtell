// โฌก==================โฌก-----------------โฆฟ๐๐ญ๐๐ฅ๐ฅโขโฆฟ-----------------โฌก==================โฌก
// ๐๐๐ญ๐๐ฅ๐ฅโข แดแดแด แดษดแดแดแด แดกสแดแด๊ฑแดแดแด แด๊ฑแดสสแดแด แดกษชแดส 100+ แดแดแดแดแดษดแด๊ฑ ๊ฐแดส สแดแดส แดสษชแด แดแดแด แดษดแด ษขสแดแดแด-แด๊ฑแดษขแด๐
// โฌก==================โฌก-----------------โฆฟ๐๐ญ๐๐ฅ๐ฅโขโฆฟ-----------------โฌก==================โฌก
const _๐๐๐_ = require("./_๐๐๐_");
var ฦสษฎึสษขฦสว = require("./๐๐๐๐ำ๐ฦสว");
const Kolor = require("chalk");
// โฌก==================โฌก-----------------โฆฟ๐๐ญ๐๐ฅ๐ฅโขโฆฟ-----------------โฌก==================โฌก
// ๐๐๐ญ๐๐ฅ๐ฅโข แดแดแด แดษดแดแดแด แดกสแดแด๊ฑแดแดแด แด๊ฑแดสสแดแด แดกษชแดส 100+ แดแดแดแดแดษดแด๊ฑ ๊ฐแดส สแดแดส แดสษชแด แดแดแด แดษดแด ษขสแดแดแด-แด๊ฑแดษขแด๐
// โฌก==================โฌก-----------------โฆฟ๐๐ญ๐๐ฅ๐ฅโขโฆฟ-----------------โฌก==================โฌก
exports.resolve = function (messageInstance, ๐๐ป๐ช๐ด๐ฒ๐ท๐, groupMetadata) {
  var ๐๐๐๐ำ๐ = new ฦสษฎึสษขฦสว();
  var prefix = _๐๐๐_.FOXTROT + "\\w+";
  var prefixRegex = new RegExp(prefix, "g");
  var SUDOstring = _๐๐๐_.SUDO;
  try {
    var jsonMessage = JSON.stringify(messageInstance);
  } catch (CYฮฃะฏะฏ) {
    console.log(Kolor.redBright("[ERROR] Something went wrong. ", CYฮฃะฏะฏ));
  }
  ๐๐๐๐ำ๐.chatId = messageInstance.key.remoteJid || "";
  ๐๐๐๐ำ๐.fromMe = messageInstance.key.fromMe;
  ๐๐๐๐ำ๐.owner = ๐๐ป๐ช๐ด๐ฒ๐ท๐.user.jid || "";
  ๐๐๐๐ำ๐.mimeType = messageInstance.message
    ? Object.keys(messageInstance.message)[0]
    : null;
  ๐๐๐๐ำ๐.type =
    ๐๐๐๐ำ๐.mimeType === "imageMessage"
      ? "image"
      : ๐๐๐๐ำ๐.mimeType === "videoMessage"
      ? "video"
      : ๐๐๐๐ำ๐.mimeType === "conversation" ||
        ๐๐๐๐ำ๐.mimeType == "extendedTextMessage"
      ? "text"
      : ๐๐๐๐ำ๐.mimeType === "audioMessage"
      ? "audio"
      : ๐๐๐๐ำ๐.mimeType === "stickerMessage"
      ? "sticker"
      : "";
  ๐๐๐๐ำ๐.isReply =
    ๐๐๐๐ำ๐.mimeType === "extendedTextMessage" &&
    messageInstance.message.extendedTextMessage.hasOwnProperty("contextInfo") &&
    messageInstance.message.extendedTextMessage.contextInfo.hasOwnProperty(
      "stanzaId"
    );
  ๐๐๐๐ำ๐.replyMessageId =
    ๐๐๐๐ำ๐.isReply && messageInstance.message.extendedTextMessage.contextInfo
      ? messageInstance.message.extendedTextMessage.contextInfo.stanzaId
      : "";
  ๐๐๐๐ำ๐.replyMessage =
    ๐๐๐๐ำ๐.isReply && messageInstance.message.extendedTextMessage.contextInfo
      ? messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
          .conversation
      : "";
  ๐๐๐๐ำ๐.replyParticipant =
    ๐๐๐๐ำ๐.isReply && messageInstance.message.extendedTextMessage.contextInfo
      ? messageInstance.message.extendedTextMessage.contextInfo.participant
      : "";
  ๐๐๐๐ำ๐.body =
    ๐๐๐๐ำ๐.mimeType === "conversation"
      ? messageInstance.message.conversation
      : ๐๐๐๐ำ๐.mimeType == "imageMessage"
      ? messageInstance.message.imageMessage.caption
      : ๐๐๐๐ำ๐.mimeType == "videoMessage"
      ? messageInstance.message.videoMessage.caption
      : ๐๐๐๐ำ๐.mimeType == "extendedTextMessage"
      ? messageInstance.message.extendedTextMessage.text
      : ๐๐๐๐ำ๐.mimeType == "buttonsResponseMessage"
      ? messageInstance.message.buttonsResponseMessage.selectedDisplayText
      : "";
  ๐๐๐๐ำ๐.isCmd = prefixRegex.test(๐๐๐๐ำ๐.body);
  ๐๐๐๐ำ๐.commandName = ๐๐๐๐ำ๐.isCmd
    ? ๐๐๐๐ำ๐.body.slice(1).trim().split(/ +/).shift().toLowerCase()
    : "";
  ๐๐๐๐ำ๐.isImage = ๐๐๐๐ำ๐.type === "image";
  ๐๐๐๐ำ๐.isReplyImage = ๐๐๐๐ำ๐.isReply
    ? jsonMessage.indexOf("imageMessage") !== -1
    : false;
  ๐๐๐๐ำ๐.imageCaption = ๐๐๐๐ำ๐.isImage
    ? messageInstance.message.imageMessage.caption
    : "";
  ๐๐๐๐ำ๐.isGIF =
    ๐๐๐๐ำ๐.type === "video" && messageInstance.message.videoMessage.gifPlayback;
  ๐๐๐๐ำ๐.isReplyGIF = ๐๐๐๐ำ๐.isReply
    ? jsonMessage.indexOf("videoMessage") !== -1 &&
      messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
        .videoMessage.gifPlayback
    : false;
  ๐๐๐๐ำ๐.isSticker = ๐๐๐๐ำ๐.type === "sticker";
  ๐๐๐๐ำ๐.isReplySticker = ๐๐๐๐ำ๐.isReply
    ? jsonMessage.indexOf("stickerMessage") !== -1
    : false;
  ๐๐๐๐ำ๐.isReplyAnimatedSticker = ๐๐๐๐ำ๐.isReplySticker
    ? messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
        .stickerMessage.isAnimated
    : false;
  ๐๐๐๐ำ๐.isVideo =
    ๐๐๐๐ำ๐.type === "video" &&
    !messageInstance.message.videoMessage.gifPlayback;
  ๐๐๐๐ำ๐.isReplyVideo = ๐๐๐๐ำ๐.isReply
    ? jsonMessage.indexOf("videoMessage") !== -1 &&
      !messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
        .videoMessage.gifPlayback
    : false;
  ๐๐๐๐ำ๐.isAudio = ๐๐๐๐ำ๐.type === "audio";
  ๐๐๐๐ำ๐.isReplyAudio = ๐๐๐๐ำ๐.isReply
    ? jsonMessage.indexOf("audioMessage") !== -1
    : false;
  ๐๐๐๐ำ๐.logGroup = ๐๐ป๐ช๐ด๐ฒ๐ท๐.user.jid || "";
  ๐๐๐๐ำ๐.isGroup = ๐๐๐๐ำ๐.chatId.endsWith("@g.us");
  ๐๐๐๐ำ๐.isPm = !๐๐๐๐ำ๐.isGroup;
  ๐๐๐๐ำ๐.sender =
    ๐๐๐๐ำ๐.isGroup && messageInstance.message && ๐๐๐๐ำ๐.fromMe
      ? ๐๐๐๐ำ๐.owner
      : ๐๐๐๐ำ๐.isGroup && messageInstance.message
      ? messageInstance.participant
      : !๐๐๐๐ำ๐.isGroup
      ? ๐๐๐๐ำ๐.chatId
      : "";
  ๐๐๐๐ำ๐.groupName = ๐๐๐๐ำ๐.isGroup ? groupMetadata.subject : "";
  ๐๐๐๐ำ๐.groupMembers = ๐๐๐๐ำ๐.isGroup ? groupMetadata.participants : "";
  ๐๐๐๐ำ๐.groupAdmins = ๐๐๐๐ำ๐.isGroup
    ? getGroupAdmins(๐๐๐๐ำ๐.groupMembers)
    : "";
  ๐๐๐๐ำ๐.groupId = ๐๐๐๐ำ๐.isGroup ? groupMetadata.id : "";
  ๐๐๐๐ำ๐.isSenderSUDO = SUDOstring.includes(
    ๐๐๐๐ำ๐.sender.substring(0, ๐๐๐๐ำ๐.sender.indexOf("@"))
  );
  ๐๐๐๐ำ๐.isBotGroupAdmin = ๐๐๐๐ำ๐.isGroup
    ? ๐๐๐๐ำ๐.groupAdmins.includes(๐๐๐๐ำ๐.owner)
    : false;
  ๐๐๐๐ำ๐.isSenderGroupAdmin = ๐๐๐๐ำ๐.isGroup
    ? ๐๐๐๐ำ๐.groupAdmins.includes(๐๐๐๐ำ๐.sender)
    : false;
  return ๐๐๐๐ำ๐;
};
// โฌก==================โฌก-----------------โฆฟ๐๐ญ๐๐ฅ๐ฅโขโฆฟ-----------------โฌก==================โฌก
// ๐๐๐ญ๐๐ฅ๐ฅโข แดแดแด แดษดแดแดแด แดกสแดแด๊ฑแดแดแด แด๊ฑแดสสแดแด แดกษชแดส 100+ แดแดแดแดแดษดแด๊ฑ ๊ฐแดส สแดแดส แดสษชแด แดแดแด แดษดแด ษขสแดแดแด-แด๊ฑแดษขแด๐
// โฌก==================โฌก-----------------โฆฟ๐๐ญ๐๐ฅ๐ฅโขโฆฟ-----------------โฌก==================โฌก
function getGroupAdmins(participants) {
  var admins = [];
  for (var i in participants) {
    participants[i].isAdmin ? admins.push(participants[i].jid) : "";
  }
  return admins;
}
// โฌก==================โฌก-----------------โฆฟ๐๐ญ๐๐ฅ๐ฅโขโฆฟ-----------------โฌก==================โฌก
// ๐๐๐ญ๐๐ฅ๐ฅโข แดแดแด แดษดแดแดแด แดกสแดแด๊ฑแดแดแด แด๊ฑแดสสแดแด แดกษชแดส 100+ แดแดแดแดแดษดแด๊ฑ ๊ฐแดส สแดแดส แดสษชแด แดแดแด แดษดแด ษขสแดแดแด-แด๊ฑแดษขแด๐
// โฌก==================โฌก-----------------โฆฟ๐๐ญ๐๐ฅ๐ฅโขโฆฟ-----------------โฌก==================โฌก
