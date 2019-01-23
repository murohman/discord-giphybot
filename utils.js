let methods = {
    parse: function(message) {
        let splittedMessage = message.split(' ');
        splittedMessage.shift();
        return splittedMessage.join(' ');
    },

    sanitize: function(message) {
        return message.replace(/ /g, '+');
    },

    getRandomNumber(lower, higher) {
        return Math.floor((Math.random() * higher) + lower);
    }
};

module.exports = methods;