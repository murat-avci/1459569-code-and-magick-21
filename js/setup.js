'use strict';

(function () {

  const setup = document.querySelector(`.setup`);
  const setupOpen = document.querySelector(`.setup-open`);
  const setupOpenIcon = document.querySelector(`.setup-open-icon`);
  const setupClose = setup.querySelector(`.setup-close`);
  const setupUserName = setup.querySelector(`.setup-user-name`);

  const togglePopupHandler = function (openPopup) {
    if (openPopup) {
      setup.classList.remove(`hidden`);
      window.dialog.getDefaultPosition();
      document.addEventListener(`keydown`, onEscPress);
    } else {
      setup.classList.add(`hidden`);
      document.removeEventListener(`keydown`, onEscPress);
    }
  };

  const onEscPress = function (evt) {
    if (evt.keyCode === window.common.KeyCodes.ESC && evt.target !== setupUserName) {
      evt.preventDefault();
      togglePopupHandler(false);
    }
  };

  setupOpen.addEventListener(`click`, function () {
    togglePopupHandler(true);
  });

  setupClose.addEventListener(`click`, function () {
    togglePopupHandler(false);
  });

  const openSetupIcon = function (evt) {
    if (evt.keyCode === window.common.KeyCodes.ENTER) {
      togglePopupHandler(true);
    }
  };

  const closeSetupIcon = function (evt) {
    if (evt.keyCode === window.common.KeyCodes.ENTER) {
      togglePopupHandler(false);
    }
  };

  setupOpenIcon.addEventListener(`keydown`, openSetupIcon);
  setupClose.addEventListener(`keydown`, closeSetupIcon);
})();
