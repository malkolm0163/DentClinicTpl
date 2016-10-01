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
    $('.license').find('.plus').magnificPopup({
        type:'image',
        closeBtnInside: true
    });

    $('.benefit-item').equalHeights();
});