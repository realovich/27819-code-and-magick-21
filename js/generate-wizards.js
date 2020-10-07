'use strict';

(() => {
  const WIZARD_FIRST_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
  const WIZARD_LAST_NAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];

  const similarBlock = window.dialog.getInnerElement(`.setup-similar`);
  const similarListElement = window.dialog.getInnerElement(`.setup-similar-list`);
  const similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

  const renderWizardArray = (length) => {
    const array = [];

    for (let i = 0; i < length; i++) {
      array.push({
        name: `${window.util.randomize(WIZARD_FIRST_NAMES)} ${window.util.randomize(WIZARD_LAST_NAMES)}`,
        coatColor: window.util.getRandomCoatColor(),
        eyesColor: window.util.getRandomEyesColor()
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
    window.util.removeHiddenClass(similarBlock);
  };

  renderWizardsList();
})();
