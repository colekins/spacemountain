// function hover(element) {
//   element.setAttribute('src', 'https://i.imgur.com/TT3rBU4.png');
// }
//
// function unhover(element) {
//   element.setAttribute('src', 'https://f4.bcbits.com/img/a2453144117_10.jpg');
// }

function hover() {
  console.log('yo')
  $("#img").attr('src', 'https://i.imgur.com/TT3rBU4.png');
}

function unhover() {
  $("#img").attr('src', 'https://f4.bcbits.com/img/a2453144117_10.jpg');
}

function showInfo() {
  $(".info-box").fadeToggle()
  $('html,body').animate({
        scrollTop: $(".info-box").offset().top},
        'slow');
}
