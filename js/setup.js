'use strict';

(() => {
  const wizardCoat = document.querySelector(`.wizard-coat`);
  const wizardEyes = document.querySelector(`.wizard-eyes`);
  const fireball = document.querySelector(`.setup-fireball-wrap`);
  const inputCoatColor = document.querySelector(`input[name="coat-color"]`);
  const inputEyesColor = document.querySelector(`input[name="eyes-color"]`);
  const inputFireballColor = document.querySelector(`input[name="fireball-color"]`);

  window.colorize.set(wizardCoat, inputCoatColor, window.util.wizardCoatColors);
  window.colorize.set(wizardEyes, inputEyesColor, window.util.wizardEyesColors);
  window.colorize.set(fireball, inputFireballColor, window.util.fireballColors);
})();
