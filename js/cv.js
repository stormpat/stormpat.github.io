(function($) {
  return $(function() {
    var equalize, headline, panel, piller, win;
    piller = $('div.col-md-6 ul.nav');
    panel = $('.panel');
    win = $(window);
    headline = $('header .row');
    headline.css('display', 'none');
    setTimeout((function() {
      return headline.slideDown(300);
    }), 1500);
    equalize = function(cols) {
      var tallestcolumn;
      tallestcolumn = 0;
      cols.each(function() {
        var currentHeight;
        currentHeight = $(this).height();
        if (currentHeight > tallestcolumn) {
          return tallestcolumn = currentHeight;
        }
      });
      return cols.height(tallestcolumn);
    };
    win.resize(function() {
      panel.css('height', 'auto');
      return equalize(panel);
    });
    equalize(panel);
    return console.log("Fancy source? The complete source code is hosted on Github.");
  });
})(jQuery);
