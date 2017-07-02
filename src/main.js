$(document).ready(function(){

  $('#cover-image').on('change', function(ev) {
    var f = ev.target.files[0];
    var fr = new FileReader();
    fr.onload = function(ev2) {
      $('.time-cover-image').css('background-image' , 'url(' + ev2.target.result + ')');
    };
    fr.readAsDataURL(f);
  });

  var trumpImages = [
    'http://i.onionstatic.com/avclub/6364/23/16x9/960.jpg',
    'https://s3.amazonaws.com/assets.forward.com/images/cropped/donaldtrump-0204-1454621037.jpg',
  ];

  $('button.btn-generate').click(function(e){

    e.preventDefault();
    Generate();

  });

  function Generate(){
    $('input.form-control').each(function(index){
      id   = $(this).attr('id');
      text = $(this).val();
      $('.time-text.' + id).text(text);
      $(this).attr('value',text);
    });

  }

});
