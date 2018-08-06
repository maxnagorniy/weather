const proxy = 'https://cors-anywhere.herokuapp.com/';
const API_KEY = '59af891aca1988544d93da76bc307852';
const WEATHER_API_URL = `${proxy}https://api.darksky.net/forecast/${API_KEY}/`;
const GEO_API_URL = `${proxy}https://darksky.net/geo?q=`;
const ADDRESS_API_URL = `${proxy}https://darksky.net/rgeo?hires=1`;


function getCoordinates(location) {
    return fetch(`${GEO_API_URL}${location}`)
        .then(response => response.json());
}

function getWeather(lat, lng) {
    return fetch(`${WEATHER_API_URL}${lat},${lng}`)
        .then(response => response.json());
}

function getAddress(lat, lng) {
    return fetch(`${ADDRESS_API_URL}&lat=${lat}&lon=${lng}`)
        .then(response => response.json());
}

export default {
    getWeather,
    getCoordinates,
    getAddress
};