// Init storage
const storage = new Storage();
// Get Stored location data
const weatherLocation = storage.getLocationData();
// Init weather object
const weather = new weather(weatherLocation.city, weatherLocation.state);
// Init UI
const ui = new UIEvent();

// Get weather in DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').nodeValue;
    const state = document.getElementById ('state').nodeValue;
    
    // Change location
    weather.changeLocation (city, state);

    // Set location in LS
    storage.setLocationData(city, state);

    // Get and display weather
    getWeather();

    // close modal
    $('#locModal').modal('hide');
});

function getWeather () {
  weather.getWeather()
  .then (resulls => {
    ui.paint(results);
  })
  .catch (err => console.log(err));
}