'use strict';

(() => {
  const WIZARD_COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
  const WIZARD_EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];
  const FIREBALL_COLORS = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];

  const getRandomItemFromArray = (array) => array[Math.floor(Math.random() * array.length)];

  window.util = {
    randomize: getRandomItemFromArray,
    setKeyEvent: (evt, key, action) => {
      if (evt.key === key) {
        action();
      }
    },
    wizardCoatColors: WIZARD_COAT_COLORS,
    wizardEyesColors: WIZARD_EYES_COLORS,
    fireballColors: FIREBALL_COLORS
  };
})();
