// const { container } = require("webpack");

const home = (condition) => {
    const container = document.getElementById('container');
    const div = document.createElement('div');
    div.setAttribute('class', 'align-loading');
    container.appendChild(div);
    if (condition === 'No') {
        div.innerHTML = '<span>Waiting for a city ...</span>';
    } else {
        div.innerHTML = '<span>No valid city. Try again.</span>';
    }
};

export default home;