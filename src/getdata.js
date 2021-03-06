/* eslint-disable prefer-promise-reject-errors */

import {
  render, clear,
} from './render';

import home from './home';

const getImage = async (input, info) => {
  const url = `https://api.unsplash.com/photos/random?orientation=landscape&count=1&client_id=[API_KEY]&query=${input}`;
  const response = await fetch(url);
  const data = await response.json();
  render(data[0].urls.regular, info);
};

const fetchData = async (input) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${input},&APPID=[API_KEY]`;
  const response = await fetch(url);
  const data = await response.json();
  return new Promise((resolve, reject) => {
    if (data.cod === '404') {
      reject('No valid city');
    } else {
      resolve(data);
    }
  });
};

const getData = async (input) => {
  try {
    const request = await fetchData(input);
    getImage(request.weather[0].main, request);
  } catch (error) {
    const container = document.getElementById('container');
    clear(container);
    home('Yes');
  }
};

export default getData;