module.exports = {
    discord: {
        // This is your api key provided by discord when creating your bot found here : https://discordapp.com/developers/applications/me
        apiKey: "<Your Discord Api Key Here>",
        // Change this value if you wish to change the command prefix
        botCommandPrefix: "!giphybot",
    },
    giphy: {
        // This is your api key provided by giphy. Create an app and use the api key found here : https://developers.giphy.com/dashboard/
        apiKey: "<Your Giphy Api Key Here>",
        // Change this value if you wish to filter the rating of the gifs offered. Possible values are y, g, pg, pg-13 and r.
        searchRating: "y"
    }
}