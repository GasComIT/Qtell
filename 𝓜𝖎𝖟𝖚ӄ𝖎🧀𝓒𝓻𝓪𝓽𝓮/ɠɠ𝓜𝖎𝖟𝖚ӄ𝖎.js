// ⬡==================⬡-----------------⦿𝐐𝐭𝐞𝐥𝐥™⦿-----------------⬡==================⬡
// 👓𝐐𝐭𝐞𝐥𝐥™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 100+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ👓
// ⬡==================⬡-----------------⦿𝐐𝐭𝐞𝐥𝐥™⦿-----------------⬡==================⬡
const { DataTypes } = require(`sequelize`);
const _𝔏𝔞𝔟_ = require("./_𝔏𝔞𝔟_");
const sequelize = _𝔏𝔞𝔟_.POSTQL;
const Greeting = sequelize.define(
  "Greeting",
  {
    chat: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    switched: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "ON",
    },
    greetingType: {
      type: DataTypes.TEXT,
    },
    message: {
      type: DataTypes.TEXT,
    },
  },
  {
    tableName: "Greetings",
  }
);
// ⬡==================⬡-----------------⦿𝐐𝐭𝐞𝐥𝐥™⦿-----------------⬡==================⬡
// 👓𝐐𝐭𝐞𝐥𝐥™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 100+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ👓
// ⬡==================⬡-----------------⦿𝐐𝐭𝐞𝐥𝐥™⦿-----------------⬡==================⬡
async function getMessage(jid = null, type) {
  var Msg = await Greeting.findAll({
    where: {
      chat: jid,
      greetingType: type,
    },
  });

  if (Msg.length < 1) {
    return false;
  } else {
    return Msg[0].dataValues;
  }
}
// ⬡==================⬡-----------------⦿𝐐𝐭𝐞𝐥𝐥™⦿-----------------⬡==================⬡
// 👓𝐐𝐭𝐞𝐥𝐥™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 100+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ👓
// ⬡==================⬡-----------------⦿𝐐𝐭𝐞𝐥𝐥™⦿-----------------⬡==================⬡
async function checkSettings(jid = null, type) {
  var Msg = await Greeting.findAll({
    where: {
      chat: jid,
      greetingType: type,
    },
  });

  if (Msg.length < 1) {
    return false;
  } else {
    if (Msg[0].dataValues.switched === "ON") {
      return "ON";
    } else {
      return "OFF";
    }
  }
}
// ⬡==================⬡-----------------⦿𝐐𝐭𝐞𝐥𝐥™⦿-----------------⬡==================⬡
// 👓𝐐𝐭𝐞𝐥𝐥™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 100+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ👓
// ⬡==================⬡-----------------⦿𝐐𝐭𝐞𝐥𝐥™⦿-----------------⬡==================⬡
async function changeSettings(groupJid = null, isWorking) {
  await Greeting.update(
    {
      switched: isWorking,
    },
    {
      where: {
        chat: groupJid,
      },
    }
  );
}
// ⬡==================⬡-----------------⦿𝐐𝐭𝐞𝐥𝐥™⦿-----------------⬡==================⬡
// 👓𝐐𝐭𝐞𝐥𝐥™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ👓
// ⬡==================⬡-----------------⦿𝐐𝐭𝐞𝐥𝐥™⦿-----------------⬡==================⬡
async function setWelcome(jid = null, text = null) {
  Greeting.findOrCreate({
    where: {
      chat: jid,
      greetingType: "setwelcome",
    },
    defaults: {
      chat: jid,
      switched: "ON",
      greetingType: "setwelcome",
      message: text,
    },
  });
}
// ⬡==================⬡-----------------⦿𝐐𝐭𝐞𝐥𝐥™⦿-----------------⬡==================⬡
// 👓𝓜𝓮𝓮6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 100+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ👓
// ⬡==================⬡-----------------⦿𝐐𝐭𝐞𝐥𝐥™⦿-----------------⬡==================⬡
async function setGoodbye(jid, text = null) {
  Greeting.findOrCreate({
    where: {
      chat: jid,
      greetingType: "setgoodbye",
    },
    defaults: {
      chat: jid,
      switched: "ON",
      greetingType: "setgoodbye",
      message: text,
    },
  });
}
// ⬡==================⬡-----------------⦿𝐐𝐭𝐞𝐥𝐥™⦿-----------------⬡==================⬡
// 👓𝐐𝐭𝐞𝐥𝐥™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 100+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ👓
// ⬡==================⬡-----------------⦿𝐐𝐭𝐞𝐥𝐥™⦿-----------------⬡==================⬡
async function deleteMessage(jid = null, type = null) {
  var Msg = await Greeting.findAll({
    where: {
      chat: jid,
      greetingType: type,
    },
  });
  if (Msg.length < 1) {
    return false;
  } else {
    return await Msg[0].destroy();
  }
}
// ⬡==================⬡-----------------⦿𝐐𝐭𝐞𝐥𝐥™⦿-----------------⬡==================⬡
// 👓𝐐𝐭𝐞𝐥𝐥™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 100+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ👓
// ⬡==================⬡-----------------⦿𝐐𝐭𝐞𝐥𝐥™⦿-----------------⬡==================⬡
module.exports = {
  Greeting: Greeting,
  getMessage: getMessage,
  changeSettings: changeSettings,
  checkSettings: checkSettings,
  setWelcome: setWelcome,
  setGoodbye: setGoodbye,
  deleteMessage: deleteMessage,
};
// ⬡==================⬡-----------------⦿𝐐𝐭𝐞𝐥𝐥™⦿-----------------⬡==================⬡
// 👓𝐐𝐭𝐞𝐥𝐥™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 100+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ👓
// ⬡==================⬡-----------------⦿𝐐𝐭𝐞𝐥𝐥™⦿-----------------⬡==================⬡
