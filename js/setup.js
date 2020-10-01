'use strict';

const WizardCustoms = {
  WIZARD_FIRST_NAMES: [`Иван`, `Хуан`, `Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`],
  WIZARD_LAST_NAMES: [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`],
  COAT_COLORS: [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`],
  EYES_COLORS: [`black`, `red`, `blue`, `yellow`, `green`],
  FIREBALL_COLORS: [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`],
};

const KeyCodes = {ENTER: 13, ESC: 27};

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
      name: `${getRandomElement(WizardCustoms.WIZARD_FIRST_NAMES)} ${getRandomElement(WizardCustoms.WIZARD_LAST_NAMES)}`,
      coatColor: getRandomElement(WizardCustoms.COAT_COLORS),
      eyesColor: getRandomElement(WizardCustoms.EYES_COLORS)
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
const setupUserName = setup.querySelector(`.setup-user-name`);


const openSetup = function () {
  setup.classList.remove(`hidden`);
  document.addEventListener(`keydown`, onEscPress);
};

const closeSetup = function () {
  setup.classList.add(`hidden`);
  document.removeEventListener(`keydown`, onEscPress);
};

const onEscPress = function (evt) {
  if (evt.keyCode === KeyCodes.ESC && evt.target !== setupUserName) {
    closeSetup();
  }
};

setupClose.addEventListener(`click`, closeSetup);
setupOpen.addEventListener(`click`, openSetup);

const openSetupIcon = function (evt) {
  if (evt.keyCode === KeyCodes.ENTER) {
    openSetup();
  }
};

const closeSetupIcon = function (evt) {
  if (evt.keyCode === KeyCodes.ENTER) {
    closeSetup();
  }
};

setupOpenIcon.addEventListener(`keydown`, openSetupIcon);
setupClose.addEventListener(`keydown`, closeSetupIcon);

const wizard = document.querySelector(`.setup-wizard-appearance`);
const wizardCoat = wizard.querySelector(`.wizard-coat`);
const wizardCoatColor = wizard.querySelector(`input[name="coat-color"]`);
const wizardEyes = wizard.querySelector(`.wizard-eyes`);
const wizardEyesColor = wizard.querySelector(`input[name="eyes-color"]`);

const fireball = document.querySelector(`.setup-fireball-wrap`);
const fireballColor = fireball.querySelector(`input[name="fireball-color"]`);

const getNextColor = function (colors, currentColor) {
  const currentColorIndex = colors.indexOf(currentColor);

  return currentColorIndex !== colors.length - 1 ? colors[currentColorIndex + 1] : colors[0];
};

const onCoatClick = function () {
  wizardCoatColor.value = getNextColor(WizardCustoms.COAT_COLORS, wizardCoatColor.value);
  wizardCoat.style.fill = wizardCoatColor.value;
};

const onEyesClick = function () {
  wizardEyesColor.value = getNextColor(WizardCustoms.EYES_COLORS, wizardEyesColor.value);
  wizardEyes.style.fill = wizardEyesColor.value;
};

const onFireballClick = function () {
  fireballColor.value = getNextColor(WizardCustoms.FIREBALL_COLORS, fireballColor.value);
  fireball.style.background = fireballColor.value;
};

wizardCoat.addEventListener(`click`, onCoatClick);
wizardEyes.addEventListener(`click`, onEyesClick);
fireball.addEventListener(`click`, onFireballClick);
