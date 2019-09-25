const moment = require('moment');

const helpers = {};

helpers.timeago = (timestamp) => {
    console.log(timestamp)
    return moment(timestamp).startOf('hour').fromNow();
}

module.exports = helpers;