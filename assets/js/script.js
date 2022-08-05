// eric start
//global DOM variables
var searchCardEl = $('<class = search-card/>');
var searchHeadEl = $('<class = search-head/>');
var inputCardEl = $('<class = input-card/>');
var bottomEl = $('<class = bottom/>');
var resultsEl = $('<class = results/>');
var imagesEl = $('#images');
var image1El = $('#image1');
var image2El = $('#image2');
var image3El = $('#image3');
var image4El = $('#image4');
var newsEl = $('#news');
var headerImageEl = $('#header-image');

// sean start
//GDVs for runAPIs function
var userForm = $('#user-form');
var dateInput = $("#date-input");
//run both apis when submit even is fired
var runAPIs = function(event) {
    event.preventDefault();
    //reset dynamic elements
    newsEl.html('');
    image1El.html('');
    image2El.html('');
    image3El.html('');
    image4El.html('');
    //sean key: 2mtrY9KLEh3TbTNFIlLfNrY7ETzWC2mGtB2cFz3S
    //brian key: 7in8TwtqzrrthvlHglN5nTxws1VNhYaztWPyp3i
    // Chase key newsapi.org: 77ded382149945d0aabeabaa30a76f24 
    // Chase key TheNewApi: XK5702MK41VUJtmCMj8Qbs77KCyEaR4BWAoGYZd3
    // Eric key: wOeJU9w0Mf8etjxDU6zhHSSC6XvYZbhbUEdy1gog
    //the date parameter for both ajax requests
    userDate = dateInput.val();
    //defining parameters for mars cameras
    var camera = "fhaz";
    var rhaz = "rhaz";
    var navCam = "navcam";
    var camera2 = "mast";
    //active api keys and urls
    var newsApiKey = 'XK5702MK41VUJtmCMj8Qbs77KCyEaR4BWAoGYZd3';
    //define parameters for news api
    var newsQueryString = "https://api.thenewsapi.com/v1/news/top?api_token=" + newsApiKey + "&published_on="  + userDate + "&locale=us";
    var marsApiKey = 'psz2c1wYY3t9M2AONzlvkrwmbzmet6Gyv2NrfVQX';
    //define parameters for mars api
    var marsDateString = 'https://mars-photos.herokuapp.com/api/v1/rovers/curiosity/photos?api_key='+ marsApiKey + '&earth_date=' + userDate + "&camera=" + camera + "&camera=" + rhaz + "&camera=" + navCam + "&camera=" + camera2;
    //using AJAX and jquery to make this less painful
    //autofill date search bar with last input before refresh, do this by updating local storage with whatever the last search was
    localStorage.setItem('lastDate', userDate);
    //mars API request
    $.ajax({
        url: marsDateString,
        method: 'GET',
      }).then(function (response) {
        console.log(response);
        image1El.html('');
        image2El.html('');
        image3El.html('');
        image4El.html('');
        //make sure there is a [i]th picture, so that program doesnt stop if there isnt. Try to get 4 pictures.
         if (response.photos[0].img_src){image1El.html($('<img src=' + response.photos[0].img_src + ' id="rover1"/>'));
        };
         if (response.photos[1].img_src){image2El.html($('<img src=' + response.photos[1].img_src + ' id="rover2"/>'));
        };
         if (response.photos[2].img_src){image3El.html($('<img src=' + response.photos[2].img_src + ' id="rover3"/>'));
        };
         if (response.photos[3].img_src){image4El.html($('<img src=' + response.photos[3].img_src + ' id="rover4"/>'));
        };
      });

    //news API request
    $.ajax({
       url: newsQueryString,
       method: 'GET',
    }).then(function (response) {
      console.log(response);
    //if there is no response, send a message instead. Stop trying to run this program.
    if(response.data.length === 0){
      newsEl.append('<h3> No data for that date was found! Dates before January 1st 2021 currently will not fetch terrestrial news! </h3>')
      return;
    }
    //add a link with the text content being the headline and the href being the supplied url
    var addTopStory = $('<a href=' + response.data[0].url + 'id="top-story">').text(response.data[0].title);
    newsEl.html(addTopStory);
    //add the headline image under the link
    var headerImage = $('<img src=' + response.data[0].image_url + ' id="headerImage"/>');
    if(headerImage) {
      newsEl.append(headerImage)
    }
    else{
      newsEl.append(" There is no header image. The link to the website may be broken ")
    }
    });
    //scripted media queries
    //unhide the bottom of the screen (right side of the screen on desktop)
      $(".bottom").removeClass("is-hidden")
      //push the top of the screen to the left on desktop
      $(".top").addClass("is-one-quarter-desktop")
      //hide the disclaimer after search on mobile
      if ($(window). width() < 700) {
        $('#dropdown-disclaimer').addClass("is-hidden")
      } else{
        $('#dropdown-disclaimer').removeClass("is-hidden")
      };
};  
//on submission
userForm.on('submit', runAPIs);

//on refresh
$( document ).ready(function() {
  //defines datepicker properties
    dateInput.datepicker({ 
        dateFormat: 'yy-mm-dd',
        minDate: new Date(2012,07,06),
        maxDate: "Today",
        changeYear: true,
    });
    //sets default date to last searched date on refresh
    if (localStorage.getItem('lastDate')) {
      dateInput.val(localStorage.getItem('lastDate'));
      console.log(localStorage.getItem('lastDate'));
     } else {console.log('No stored date!')};
}); 
