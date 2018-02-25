const logger = require('../util/logger.js');
const P2P = require('../../p2p');

const p2p = new P2P();

module.exports = function (vorpal) {
  vorpal
    .command('send <data>', 'Send data to peers')
    .alias('s')
    .action(function(args, callback) {
      p2p.send(args.data);
      callback();
    })
}