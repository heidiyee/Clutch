var menuToggle = function() {
    $('#menu').click(function(e) {
        $('.menu').toggleClass('open');
        $('.icon-down-arrow').toggleClass('rotate');
        console.log('working');
    });
};

var navScroll = function() {
    $('a[href*="#"]:not([href="#"])').on('click', function (event) {
        event.preventDefault();

        $(this).parent().siblings().removeClass('selected');
        var target = $(this.getAttribute('href'));
        if (target.length) {

            if ($('#menu').is(':visible')) {
                $('.menu').removeClass('open');
                $('.icon-down-arrow').removeClass('rotate');
            }
            $(this).parent().addClass('selected');
            $('html, body').stop().animate({
                scrollTop: target.offset().top - $('.drop-menu').height() + 5
            }, 700);
        }
    });
};

// $(document).ready(function(){
//     $('input, textarea').placeholder();
// });

$(document).ready(menuToggle);
$(document).ready(navScroll);
