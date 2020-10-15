'use strict';

(() => {
  const MAX_SIMILAR_WIZARD_COUNT = 4;

  const similarBlock = window.dialog.getInnerElement(`.setup-similar`);
  const similarListElement = window.dialog.getInnerElement(`.setup-similar-list`);
  const similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

  const renderWizard = (wizard) => {
    let wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
    wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.colorCoat;
    wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.colorEyes;

    return wizardElement;
  };

  const loadHandler = (wizards) => {
    const fragment = document.createDocumentFragment();
    const slicedArray = wizards.slice(0, (MAX_SIMILAR_WIZARD_COUNT));

    slicedArray.forEach((wizard) => fragment.appendChild(renderWizard(wizard)));

    similarListElement.appendChild(fragment);
    window.util.removeHiddenClass(similarBlock);
  };


  window.backend.load(loadHandler, window.util.renderErrorMessage);
})();
