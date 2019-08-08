$(document).ready(function(){
    $('#team-carousel').owlCarousel({
    center: true,
    items:2,
    loop:true,
    margin:10,
    responsiveClass:true,
    nav:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:true
        }
    }
    });

    /* Plans */
    $('#plans').owlCarousel({
        center: true,
        items:2,
        loop:true,
        margin:10,
        responsiveClass:true,
        nav:true,
        responsive:{
            0:{
                items:1,
                nav:true,
                loop:false,
            },
            600:{
                items:3,
                nav:true,
                loop:false,
            }
        }
        });
});


/* Show Nav */
$('.owl-carousel').find('.owl-nav').removeClass('disabled');
$('.owl-carousel').on('changed.owl.carousel', function(event) {
	$(this).find('.owl-nav').removeClass('disabled');
});


$(function() {                       //run when the DOM is ready
    $(".search-btn").click(function() {  //use a class, since your ID gets mangled
      event.preventDefault();
      //$(".form-control").addClass("search-input-show");      //add the class to the clicked element
      $(".search-input-main").toggle();
    });
  });
/* ========================================== 
scrollTop() >= 300
Should be equal the the height of the header
========================================== */

$(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
        $('header').addClass('fixed-top purple-top');
    }
    else {
        $('header').removeClass('fixed-top purple-top');
    }
});

/* Search Bar */
$(document).ready(function(){
    var submitIcon = $('.searchbox-icon');
    var inputBox = $('.searchbox-input');
    var searchBox = $('.searchbox');
    var isOpen = false;
    submitIcon.click(function(){
        if(isOpen == false){
            searchBox.addClass('searchbox-open');
            inputBox.focus();
            isOpen = true;
        } else {
            searchBox.removeClass('searchbox-open');
            inputBox.focusout();
            isOpen = false;
        }
    });  
     submitIcon.mouseup(function(){
            return false;
        });
    searchBox.mouseup(function(){
            return false;
        });
    $(document).mouseup(function(){
            if(isOpen == true){
                $('.searchbox-icon').css('display','block');
                submitIcon.click();
            }
        });
});
 /*   function buttonUp(){
        var inputVal = $('.searchbox-input').val();
        inputVal = $.trim(inputVal).length;
        if( inputVal !== 0){
            $('.searchbox-icon').css('display','none');
        } else {
            $('.searchbox-input').val('');
            $('.searchbox-icon').css('display','block');
        }
    }*/