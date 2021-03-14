import home from './home';

const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', search => {
    const form = document.getElementsByTagName('form')[0];
    const input = document.getElementById('search');
    const location = input.value;
    form.reset();
});

home('No');