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
        // Base host path for the giphy api. Should not be changed unless giphy moves paths and breaks compatibility
        host: "https://api.giphy.com",
        // Base path for the random endpoint of the giphy api. Should not be changed unless giphy moves paths and breaks compatibility
        randomPath: "/v1/gifs/random",
        // Base path for the translate endpoint of the giphy api. Should not be changed unless giphy moves paths and breaks compatibility
        translatePath: "/v1/gifs/translate",
        // The translate api supports a wierdness integer ranging from 0 to 10
        translateWierdnessRandom: true,
        // The lower bound for the random seed
        translateWierdnessLowerBound: 0,
        // The higher bound for the random seed
        translateWierdnessHigherBound: 10,
        // If translateWierdnessRandom is false, this value will be taken as a fixed value instead
        translateWierdnessLevel: 0
    }
}