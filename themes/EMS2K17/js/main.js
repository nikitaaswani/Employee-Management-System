 $ = jQuery;


$(document).ready(function (){
  $(".menu a").each(function(){
    var classname=$(this).attr('data-drupal-link-system-path');
    classname=classname.replace(/[^a-z_-]/g,'');
    $(this).parent().addClass(classname);
  });
  $( ".hamburger" ).click(function() {
    $( ".sidebar" )
      .animate({
        left: "0"
      }, {
        queue: false,
        duration: 1000
      });
  });
  $( ".cross" ).click(function() {
    $( ".sidebar" ).animate({
      left: "-100%"
    }, {
      queue: false,
      duration: 1000
    });
  });
});


