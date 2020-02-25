
/**
 *Add nav toggle functionality
 *
 */
function initNav() {
    $ = jQuery;

    $('.toggle-nav').click(function () {
        $('body').toggleClass('nav-open');
    })
}

export default initNav;