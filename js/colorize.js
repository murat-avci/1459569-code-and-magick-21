'use strict';

(function () {

  const FIREBALL_COLORS = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];

  const userDialog = document.querySelector(`.setup`);

  const wizard = document.querySelector(`.setup-wizard-appearance`);
  const wizardCoat = wizard.querySelector(`.wizard-coat`);
  const wizardCoatColor = wizard.querySelector(`input[name="coat-color"]`);
  const wizardEyes = wizard.querySelector(`.wizard-eyes`);
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

  wizardFull.addEventListener(`click`, wizardClickHandler);
  fireball.addEventListener(`click`, fireballClickHandler);

})();
