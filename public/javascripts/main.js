
$(document).ready(function() {
  // var listingId;
  $('#listing').on('click', function(e) {
    console.log($(e.currentTarget));
    console.log('go');
    var listingId = $(e.currentTarget).parent()[0].id;
    var url = console.log(listingId);
    $.ajax({
      type: 'POST',
      data: {
        listingId: listingId
      },
      url: 'http://localhost:8080/sales',
      success: function(data) {

        if (data.length === 0) {
          $('#myModal-' + listingId + ' .carousel').hide();
          return;
        }

        for (var i = 0; i < data.length; i++) {
          console.log('called');
          var url = data[i].Url[0];
          var id = data[i].ID[0]
          var html1 = '',
            html2 = '';
          if (i === 0) {
            html1 = "<li data-target='#carousel-example-generic' data-slide-to='" + i + "' class='active'></li>";
            console.log('this should only happen once');
            html2 = "<div class='item active'><img src='" + url + "' alt='photo-" + id + "'></div>"
          } else {
            html1 = "<li data-target='#carousel-example-generic' data-slide-to='" + i + "'></li>";
            html2 = "<div class='item'><img src='" + url + "' alt='photo-" + id + "'></div>"
          }

          $("#myModal-" + listingId + " #indicators").append(html1);
          $("#myModal-" + listingId + " #carousel-body").append(html2);
        }
      }
    });
  });




  // $(".next-btn").click(function(event) {
  //   event.preventDefault();
  // });

  // $('.next-btn').on('click', function(e) {
  //   console.log('clicked');
  //   $(".target").hide();

  //   $.ajax({
  //     type: 'GET',
  //     dataType: "json",
  //     url: 'http://localhost:8080/sales',
  //     success: function(data) {
  //       console.log(data);
  //       console.log('MOREsuccess');
  //     }
  //   })

// });
});



function goBack() {
  window.history.back();
  console.log('went back');
}