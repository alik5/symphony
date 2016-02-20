
$(window).load(function() {


  $('.beds').each(function() {
    var numofBedsR = $(this).text();
    var beds = ($(numofBedsR).html($.trim(numofBedsR)));
    //console.log(numofBedsR);
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

  $('.dropdown-menu a').on('click', function(e, element) {

    var text = $(this).text();
    console.log(text);
    if ($(this).text() === "3+ Bed") {
      console.log("is 3");
      var list = tinysort('div#ulx>div', {
        data: 'beds',
        order: 'desc'
      });

    } else if ($(this).text() === "2 Bed") {
      console.log("is 2");
      var list = tinysort('div#ulx>div', {
        data: 'beds',
        order: 'desc'
      });

    } else {
      console.log('not3');
      var list = tinysort('div#ulx>div', {
        data: 'beds'

      });

    }


  });

  // Takes in a list of sorted divs
  var renderListings = function(list) {
    // Clear out the parent div holding the existing list
    $('.itemz').empty();
    console.log("appending list");
    $('.itemz').append(list);
  };


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