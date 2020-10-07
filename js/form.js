'use strict';

(function () {

  const FIREBALL_COLORS = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];

  const userDialog = document.querySelector(`.setup`);
  const form = userDialog.querySelector(`.setup-wizard-form`);

  const wizard = document.querySelector(`.setup-wizard-appearance`);
  const wizardCoat = wizard.querySelector(`.setup-wizard .wizard-coat`);
  const wizardCoatColor = wizard.querySelector(`input[name="coat-color"]`);
  const wizardEyes = wizard.querySelector(`.setup-wizard .wizard-eyes`);
  const wizardEyesColor = wizard.querySelector(`input[name="eyes-color"]`);
  const fireball = userDialog.querySelector(`.setup-fireball-wrap`);
  const fireballColor = userDialog.querySelector(`input[name="fireball-color"]`);
  const wizardFull = userDialog.querySelector(`.wizard`);

  const wizardClickHandler = function (evt) {
    switch (evt.target) {
      case wizardCoat :
        wizardCoat.style.fill = window.common.getRandomElement(window.common.COAT_COLORS);
        wizardCoatColor.value = wizardCoat.style.fill;
        break;
      case wizardEyes :
        wizardEyes.style.fill = window.common.getRandomElement(window.common.EYES_COLORS);
        wizardEyesColor.value = wizardEyes.style.fill;
        break;
    }
  };

  const fireballClickHandler = function () {
    const color = window.common.getRandomElement(FIREBALL_COLORS);
    fireball.style.backgroundColor = color;
    fireballColor.value = color;
  };

  const successSaveHandler = function () {
    userDialog.classList.add(`hidden`);
  };

  const setFormSubmit = function (evt) {
    window.backend.save(new FormData(form), successSaveHandler, errorHandler);
    evt.preventDefault();
  };

  const errorHandler = function (errorMessage) {
    const message = document.createElement(`div`);
    message.style = `position: absolute; top: 0; left: 0; right: 0; z-index: 10; margin: 0 auto; padding: 50px; font-size: 2em; text-align: center; background-color: rgba(255, 0, 0, 0.9);`;

    message.textContent = errorMessage;
    document.body.appendChild(message);
  };

  const setWizardClickHandler = function () {
    wizardFull.addEventListener(`click`, wizardClickHandler);
  };

  const setFireballClickHandler = function () {
    fireball.addEventListener(`click`, fireballClickHandler);
  };

  const setSubmitHandler = function () {
    form.addEventListener(`submit`, setFormSubmit);
  };

  window.form = {
    setWizardClickHandler,
    setFireballClickHandler,
    setSubmitHandler,
    errorHandler
  };

})();
