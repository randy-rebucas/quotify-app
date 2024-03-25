jQuery(function (e) {


    /*
    The code below will play the
    video on welcome page
    */
    var videoPlayButton = jQuery('#video-wrapper-play');

    videoPlayButton.on("click", function (e) {
        e.preventDefault();
        var parent = jQuery(this).parent();
        //hide image thumbnail link
        parent.hide();
        //show video embed iframe code
        parent.next().show();
        //automatically play video html
        parent.next().get(0).play();
    });

    /*
    The code below will show the
    close popup navigation on click of button.
    */
    var closePopupNavBtn = jQuery('.js-close-project');

    closePopupNavBtn.on('click', function (e) {
        e.preventDefault();
        jQuery('.wrapper__close').removeClass('hidden');
    });
    var cancelPopup = jQuery('#js-cancel-popup');

    cancelPopup.on('click', function (e) {
        e.preventDefault();
        jQuery('.wrapper__close').addClass('hidden');
    });

    /*file management*/
    jQuery('.file').hover(
        function () {
            var image = jQuery(this).find('.file-img'),
                map = jQuery(this).find('.file-map'),
                bgLat = image.data('lat'),
                bgLong = image.data('long'),
                bgColor = image.data('color');
    
            // bgColor if provided is set as default bg color
            image.css('background-color', bgColor);
    
            // If lat and long values are provided, map is built and bgcolor is set to transparent
            if (bgLat !== "" || bgLong !== "") {
                // bgcolor is set to transparent
                image.css('background-color', 'transparent');
    
                // Build map
                map.googleMap({
                    zoom: 20,
                    coords: [bgLat, bgLong],
                    type: "HYBRID"
                });
            }
        },
        function () {
            // Reset on hover out
            jQuery(this).find('.file-img').css('background-color', 'white');
        }
    );

    jQuery('.js-wrapper__more').on('click', function(e) {
        e.preventDefault();
        
        var wrapperResults = jQuery('.js-wrapper__results');
        var toggleElements = wrapperResults.find('.toggle');
        var moreText = jQuery('.js-wrapper__more-text');
        
        if (toggleElements.hasClass('hidden')) {
            toggleElements.removeClass('hidden');
            wrapperResults.removeClass('has-one-row');
            moreText.html('less');
        } else {
            toggleElements.addClass('hidden');
            wrapperResults.addClass('has-one-row');
            moreText.html('more');
        }
    });
});



//# sourceURL=webpack://quotify/./src/js/main.js?