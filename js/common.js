'use strict';

(function () {
  const generateRandomIndex = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  window.common = {
    KeyCodes: {ENTER: 13, ESC: 27},
    getRandomElement(arr) {
      return arr[generateRandomIndex(0, arr.length)];
    },
    WIZARD_FIRST_NAMES: [`Иван`, `Хуан`, `Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`],
    WIZARD_LAST_NAMES: [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`],
    COAT_COLORS: [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`],
    EYES_COLORS: [`black`, `red`, `blue`, `yellow`, `green`],
  };
})();
