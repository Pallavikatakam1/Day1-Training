$(document).ready(function(){
    $("#custom-datepicker").datepicker({
        dateFormat:"dd-mm-yyyy",
        minDate:0,
        maxDate:"+1Y"
    });
    $("#drag-box").draggable();

    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: true
    });
});