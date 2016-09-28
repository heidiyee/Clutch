var sections = $('section')
    , menu = $('.menu')
    , dropMenu = $('.drop-menu')
    , menuHeight = dropMenu.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();

  sections.each(function() {
    var top = $(this).offset().top - menuHeight,
        bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            menu.find('li').removeClass('selected');
            menu.find('a[href="#'+$(this).attr('id')+'"]').parent().addClass('selected');
        }
    });
});
