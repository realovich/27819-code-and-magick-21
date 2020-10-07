'use strict';

(() => {
  const dialogHandle = window.dialog.getInnerElement(`.upload`);

  const moveDialog = (element) => {
    window.util.addMousedownListener(element, (evt) => {
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

        window.dialog.setCoordinates(shift.x, shift.y);
      };

      const onMouseUp = (upEvt) => {
        upEvt.preventDefault();

        window.util.removeMouseupListener(document, onMouseUp);
        window.util.removeMousemoveListener(document, onMouseMove);

        if (dragged) {
          const onClickPreventDefault = (clickEvt) => {
            clickEvt.preventDefault();
            window.util.removeClickListener(element, onClickPreventDefault);
          };

          window.util.addClickListener(element, onClickPreventDefault);
        }
      };

      window.util.addMouseupListener(document, onMouseUp);
      window.util.addMousemoveListener(document, onMouseMove);
    });
  };

  moveDialog(dialogHandle);
})();
