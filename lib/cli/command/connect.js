const logger = require('../util/logger.js');
const P2P = require('../../p2p');

const p2p = new P2P();

module.exports = function (vorpal) {
  vorpal
    .command('open <port>', 'Open port to accept incoming connections.')
    .alias('o')
    .action(function(args, callback) {
      if (args.port && typeof args.port === 'number') {
        p2p.open(args.port);
      } else {
        logger.log(`Invalid port!`)
      }

      callback();
    })
}