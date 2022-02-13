const { WAConnection } = require("@adiwajshing/baileys");
const conn = new WAConnection();
conn.version = [3, 3234, 9];
exports.WhatsApp = conn;
exports.Mee6reignite = function (sessionString) {
  var dec = JSON.parse(Buffer.from(sessionString, "base64").toString("utf-8"));
  return dec;
};
// ⬡==================⬡-----------------⦿𝐐𝐭𝐞𝐥𝐥™⦿-----------------⬡==================⬡
// 👓𝐐𝐭𝐞𝐥𝐥™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 100+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ👓
// ⬡==================⬡-----------------⦿𝐐𝐭𝐞𝐥𝐥™⦿-----------------⬡==================⬡
