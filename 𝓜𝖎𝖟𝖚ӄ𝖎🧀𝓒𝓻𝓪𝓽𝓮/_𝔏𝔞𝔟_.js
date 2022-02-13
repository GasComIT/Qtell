// ⬡==================⬡-----------------⦿𝐐𝐭𝐞𝐥𝐥™⦿-----------------⬡==================⬡
// 👓𝐐𝐭𝐞𝐥𝐥™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 100+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ👓
// ⬡==================⬡-----------------⦿𝐐𝐭𝐞𝐥𝐥™⦿-----------------⬡==================⬡
const fs = require(`fs`);
const { Sequelize } = require(`sequelize`);
if (fs.existsSync(`𝓜𝖎𝖟𝖚ӄ𝖎.env`)) {
  require(`dotenv`).config({
    path: `./𝓜𝖎𝖟𝖚ӄ𝖎.env`,
  });
} else {
  require(`dotenv`);
}
// ⬡==================⬡-----------------⦿𝐐𝐭𝐞𝐥𝐥™⦿-----------------⬡==================⬡
// 👓𝐐𝐭𝐞𝐥𝐥™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 100+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ👓
// ⬡==================⬡-----------------⦿𝐐𝐭𝐞𝐥𝐥™⦿-----------------⬡==================⬡
const env = {
  Mee6: process.env.MIZUKI === undefined ? `` : process.env.MIZUKI,
  HEROKU_API:
    process.env.HEROKU_API === undefined ? "Null" : process.env.HEROKU_API,
  HEROKU_BOT_NAME:
    process.env.HEROKU_BOT_NAME === undefined
      ? "Null"
      : process.env.HEROKU_BOT_NAME,
  IMDB: `5e36f0db`,
  FOXTROT: `^[!]`,
  CCD: process.env.CCD === undefined ? `254` : process.env.CCD,
  OCR: `9ffb44def388957`,
  WAPI: `6729ac2b2e2bb5c686ff427a2f06df92`,
  DATABASE_URL: (process.env.DATABASE_URL =
    process.env.DATABASE_URL === undefined
      ? `./𝓜𝖎𝖟𝖚ӄ𝖎.db`
      : process.env.DATABASE_URL),
  POSTQL:
    process.env.DATABASE_URL === `./𝓜𝖎𝖟𝖚ӄ𝖎.db`
      ? new Sequelize({
          dialect: `sqlite`,
          storage: process.env.DATABASE_URL,
        })
      : new Sequelize(process.env.DATABASE_URL, {
          dialect: `postgres`,
          protocol: `postgres`,
          dialectOptions: {
            ssl: {
              require: true,
              rejectUnauthorized: false,
            },
          },
        }),
  ERROR: "https://i.postimg.cc/q7GB8m6s/Error0.png",
  MEE: "https://i.ibb.co/RHZ1bcJ/Qtell-banner.jpg",
  INVL: "https://i.postimg.cc/v8p25RV9/Mee6-Invalid.png",
  ARC: "https://i.postimg.cc/Nf3D2RZx/Mee6-Args.png",
  UPT: "https://i.ibb.co/Rc3qDCc/Qtellseeks-Box.jpg",
  PRIVACY: process.env.PRIVACY === undefined ? `public` : process.env.PRIVACY,
  SUDO: `254718241545`,
};
module.exports = env;
// ⬡==================⬡-----------------⦿𝐐𝐭𝐞𝐥𝐥™⦿-----------------⬡==================⬡
// 👓𝐐𝐭𝐞𝐥𝐥™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 100+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ👓
// ⬡==================⬡-----------------⦿𝐐𝐭𝐞𝐥𝐥™⦿-----------------⬡==================⬡
