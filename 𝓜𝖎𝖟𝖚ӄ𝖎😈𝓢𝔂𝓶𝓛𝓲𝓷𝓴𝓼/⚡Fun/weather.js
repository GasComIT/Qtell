const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const _๐๐๐_ = require(`../../๐๐๐๐ำ๐๐ง๐๐ป๐ช๐ฝ๐ฎ/_๐๐๐_`);
const โฮนัฮทั = require("../../๐๐๐๐ำ๐๐ง๐๐ป๐ช๐ฝ๐ฎ/catch");
const apiKey = _๐๐๐_.WAPI;
const https = require(`https`);
var แดแดษชแดx = new RegExp(_๐๐๐_.FOXTROT, "g");
var แดแดษช = /\/\^\[(.*)+\]\/\g/g.exec(แดแดษชแดx)[1];
const ๐๐ฎ๐ฎgit = require("simple-git")();
// โฌก==================โฌก-----------------โฆฟ๐๐ข๐ณ๐ฎ๐ค๐ขโขโฆฟ-----------------โฌก==================โฌก
// ๐ธ๐๐๐๐ำ๐โข แดแดแด แดษดแดแดแด แดกสแดแด๊ฑแดแดแด แด๊ฑแดสสแดแด แดกษชแดส 80+ แดแดแดแดแดษดแด๊ฑ ๊ฐแดส สแดแดส แดสษชแด แดแดแด แดษดแด ษขสแดแดแด-แด๊ฑแดษขแด๐ธ
// โฌก==================โฌก-----------------โฆฟ๐๐ข๐ณ๐ฎ๐ค๐ขโขโฆฟ-----------------โฌก==================โฌก
module.exports = {
  name: `weather`,
  description: `Get weather data of a city`,
  ๐๐ฎ๐ฎ6สึสษ: `Obtain weather info by entering the city name.`,
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
        const weatherTypes = {
          sunny: `sunny`,
          clear: `clear`,
          cloud: `cloud`,
          overcast: `overcast`,
          rain: `rain`,
          drizzle: `drizzle`,
          snow: `snow`,
          storm: `storm`,
          fog: `fog`,
          haze: `haze`,
          mist: `mist`,
        };
        async function result(imageUrl, weatherDataVariables, downloading) {
          await ๐๐ป๐ช๐ด๐ฒ๐ท๐
            .sendMessage(
              ๐๐๐๐ำ๐.chatId,
              {
                url: imageUrl,
              },
              MessageType.image,
              {
                mimetype: Mimetype.png,
                caption:
                  `*Temperature:* {tempInC} ยฐC | {tempInF} ยฐF\n*Min Temp:* {minTempInC} ยฐC | {minTempInF} ยฐF\n*Max Temp:* {maxTempInC} ยฐC | {maxTempInF} ยฐF\n*Humidity:* {humidity}%\n*Wind:* {windSpeedInkmph} kmph | {windSpeedInmph} mph , {degree}ยฐ\n*Sunrise:* {sunriseTime}\n*Sunset:* {sunsetTime}\n\n\n*{weatherDescription}*\n{cityName} , {country}\n{dateAndTime}`.format(
                    weatherDataVariables
                  ),
                thumbnail: null,
              }
            )
            .catch((error) => โฮนัฮทั.catch(error, ๐๐ป๐ช๐ด๐ฒ๐ท๐, ๐๐๐๐ำ๐));
        }
        if (arg.length === 0 || arg.length < 1) {
          return await ๐๐ป๐ช๐ด๐ฒ๐ท๐
            .sendMessage(
              ๐๐๐๐ำ๐.chatId,
              {
                url: _๐๐๐_.ARC,
              },
              MessageType.image,
              {
                mimetype: Mimetype.jpeg,
                caption: `*โ ๏ธSeems like someone forgot to give text or language!*

*Usage Example*
*${แดแดษช}weather <city>`,
              }
            )
            .catch((cแดสสแดส) => {
              โฮนัฮทั.catch((cแดสสแดส, ๐๐ป๐ช๐ด๐ฒ๐ท๐, ๐๐๐๐ำ๐));
            });
        } else if (
          arg[arg.length - 1] === `tom` ||
          arg[arg.length - 1] === `tomorrow`
        ) {
          var downloading = await ๐๐ป๐ช๐ด๐ฒ๐ท๐
            .sendMessage(
              ๐๐๐๐ำ๐.chatId,
              `Processing data. Please wait...`,
              MessageType.text
            )
            .catch((error) => โฮนัฮทั.catch(error, ๐๐ป๐ช๐ด๐ฒ๐ท๐, ๐๐๐๐ำ๐));
          arg[arg.length - 1] = ``;
          var cityName = arg.join(` `);
          const unit = `metric`;

          const url =
            `https://api.openweathermap.org/data/2.5/forecast?q=` +
            cityName +
            `&appid=` +
            apiKey +
            `&units=` +
            unit +
            `&cnt=` +
            8;

          https.get(url, function (response) {
            response.on(`error`, (cแดสสแดส) => {
              throw cแดสสแดส;
            });
            response.on(`data`, function (data) {
              try {
                const weatherData = JSON.parse(data);
                const tempInC = Number(weatherData.list[7].main.temp).toFixed(
                  2
                );
                const tempInF = (tempInC * 1.8 + 32).toFixed(2);
                const minTempInC = Number(
                  weatherData.list[7].main.temp_min
                ).toFixed(2);
                const minTempInF = (minTempInC * 1.8 + 32).toFixed(2);
                const maxTempInC = Number(
                  weatherData.list[7].main.temp_max
                ).toFixed(2);
                const maxTempInF = (maxTempInC * 1.8 + 32).toFixed(2);

                const humidity = Number(
                  weatherData.list[7].main.humidity
                ).toFixed(2);

                const windSpeedInkmph = (
                  Number(weatherData.list[7].wind.speed) * 3.6
                ).toFixed(2);
                const windSpeedInmph = (windSpeedInkmph * 0.621371).toFixed(2);
                const windDegree = weatherData.list[7].wind.deg.toFixed(2);

                const sunriseTimeStamp = Number(weatherData.city.sunrise);
                var sunriseDate = new Date(sunriseTimeStamp);
                const sunriseTime =
                  sunriseDate.getHours() +
                  `:` +
                  sunriseDate.getMinutes() +
                  `:` +
                  sunriseDate.getSeconds();
                const sunsetTimeStamp = Number(weatherData.city.sunset);
                var sunsetDate = new Date(sunsetTimeStamp);
                const sunsetTime =
                  sunsetDate.getHours() +
                  `:` +
                  sunsetDate.getMinutes() +
                  `:` +
                  sunsetDate.getSeconds();

                var weatherDescription =
                  weatherData.list[7].weather[0].description;

                for (var type in weatherTypes) {
                  if (weatherDescription.includes(weatherTypes[type])) {
                    imageName = weatherTypes[type];
                    break;
                  } else {
                    imageName = `fallback`;
                  }
                }
                weatherDescription = weatherDescription.toUpperCase();
                cityName = weatherData.city.name;
                const country = weatherData.city.country;
                const timeOfRequest = weatherData.list[7].dt * 1000;
                var date = new Date(timeOfRequest);

                const dateAndTime =
                  date.getDate() +
                  `/` +
                  (date.getMonth() + 1) +
                  `/` +
                  date.getFullYear() +
                  ` ` +
                  date.getHours() +
                  `:` +
                  date.getMinutes() +
                  `:` +
                  date.getSeconds();
                const weatherDataVariables = {
                  tempInC: tempInC,
                  tempInF: tempInF,
                  minTempInC: minTempInC,
                  minTempInF: minTempInF,
                  maxTempInC: maxTempInC,
                  maxTempInF,
                  maxTempInF,
                  humidity: humidity,
                  windSpeedInkmph: windSpeedInkmph,
                  windSpeedInmph: windSpeedInmph,
                  degree: windDegree,
                  sunriseTime: sunriseTime,
                  sunsetTime: sunsetTime,
                  weatherDescription: weatherDescription,
                  cityName: cityName,
                  country: country,
                  dateAndTime: dateAndTime,
                };

                const imageUrl =
                  `https://raw.githubusercontent.com/Prince-Mendiratta/๐๐๐๐ำ๐-Resources/main/weather/` +
                  imageName +
                  `.jpg`;
                result(imageUrl, weatherDataVariables, downloading);
              } catch (cแดสสแดส) {
                ๐๐ป๐ช๐ด๐ฒ๐ท๐
                  .sendMessage(
                    ๐๐๐๐ำ๐.chatId,
                    `๊ฑแดแดแดแดสษชษดษข แดกแดษดแด แดกสแดษดษข.สแดสแด แดสแด ๊ฑแดแดแด สแดษข๊ฑ ๊ฑษชษดแดแด แดกสแดษด แดสแด สแดแด แดกแด๊ฑ ษดแดแด สแด๊ฑแดแดษดแดษชษดษข แด๊ฑ แดxแดแดแดแดแดแด.
TRY LATER!

โ ๏ธ๐๐ฟ๐ฟ๐ผ๐ฟ
โข ${cแดสสแดส}


๐ก๐๐ผ๐บ๐บ๐ฎ๐ป๐ฑ โข ${๐๐๐๐ำ๐.commandName}
๐ฎ๐๐ ๐๐ฎ๐ ๐ฃ๐ ? โข ${๐๐๐๐ำ๐.isPm}`,
                    MessageType.text
                  )
                  .catch((cแดสสแดส) => {
                    โฮนัฮทั.catch((cแดสสแดส, ๐๐ป๐ช๐ด๐ฒ๐ท๐, ๐๐๐๐ำ๐));
                  });
                return;
              }
            });
          });
          return;
        } else {
          var downloading = await ๐๐ป๐ช๐ด๐ฒ๐ท๐
            .sendMessage(
              ๐๐๐๐ำ๐.chatId,
              `Processing data. Please wait...`,
              MessageType.text
            )
            .catch((error) => โฮนัฮทั.catch(error, ๐๐ป๐ช๐ด๐ฒ๐ท๐, ๐๐๐๐ำ๐));
          var cityName = arg.join(` `);
          const unit = `metric`;

          const url =
            `https://api.openweathermap.org/data/2.5/weather?q=` +
            cityName +
            `&appid=` +
            apiKey +
            `&units=` +
            unit;

          https.get(url, function (response) {
            response.on(`error`, (cแดสสแดส) => {
              throw cแดสสแดส;
            });
            response.on(`data`, function (data) {
              try {
                const weatherData = JSON.parse(data);
                const tempInC = Number(weatherData.main.temp).toFixed(2);
                const tempInF = (tempInC * 1.8 + 32).toFixed(2);
                const minTempInC = Number(weatherData.main.temp_min).toFixed(2);
                const minTempInF = (minTempInC * 1.8 + 32).toFixed(2);
                const maxTempInC = Number(weatherData.main.temp_max).toFixed(2);
                const maxTempInF = (maxTempInC * 1.8 + 32).toFixed(2);
                const humidity = Number(weatherData.main.humidity).toFixed(2);
                const windSpeedInkmph = (
                  Number(weatherData.wind.speed) * 3.6
                ).toFixed(2);
                const windSpeedInmph = (windSpeedInkmph * 0.621371).toFixed(2);
                const windDegree = weatherData.wind.deg.toFixed(2);
                const sunriseTimeStamp = Number(weatherData.sys.sunrise);
                var sunriseDate = new Date(sunriseTimeStamp);
                const sunriseTime =
                  sunriseDate.getHours() +
                  `:` +
                  sunriseDate.getMinutes() +
                  `:` +
                  sunriseDate.getSeconds();
                const sunsetTimeStamp = Number(weatherData.sys.sunset);
                var sunsetDate = new Date(sunsetTimeStamp);
                const sunsetTime =
                  sunsetDate.getHours() +
                  `:` +
                  sunsetDate.getMinutes() +
                  `:` +
                  sunsetDate.getSeconds();
                var weatherDescription = weatherData.weather[0].description;

                for (var type in weatherTypes) {
                  if (weatherDescription.includes(weatherTypes[type])) {
                    imageName = weatherTypes[type];
                    break;
                  } else {
                    imageName = `fallback`;
                  }
                }
                weatherDescription = weatherDescription.toUpperCase();
                cityName = weatherData.name;
                const country = weatherData.sys.country;
                const timeOfRequest = weatherData.dt * 1000;
                var date = new Date(timeOfRequest);

                const dateAndTime =
                  date.getDate() +
                  `/` +
                  (date.getMonth() + 1) +
                  `/` +
                  date.getFullYear() +
                  ` ` +
                  date.getHours() +
                  `:` +
                  date.getMinutes() +
                  `:` +
                  date.getSeconds();
                const weatherDataVariables = {
                  tempInC: tempInC,
                  tempInF: tempInF,
                  minTempInC: minTempInC,
                  minTempInF: minTempInF,
                  maxTempInC: maxTempInC,
                  maxTempInF,
                  maxTempInF,
                  humidity: humidity,
                  windSpeedInkmph: windSpeedInkmph,
                  windSpeedInmph: windSpeedInmph,
                  degree: windDegree,
                  sunriseTime: sunriseTime,
                  sunsetTime: sunsetTime,
                  weatherDescription: weatherDescription,
                  cityName: cityName,
                  country: country,
                  dateAndTime: dateAndTime,
                };
                const imageUrl =
                  `https://raw.githubusercontent.com/Prince-Mendiratta/๐๐๐๐ำ๐-Resources/main/weather/` +
                  imageName +
                  `.jpg`;

                result(imageUrl, weatherDataVariables, downloading);
              } catch (cแดสสแดส) {
                ๐๐ป๐ช๐ด๐ฒ๐ท๐
                  .sendMessage(
                    ๐๐๐๐ำ๐.chatId,
                    `*๐ฎ๐๐๐๐ำ๐โข* ๐๐ข๐๐ง'๐ญ ๐ฐ๐จ๐ซ๐ค ๐๐ฌ ๐๐ฑ๐ฉ๐๐๐ญ๐๐โ

๐ก๐๐ฒ๐ฟ๐ฒ ๐ถ๐ ๐ฎ ๐๐บ๐ฎ๐น๐น ๐ฒ๐ฟ๐ฟ๐ผ๐ฟ ๐ฟ๐ฒ๐ฝ๐ผ๐ฟ๐ ๐ฎ๐ป๐ฑ ๐๐ผ ๐น๐ผ๐ด ๐๐ต๐ฒ ๐ฟ๐ฒ๐ฝ๐ผ๐ฟ๐ ๐๐๐ฒ ${แดแดษช}๐ฟ๐ฒ๐ฝ๐ผ๐ฟ๐
โ ๏ธ๐๐ฟ๐ฟ๐ผ๐ฟ
โข ${cแดสสแดส}`,
                    MessageType.text
                  )
                  .catch((cแดสสแดส) => {
                    โฮนัฮทั.catch((cแดสสแดส, ๐๐ป๐ช๐ด๐ฒ๐ท๐, ๐๐๐๐ำ๐));
                  });
                return;
              }
            });
          });
          return;
        }
      } catch (cแดสสแดส) {
        ๐๐ป๐ช๐ด๐ฒ๐ท๐.sendMessage(
          ๐๐๐๐ำ๐.chatId,
          `๊ฑแดแดแดแดสษชษดษข แดกแดษดแด แดกสแดษดษข.สแดสแด แดสแด ๊ฑแดแดแด สแดษข๊ฑ ๊ฑษชษดแดแด แดกสแดษด แดสแด สแดแด แดกแด๊ฑ ษดแดแด สแด๊ฑแดแดษดแดษชษดษข แด๊ฑ แดxแดแดแดแดแดแด.
TRY AGAIN LATER!
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
