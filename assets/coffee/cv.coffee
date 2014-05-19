
(($) ->
  $ ->
    ## jQuery selectors
    piller = $('div.col-md-6 ul.nav')
    panel = $('.panel')
    win = $(window);
    headline = $('header .row');
    headline.css('display', 'none')

    ## Set timeout for navigation drop
    setTimeout (-> headline.slideDown 300), 1500

    ## Make columns the same height
    equalize = (cols) ->
        tallestcolumn = 0
        cols.each ->
            currentHeight = $(this).height()
            if currentHeight > tallestcolumn
                tallestcolumn = currentHeight
        cols.height(tallestcolumn);

    ## Make columns the same height if win is resized
    win.resize ->
        panel.css('height', 'auto')
        equalize(panel)

    ## Init also on startup
    equalize(panel)
    console.log "Fancy source? The complete source code is hosted on Github."
) jQuery
