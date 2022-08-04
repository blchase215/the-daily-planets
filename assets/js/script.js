// changed to jQuery

// var imagesEl = document.getElementById('images');
// var image1El = document.getElementById('image1');
// var image2El = document.getElementById('image2');
// var image3El = document.getElementById('image3');
// var image4El = document.getElementById('image4');
// var newsEl = document.getElementById('news');
var searchCardEl = $('<class = search-card/>')
var searchHeadEl = $('<class = search-head/>')
var inputCardEl = $('<class = input-card/>')
var bottomEl = $('<class = bottom/>')
var resultsEl = $('<class = results/>')
var imagesEl = $('#images');
var image1El = $('#image1');
var image2El = $('#image2');
var image3El = $('#image3');
var image4El = $('#image4');
var newsEl = $('#news');
var headerImageEl = $('#header-image');



























































































// Brian Start
var newsApiKey = '7in8TwtqzrrthvlHglN5nTxws1VNhYaztWPyp3ih';
// var newsQueryString = 'https://api.thenewsapi.com/v1/news/top?api_token=' + newsApiKey;


var marsApiKey = 'psz2c1wYY3t9M2AONzlvkrwmbzmet6Gyv2NrfVQX';
var marsQueryString = 'https://mars-photos.herokuapp.com/api/v1/rovers/curiosity/photos?api_key=' + marsApiKey;

// function marsQueryString(userDate) {
//     var camera = "fhaz";
//     var rover = "curiosity"
//     var marsQuery = "https://api.nasa.gov/mars-photos/api/v1/rovers/"
//     + rover
//     + "/photos?"
//     + "camera=" 
//     + camera
//     + "&earth_date=" 
//     + userDate 
//     + "&api_key="       
//     + api
//     ;
//     return marsQuery;
// }

// console.log(marsQueryString("2022-05-10", marsApiKey));

// function newsQueryString(userDate) {
//     var categories = "general,sports";
//     var newsQuery = "https://api.thenewsapi.com/v1/news/top?api_token=" 
//     + newsApiKey 
//     + "&categories"
//     + categories
//     + "&published_on=" // Y-M-D format
//     + userDate
//     + "&locale=us"
//     ; 
//     return newsQuery;
// }

// console.log(newsQueryString("2022-05-10", newsApiKey));



























// sean start
var userForm = $('#user-form');
// //these variables and lines are to be used in functions for the appropriate ajax requests. This is all fired with the submit button event listener


//addTopStory.attr('href', response.the storyurl path)
var dateInput = $("#date-input");

var runAPIs = function(event) {
    event.preventDefault();

    //the date parameter for both ajax requests
    userDate = dateInput.val();
    var newsApiKey = '7in8TwtqzrrthvlHglN5nTxws1VNhYaztWPyp3ih';
    var newsQueryString = "https://api.thenewsapi.com/v1/news/top?api_token=" + newsApiKey + "&published_on="  + userDate + "&locale=us";
    var marsApiKey = 'psz2c1wYY3t9M2AONzlvkrwmbzmet6Gyv2NrfVQX';
    var marsQueryString = 'https://mars-photos.herokuapp.com/api/v1/rovers/curiosity/photos?api_key=' + marsApiKey;
    var marsDateString = 'https://mars-photos.herokuapp.com/api/v1/rovers/curiosity/photos?api_key='+ marsApiKey + '&earth_date=' + userDate;

   console.log(marsDateString);
    //using AJAX and jquery to make this less painful
    //mars API request
    $.ajax({
        url: marsDateString,
        method: 'GET',
      }).then(function (response) {
        console.log(response);
        //add element creation station here
        var rover1 = $('<img src=' + response.photos[0].img_src + ' id="rover1"/>');
        console.log(response.photos[0].img_src);
        console.log(rover1);
        image1El.html(rover1);
        // $('#rover1').attr('src', response.photos[0].img_src)
        // var rover2 = $('<img id="rover2"/>')
        //add rover2.atr('src', response.the imageurl path)
        // var rover3 = $('<img id="rover3"/>')
        //add rover3.atr('src', response.the imageurl path)
        // var rover4 = $('<img id="rover4"/>')
        //add rover4.atr('src', response.the imageurl path)
        // image1El.html(rover1);
        // image2El.html(rover2);
        // image3El.html(rover3);
        // image4El.html(rover4);
      });

    //news API request
    $.ajax({
       url: newsQueryString,
       method: 'GET',
    }).then(function (response) {
    console.log(response);
    var addTopStory = $('<a href=' + response.data[0].url + 'id="top-story">').text(response.data[0].title);
    newsEl.html(addTopStory);
    var headerImage = $('<img src=' + response.data[0].image_url + ' id="headerImage"/>');
    if(headerImage) {
      console.log(response.data[0].image_url)
      newsEl.append(headerImage)
    }
    else{
      newsEl.append(" There is no header image. The link to the website may be broken ")
    }
    });
      $(".bottom").removeClass("is-hidden")
      $(".top").addClass("is-one-quarter-desktop")
      if ($(window). width() < 700) {
        $('#dropdown-disclaimer').addClass("is-hidden")
      } else{
        $('#dropdown-disclaimer').removeClass("is-hidden")
      };
};  


userForm.on('submit', runAPIs);





































$( document ).ready(function() {
    dateInput.datepicker({ 
        dateFormat: 'yy-mm-dd',
        minDate: new Date(2012,07,06),
        maxDate: "Today",
        changeYear: true,
    });
    // dateInput.on("change", function () {
    //     var fromdate = $(this).val();
    //     alert(fromdate);
    // });
}); 

// $("#date-input").datepicker( "option", "dateFormat", 'yy-mm-dd' );
















































































































































































































































































































//YO
