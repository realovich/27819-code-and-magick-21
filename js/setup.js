'use strict';

(() => {
  const wizardCoat = document.querySelector(`.wizard-coat`);
  const wizardEyes = document.querySelector(`.wizard-eyes`);
  const fireball = document.querySelector(`.setup-fireball-wrap`);
  const inputCoatColor = document.querySelector(`input[name="coat-color"]`);
  const inputEyesColor = document.querySelector(`input[name="eyes-color"]`);
  const inputFireballColor = document.querySelector(`input[name="fireball-color"]`);

  window.colorize.addChangeColorHandler(wizardCoat, inputCoatColor, window.util.getRandomCoatColor);
  window.colorize.addChangeColorHandler(wizardEyes, inputEyesColor, window.util.getRandomEyesColor);
  window.colorize.addChangeColorHandler(fireball, inputFireballColor, window.util.getRandomFireballColor);
})();
