const P2P = require('../../p2p');

const p2p = new P2P();

module.exports = (vorpal) => {
    vorpal
        .command('peers ', 'Get number of peers')
        .alias('p')
        .action((args, callback) => {
            p2p.peers();
            callback();
        })
}