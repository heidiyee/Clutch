function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    
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
