const config = require('./config');
const utils = require('./utils');

let methods = {
    getRandomFullUrlForQuery: function(query) {
        return config.giphy.host + config.giphy.path + "?api_key=" + config.giphy.apiKey + "&tag=" + query;
    },
    getTranslateFullUrlForQuery: function(query) {
        return config.giphy.host + config.giphy.path + "?api_key=" + config.giphy.apiKey + "&s=" + query;
    },
    getTranslateFullUrlWithWierdnessForQuery: function(query) {
        return getTranslateFullUrlForQuery(query) + "&wierdness=" + getWierdnessLevel();
    },
    getWierdnessLevel: function() {
        if (config.giphy.translateWierdnessRandom) {
            return utils.getRandomNumber(config.giphy.translateWierdnessLowerBound, config.giphy.translateWierdnessHigherBound);
        } else {
            return config.giphy.translateWierdnessLevel;
        }
    }
};

module.exports = methods;