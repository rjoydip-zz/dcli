const vorpal = require('vorpal')();

module.exports = function (vorpal) {
  vorpal
    .use(require('./command/welcome.js'))
    .use(require('./command/join'))
    .use(require('./command/peers'))
    .use(require('./command/send'))
    .use(require('./command/open'))
    .delimiter('dcli >>')
    .show();
}
