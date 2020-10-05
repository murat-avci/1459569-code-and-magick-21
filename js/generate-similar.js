'use strict';

(function () {
  const WIZARD_FIRST_NAMES = [`Иван`, `Хуан`, `Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
  const WIZARD_LAST_NAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
  const WIZARD_COUNT = 4;

  const userDialog = document.querySelector(`.setup`);

  const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
    .content
    .querySelector(`.setup-similar-item`);
  const similarListElements = userDialog.querySelector(`.setup-similar-list`);

  const generateWizards = function () {
    let wizards = [];

    for (let i = 0; i < WIZARD_COUNT; i++) {
      let wizard = {
        name: `${window.common.getRandomElement(WIZARD_FIRST_NAMES)} ${window.common.getRandomElement(WIZARD_LAST_NAMES)}`,
        coatColor: window.common.getRandomElement(window.common.COAT_COLORS),
        eyesColor: window.common.getRandomElement(window.common.EYES_COLORS)
      };
      wizards.push(wizard);
    }
    return wizards;
  };

  const renderOneWizard = function (wizard) {
    let wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
    wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
    wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

    return wizardElement;
  };

  const renderWizards = function (arrWizards) {
    let fragment = document.createDocumentFragment();

    for (let i = 0; i < arrWizards.length; i++) {
      fragment.appendChild(renderOneWizard(arrWizards[i]));
    }
    return fragment;
  };

  const wizards = generateWizards();

  similarListElements.appendChild(renderWizards(wizards));
  userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);
})();
