/**
 * Create wipe effect on page load
 *
 */
function loadWipe() {

    window.addEventListener('DOMContentLoaded', function (event) {
        $('.loader-2').removeClass("active");
        $('body').addClass('content-loaded');
    });


}

/**
 * Create wipe effect on page unload
 *
 */
function unloadWipe() {

    window.addEventListener('beforeunload', function (event) {
        $('.loader').addClass("active");
    });

}

export {
    loadWipe,
    unloadWipe
};