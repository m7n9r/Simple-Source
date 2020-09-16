const {bot} = require('../index');
const config = require("../config.json");

bot.on("ready", async () => {
    console.log(`${bot.user.username} is ready for action!`);
});