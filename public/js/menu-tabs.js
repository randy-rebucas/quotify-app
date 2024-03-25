jQuery(function (e) {
    const tabs = jQuery('.js-tabs');
    const tabsCol = tabs.data('col');
    
    //set values
    if(tabsCol === 2) {
        tabs.addClass('right-40');
    } else if(tabsCol === 3) {
        tabs.addClass('right-60');
    } else if(tabsCol === 4) {
        tabs.addClass('right-80');
    } else {
        tabs.addClass('right-20'); // default
    }
    
    jQuery('.js-floating-menu').last().find('.js-main-menu__header').removeClass('hidden');
    jQuery('.js-floating-menu').last().find('.js-main-menu__content').removeClass('mt-[135px]');

    //menu block toggle function
    function toggleFloatingMenuClasses(status) {
        const isDefault = status;
        const floatingMenu = jQuery('.js-floating-menu');
        const tabs = jQuery('.js-tabs');
        const tabsCol = tabs.data('col');
        const tabsToggleParent = jQuery('.js-tabs__toggle').parent();

        //floatingMenu.find('.js-main-menu__header').removeClass('hidden');
        //floatingMenu.find('.js-main-menu__content').removeClass('mt-[135px]');                          


        if (isDefault) {
            //floating menu to go to grid 5 position
            tabs.removeClass('right-80 right-60 right-40').addClass('right-20');
            //reset menu to 5th position
            floatingMenu.addClass('col-start-5');
            //tab show/hide icon
            tabsToggleParent.removeClass('rotate-180');
            
        } else {
            //floating menu to open position            
            floatingMenu.toggleClass('col-start-5');    
            if(tabsCol === 4) {
                tabs.toggleClass('right-80');            
            }
            if(tabsCol === 3) {
                tabs.toggleClass('right-60');            
            }
            if(tabsCol === 2) {
                tabs.toggleClass('right-40');            
            }   
            tabs.toggleClass('right-20');              

            //tab show/hide icon
            tabsToggleParent.toggleClass('rotate-180');
        }
    }


    function toggleMainMenuClasses() {
        //floating menu to have green bgcolor and the main menu to have a deeper shade of green
        jQuery('.js-main-menu').toggleClass('bg-green6');
        //main menu title to be hidden on the main menu and shown on the floating menu when the floating menu is open
        jQuery('.js-main-menu .js-main-menu__header').toggleClass('hidden');
        jQuery('.js-main-menu .js-main-menu__content').toggleClass('mt-[135px]');      
    }

    //menu block close/open tab toggle function
    jQuery('.js-tabs__toggle').on('click', function (e) {
        e.preventDefault();
        toggleFloatingMenuClasses(false);
        toggleMainMenuClasses();
    });

    //menu block tab (A/B/C/D) toggle function
    jQuery('.js-tabs-tab').on('click', function (e) {
        e.preventDefault();      

        jQuery(this).addClass('active').siblings().removeClass('active');
        //reset to 5th position
        toggleFloatingMenuClasses(true);
        toggleMainMenuClasses();

        const target = jQuery(this).data('menu');
        if (target) {
            jQuery('.menu').filter(`[data-menu="${target}"]`).removeClass('z-10').addClass('z-30 active');
            jQuery('.menu').not(`[data-menu="${target}"]`).removeClass('z-30 active').addClass('z-10');
        }
    });

    jQuery('.js-open-results').on('click', function(e) {
        jQuery('.js-open-results-content').removeClass('hidden');
    });
    
    jQuery('.js-close-results').on('click', function(e) {
        jQuery('.js-open-results-content').addClass('hidden');
    });
});

//# sourceURL=webpack://quotify/./src/js/menu-tabs.js?