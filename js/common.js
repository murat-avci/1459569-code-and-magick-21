'use strict';

(function () {
  const EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];
  const COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
  const FIREBALL_COLORS = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];

  const generateRandomIndex = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const getRandomElement = function (arr) {
    return arr[generateRandomIndex(0, arr.length)];
  };

  window.common = {
    EYES_COLORS,
    COAT_COLORS,
    FIREBALL_COLORS,
    KeyCodes: {ENTER: 13, ESC: 27},
    getRandomElement
  };
})();
