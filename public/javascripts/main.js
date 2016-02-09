
$(document).ready(function() {
  var visible = true;

  $("#preloader_4").hide();





  $('.trans').click(function() {
    $('#body').addClass('magictime vanishOut');
    $("#preloader_4").show();
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
      url: 'http://localhost:8080/sales',
      url: 'https://mprealestate.herokuapp.com/sales',
      url: 'https://hemenwayst.com/sales',
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



