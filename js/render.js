'use strict';


const MAX_SIMILAR_WIZARD_COUNT = 4;

const userDialog = document.querySelector(`.setup`);

const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
  .content
  .querySelector(`.setup-similar-item`);
const similarListElements = userDialog.querySelector(`.setup-similar-list`);

const renderOneWizard = function (wizard) {
  let wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.colorCoat;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.colorEyes;

  return wizardElement;
};

window.renderWizards = function (arrWizards) {
  const wizardNumbers = arrWizards.length > MAX_SIMILAR_WIZARD_COUNT ?
    MAX_SIMILAR_WIZARD_COUNT : arrWizards.length;

  similarListElements.innerHTML = ``;

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < wizardNumbers; i++) {
    fragment.appendChild(renderOneWizard(arrWizards[i]));
  }

  similarListElements.appendChild(fragment);
  userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);
};
