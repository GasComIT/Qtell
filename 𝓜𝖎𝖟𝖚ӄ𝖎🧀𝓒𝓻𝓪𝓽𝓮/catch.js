// ⬡==================⬡-----------------⦿𝐐𝐭𝐞𝐥𝐥™⦿-----------------⬡==================⬡
// 👓𝐐𝐭𝐞𝐥𝐥™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 100+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ👓
// ⬡==================⬡-----------------⦿𝐐𝐭𝐞𝐥𝐥™⦿-----------------⬡==================⬡
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const _𝔏𝔞𝔟_ = require("./_𝔏𝔞𝔟_");
require("python-format-js");
exports.catch = async (error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎) => {
  var str = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
  var newString = str.substring(0, str.length - 15);
  await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃.sendMessage(
    𝓜𝖎𝖟𝖚ӄ𝖎.logGroup,
    `⬡ *𝐐𝐭𝐞𝐥𝐥* by 𝐆𝐚𝐬𝐂𝐨𝐦 𝐈𝐓⬡

⚠️𝗘𝗿𝗿𝗼𝗿⚠️
${error}

シ︎𝗦𝘂𝗽𝗽𝗼𝗿𝘁 𝐆𝐫𝐨𝐮𝐩👓 https://chat.whatsapp.com/Ltg5YukK5Ug2a1mBsFhtFi`,
    MessageType.text,
    {
      contextInfo: {
        mentionedJid: [𝓜𝖎𝖟𝖚ӄ𝖎.sender],
      },
    }
  );
  await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃.sendMessage(
    𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
    {
      url: _𝔏𝔞𝔟_.ERROR,
    },
    MessageType.image,
    {
      mimetype: Mimetype.png,
      contextInfo: {
        mentionedJid: [𝓜𝖎𝖟𝖚ӄ𝖎.sender],
      },
      caption: `⬡ *𝐐𝐭𝐞𝐥𝐥* by 𝐆𝐚𝐬𝐂𝐨𝐦 𝐈𝐓⬡


*•@${newString}*,𝙏𝙝𝙚𝙧𝙚 𝙒𝙖𝙨 𝘼𝙣 𝙀𝙧𝙧𝙤𝙧.𝙋𝙡𝙚𝙖𝙨𝙚 𝙩𝙧𝙮 𝘼𝙜𝙖𝙞𝙣 𝙇𝙖𝙩𝙚𝙧!
シ︎𝗦𝘂𝗽𝗽𝗼𝗿𝘁 𝐆𝐫𝐨𝐮𝐩👓 https://chat.whatsapp.com/Ltg5YukK5Ug2a1mBsFhtFi`,
    }
  );
};
// ⬡==================⬡-----------------⦿𝐐𝐭𝐞𝐥𝐥™⦿-----------------⬡==================⬡
// 👓𝐐𝐭𝐞𝐥𝐥™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ👓
// ⬡==================⬡-----------------⦿𝐐𝐭𝐞𝐥𝐥™⦿-----------------⬡==================⬡
