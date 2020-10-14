'use strict';

(function () {

  const userDialog = document.querySelector(`.setup`);
  const form = userDialog.querySelector(`.setup-wizard-form`);

  const wizard = document.querySelector(`.setup-wizard-appearance`);
  const wizardCoat = wizard.querySelector(`.setup-wizard .wizard-coat`);
  const coatInput = wizard.querySelector(`input[name="coat-color"]`);
  const wizardEyes = wizard.querySelector(`.setup-wizard .wizard-eyes`);
  const eyesInput = wizard.querySelector(`input[name="eyes-color"]`);
  const fireball = userDialog.querySelector(`.setup-fireball-wrap`);
  const fireballColor = userDialog.querySelector(`input[name="fireball-color"]`);
  const wizardFull = userDialog.querySelector(`.wizard`);

  const coatColor = window.common.COAT_COLORS[0];
  const eyesColor = window.common.EYES_COLORS[0];

  const changeColor = function (element, input, color, arrColor) {
    color = window.common.getRandomElement(arrColor);
    element.style.fill = color;
    input.value = color;

    window.debounce(function () {
      window.updateWizards(window.wizards);
    });

    return color;
  };

  const wizardClickHandler = function (evt) {
    switch (evt.target) {
      case wizardCoat :
        window.form.coatColor = changeColor(
            wizardCoat, coatInput, coatColor, window.common.COAT_COLORS);
        break;
      case wizardEyes :
        window.form.eyesColor = changeColor(
            wizardEyes, eyesInput, eyesColor, window.common.EYES_COLORS);
        break;
    }
  };

  const fireballClickHandler = function () {
    const color = window.common.getRandomElement(window.common.FIREBALL_COLORS);
    fireball.style.backgroundColor = color;
    fireballColor.value = color;
  };

  const successSaveHandler = function () {
    userDialog.classList.add(`hidden`);
  };

  const setFormSubmit = function (evt) {
    window.backend.save(new FormData(form), successSaveHandler, window.message.errorHandler);
    evt.preventDefault();
  };

  wizardFull.addEventListener(`click`, wizardClickHandler);

  fireball.addEventListener(`click`, fireballClickHandler);

  const setSubmitHandler = function () {
    form.addEventListener(`submit`, setFormSubmit);
  };

  window.form = {
    setSubmitHandler,
    coatColor,
    eyesColor
  };

})();
