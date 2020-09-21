'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const TEXT_WIDTH = 40;
const TEXT_HEIGHT = 16;
const BAR_WIDTH = 40;
const barHeight = 150;

const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const getMaxElement = function (arr) {
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(
      ctx,
      CLOUD_X + GAP,
      CLOUD_Y + GAP,
      `rgba(0, 0, 0, 0.7)`
  );
  renderCloud(
      ctx,
      CLOUD_X,
      CLOUD_Y,
      `#fff`
  );

  ctx.fillStyle = `#000`;
  ctx.font = `16px PT Mono`;
  ctx.textBaseline = `hanging`;
  ctx.fillText(`Ура вы победили!`, GAP + 110, GAP + 20);
  ctx.fillText(`Список результатов:`, GAP + 110, GAP + 40);


  let maxTime = getMaxElement(times);

  for (let i = 0; i < names.length; i++) {
    if (names[i] === `Вы`) {
      ctx.fillStyle = `rgba(255, 0, 0, 1)`;
    } else {
      ctx.fillStyle = `hsl(240, ${100 * Math.random()}%, 60%)`;
    }

    ctx.fillRect(
        CLOUD_X + GAP * 4 + (BAR_WIDTH + GAP * 5) * i,
        CLOUD_HEIGHT - (barHeight * times[i]) / maxTime - GAP - TEXT_HEIGHT,
        BAR_WIDTH,
        (barHeight * times[i]) / maxTime
    );

    ctx.fillStyle = `#000`;

    ctx.fillText(
        names[i],
        CLOUD_X + GAP * 4 + (TEXT_WIDTH + GAP * 5) * i,
        CLOUD_HEIGHT - (CLOUD_Y + GAP)
    );

    ctx.fillText(
        Math.round(times[i]),
        CLOUD_X + GAP * 4 + (TEXT_WIDTH + GAP * 5) * i,
        CLOUD_HEIGHT - ((barHeight * times[i]) / maxTime + GAP * 5)
    );

  }
};
