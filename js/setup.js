'use strict';

const WIZARD_FIRST_NAMES = [`Иван`, `Хуан`, `Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_LAST_NAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const EYE_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];
const FIREBALL_COLORS = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];
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

const setup = document.querySelector(`.setup`);
const setupOpen = document.querySelector(`.setup-open`);
const setupOpenIcon = document.querySelector(`.setup-open-icon`);
const setupClose = setup.querySelector(`.setup-close`);

const hideSetup = function (evt) {
  if (evt.keyCode === 27) {
    setup.classList.add(`hidden`);
  }
};

setupOpen.addEventListener(`click`, function () {
  setup.classList.remove(`hidden`);
  document.addEventListener(`keydown`, hideSetup);
});

setupClose.addEventListener(`click`, function () {
  setup.classList.add(`hidden`);
  document.removeEventListener(`keydown`, hideSetup);
});

setupOpenIcon.addEventListener(`keydown`, function (evt) {
  if (evt.keyCode === 13) {
    setup.classList.remove(`hidden`);
    document.addEventListener(`keydown`, hideSetup);
  }
});

setupClose.addEventListener(`keydown`, function (evt) {
  if (evt.keyCode === 13) {
    setup.classList.add(`hidden`);
    document.removeEventListener(`keydown`, hideSetup);
  }
});

const wizardCoatColorNumber = 0;
const wizardCoat = document.querySelector(`.setup-wizard .wizard-coat`);

wizardCoat.addEventListener(`click`, function () {
  if (wizardCoatColorNumber < COAT_COLORS.length - 1) {
    wizardCoatColorNumber++;
  } else {
    wizardCoatColorNumber = 0;
  }
  wizardCoat.style.fill = COAT_COLORS[wizardCoatColorNumber];
  document.querySelector(`input[name="coat-color"]`).value = COAT_COLORS[wizardCoatColorNumber];
});

const wizardFireballColorNumber = 0;
const setupFireballWrap = document.querySelector(`.setup-fireball-wrap`);

setupFireballWrap.addEventListener(`click`, function () {
  if (wizardFireballColorNumber < FIREBALL_COLORS.length - 1) {
    wizardFireballColorNumber++;
  } else {
    wizardFireballColorNumber = 0;
  }
  setupFireballWrap.style.background = FIREBALL_COLORS[wizardFireballColorNumber];
  document.querySelector(`input[name="fireball-color"]`).value = FIREBALL_COLORS[wizardFireballColorNumber];
});

const userNameInput = setup.querySelector(`.setup-user-name`);

userNameInput.addEventListener(`input`, function (evt) {
  const target = evt.target;
  if (target.value.length < 2) {
    target.setCustomValidity(`Имя должно состоять минимум из 2-х символов!`);
  } else {
    target.setCustomValidity(``);
  }
});
