'use strict';

(() => {
  const setupElement = document.querySelector(`.setup`);
  const setupOpen = document.querySelector(`.setup-open`);
  const setupClose = setupElement.querySelector(`.setup-close`);
  const setupUserName = setupElement.querySelector(`.setup-user-name`);
  const setupForm = setupElement.querySelector(`.setup-wizard-form`);
  const formData = new FormData(setupForm);

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

  const loadHandler = () => window.util.addHiddenClass(setupElement);

  window.util.addSubmitListener(setupForm, (evt) => {
    evt.preventDefault();
    window.backend.save(formData, loadHandler, window.util.errorHandler);
  });

  window.dialog = {
    getInnerElement,
    setCoordinates
  };
})();
