const vorpal = require('vorpal')();
const chalk = require('chalk');

module.exports = function (vorpal) {
  vorpal
    .use(require('./command/welcome.js'))
    .use(require('./command/join'))
    .use(require('./command/peers'))
    .use(require('./command/send'))
    .use(require('./command/open'))
    .delimiter(
      chalk.cyan('dcli >>')
    )
    .show();
}
