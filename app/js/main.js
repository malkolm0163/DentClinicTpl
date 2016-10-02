$(document).ready(function () {
    if(!Modernizr.svg) {
        $("img[src*='svg']").attr("src", function() {
            return $(this).attr("src").replace(".svg", ".png");
        });
    }

    var owl1 = $(".survey-slider");
    owl1.owlCarousel({
        items : 3,
        pagination: true,
        slideSpeed: 800,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [980,3],
        itemsTablet: [768,1]
    });
    var owl = owl1.data('owlCarousel');
    $('.fa-nav').filter('.next').click(function () {
        owl.next();
    });
    $('.fa-nav').filter('.prev').click(function () {
        owl.prev();
    });


    var items = $('.works-slider').find('.items');
    items.owlCarousel({
        items: 1,
        pagination: false,
        navigation: true,
        singleItem: true,
        slideSpeed: 800,
        addClassActive: true,
        afterMove: function () {
            var i = items.find('.owl-item').filter('.active').children();
            var classname = '.' + i.attr('class').substr(5);
            var wa = $('.work-items').children();
            wa.filter('.active').removeClass('active');
            wa.filter(classname).addClass('active');
        },
        navigationText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ]
    });
    var owl2 = items.data('owlCarousel');
    var owl2Items = $('.work-items').children();
    owl2Items.click(function () {
        var th = $(this);
        if(th.hasClass('active')) return false;
        var classnames = th.attr('class');
        var regex = /(expensive|complicated|interesting|unusual)/g;
        var m = regex.exec(classnames);
        if (m===null) return false;
        owl2Items.filter('.active').removeClass('active');
        var newActive = '.' + m[0];
        owl2Items.filter(newActive).addClass('active');
        switch (m[0]){
            case 'expensive':  {
                owl2.goTo(0, 200);
                break;
            }
            case 'complicated':  {
                owl2.goTo(1, 200);
                break;
            }
            case 'interesting':  {
                owl2.goTo(2, 200);
                break;
            }
            case 'unusual':  {
                owl2.goTo(3, 200);
                break;
            }
            default:  {
                console.error('Not Found');
            }
        }

        return false;
    });


    /* fill top menu */

    var btnHtml = $('.top-nav').find('.menu').html();
    var btnMenu = $('.button-menu');
    btnMenu.find('.btn-menu')
        .css('display', 'none')
        .html(btnHtml);

    btnMenu.click(function () {
        var a = $(this).children('.btn-menu');
        a.fadeToggle();
    });
    // $('.license').find('.plus').magnificPopup({
    //     type:'image',
    //     closeBtnInside: true
    // });

    $(document).ready(function() {
        $('.image-link').magnificPopup({
            type:'image'});
    });

    $('.benefit-item').equalHeights();

    var faq = $("#faq-carousel");
    faq.owlCarousel({

        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        items: 1,
        pagination: false,
        paginationNumbers: false,
        singleItem:true,
        mouseDrag: false,
        touchDrag: false

    });
    var faqOwl = faq.data('owlCarousel');
    $('.faquest').on('click', function () {
        var th = $(this);
        faqOwl.goTo(th.index(), 300);
        var par = th.parent();
        par.find('.active').removeClass('active');
        th.addClass('active');
    });

    var slider = $('.reviews').find('.slider');

    slider.owlCarousel({
        singleItem: true,
        addClassActive: true,
        pagination: false,
        slideSpeed: 800,
        autoHeight: true,
        navigation: true,
        navigationText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ]
    });
    var sliderOwl = slider.data('owlCarousel');
    sliderOwl.goTo(1);
    $('a[href="#popup-form"]').magnificPopup({
        closeBtnInside: true
    });

    $('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
        var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000); // анимируем скроолинг к элементу scroll_el
        }
        return false; // выключаем стандартное действие
    });
});