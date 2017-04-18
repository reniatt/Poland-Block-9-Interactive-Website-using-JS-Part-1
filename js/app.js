var main = function() {
  $('.article').click(function() {
    $('.article').removeClass('current');
    $('.description').hide();

    $(this).addClass('current');
    $(this).children('.description').show();
  });  
  
  $(document).keypress(function(event) {
    LETTER_P_EVENT_CODE = 112;
    LETTER_L_EVENT_CODE = 108;
    if(event.which === LETTER_L_EVENT_CODE) {
      $('.description').hide();
      $('.current').children('.description').show();
    }
   
    else if(event.which === LETTER_P_EVENT_CODE) {
      var currentArticle = $('.current');
      var nextArticle = currentArticle.next();
      var firstArticle = currentArticle;
      
      currentArticle.removeClass('current');
      nextArticle.addClass('current');
      lastArticle.getClass ('firstArticle');
    }
  });
}

$(document).ready(main);
