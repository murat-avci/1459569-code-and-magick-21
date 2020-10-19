'use strict';

const getRank = function (wizard) {
  let rank = 0;

  if (wizard.colorCoat === window.form.coatColor) {
    rank += 2;
  }
  if (wizard.colorEyes === window.form.eyesColor) {
    rank += 1;
  }
  return rank;
};

const compareNames = function (left, right) {
  if (left > right) {
    return 1;
  } else if (left < right) {
    return -1;
  } else {
    return 0;
  }
};

const compareWizards = function (left, right) {
  let rankDiff = getRank(right) - getRank(left);
  if (rankDiff === 0) {
    rankDiff = compareNames(left.name, right.name);
  }
  return rankDiff;
};

window.updateWizards = function (arrWizards) {
  window.renderWizards(arrWizards.slice().sort(compareWizards));
};
