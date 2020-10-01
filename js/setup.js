'use strict';

const WIZARD_FIRST_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_LAST_NAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const WIZARD_COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const WIZARD_EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];
const FIREBALL_COLORS = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];

const setup = document.querySelector(`.setup`);

const similarBlock = setup.querySelector(`.setup-similar`);

const similarListElement = setup.querySelector(`.setup-similar-list`);

const similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

const getRandomItemFromArray = (array) => array[Math.floor(Math.random() * array.length)];

const renderWizardArray = (length) => {
  const array = [];

  for (let i = 0; i < length; i++) {
    array.push({
      name: `${getRandomItemFromArray(WIZARD_FIRST_NAMES)} ${getRandomItemFromArray(WIZARD_LAST_NAMES)}`,
      coatColor: getRandomItemFromArray(WIZARD_COAT_COLORS),
      eyesColor: getRandomItemFromArray(WIZARD_EYES_COLORS)
    });
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

  wizards.forEach((wizard) => fragment.appendChild(renderWizard(wizard)));

  similarListElement.appendChild(fragment);
};

renderWizardsList();

similarBlock.classList.remove(`hidden`);

const setupOpen = document.querySelector(`.setup-open`);
const setupClose = document.querySelector(`.setup-close`);
const setupUserName = document.querySelector(`.setup-user-name`);
const wizardCoat = document.querySelector(`.wizard-coat`);
const wizardEyes = document.querySelector(`.wizard-eyes`);
const fireball = document.querySelector(`.setup-fireball-wrap`);
const inputCoatColor = document.querySelector(`input[name="coat-color"]`);
const inputEyesColor = document.querySelector(`input[name="eyes-color"]`);
const inputFireballColor = fireball.querySelector(`input[name="fireball-color"]`);

const onPopupEscapePress = (evt) => {
  if (evt.key === `Escape` && document.activeElement !== setupUserName) {
    evt.preventDefault();
    setup.classList.add(`hidden`);
  }
};

const openPopup = () => {
  setup.classList.remove(`hidden`);

  document.addEventListener(`keydown`, onPopupEscapePress);
};

const closePopup = () => {
  setup.classList.add(`hidden`);

  document.removeEventListener(`keydown`, onPopupEscapePress);
};

setupOpen.addEventListener(`click`, openPopup);

setupOpen.addEventListener(`keydown`, (evt) => {
  if (evt.key === `Enter`) {
    openPopup();
  }
});

setupClose.addEventListener(`click`, closePopup);

setupClose.addEventListener(`keydown`, (evt) => {
  if (evt.key === `Enter`) {
    closePopup();
  }
});

const changeWizardFill = (element, input, array) => {
  const chosenColor = getRandomItemFromArray(array);

  element.style.fill = chosenColor;
  input.value = chosenColor;
};

const changeWizardBackground = (element, input, array) => {
  const chosenFireballColor = getRandomItemFromArray(array);

  element.style.backgroundColor = chosenFireballColor;
  input.value = chosenFireballColor;
};

wizardCoat.addEventListener(`click`, () => {
  changeWizardFill(wizardCoat, inputCoatColor, WIZARD_COAT_COLORS);
});

wizardEyes.addEventListener(`click`, () => {
  changeWizardFill(wizardEyes, inputEyesColor, WIZARD_EYES_COLORS);
});

fireball.addEventListener(`click`, () => {
  changeWizardBackground(fireball, inputFireballColor, FIREBALL_COLORS);
});
