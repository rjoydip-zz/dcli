const logger = require('../util/logger.js');
const P2P = require('../../p2p');

const p2p = new P2P();

module.exports = (vorpal) => {
  vorpal
    .command('open', 'Open port to accept incoming connections.')
    .alias('o')
    .action((args, callback) => {
      p2p.open();
      callback();
    })
}