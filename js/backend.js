'use strict';

(() => {
  const LOAD_URL = `https://21.javascript.pages.academy/code-and-magick/data`;
  const SAVE_URL = `https://21.javascript.pages.academy/code-and-magick`;


  const StatusCode = {
    OK: 200
  };

  const addLoadHandler = (xhr, onLoad, onError) => {
    xhr.addEventListener(`load`, () => {
      if (xhr.status === StatusCode.OK) {
        onLoad(xhr.response);
      } else {
        onError(`Статус ответа: ${xhr.status} ${xhr.statusText}`);
      }
    });

    xhr.addEventListener(`error`, () => {
      onError(`Произошла ошибка соединения`);
    });

    xhr.addEventListener(`timeout`, () => {
      onError(`Запрос не успел выполниться за ${xhr.timeout} мс`);
    });

    xhr.timeout = 1000;
  };

  const load = (onLoad, onError) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = `json`;
    xhr.open(`GET`, LOAD_URL);

    addLoadHandler(xhr, onLoad, onError);

    xhr.send();
  };

  const save = (data, onLoad, onError) => {
    const xhr = new XMLHttpRequest();
    xhr.open(`POST`, SAVE_URL);

    addLoadHandler(xhr, onLoad, onError);

    xhr.send(data);
  };

  window.backend = {
    load,
    save
  };
})();
