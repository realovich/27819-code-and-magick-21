'use strict';

(() => {
  const setupElement = document.querySelector(`.setup`);
  const setupOpen = document.querySelector(`.setup-open`);
  const setupClose = document.querySelector(`.setup-close`);
  const setupUserName = document.querySelector(`.setup-user-name`);

  const onPopupEscapePress = (evt) => {
    if (evt.key === `Escape` && document.activeElement !== setupUserName) {
      evt.preventDefault();
      window.util.addHiddenClass(setupElement);
    }
  };

  const openPopup = () => {
    window.util.removeHiddenClass(setupElement);

    window.util.addKeydownListener(document, onPopupEscapePress);
  };

  const closePopup = () => {
    window.util.addHiddenClass(setupElement);
    setupElement.removeAttribute(`style`);

    window.util.removeKeydownListener(document, onPopupEscapePress);
  };

  window.util.addClickListener(setupOpen, openPopup);

  window.util.addKeydownListener(setupOpen, (evt) => {
    window.util.setEnterEvent(evt, openPopup);
  });

  window.util.addClickListener(setupClose, closePopup);

  window.util.addKeydownListener(setupClose, (evt) => {
    window.util.setEnterEvent(evt, closePopup);
  });

  const getInnerElement = (element) => setupElement.querySelector(element);

  const setCoordinates = (x, y) => {
    setupElement.style.left = `${setupElement.offsetLeft - x}px`;
    setupElement.style.top = `${setupElement.offsetTop - y}px`;
  };

  window.dialog = {
    getInnerElement,
    setCoordinates
  };
})();
