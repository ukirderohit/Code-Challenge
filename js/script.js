var  mn = $(".main-nav");
    mns = "main-nav-scrolled";
    hdr = $('header').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > hdr ) {
    mn.addClass(mns);
  } else {
    mn.removeClass(mns);
  }
});








$(document).ready(function(){
    $('.icondown').each(function() {
        animationHover(this, 'bounce');
    });

    /*hover*/
function animationHover(element, animation){
    element = $(element);
    element.hover(
        function() {
            element.addClass('animated ' + animation);        
        },
        function(){
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 1000);         
        });
}
});