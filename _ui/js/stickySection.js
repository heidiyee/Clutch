function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var sticky_anchor = $('#sticky-anchor');
    var div_top;

    if (sticky_anchor.length) {
        div_top =  sticky_anchor.offset().top
    }

    if (window_top > div_top) {
        $('.drop-menu').addClass('sticky');
        $('#sticky-anchor').height($('.drop-menu').outerHeight());
    } else {
        $('.drop-menu').removeClass('sticky');
        $('#sticky-anchor').height(0);
    }
}

$(function() {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});
