$(document).ready(function () {
    console.log('asd');
    var owl1 = $(".survey-slider");
    owl1.owlCarousel({
        items : 5,
        scrollPerPage: true,
        pagination: true,
        slideSpeed: 800
    });
    var owl = owl1.data('owlCarousel');
    $('.fa-nav').filter('.next').click(function () {
        owl.next();
    });
    $('.fa-nav').filter('.prev').click(function () {
        owl.prev();
    });
    // var ch = $('.works-slider').find('.item').children();
    // console.log(ch);
    // // ch.equalHeights();
    // $('.item-1').equalHeights();
});