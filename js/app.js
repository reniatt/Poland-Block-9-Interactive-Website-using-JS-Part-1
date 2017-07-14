var main = function() {
    var RIGHT_ARROW_KEY_CODE = 39;
    var DOWN_ARROW_KEY_CODE = 40;
    var UP_ARROW_KEY_CODE = 38;
	
  $('.article').click(function() {
    $('.article').removeClass('current');
    $('.description').hide();

    $(this).addClass('current');
    $(this).children('.description').show();
  });  
  
  $(document).keydown(function(event) {
	
    if(event.which == RIGHT_ARROW_KEY_CODE) {
      $('.description').hide();
      $('.current').children('.description').show();
    }
    else if(event.which == DOWN_ARROW_KEY_CODE) {
      var currentArticle = $('.current');
	  var article = $('.article');
      var nextArticle = currentArticle.next();
	  
	  currentArticle.removeClass('current');
	  
	  if(nextArticle.length > 0) {
	  nextArticle.addClass('current');
      }
      else if(nextArticle.length <= 0) { 
	  article.first().addClass('current');
      } 
    } 
    else if(event.which == UP_ARROW_KEY_CODE) {
       var currentArticle = $('.current');
	   var article = $('.article');
       var prevArticle = currentArticle.prev();
	   
	   currentArticle.removeClass('current');
	   
	   if(prevArticle.length > 0) {
	   prevArticle.addClass('current');
       }
       else if(prevArticle.length <= 0) {  
	   article.last().addClass('current');
       }  
	}  
  }); 
}

$(main);
