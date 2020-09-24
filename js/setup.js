'use strict';

const WIZARD_FIRST_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_LAST_NAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const wizardCoatColors = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const wizardEyesColors = [`black`, `red`, `blue`, `yellow`, `green`];

const userDialog = document.querySelector(`.setup`);
userDialog.classList.remove(`hidden`);

const similarBlock = userDialog.querySelector(`.setup-similar`);

const similarListElement = userDialog.querySelector(`.setup-similar-list`);

const similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

const getRandomItemFromArray = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const renderWizardArray = (length) => {
  const array = new Array(length);
  for (let i = 0; i < length; i++) {
    array[i] = {
      name: `${getRandomItemFromArray(WIZARD_FIRST_NAMES)} ${getRandomItemFromArray(WIZARD_LAST_NAMES)}`,
      coatColor: getRandomItemFromArray(wizardCoatColors),
      eyesColor: getRandomItemFromArray(wizardEyesColors)
    };
  }

  return array;
};

const wizards = renderWizardArray(4);

const renderWizard = (wizard) => {
  let wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

  return wizardElement;
};

const renderWizardsList = () => {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }

  return similarListElement.appendChild(fragment);
};

renderWizardsList();

similarBlock.classList.remove(`hidden`);