const moment = require('moment');

const helpers = {};

helpers.timeago = (timestamp) => {
    const timeToFormat = moment(timestamp).startOf('hour').fromNow();
    console.log('timeToFormat', timeToFormat);
    return timeToFormat;
}

module.exports = helpers;