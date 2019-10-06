$(document).ready(function() {
  var $videoSrc;  
  $('.video-lnk').click(function() {
      $videoSrc = $(this).data("src");
      $(this).closest(".modal").modal("toggle");
      console.log($(this).parent(".modal"));
  });
    
  $('#myModal').on('shown.bs.modal', function (e) {
  $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
  })
    
  $('#myModal').on('hide.bs.modal', function (e) {
      $("#video").attr('src',$videoSrc); 
  }) 
});
  