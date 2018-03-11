const vorpal = require('vorpal')();
const chalk = require('chalk');

const pkg = require('../../package.json')

module.exports = function (vorpal) {
  vorpal
    .use(require('./command/welcome.js'))
    .use(require('./command/join'))
    .use(require('./command/peers'))
    .use(require('./command/send'))
    .use(require('./command/open'))
    .use(require('./command/clear'))
    .delimiter(
      chalk.cyan(`${pkg.delimiter}~$`)
    )
    .show();
}
