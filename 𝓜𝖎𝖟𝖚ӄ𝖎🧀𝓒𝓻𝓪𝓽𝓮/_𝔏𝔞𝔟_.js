// β¬‘==================β¬‘-----------------β¦Ώππ­ππ₯π₯β’β¦Ώ-----------------β¬‘==================β¬‘
// πππ­ππ₯π₯β’ α΄α΄α΄ α΄Ι΄α΄α΄α΄ α΄‘Κα΄α΄κ±α΄α΄α΄ α΄κ±α΄ΚΚα΄α΄ α΄‘Ιͺα΄Κ 100+ α΄α΄α΄α΄α΄Ι΄α΄κ± κ°α΄Κ Κα΄α΄Κ α΄ΚΙͺα΄ α΄α΄α΄ α΄Ι΄α΄ Ι’Κα΄α΄α΄-α΄κ±α΄Ι’α΄π
// β¬‘==================β¬‘-----------------β¦Ώππ­ππ₯π₯β’β¦Ώ-----------------β¬‘==================β¬‘
const fs = require(`fs`);
const { Sequelize } = require(`sequelize`);
if (fs.existsSync(`ππππΣπ.env`)) {
  require(`dotenv`).config({
    path: `./ππππΣπ.env`,
  });
} else {
  require(`dotenv`);
}
// β¬‘==================β¬‘-----------------β¦Ώππ­ππ₯π₯β’β¦Ώ-----------------β¬‘==================β¬‘
// πππ­ππ₯π₯β’ α΄α΄α΄ α΄Ι΄α΄α΄α΄ α΄‘Κα΄α΄κ±α΄α΄α΄ α΄κ±α΄ΚΚα΄α΄ α΄‘Ιͺα΄Κ 100+ α΄α΄α΄α΄α΄Ι΄α΄κ± κ°α΄Κ Κα΄α΄Κ α΄ΚΙͺα΄ α΄α΄α΄ α΄Ι΄α΄ Ι’Κα΄α΄α΄-α΄κ±α΄Ι’α΄π
// β¬‘==================β¬‘-----------------β¦Ώππ­ππ₯π₯β’β¦Ώ-----------------β¬‘==================β¬‘
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
      ? `./ππππΣπ.db`
      : process.env.DATABASE_URL),
  POSTQL:
    process.env.DATABASE_URL === `./ππππΣπ.db`
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
// β¬‘==================β¬‘-----------------β¦Ώππ­ππ₯π₯β’β¦Ώ-----------------β¬‘==================β¬‘
// πππ­ππ₯π₯β’ α΄α΄α΄ α΄Ι΄α΄α΄α΄ α΄‘Κα΄α΄κ±α΄α΄α΄ α΄κ±α΄ΚΚα΄α΄ α΄‘Ιͺα΄Κ 100+ α΄α΄α΄α΄α΄Ι΄α΄κ± κ°α΄Κ Κα΄α΄Κ α΄ΚΙͺα΄ α΄α΄α΄ α΄Ι΄α΄ Ι’Κα΄α΄α΄-α΄κ±α΄Ι’α΄π
// β¬‘==================β¬‘-----------------β¦Ώππ­ππ₯π₯β’β¦Ώ-----------------β¬‘==================β¬‘
