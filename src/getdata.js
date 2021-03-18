/* eslint-disable prefer-promise-reject-errors */

import {
  render, clear,
} from './render';

import home from './home';

async function getImage(input, info) {
  const url = `https://api.unsplash.com/photos/random?orientation=landscape&count=1&client_id=7XimdnnMOSmoeVFofk7rEM4_ApTXYE83u8ZAAlOfPZU&query=${input}`;
  const response = await fetch(url);
  const data = await response.json();
  render(data[0].urls.regular, info);
}

async function fetchData(input) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${input},&APPID=694ce3be09a1d625ba532a57008093ca`;
  const response = await fetch(url);
  const data = await response.json();
  return new Promise((resolve, reject) => {
    if (data.cod === '404') {
      reject('No valid city');
    } else {
      resolve(data);
    }
  });
}

async function getData(input) {
  try {
    const request = await fetchData(input);
    getImage(request.weather[0].main, request);
  } catch (error) {
    const container = document.getElementById('container');
    clear(container);
    home('Yes');
  }
}

export default getData;