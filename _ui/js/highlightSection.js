var sections = $('section')
  , menu = $('.menu')
  , nav_height = menu.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();

  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      menu.find('li').removeClass('selected');
    //   sections.removeClass('active');

    //   $(this).addClass('selected');
      menu.find('a[href="#'+$(this).attr('id')+'"]').parent().addClass('selected');
    }
  });
});

// $(document).ready(highlightSection);
