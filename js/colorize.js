'use strict';

(() => {
  const addChangeColorHandler = (element, input, color) => {
    window.util.addClickListener(element, () => {
      if (element.tagName.toLowerCase() === `div`) {
        element.style.backgroundColor = color();
      } else {
        element.style.fill = color();
      }

      input.value = color();
    });
  };

  window.colorize = {
    addChangeColorHandler
  };
})();
