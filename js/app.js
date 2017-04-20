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
    LETTER_O_EVENT_CODE = 111;
    if(event.which === LETTER_L_EVENT_CODE) {
      $('.description').hide();
      $('.current').children('.description').show();
    }
   
    else if(event.which === LETTER_P_EVENT_CODE) {
      var currentArticle = $('.current');
      var nextArticle = currentArticle.next();
      
      currentArticle.removeClass('current');
      nextArticle.addClass('current');
      
      else (event.which === LETTER_O_EVENT_CODE) {
        var curentArticle = $('.current');
        var prevArticle = currentArticle.prev();
        
        currentArticle.removeClass('current');
        prevArticle.addClass('current');
    }
  });
}

$(document).ready(main);
