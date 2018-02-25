let logger;

if (process.env.NODE_ENV === "test") {
  logger = {
    debug: function (message) { console.debug(message); },
    log: function (message) { console.log(message); },
    log: function (message) { console.log(message); },
    confirm: function (message) { console.confirm(message); },
    warn: function (message) { console.warn(message); },
    error: function (message) { console.error(message); }
  };
} else {
  logger = require('vorpal')();
}

module.exports = logger;