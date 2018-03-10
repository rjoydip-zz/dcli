const pkg = require('../../../package.json');
const logger = require('../../cli/util/logger');

module.exports = (vorpal) => {
    logger.log(`Welcome to ${pkg.title}!`);
    vorpal.exec("help");
}