const config = require('./config');

let methods = {
    getRandomFullUrlForQuery: function(query) {
        return config.giphy.host + config.giphy.path + "?api_key=" + config.giphy.apiKey + "&tag=" + query + "&rating=" + config.giphy.searchRating;
    }
};

module.exports = methods;