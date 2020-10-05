'use strict';

(() => {
  window.util = {
    randomize: (array) => array[Math.floor(Math.random() * array.length)],
    setKeyEvent: (evt, key, action) => {
      if (evt.key === key) {
        action();
      }
    },
    wizardCoatColors: [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`],
    wizardEyesColors: [`black`, `red`, `blue`, `yellow`, `green`],
    fireballColors: [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`]
  };
})();
