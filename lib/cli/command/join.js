const logger = require('../util/logger.js');
const P2P = require('../../p2p');

const p2p = new P2P();

module.exports = function (vorpal) {
  vorpal
    .command('join', 'Join to the peer network. NOTE: can be any.')
    .alias('j')
    .action(function(args, callback) {
      p2p.join();
      callback();
    })
}