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

});



//# sourceURL=webpack://quotify/./src/js/main.js?