var main = function() {
  $('.article').click(function() {
    $('.article').removeClass('current');
    $('.description').hide();

    $(this).addClass('current');
    $(this).children('.description').show();
  });  
  
  $(document).keydown(function(event) {
    var RIGHT_ARROW_KEY_CODE = 39;
    var DOWN_ARROW_KEY_CODE = 40;
	var UP_ARROW_KEY_CODE = 38;
	
    if(event.which == RIGHT_ARROW_KEY_CODE) {
      $('.description').hide();
      $('.current').children('.description').show();
    }
    else if(event.which == DOWN_ARROW_KEY_CODE) {
      var currentArticle = $('.current');
      var nextArticle = currentArticle.next();
      
      currentArticle.removeClass('current');
      nextArticle.addClass('current');
    } 
      if(event.which == UP_ARROW_KEY_CODE) {
      var currentArticle = $('.current');
      var prevArticle = currentArticle.prev();
      
      currentArticle.removeClass('current');
      prevArticle.addClass('current'); 
      }
  });
}

$(document).ready(main);
