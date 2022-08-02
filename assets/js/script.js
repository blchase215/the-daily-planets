// changed to jQuery

// var imagesEl = document.getElementById('images');
// var image1El = document.getElementById('image1');
// var image2El = document.getElementById('image2');
// var image3El = document.getElementById('image3');
// var image4El = document.getElementById('image4');
// var newsEl = document.getElementById('news');
var searchCardEl = document.querySelectorAll('#search-card');
var searchHeadEl = document.querySelectorAll('#search-head');
var inputCardEl = document.querySelectorAll('#input-card');
var bottomEl = document.querySelectorAll('#bottom');
var resultsEl = document.querySelectorAll('#results');
var imagesEl = $('images');
var image1El = $('image1');
var image2El = $('image2');
var image3El = $('image3');
var image4El = $('image4');
var newsEl = $('news');

























































































// Brian Start
var newsApiKey = '7in8TwtqzrrthvlHglN5nTxws1VNhYaztWPyp3ih';
var newsQueryString = 'https://api.thenewsapi.com/v1/news/top?api_token=' + newsApiKey;
var marsApiKey = 'psz2c1wYY3t9M2AONzlvkrwmbzmet6Gyv2NrfVQX';
var marsQueryString = 'https://api.nasa.gov/planetary/apod?api_key=' + marsApiKey;
var marsDateString = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key='+ marsApiKey + '&earth_date=2015-6-3';

// console.log(newsQueryString);
console.log(marsQueryString);
console.log(marsDateString);

// var citySearchInput = function(event) {
//     event.preventDefault();
//     //makes the city query parameter in the openweathmap API equal to the userinput
//     city = searchInput.val();
//     var queryURL =“https://api.openweathermap.org/data/2.5/weather?q=” + city + “&appid=” + APIkey;
//    console.log(queryURL);
//     //using AJAX and jquery to make this less painful
//     $.ajax({
//         url: queryURL,
//         method: ‘GET’,
//       }).then(function (response) {
//         console.log(response);
//         //math responsible for making temp in Farenheit
//         var tempF = (response.main.temp - 273.15) * 1.80 + 32;
//         //setting component of todays weather in city header card
//         cityName.html(response.name);
//         var icon = response.weather[0].icon;
//         var iconURL = “https://openweathermap.org/img/wn/”+icon+“.png”;
//         $(‘.todays-weather’).html(“<img src=“+iconURL+“>”);
//         $(‘.todays-temp’).html(‘Temp(F): ’ + (tempF).toFixed(1));
//         $(‘.todays-wind’).html(‘Wind: ’ + response.wind.speed + ‘mph’ );
//         $(‘.todays-humidity’).html(‘Humidity: ’ + response.main.humidity);
//         //creating a button capable of performing cityDataPopulate() to redo most of this function when pressed
//         var newCityBtn = $(‘<btn>‘+ city + ‘</btn>’);
//         newCityBtn.attr(‘class’, ‘city-btn’);
//         newCityBtn.attr(‘type’, ‘button’);
//         newCityBtn.attr(‘style’, ‘text-align:center’)
//         userCities.append(newCityBtn);
//         //run code to fetch the data to populate the five forecast cards in a nested function
//         cityForecast(response.id);
//         //UVIndex is called here using onecall API. Lat and Long are pulled from this API response. This single API response is responsible for two other API responses.
//         UVIndex(response.coord.lon, response.coord.lat);
//         //set Store the city name in a number starting at one and incrementing each time this function is called until page is refreshed.
//         keyNum++;
//         console.log(keyNum);
//         localStorage.setItem(keyNum, city);
//       });
// };











































//these variables and lines are to be used in functions for the appropriate ajax requests. This is all fired with the submit button event listener
var rover1 = $('<img id="rover1"/>')
//add rover1.atr('src', response.the imageurl path)
var rover2 = $('<img id="rover2"/>')
//add rover2.atr('src', response.the imageurl path)
var rover3 = $('<img id="rover3"/>')
//add rover3.atr('src', response.the imageurl path)
var rover4 = $('<img id="rover4"/>')
//add rover4.atr('src', response.the imageurl path)


var addTopStory = $('<a id="top-story">')
//addTopStory.attr('href', response.the storyurl path)

image1El.html(rover1);
image2El.html(rover2);
image3El.html(rover3);
image4El.html(rover4);
newsEl.html(addTopStory);














































































































































































































































































































//YO
