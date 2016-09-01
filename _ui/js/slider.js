var menuToggle = function() {
    $('#menu').click(function() {
        $('.menu').toggleClass('open');
        $('.icon-down-arrow').toggleClass('rotate');
    });
};


var navScroll = function() {
    $('a[href*="#"]:not([href="#"])').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 700);
            return false;
        }
    });
};

$(document).ready(menuToggle);
$(document).ready(navScroll);