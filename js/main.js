'use strict';

(function () {

  window.form.setWizardClickHandler();
  window.form.setFireballClickHandler();
  window.form.setSubmitHandler();

  window.backend.load(window.renderWizards, window.form.errorHandler);

})();
