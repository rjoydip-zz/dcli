const logger = require('./logger.js');
const vorpal = require('vorpal')();

const pkg = require('../../../package.json');

module.exports = function (vorpal) {
  logger.log(`Welcome to ${pkg.title}!`);
  vorpal.exec("help");
}