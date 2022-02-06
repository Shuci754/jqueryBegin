$(document).ready(function(){
   $('.d').css({
       'width':'400px',
       'height':'300px',
       'border':'2px solid',
       'background':'yellow',
       'margin':'auto',
       'margin-top':'70px'
   });
   $('.d').click(function(){
       $(this).css('background','orange');
   });
   $('.d').dblclick(function(){
       $(this).css('background','green');
   });
   $('.d').contextmenu(function(){
       $(this).css('background','red');
   });
   $('.d').mouseenter(function(){
       $(this).css('background','black');
   });
   $('.d').mouseleave(function(){
       $(this).css('background','yellow');
   });

});