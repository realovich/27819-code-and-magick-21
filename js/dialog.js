'use strict';

(() => {
  const setupElement = document.querySelector(`.setup`);
  const setupOpen = document.querySelector(`.setup-open`);
  const setupClose = document.querySelector(`.setup-close`);
  const setupUserName = document.querySelector(`.setup-user-name`);

  window.dialog = {
    element: setupElement
  };

  const onPopupEscapePress = (evt) => {
    if (evt.key === `Escape` && document.activeElement !== setupUserName) {
      evt.preventDefault();
      window.dialog.element.classList.add(`hidden`);
    }
  };

  const openPopup = () => {
    window.dialog.element.classList.remove(`hidden`);

    document.addEventListener(`keydown`, onPopupEscapePress);
  };

  const closePopup = () => {
    window.dialog.element.classList.add(`hidden`);
    window.dialog.element.removeAttribute(`style`);

    document.removeEventListener(`keydown`, onPopupEscapePress);
  };

  setupOpen.addEventListener(`click`, openPopup);

  setupOpen.addEventListener(`keydown`, (evt) => {
    window.util.setKeyEvent(evt, `Enter`, openPopup);
  });

  setupClose.addEventListener(`click`, closePopup);

  setupClose.addEventListener(`keydown`, (evt) => {
    window.util.setKeyEvent(evt, `Enter`, closePopup);
  });
})();
