const vorpal = require('vorpal')();

module.exports = function (vorpal) {
  vorpal
    .use(require('./util/welcome.js'))
    .use(require('./command/join'))
    .use(require('./command/peers'))
    .use(require('./command/send'))
    .use(require('./command/connect'))
    .delimiter('dcli >>')
    .show();
}
