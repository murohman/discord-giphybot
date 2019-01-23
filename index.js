const { Client, Attachment } = require('discord.js');
const request = require('request');

const config = require('./config');
const utils = require('./utils');
const giphy = require('./giphy');

const EVENT_READY = 'ready';
const EVENT_MESSAGE = 'message';

const client = new Client();

client.on(EVENT_READY, () => {
  console.log('GiphyBot is now up and running!');
});

client.on(EVENT_MESSAGE, message => {
    if (message.startsWith(config.discord.botCommandPrefix)) {
        let message = utils.parse(message.content);
        let sanitizedQuery = utils.sanitize(message);

        request(giphy.getRandomFullUrlForQuery(sanitizedQuery), (err, res, body) => {
            var response = JSON.parse(body);
            const attachment = new Attachment(response.data.images.original.url);
            message.channel.send(attachment);
        });

        
    }
});

client.login(config.discord.apiKey);