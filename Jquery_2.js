$(document).ready(function() {
    // Fade in/out effect for the image
    $('button:contains("Click to fade in/out")').click(function() {
        $('#image1').fadeToggle();
    });

    // Dropdown menu functionality
    $('.dropbtn').hover(function() {
          $('.dropdown-content').fadeIn(slow);
    }, function() {
         $('.dropdown-content').fadeOut(slow);
    });

    $('#images1').click(function(){
        $('#image1').toggle(2000);
    });

    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
      });
      $("button").click(function(){
        $("div").animate({left: '250px'});
      });
      $("#animate").click(function(){
 
        $(".animate").animate({
          left: '500px',
          opacity: '0.5',
          height: '300px',
          width: '300px'
        })
      })
      var $images = $('.carousel img');
      var totalImages = $images.length;
      var currentIndex = 0;
 
      function showImage(index) {
          $images.removeClass('active');
          $images.eq(index).addClass('active');
      }
 
      $('#next').click(function() {
          currentIndex = (currentIndex + 1) % totalImages;
          showImage(currentIndex);
      });
 
      $('#prev').click(function() {
          currentIndex = (currentIndex - 1 + totalImages) % totalImages;
          showImage(currentIndex);
      });
 
});
