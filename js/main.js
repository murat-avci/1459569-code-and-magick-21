'use strict';


const successLoadHandler = function (data) {
  window.wizards = data;
  window.updateWizards(window.wizards);
};

window.form.setSubmitHandler();

window.backend.load(successLoadHandler, window.message.showError);

