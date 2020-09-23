'use strict';

const WIZARD_FIRST_NAMES = [`Иван`, `Хуан`, `Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_LAST_NAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const EYE_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];
const WIZARD_COUNT = 4;

const userDialog = document.querySelector(`.setup`);
const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
    .content
    .querySelector(`.setup-similar-item`);
const similarListElements = userDialog.querySelector(`.setup-similar-list`);

userDialog.classList.remove(`hidden`);

const generateRandomIndex = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const getRandomElement = function (arr) {
  return arr[generateRandomIndex(0, arr.length)];
};

const generateWizards = function () {
  let wizards = [];

  for (let i = 0; i < WIZARD_COUNT; i++) {
    let wizard = {
      name: `${getRandomElement(WIZARD_FIRST_NAMES)} ${getRandomElement(WIZARD_LAST_NAMES)}`,
      coatColor: getRandomElement(COAT_COLORS),
      eyesColor: getRandomElement(EYE_COLORS)
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
