'use strict';

(() => {
  const dialogHandle = window.dialog.element.querySelector(`.upload`);

  const moveDialog = (element) => {
    element.addEventListener(`mousedown`, (evt) => {
      evt.preventDefault();

      let startCoordinates = {
        x: evt.clientX,
        y: evt.clientY
      };

      let dragged = false;

      const onMouseMove = (moveEvt) => {
        moveEvt.preventDefault();

        dragged = true;

        const shift = {
          x: startCoordinates.x - moveEvt.clientX,
          y: startCoordinates.y - moveEvt.clientY
        };

        startCoordinates = {
          x: moveEvt.clientX,
          y: moveEvt.clientY
        };

        window.dialog.element.style.top = `${window.dialog.element.offsetTop - shift.y}px`;
        window.dialog.element.style.left = `${window.dialog.element.offsetLeft - shift.x}px`;
      };

      const onMouseUp = (upEvt) => {
        upEvt.preventDefault();

        document.removeEventListener(`mousemove`, onMouseMove);
        document.removeEventListener(`mouseup`, onMouseUp);

        if (dragged) {
          const onClickPreventDefault = (clickEvt) => {
            clickEvt.preventDefault();
            element.removeEventListener(`click`, onClickPreventDefault);
          };

          element.addEventListener(`click`, onClickPreventDefault);
        }
      };

      document.addEventListener(`mousemove`, onMouseMove);
      document.addEventListener(`mouseup`, onMouseUp);
    });
  };

  moveDialog(dialogHandle);
})();
