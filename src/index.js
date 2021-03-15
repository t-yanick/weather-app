import getData from './getdata';
import home from './home';

const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', search => {
  const form = document.getElementsByTagName('form')[0];
  const input = document.getElementById('search');
  const location = input.value;
  getData(location);
  form.reset();
});

home('No');