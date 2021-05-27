$(document).ready(function() {

    $('.first_slider').slick({

        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: '<i class="fa fa-chevron-right slick-next_2" aria-hidden="true"></i>',
        prevArrow: '<i class="fa fa-chevron-left slick-prev_1"  aria-hidden="true"></i>',
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1140,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: false
                }
            },

            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 666,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

});


$(document).ready(function() {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: true,
        loop: true,
        speed: 700,
        effect: 'slide',
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            700: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }
    });

});


$(document).ready(function() {
    var swiper = new Swiper('.slider3', {
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: true,
        loop: true,
        speed: 700,
        effect: 'slide',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            700: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
        }
    });

});


$(document).ready(function() {
    var swiper = new Swiper('.slider4', {
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: true,
        loop: true,
        speed: 700,
        effect: 'slide',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            700: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
        }
    });

});


// manu humbager

$(document).ready(function() {
    var navbtn = $('.navbar-toggler');

    $(navbtn).click(function() {
        $(navbtn).toggleClass('active');
    })
});


$(document).ready(function() {
    new WOW().init();

});