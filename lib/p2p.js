const crypto = require('crypto');
const swarm = require('discovery-swarm');
const EventEmitter = require('events');

const logger = require('./cli/util/logger');

class Emitter extends EventEmitter { }

class P2P {
    constructor() {

        this.emitter = new Emitter();

        this.sw = swarm({
            utp: true,
            tcp: true,
        });
    }

    open(port) {
        this.sw.listen(port);
    }

    join() {
        this.sw.join(new Buffer('deadbeefbeefbeefbeefdeadbeefbeefbeefbeef', 'hex'));

        this.sw.on('connection', function (connection) {
            console.log("connected");
            connection.on('data', function (data) {
                console.log("GOT DATA", data.toString());
            });
        });
    }

    send(data) {
        this.join();
        this.emitter.emit('data', data);
    }

    peers() {
        logger.log("Peers Connected >> ", this.sw.connected);
    }
}

module.exports = P2P;