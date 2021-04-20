/**
 * Create wipe effect on page load
 *
 */
function loadWipe() {

    window.addEventListener('DOMContentLoaded',(event) => {
        $('.loader-2').removeClass("active");
        $('body').addClass('content-loaded');
    });


}

/**
 * Create wipe effect on page unload
 *
 */
function unloadWipe() {

    window.addEventListener('beforeunload', (event) => {
        $('.loader').addClass("active");
    });

}

export {
    loadWipe,
    unloadWipe
};