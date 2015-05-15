// AIzaSyC0WghAsEdq5L0VPXKr2s3OUHU5r_TUkXM

// https://www.googleapis.com/youtube/v3
// videos
// snippet



// link html and js
// import jquery
// check api docs
// get api link
// basic site setup

// input something in text field
// hit submit button
// store search value
// setup ajax
// make ajax call
// store returned data
// 
// display video on screen

var fishbowl = {};
fishbowl.mykey = "AIzaSyC0WghAsEdq5L0VPXKr2s3OUHU5r_TUkXM";

fishbowl.init = function() {

  $('#submit').on('click', function(){
    var searchVal = $('#search').val();
    console.log(searchVal);
    searchVal = searchVal + " karaoke";
    console.log(searchVal);
    fishbowl.findVideo(searchVal);
  });

};

fishbowl.displayVideo = function(boy) {
  
  var finalString = '<iframe width="560" height="315" src="https://www.youtube.com/embed/'
  + boy
  + '?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>';

  $('#videoHolder').html(finalString);
  
};


fishbowl.findVideo = function(tohar) {

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      type: 'video',
      part: 'snippet',
      key: fishbowl.mykey,
      q: tohar
    },
    success: function(milena) {
      var theVideoId = milena.items[0].id.videoId;
      console.log(theVideoId);
      fishbowl.displayVideo(theVideoId);
    }
  });

};





$(function() {
  fishbowl.init();
});