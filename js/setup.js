'use strict';

const WIZARD_NAME = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];

const WIZARD_SURNAME = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];

const COAT_COLOR = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];

const EYES_COLOR = [`black`, `red`, `blue`, `yellow`, `green`];

let userDialog = document.querySelector(`.setup`);
userDialog.classList.remove(`hidden`);

let similarListElement = userDialog.querySelector(`.setup-similar-list`);

let similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
  .content
  .querySelector(`.setup-similar-item`);

let getRandomElement = function (arr) {
  let rand = Math.floor(Math.random() * arr.length);

  return arr[rand];
};

let wizards = [
  {
    name: getRandomElement(WIZARD_NAME) + ` ` + getRandomElement(WIZARD_SURNAME),
    coatColor: getRandomElement(COAT_COLOR),
    eyesColor: getRandomElement(EYES_COLOR)
  },
  {
    name: getRandomElement(WIZARD_NAME) + ` ` + getRandomElement(WIZARD_SURNAME),
    coatColor: getRandomElement(COAT_COLOR),
    eyesColor: getRandomElement(EYES_COLOR)
  },
  {
    name: getRandomElement(WIZARD_NAME) + ` ` + getRandomElement(WIZARD_SURNAME),
    coatColor: getRandomElement(COAT_COLOR),
    eyesColor: getRandomElement(EYES_COLOR)
  },
  {
    name: getRandomElement(WIZARD_NAME) + ` ` + getRandomElement(WIZARD_SURNAME),
    coatColor: getRandomElement(COAT_COLOR),
    eyesColor: getRandomElement(EYES_COLOR)
  }
];

let renderWizard = function (wizard) {
  let wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

  return wizardElement;
};

let fragment = document.createDocumentFragment();
for (let i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);

userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);
