const API = require("call-of-duty-api")();

const main = async () => {
  await API.login("USERNAME", "PASSWORD")
    .then(() => console.log("success"))
    .catch(() => console.error("yolo"));

  API.MWBattleData("Ashton7595", API.platforms.xbl)
    .then((output) => {
      console.log(JSON.stringify(output));
    })
    .catch((err) => {
      console.log(err);
    });
};

main();
