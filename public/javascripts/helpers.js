
$(window).load(function() {



  $('.dropdown-menu a').on('click', function(e, urlA) {
    var urlA = window.location.href;
    console.log(urlA);
    var listingId = $(e.currentTarget).parent()[0].id;
    var url = console.log(listingId);
    $.ajax({
      type: 'GET',
      data: {
        listingId: listingId
      },
      url: urlA,
      success: function(data) {
        JSON.parse('{"Beds": 0}', function(k, v) {
          if (k === '') {
            return v;
          } // if topmost value, return it,
          return v * 2; // else return v * 2.
        });
      }
    })
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