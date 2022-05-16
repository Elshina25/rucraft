jQuery(document).ready(function($) {

    $('.owl-recently').owlCarousel({
        loop:true,
        nav:true,
        dots: true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }


    })

    $('.owl-items_set').owlCarousel({
        loop:true,
        nav:true,
        dots: true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }

       
    })









});