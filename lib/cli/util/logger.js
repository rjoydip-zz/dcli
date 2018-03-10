let logger;

if (process.env.NODE_ENV === "test") {
  logger = {
    debug:(message) => { console.debug(message); },
    log: (message) =>{ console.log(message); },
    confirm: (message) => { console.confirm(message); },
    warn: (message) => { console.warn(message); },
    error: (message) => { console.error(message); }
  };
} else {
  logger = require('vorpal')();
}

module.exports = logger;