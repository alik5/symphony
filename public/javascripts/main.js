
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
      //url: 'http://localhost:8080/sales',
      url: 'https://mprealestate.herokuapp.com/sales',
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

        if (visible) {

          for (var i = 0; i < data.length; i++) {

            var url = data[i].Url[0];
            var id = data[i].ID[0]
            var html1 = '',
              html2 = '';
            if (i === 0) {
              html1 = "<li data-target='#myModal-{{ID}}' data-slide-to='" + i + "' class='active'></li>";
              console.log('this should only happen once');
              html2 = "<div class='item active'><img src='" + url + "' alt='photo-" + id + "'></div>";
              console.log("this one is active " + i);

            } else {
              html1 = "<li data-target='#myModal-{{ID}}' data-slide-to='" + i + "'></li>";
              html2 = "<div class='item'><img src='" + url + "' alt='photo-" + id + "'></div>";

            }

            $("#myModal-" + listingId + " #indicators").append(html1);
            $("#myModal-" + listingId + " #carousel-body").append(html2);
            visible = false;
          }
        }
      },
    });
  });
});



function goBack() {
  window.history.back();
  console.log('went back');
}