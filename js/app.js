var main = function() {
  $('.article').click(function() {
    $('.article').removeClass('current');
    $('.description').hide();

    $(this).addClass('current');
    $(this).children('.description').show();
  });  
  
  $(document).keydown(function(event) {
    
    if(event.which == 39) {
      $('.description').hide();
      $('.current').children('.description').show();
    }
    else if(event.which == 40) {
      var currentArticle = $('.current');
      var nextArticle = currentArticle.next();
 
      currentArticle.removeClass('current');
      nextArticle.addClass('current');
    } 
    else if(event.which == 38) {
      var currentArticle = $('.current');
      var prevArticle = currentArticle.prev();
	    
      currentArticle.removeClass('current');
      prevArticle.addClass('current'); 
    }
  });
}

$(document).ready(main);
