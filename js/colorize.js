'use strict';

(() => {
  const changeColor = (element, input, colors) => {
    element.addEventListener(`click`, () => {
      const color = window.util.randomize(colors);

      if (element.tagName.toLowerCase() === `div`) {
        element.style.backgroundColor = color;
      } else {
        element.style.fill = color;
      }

      input.value = color;
    });
  };

  window.colorize = {
    set: changeColor
  };
})();
