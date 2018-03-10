const Server = require('./server')
const client = require('./client')

const logger = require('../cli/util/logger')
const crypto = require('../cli/util/crypto')
const pkg = require('../../package.json')

class P2P {
    constructor() {
        this.port = 9000
        this.client = null
        this.server = Server()
        this.hash = crypto.getHash()
    }

    _listen() {
        return this.client.subscribe(this.hash).on('data', (message) => {
            logger.log(message)
        });
    }

    _client() {
        this.client = client(`${pkg.name}`, [`localhost:${this.port}`])
        return
    }

    _join() {
        this._client()
        this._broadcast('join', Math.random() + ' joined')
        this._listen()
    }

    _broadcast(key, val) {
        this._client()
        this.client.broadcast(this.hash, { key: val })
        return
    }

    open() {
        return this.server.listen(this.port, () => {
            logger.log(`${pkg.title} server is running on port ${this.port}`)
        });
    }

    join() {
        return this._join()
    }

    send(data) {
        return this._broadcast('send', data)
    }

    peers() {
        return logger.log("Peers Connected >> ", 0)
    }
}

module.exports = P2P