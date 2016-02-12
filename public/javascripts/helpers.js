
$(window).load(function() {

  $('#preloader_4')
    .hide()
    .ajaxStart(function() {
      $(this).show();
    })
    .ajaxStop(function() {
      $(this).hide();
    });
  // PAGE IS FULLY LOADED  
  // FADE OUT YOUR OVERLAYING DIV
  $('#preloader_4').fadeOut();

  $('div.hidden').fadeIn(1000).removeClass('hidden');
});