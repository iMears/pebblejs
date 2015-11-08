var UI = require('ui');
var ajax = require('ajax');

// create a Card with title and subtitle
var card = new UI.Card({
  title: 'Weather',
  subtitle: 'Fetching...'
});

// display the Card
card.show();

// construct URL
var cityName = 'London';
var URL = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + "58e923d4f30a492ecf6a0ea39029cc8b";

// make the request
ajax(
  {
    url: URL,
    type: 'json'
  },
  function(data) {
    // Success!
    console.log('Successfully fetched weather data!');

    // Extract data
    var location = data.name;
    var temperature = Math.round(data.main.temp - 273.15) + 'C';

    // Always upper-case first letter of description
    var description = data.weather[0].description;
    description = description.charAt(0).toUpperCase() + description.substring(1);
  },
  function(error) {
    // Failure!
    console.log('Failed fetching weather data: ' + error);
  }
);

// Show to user
card.subtitle(location + ', ' + temperature);
card.body(description);