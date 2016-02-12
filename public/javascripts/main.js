
$(document).ready(function() {
  var visible = true;

  $("#preloader_4").hide();





  $('.trans').click(function() {
    $('#body').addClass('magictime vanishOut');
    $("#preloader_4").show();
  });


  $('.about').hide();
  $('.more').addClass('active');

  $('.more').click(function() {
    if ($('.more').hasClass("active")) {
      $('.more').text(function(i, text) {
        $('.about').addClass('magictime spaceInUp').show();
        $(this).removeClass("active");
        $('.more').text("Less About Hemenway");
      })
    } else {
      $(this).text(function(i, text) {

        $('.about').addClass('magictime spaceInOut').hide();
        $('.more').addClass("active");
        $('.more').text("More About Hemenway");
      })
    }
  });

  $('.more-g').addClass('active');

  $('.more-g').click(function() {
    if ($('.more-g').hasClass("active")) {
      $('.more-g').text(function(i, text) {
        $('.about').addClass('magictime swashIn').show();
        $(this).removeClass("active");
        $('.more-g').text("Less About Gainsborough");
      })
    } else {
      $(this).text(function(i, text) {
        $('.more-g').text("More About Gainsborough");
        $('.about').addClass('magictime swashOut').hide()
        $('.more-g').addClass("active");
      })
    }
  });

  $('.more-s').addClass('active');

  $('.more-s').click(function() {
    if ($('.more-s').hasClass("active")) {
      $('.more-s').text(function(i, text) {
        $('.about').addClass('magictime swashIn').show();
        $(this).removeClass("active");
        $('.more-s').text("Less About Symphony");
      })
    } else {
      $(this).text(function(i, text) {
        $('.more-s').text("More About Symphony");
        $('.about').addClass('magictime swashOut').hide()
        $('.more-s').addClass("active");
      })
    }
  });

  $('.more-st').addClass('active');

  $('.more-st').click(function() {
    if ($('.more-st').hasClass("active")) {
      $('.more-st').text(function(i, text) {
        $('.about').addClass('magictime swashIn').show();
        $(this).removeClass("active");
        $('.more-st').text("Less About Saint Stephen");
      })
    } else {
      $(this).text(function(i, text) {
        $('.more-st').text("More About Saint Stephen");
        $('.about').addClass('magictime swashOut').hide()
        $('.more-st').addClass("active");
      })
    }
  });




  // var listingId;
  $('.listing').on('click', function(e) {

    var listingId = $(e.currentTarget).parent()[0].id;
    var url = console.log(listingId);
    $.ajax({
      type: 'POST',
      data: {
        listingId: listingId
      },
      url: 'http://localhost:8080/',
      url: 'https://mprealestate.herokuapp.com/',
      url: 'http://www.hemenwayst.com/',
      url: 'http://www.symphonyroad.com/',
      url: 'http://www.gainsboroughstreet.com/',
      //url: 'http://www.saintstephenstreet.com/',
      success: function(data) {


        if (data.length === 0) {
          $('#myModal-' + listingId + ' .carousel').hide();
          return;
        }

        $('.carousel-control.right').click(function() {
          $('#myModal-' + listingId).carousel('next');
          console.log('right');

        });
        $('.carousel-control.left').click(function() {
          $('#myModal-' + listingId).carousel('prev');
          console.log('right');

        });

        if (!$.trim($("#myModal-" + listingId + " #carousel-body").html()).length) {
          for (var i = 0; i < data.length; i++) {
            var html1 = '',
              html2 = '';

            var url = data[i].Url[0];
            var id = data[i].ID[0]


            if (i === 0) {
              html1 = "<li data-target='#myModal-{{ID}}' data-slide-to='" + i + "' class='active'></li>";
              html2 = "<div class='item active'><img src='" + url + "' alt='photo-" + id + "'></div>";
            } else {
              html1 = "<li data-target='#myModal-{{ID}}' data-slide-to='" + i + "'></li>";
              html2 = "<div class='item'><img src='" + url + "' alt='photo-" + id + "'></div>";
            }


            $("#myModal-" + listingId + " #indicators").append(html1);
            $("#myModal-" + listingId + " #carousel-body").append(html2);


          }
        }
      },
    });
  });
});



