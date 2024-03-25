jQuery(function (e) {
    /*animation for colored navigation menu bg*/
    if (jQuery('.js-linear-anim')[0]) {
        anime({
            targets: '.js-linear-anim',
            translateX: '120%',            
            easing: 'linear'
        });
    }
    
    /*animation for colored navigation menu bg*/
    if (jQuery('.js-linear-anim-2')[0]) {
        anime({
            targets: '.js-linear-anim-2',
            translateX: '100%',            
            easing: 'linear'
        });
    }

    /*animation for accordion bg*/
    if (jQuery('.js-staggering-anim')[0]) {
        anime({
            targets: '.js-staggering-anim .js-el',
            translateX: '100%',
            delay: anime.stagger(300, { direction: 'reverse' }),
            easing: 'spring(1, 80, 10, 0)'
        });
    }

    /*navigation*/
    jQuery('.nav').hover(function () {
        var theme = jQuery(this).data('theme');
        var el = jQuery('#js-wrapper__cover .el');
    
        jQuery(this).removeClass('opacity-0').siblings('.nav').addClass('opacity-0');
    
        const prefix = 'bg-';
        const classes = el.attr('class').split(' ').filter(c => !c.startsWith(prefix));
        el.attr('class', classes.join(' ').trim());
    
        for (let i = 1; i <= 5; i++) {
            jQuery('.js-wrapper__cover .el[data-num="' + i + '"]').addClass(theme + i);
        }
    
        // if (theme === "bg-yellow") {
        //     jQuery('.js-close-project img').addClass('brightness-0');
        // }
    });    

    //estimation page
    if (jQuery(".js-autoplay-true")[0]) {
        anime({
            targets: '.js-autoplay-true',
            translateY: -165,
            opacity: [1, 0.2],
            duration: 2000,
            delay: 1000,
            easing: 'linear',
            loop: false
        });
        anime({
            targets: '.tooltip',
            opacity: [1, 0],
            duration: 2000,
            delay: 4000,
            loop: false
        });
        anime({
            targets: '.close-btn',
            opacity: [0, 1],
            duration: 2000,
            delay: 4000,
            loop: false
        });

        setTimeout(function () {
            jQuery('.js-autoplay-show').removeClass('hidden');
            jQuery('.js-wrapper').removeClass('wrapper-estimation');
            jQuery('.js-wrapper__cover').removeClass('opacity-75').addClass('opacity-85');
        }, 4000);
    }

    //navigation pages
    setTimeout(function (e) {
        jQuery('.js-show-on-load').addClass('hidden');
        jQuery('.js-hide-on-load').removeClass('hidden');
        jQuery('.js-wrapper__cover.introduction').addClass('hidden');
        jQuery('.js-wrapper__cover.main').removeClass('hidden');
    }, 4000);


    //black overlay tips
    jQuery('.js-tooltip-cover').on('click', function(e) {
        jQuery(this).addClass('hidden');
    });

});

//# sourceURL=webpack://quotify/./src/js/animations.js?