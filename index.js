const { Client, Attachment } = require('discord.js');
const config = require("./config");

const EVENT_READY = "ready";
const EVENT_MESSAGE = "message";


const client = new Client();

client.on(EVENT_READY, () => {
  console.log('GiphyBot is now up and running!');
});

client.on(EVENT_MESSAGE, message => {
    if (message.content.startsWith(config.discord.botCommandPrefix)) {
    }
});

client.login(config.discord.apiKey);