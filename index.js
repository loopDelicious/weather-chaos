let request = require('request');
let secrets = require('./secrets');

let apiKey = secrets.openweather;
let city = 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`

request(url, function (err, response, body) {

  let weather = JSON.parse(body)
  let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;

  if(err){
    console.log('error:', error);
  } else {
    console.log('message:', message);
  }
});

