$(document).ready(function(){

  $('#cover-image').on('change', function(ev) {
    var f = ev.target.files[0];
    var fr = new FileReader();
    fr.onload = function(ev2) {
      $('.time-cover-image').css('background-image' , 'url(' + ev2.target.result + ')');
    };
    fr.readAsDataURL(f);
  });



});
