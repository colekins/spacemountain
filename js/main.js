function hover() {
  $("#img").attr('src', 'https://i.imgur.com/TT3rBU4.png');
}

function unhover() {
  $("#img").attr('src', 'https://f4.bcbits.com/img/a2453144117_10.jpg');
}

function showInfo() {
  $(".info-box").slideToggle(290)
  var visible = $('.info-box').is(":visible");
  $('html, body').animate({
        scrollTop: $(".info-box").offset().top},
        'slow');
}

var images = [], x = -1;
images[0] = "https://i.imgur.com/TT3rBU4.png";
images[1] = "https://f4.bcbits.com/img/a2453144117_10.jpg";

function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("img").src = images[x];
}
function displayPreviousImage() {
  x = (x <= 0) ? images.length - 1 : x - 1;
  document.getElementById("img").src = images[x];
}
function startTimer() {
    setInterval(displayNextImage, 4300);
}

function isMobile() {
  if(
    navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
    )
  {
  $('#buy').attr("onMouseOver", null)
  $('#buy').attr("onMouseOut", null)
  startTimer()
  }
}

$('document').ready(function(){
  isMobile()
});
