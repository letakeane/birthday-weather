function getWeather(location, date) {
  return fetch(`http://api.weatherapi.com/v1/astronomy.json?key=${process.env.API_KEY}&q=${location}&dt=${date}`)
  .then(response => response.json())
  .catch(error => error);
}

export {
  getWeather
}