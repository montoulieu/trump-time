

$(document).ready(function(){

  $('#cover-image').on('change', function(ev) {
    var f = ev.target.files[0];
    var fr = new FileReader();
    fr.onload = function(ev2) {
      $('.time-cover-image').css('background-image' , 'url(' + ev2.target.result + ')');
    };
    fr.readAsDataURL(f);
  });

  $('body').keypress(function (e) {
   var key = e.which;
   if( key == 13 ){
      Generate();
    }
  });

  $('button.btn-generate').click(function(e){
    e.preventDefault();
    Generate();
  });
  $('button.btn-save').click(function(e){
    e.preventDefault();
    Save();
  });
  $('button.btn-random').click(function(e){
    e.preventDefault();
    Random();
  });


});

// Transfers text from input fields to magazine layout
function Generate(){
  $('input.form-control').each(function(index){
    id   = $(this).attr('id');
    text = $(this).val();
    $('.time-text.' + id).text(text);
    $(this).attr('value',text);
  });
  $("html, body").animate({ scrollTop: 0 }, "slow");
}

// Creates magazine image and pops results in modal window
function Save(){

}
// Selects random magazine covers
function Random(){
  coverSelection = getRandomIntInclusive(0,trumpCovers.length - 1);
  console.log(trumpCovers[coverSelection][1]);
  $('.time-cover-image').css('background-image', 'url(' + trumpCovers[coverSelection][1] + ')');
  trumpCovers[coverSelection][2].forEach(function(entry){
    $('.time-text.' + entry[0]).text(entry[1]);

  });

}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

var trumpCovers = [
  // ['prick','http://i.onionstatic.com/avclub/6364/23/16x9/960.jpg'],
  // ['creep','https://s-media-cache-ak0.pinimg.com/originals/a9/95/99/a995991386bc33ad3e12569753671553.jpg'],
  // ['wrestling','http://image.al.com/home/bama-media/width620/img/opinion/photo/21532329-mmmain.jpg'],
  //
  [
    'weener',
    'http://pixelglitch.net/wp-content/uploads/2017/07/trump-hotdog.jpg',
    [
      ['top'        , 'The Donald can\'t stop eating weeners!'],
      ['left-large' , 'weener feast' ],
      ['left-medium', 'Will he ever stop?' ],
      ['right-1'    , 'Surgeons are devising a plan to remove the lodged weeners ' ],
      ['right-2'    , 'Osker Myers shares are through the roof' ],
      ['right-3'    , 'Eric Trump has filed a trademark for Trump Sausage' ],
    ]
  ],
  [
    'russia-1',
    'http://pixelglitch.net/wp-content/uploads/2017/07/trump-russia.jpg',
    [
      ['top'        , 'Товарищ козырь - лучший'],
      ['left-large' , 'большие руки' ],
      ['left-medium', 'Но еще больший пенис' ],
      ['right-1'    , 'Впитывание в мочу легко, когда вы являетесь этим богатым' ],
      ['right-2'    , 'большие руки' ],
      ['right-3'    , 'большие руки' ],
    ]
  ],
  [
    'russia-2',
    'http://pixelglitch.net/wp-content/uploads/2017/07/trumprussia_feat-e1499039554343.jpg',
    [
      ['top'        , 'Товарищ козырь - лучший'],
      ['left-large' , 'большие руки' ],
      ['left-medium', 'Но еще больший пенис' ],
      ['right-1'    , 'Впитывание в мочу легко, когда вы являетесь этим богатым' ],
      ['right-2'    , 'большие руки' ],
      ['right-3'    , 'большие руки' ],
    ]
  ]
];