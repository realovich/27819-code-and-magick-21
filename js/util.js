'use strict';

(() => {
  const WIZARD_COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
  const WIZARD_EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];
  const FIREBALL_COLORS = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];
  const HIDDEN_CLASS = `hidden`;
  const CLICK_EVENT = `click`;
  const KEYDOWN_EVENT = `keydown`;
  const MOUSEDOWN_EVENT = `mousedown`;
  const MOUSEMOVE_EVENT = `mousemove`;
  const MOUSEUP_EVENT = `mouseup`;
  const SUBMIT_EVENT = `submit`;
  const KEY_ENTER = `Enter`;

  const getRandomItemFromArray = (array) => array[Math.floor(Math.random() * array.length)];

  const errorHandler = (errorMessage) => {
    const node = document.createElement(`div`);
    node.style = `position: absoluet; left: 0; right: 0; background-color: tomato; padding: 4px; text-align: center;`;

    node.textContent = errorMessage;
    document.body.insertAdjacentElement(`afterbegin`, node);
  };

  window.util = {
    randomize: getRandomItemFromArray,
    addMousedownListener: (element, cb) => element.addEventListener(MOUSEDOWN_EVENT, cb),
    removeMousedownListener: (element, cb) => element.removeEventListener(MOUSEDOWN_EVENT, cb),
    addMousemoveListener: (element, cb) => element.addEventListener(MOUSEMOVE_EVENT, cb),
    removeMousemoveListener: (element, cb) => element.removeEventListener(MOUSEMOVE_EVENT, cb),
    addMouseupListener: (element, cb) => element.addEventListener(MOUSEUP_EVENT, cb),
    removeMouseupListener: (element, cb) => element.removeEventListener(MOUSEUP_EVENT, cb),
    addClickListener: (element, cb) => element.addEventListener(CLICK_EVENT, cb),
    removeClickListener: (element, cb) => element.removeEventListener(CLICK_EVENT, cb),
    addKeydownListener: (element, cb) => element.addEventListener(KEYDOWN_EVENT, cb),
    removeKeydownListener: (element, cb) => element.removeEventListener(KEYDOWN_EVENT, cb),
    addSubmitListener: (element, cb) => element.addEventListener(SUBMIT_EVENT, cb),

    addHiddenClass: (element) => element.classList.add(HIDDEN_CLASS),
    removeHiddenClass: (element) => element.classList.remove(HIDDEN_CLASS),

    getRandomCoatColor: () => getRandomItemFromArray(WIZARD_COAT_COLORS),
    getRandomEyesColor: () => getRandomItemFromArray(WIZARD_EYES_COLORS),
    getRandomFireballColor: () => getRandomItemFromArray(FIREBALL_COLORS),
    setEnterEvent: (evt, action) => {
      if (evt.key === KEY_ENTER) {
        action();
      }
    },

    errorHandler,
  };
})();
