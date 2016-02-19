
$(window).load(function() {


  $('.beds').each(function() {
    var numofBedsR = $(this).text();
    var beds = ($(numofBedsR).html($.trim(numofBedsR)));
    console.log(numofBedsR);
    $('.beds').addClass(numofBedsR);
  });




  $('.swatch').hover(function() {
    $('.swatch .section-body').addClass('magictime tinLeftIn');
  });

  $('.swatch-white').hover(function() {
    $('.swatch-white .section-body').addClass('magictime tinRightIn');
  });

  $('.swatch3').hover(function() {
    $('.swatch3 .section-body').addClass('magictime tinLeftIn');
  });








  $('.dropdown-menu a').on('click', function(e) {
    var numofBedsR = $(e.currentTarget).text();

    $(".beds").addClass(numofBedsR);

    $(".placeholder").filter("beds 2 Bed").css("background-color", "red");

  });


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