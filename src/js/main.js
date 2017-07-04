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
  $('#darken-enable').click(function(e){
    $('.time-cover-image').addClass('darkened');
  });
  $('#darken-disable').click(function(e){
    $('.time-cover-image').removeClass('darkened');
  });
  $(".search-clear").click(function(){
    console.log('Clearing');
    $(this).prev().val('');
    $(this).prev().attr('value','');
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
  $("html, body").animate({ scrollTop: 60 }, "250");
}

// Creates magazine image and pops results in modal window
function Save(){

  html2canvas($('.magazine-cover'), {
    dpi: 401,
    allowTaint: true,
    useCORS: true,

    onrendered: function(canvas) {
      // document.body.appendChild(canvas);
      $('.modal-body canvas').remove();
      $('.modal-body').append(canvas);
      $("html, body").animate({ scrollTop: 60 }, "250");
      $('#myModal').modal('show')

    }
  });

}

// Selects random magazine covers
function Random(){
  coverSelection = getRandomIntInclusive(0,trumpCovers.length - 1);
  $('.time-cover-image').css('background-image', 'url(' + trumpCovers[coverSelection][1] + ')');
  trumpCovers[coverSelection][2].forEach(function(entry){
    $('.time-text.' + entry[0]).text(entry[1]);

  });
  console.log(trumpCovers[coverSelection][0]);
  $('input.form-control').each(function(index){
    id   = $(this).attr('id');
    text = $('.time-text.' + id).text();
    $(this).val(text);
    $(this).attr('value',text);
  });
  $("html, body").animate({ scrollTop: 60 }, "250");
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

var trumpCovers = [
  [
    'weener',
    'http://pixelglitch.net/wp-content/uploads/2017/07/trump-hotdog.jpg',
    [
      ['top'        , 'The Donald can\'t stop eating weeners!'],
      ['left-large' , 'Weener Feast' ],
      ['left-medium', 'Will he ever stop?' ],
      ['right-1'    , 'Surgeons are devising a plan to remove the lodged weeners ' ],
      ['right-2'    , 'Osker Myers shares are through the roof' ],
      ['right-3'    , 'Eric Trump has filed a trademark for Trump Sausage' ],
    ]
  ],
  [
    'russia-1',
    'images/russia-1.jpg',
    [
      ['top'        , 'Кисляк любит золотые ливни так же, как Трамп'],
      ['left-large' , 'Мудак' ],
      ['left-medium', 'Кто-то сказал, что оукс и кокаин?' ],
      ['right-1'    , 'Ты даже не знаешь, что Трамп трахает тебя в задницу' ],
      ['right-2'    , 'Просто президентский материал ...' ],
      ['right-3'    , 'Эти двойные подбородки хорошо работают вместе' ],
    ]
  ],
  [
    'russia-2',
    'images/russia-2.jpg',
    [
      ['top'        , 'Товарищ козырь - лучший'],
      ['left-large' , 'большие руки' ],
      ['left-medium', 'Но еще больший пенис' ],
      ['right-1'    , 'Впитывание в мочу легко, когда вы являетесь этим богатым' ],
      ['right-2'    , 'Ты собираешься заработать мне много денег, верно?' ],
      ['right-3'    , 'Наш президент, проститутка' ],
    ]
  ],
  [
    'graffiti',
    'images/graffiti.jpg',
    [
      ['top'        , 'The Foreign Lover You Heard About But Ignored...'],
      ['left-large' , 'In Bed Together?' ],
      ['left-medium', 'Make America Scandalous Again' ],
      ['right-1'    , 'An Exclusive Look at The New Couples Bedroom Banter' ],
      ['right-2'    , 'How will Melania React?' ],
      ['right-3'    , 'How Trump\'s Secret Love Relationship Could Creep Into the White House' ],
    ]
  ],
  [
    'trump-dump',
    'http://pixelglitch.net/wp-content/uploads/2017/07/TrumpDump-1.jpg',
    [
      ['top'        , 'The Smell That Made It\'s Way To Your Doorstep...' ],
      ['left-large' , 'Trump\'s Turtle Head' ],
      ['left-medium', 'The Biggest Shit America Took' ],
      ['right-1'    , 'A Closer Look at the Skidmarks Left Behind' ],
      ['right-2'    , 'We Thought it was Just a Fart, Now it\'s Much More than a Shart' ],
      ['right-3'    , '"Never a worse blowout since Taco Bell and PBR" - Michael Moore' ],
    ]
  ],
  [
    'trump-chin',
    'http://pixelglitch.net/wp-content/uploads/2017/07/TrumpChin-1.jpg',
    [
      ['top'        , 'The Most Influential Man In The History of Mankind' ],
      ['left-large' , 'Believe Me' ],
      ['left-medium', 'It\'s Gonna Be Great' ],
      ['right-1'    , '"He Can Do No Wrong" - Sean Spicer' ],
      ['right-2'    , 'Global Warming - A Facade' ],
      ['right-3'    , '"The Most Electoral Votes for a Republican Since Reagan" - Truth' ],
    ]
  ],
  // ['prick','http://i.onionstatic.com/avclub/6364/23/16x9/960.jpg'],
  // ['creep','https://s-media-cache-ak0.pinimg.com/originals/a9/95/99/a995991386bc33ad3e12569753671553.jpg'],
  // ['wrestling','http://image.al.com/home/bama-media/width620/img/opinion/photo/21532329-mmmain.jpg'],
  //
];
