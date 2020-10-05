'use strict';

(function () {

  const userDialog = document.querySelector(`.setup`);

  const moveButton = userDialog.querySelector(`.upload`);

  const moveButtonHandler = function (evt) {
    evt.preventDefault();

    let startCoords = {
      x: evt.clientX,
      y: evt.clientY,
    };

    let dragged = false;

    const moveButtonMoveHandler = function (moveEvt) {
      moveEvt.preventDefault();

      dragged = true;

      let shiftCoords = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY,
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY,
      };

      userDialog.style.top = `${(userDialog.offsetTop - shiftCoords.y)}px`;
      userDialog.style.left = `${(userDialog.offsetLeft - shiftCoords.x)}px`;
    };

    const moveButtonStopHandler = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener(`mousemove`, moveButtonMoveHandler);
      document.removeEventListener(`mouseup`, moveButtonStopHandler);

      if (dragged) {
        const clickPreventDefaultHandler = function (clickEvt) {
          clickEvt.preventDefault();
          moveButton.removeEventListener(`click`, clickPreventDefaultHandler);
        };
        moveButton.addEventListener(`click`, clickPreventDefaultHandler);
      }
    };

    document.addEventListener(`mousemove`, moveButtonMoveHandler);
    document.addEventListener(`mouseup`, moveButtonStopHandler);
  };

  moveButton.addEventListener(`mousedown`, moveButtonHandler);

  window.dialog = {
    userDialog: document.querySelector(`.setup`),
    getDefaultPosition() {
      window.dialog.userDialog.style = ``;
    }
  };

})();
