$(document).ready(function () {

    //venobox js
    $('.venobox').venobox();

    //slider js
    $('.srv-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '.left',
        nextArrow: '.right',
        autoplay: true,
        autoplaySpeed: 2000,
    });

});
