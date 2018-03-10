const vorpal = require('vorpal')();
const spinners = {
  "hearts": {
    "frames": [
      "💛 ",
      "💙 ",
      "💜 ",
      "💚 ",
    ]
  },
  "clock": {
    "frames": [
      "🕐 ",
      "🕑 ",
      "🕒 ",
      "🕓 ",
      "🕔 ",
      "🕕 ",
      "🕖 ",
      "🕗 ",
      "🕘 ",
      "🕙 ",
      "🕚 "
    ]
  },
  "arrow2": {
    "frames": [
      "⬆️ ",
      "↗️ ",
      "➡️ ",
      "↘️ ",
      "⬇️ ",
      "↙️ ",
      "⬅️ ",
      "↖️ "
    ]
  },
  "bouncingBall": {
    "frames": [
      "( ●    )",
      "(  ●   )",
      "(   ●  )",
      "(    ● )",
      "(     ●)",
      "(    ● )",
      "(   ●  )",
      "(  ●   )",
      "( ●    )",
      "(●     )"
    ]
  },
  "moon": {
    "frames": [
      "🌑 ",
      "🌒 ",
      "🌓 ",
      "🌔 ",
      "🌕 ",
      "🌖 ",
      "🌗 ",
      "🌘 "
    ]
  },
  "money": {
    "frames": [
      "💵 ",
      "💴 ",
      "💶 ",
      "💷 "
    ]
  },
  "fruits": {
    "frames": [
      "🍏 ",
      "🍎 ",
      "🍐 ",
      "🍊 ",
      "🍋 ",
      "🍌 ",
      "🍉 ",
      "🍇 ",
      "🍓 ",
      "🍈 ",
      "🍒 ",
      "🍑 ",
      "🍍 "
    ]
  }
}

module.exports = () => {
  let index = 0;

  function getRandomSpinner() {
    return Object.keys(spinners)[Math.floor(Math.random() * Object.keys(spinners).length)]
  }

  function draw(randomSpinner) {
    const sequence = spinners[randomSpinner].frames
    index++;
    index = (index < sequence.length - 1) ? index + 1 : 0;
    if (process.env.NODE_ENV !== "test") {
      vorpal.ui.redraw(`${sequence[index]} Mining new block${Array(index).join(".")}`)
    }
  }

  function clear() {
    vorpal.ui.redraw.done();
    vorpal.ui.redraw.clear();
  }

  return {
    draw: draw,
    clear: clear,
    getRandomSpinner: getRandomSpinner
  };
};