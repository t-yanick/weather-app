/* eslint-disable no-mixed-operators */

const city = (input) => {
  const city = input.name;
  const { country } = input.sys;
  const output = `${city}, ${country}`;
  return output;
};

const cord = (input) => {
  const { lat } = input.coord;
  const { lon } = input.coord;
  const location = `Latitude ${lat}, Longitude ${lon}`;
  return location;
};

const calTempCelcius = (input) => {
  let temp = Math.round(input - 273.15);
  temp += 'ºC';
  return temp;
};

const calTempFah = (input) => {
  let temp = Math.round((input - 273.15) * 9 / 5 + 32);
  temp += 'ºF';
  return temp;
};

const temp = (input) => {
  const option = document.getElementById('select-temperature').value;
  let actual;
  if (option === 'ºC') {
    actual = calTempCelcius(input);
  } else {
    actual = calTempFah(input);
  }
  return actual;
};

const hum = (input) => {
  const humidity = `${input.main.humidity}%`;
  return humidity;
};

const status = (input) => {
  const condition = input.weather[0].description;
  return condition;
};

export {
  city,
  cord,
  temp,
  hum,
  status,
};