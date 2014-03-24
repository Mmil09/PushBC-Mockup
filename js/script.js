$(document).ready(function() {

$('.navbar a').mouseenter(function() {
  if($(this).hasClass('selected') == false) {
    $(this).hover(
        function() {
          $(this).addClass('hov')
        },
        function() {
          $(this).removeClass('hov')
        }
        )  //end hover
    } // end if
  } //end mouseenter function
) //end mouseenter

});