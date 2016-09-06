var menuToggle = function() {
    $('#menu').click(function() {
        $('.menu').toggleClass('open');
        $('.icon-down-arrow').toggleClass('rotate');
    });
};


var navScroll = function() {
    $('a[href*="#"]:not([href="#"])').on('click', function (event) {
        event.preventDefault();
        $(this).parent().siblings().removeClass('selected');
        // if (!$(this).parent.hasClass('selected')) {
        //
        // }
        var target = $(this.getAttribute('href'));
        if (target.length) {
            $(this).parent().addClass('selected');
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 70
            }, 700);
            return false;
        }
    });
};

$(document).ready(menuToggle);
$(document).ready(navScroll);
