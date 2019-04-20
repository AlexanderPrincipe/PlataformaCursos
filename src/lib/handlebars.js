const { format } = require('timeago.js');
//const timeagoInstance = timeago();

const helpers = {};

helpers.timeago = (timestamp) => {
    return format(timestamp);
};

module.exports = helpers;