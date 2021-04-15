$ = jQuery;

/**
 * On mousenter we expand the expertise sections
 *
 */
function expertiseHover() {


  $('.expertise .item').on( 'mouseenter',

    function(){
      if (!$(this).find(".linkbox").hasClass("active")) { // If active nothing happens

        $('.linkbox.active').removeClass("active"); // Deactivate active
        $(this).find(".linkbox").addClass("active"); // Add active
        $('.expertise-expansion').slideDown(); // Make the container visible


        $('#expand').text($(this).find('.slideout').text()); // Set container text

      }
    }


  );

}

export default expertiseHover;
