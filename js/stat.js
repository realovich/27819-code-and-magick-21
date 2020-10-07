'use strict';

(() => {
  const BAR_GAP = 50;
  const FONT_SIZE = 16;
  const FONT_HEIGHT = Math.round(FONT_SIZE * 1.35);
  const CLOUD_GAP = 20;
  const CLOUD_OFFSET = 10;

  const CloudSize = {
    WIDTH: 420,
    HEIGHT: 270
  };

  const CloudCoordinate = {
    INITIAL_X: 100,
    INITIAL_Y: 10
  };

  const ChartCoordinate = {
    INITIAL_X: CloudCoordinate.INITIAL_X + CLOUD_GAP * 2,
    INITIAL_Y: CloudCoordinate.INITIAL_Y + CloudSize.HEIGHT - CLOUD_GAP
  };

  const BarSize = {
    HEIGHT: 150,
    WIDTH: 40
  };

  const drawCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CloudSize.WIDTH, CloudSize.HEIGHT);
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

  const getRandomColorSaturation = (hue) => {
    return `hsl(${hue}, ${Math.round(Math.random() * 100)}%, 50%)`;
  };

  window.renderStatistics = function (ctx, names, times) {
    const maxTime = getMaxElement(times);

    drawCloud(ctx, CloudCoordinate.INITIAL_X + CLOUD_OFFSET, CloudCoordinate.INITIAL_Y + CLOUD_OFFSET, `rgba(0, 0, 0, .7)`);
    drawCloud(ctx, CloudCoordinate.INITIAL_X, CloudCoordinate.INITIAL_Y, `white`);

    ctx.fillStyle = `black`;
    ctx.font = `${FONT_SIZE}px "PT Mono"`;
    ctx.textBaseline = `middle`;
    ctx.fillText(`Ура вы победили!`, CloudCoordinate.INITIAL_X + CLOUD_GAP, CloudCoordinate.INITIAL_Y + CLOUD_GAP * 1.5);
    ctx.fillText(`Список результатов:`, CloudCoordinate.INITIAL_X + CLOUD_GAP, CloudCoordinate.INITIAL_Y + CLOUD_GAP * 1.5 + FONT_HEIGHT);

    for (let i = 0; i < names.length; i++) {
      const barHeight = Math.round((BarSize.HEIGHT * times[i]) / maxTime);
      const leftPosition = ChartCoordinate.INITIAL_X + (BarSize.WIDTH + BAR_GAP) * i;

      ctx.fillText(names[i], leftPosition, ChartCoordinate.INITIAL_Y);

      ctx.fillStyle = (names[i] === `Вы`) ? `rgba(255, 0, 0, 1)` : getRandomColorSaturation(240);
      ctx.fillRect(leftPosition, ChartCoordinate.INITIAL_Y - barHeight - CLOUD_GAP / 2, BarSize.WIDTH, barHeight);

      ctx.fillStyle = `black`;
      ctx.fillText(Math.round(times[i]), leftPosition, ChartCoordinate.INITIAL_Y - barHeight - FONT_HEIGHT);
    }
  };
})();
