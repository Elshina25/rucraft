jQuery(document).ready(function($) {


    $('.mobile_menu_button').click(function(event){
        $('.mobile_menu').addClass('active');
        $('html').addClass('overflow');
        $('.black').addClass('active');
    });

    $('.close_menu').click(function(event){
        $('.mobile_menu').removeClass('active');
        $('html').removeClass('overflow');
        $('.black').removeClass('active');
    });




    $('.owl-recently').owlCarousel({
        loop:true,
        nav:true,
        dots: true,
        margin:10,
        mouseDrag: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }


    })

  


    })

    $('.owl-items_set').owlCarousel({
        loop:true,
        nav:true,
        dots: true,
        margin:10,
        mouseDrag: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }

       
    })
