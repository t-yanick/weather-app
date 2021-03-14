const city = (input) => {
	const city = input.name;
	const country = input.sys.country;
	const output = city + ', ' + country;
	return output;
};

const cord = (input) => {
	const lon = input.coord.lon;
	const lat = input.coord.lat;
	const location = 'Longitude ' + lon + ', Latitude ' + lat;
	return location;
};

function calTempCelsius(input) {
	let temp = Math.round(input - 273.15);
	temp += 'ºC';
	return temp;
}

function calTempFah(input) {
	let temp = Math.round(input - 273.15) * 9 / 5 + 32;
	temp += 'ºF';
	return temp;
}

const temp = (input) => {
	const option = document.getElementById('select-temperature');
	let actual;
	if (option === 'ºC') {
		actual = calTempCelsius(input);
	} else {
		actual = calTempFah;
	}
	return actual;
};

const hum = (input) => {
	const humidity = input.main.humidity + '%';
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
