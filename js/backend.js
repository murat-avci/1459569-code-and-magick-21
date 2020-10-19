'use strict';


const RESPONSE_TYPE = `json`;
const TIMEOUT = 10000;

const Url = {
  LOAD: `https://21.javascript.pages.academy/code-and-magick/data`,
  SAVE: `https://21.javascript.pages.academy/code-and-magick`
};

const Method = {
  GET: `GET`,
  POST: `POST`
};

const StatusCode = {
  OK: 200
};

const addListener = function (request, successHandler, failHandler) {
  request.addEventListener(`load`, function () {
    if (request.status === StatusCode.OK) {
      successHandler(request.response);
    } else {
      failHandler(`Статус ответа: ${request.status} ${request.statusText}`);
    }
  });
  request.addEventListener(`error`, function () {
    failHandler(`Произошла ошибка соединения`);
  });
  request.addEventListener(`timeout`, function () {
    failHandler(`Запрос не успел выполниться за ${request.timeout} мс`);
  });
  request.timeout = TIMEOUT;
};

const createRequest = function (onLoad, onError) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = RESPONSE_TYPE;
  addListener(xhr, onLoad, onError);
  return xhr;
};

const load = function (onLoad, onError) {
  const xhr = createRequest(onLoad, onError);
  xhr.open(Method.GET, Url.LOAD);
  xhr.send();
};

const save = function (data, onLoad, onError) {
  const xhr = createRequest(onLoad, onError);
  xhr.open(Method.POST, Url.SAVE);
  xhr.send(data);
};

window.backend = {
  load,
  save
};


