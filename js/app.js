var main = function() {
  $('.article').click(function() {
    $('.article').removeClass('current');
    $('.description').hide();

    $(this).addClass('current');
    $(this).children('.description').show();
  });  
  
  $(document).keypress(function(event) {
    var LETTER_L_EVENT_CODE = 108;
    if(event.which === LETTER_L_EVENT_CODE) {
      $('.description').hide();
      $('.current').children('.description').show();
    }
    var LETTER_P_EVENT_CODE = 112;
    else if(event.which === LETTER_P_EVENT_CODE) {
      var currentArticle = $('.current');
      var nextArticle = currentArticle.next();
      
      currentArticle.removeClass('current');
      nextArticle.addClass('current');
    }
  });
}

$(document).ready(main);
