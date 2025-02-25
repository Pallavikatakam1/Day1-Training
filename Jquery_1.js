$(document).ready(function(){
    $('.para1').click(function(){
        $(this).hide();
    });
    $('.parashow1').click(function(){
        $('.para1').show(500);
        $('.para1').css({'background-color':'aquamarine','font-size':'30px'});
    });
 
    $('#para2').click(function(){
        $(this).hide();
    });
    $('#parashow2').click(function(){
        $('#para2').show(1000);
        $('#para2').css({'background-color':'cornflowerBlue','font-size':'30px'});
    });
 
    $('#para3').dblclick(function(){
        $(this).css({'background-color':'bisque','font-size':'30px','font-family':'cursive'});
    });
 
    $('#newclass').click(function(){
        $('p:first').addClass('addedclass1');
    });
 
    $('#removeclass').click(function(){
        $('p:first').removeClass('addedclass1');
    });
 
    $('#images1').click(function(){
        $('#image1').toggle(2000);
    });
 
});