const jquery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

jQuery(function (e) {
    var multiFileUpload = jQuery(".dropzone-file"),
        multiFileUploadSection = jQuery('.dropzone-uploads');

    multiFileUpload.change(function () {
        var names = [];
        for (var i = 0; i < jQuery(this).get(0).files.length; ++i) {
            names.push("<div class='uploaded-block overflow-hidden p-2'><div class='icon-upload'></div>" + jQuery(this).get(0).files[i].name + "</div>");
        }
        multiFileUploadSection.removeClass('hidden');
        multiFileUploadSection.find('div.dropzone-content').append(names);
    });

    //auto search field
    if (jQuery('.has-map')[0]) {
        var autocomplete = new google.maps.places.Autocomplete($("#map-search")[0], {});

        google.maps.event.addListener(autocomplete, 'place_changed', function () {
            var place = autocomplete.getPlace();
            console.log(place.address_components);
        });
    }

    //prev and next buttons
    if (jQuery('.js-nextbtn')[0]) {     
        var stepTabIndicator = jQuery('.js-step-indicator');
        
        stepTabIndicator.first().addClass('first');     
        stepTabIndicator.last().addClass('last');

        jQuery('.js-prevbtn').on('click', function (e) {
            var activeTab = jQuery('.js-step.active'),
                activeTabIndicator = jQuery('.js-step-indicator.active');
            
            if(activeTabIndicator.hasClass('first')) {     
                //link back to estimation page 
                return true;
            } 

            //move to previous nav
            activeTabIndicator.removeClass('active').prev().addClass('active');                                   
            //move to previous tab content           
            activeTab.removeClass('active').prev().addClass('active');      

            return false;
        });   

        jQuery('.js-nextbtn').on('click', function (e) {
            var activeTab = jQuery('.js-step.active'),
                activeTabIndicator = jQuery('.js-step-indicator.active');


            //if next has children
            if(activeTabIndicator.hasClass('js-has-sub-step')) {
                activeTabIndicator.find('.js-sub-step .js-step-indicator').last().addClass('last');
                activeTabIndicator.find('.js-sub-step .js-step-indicator.active').addClass('checked');
                activeTabIndicator.find('.js-sub-step .js-step-indicator.active').removeClass('active').next().addClass('active');    
                activeTab.removeClass('active').next().addClass('active');
                
                if(activeTabIndicator.find('.js-sub-step .js-step-indicator.last').hasClass('checked')) {
                    activeTabIndicator.find('.js-sub-step .js-step-indicator.last').closest('.js-has-sub-step.active').removeClass('active').next().addClass('active');
                }
                       
            } else {
                //if has no children
                if(activeTabIndicator.hasClass('last')) {        
                    //submit form once user reached last nav item                    
                    jQuery(this).closest('form').trigger('submit');
                } 
                //move to next nav
                activeTabIndicator.removeClass('active').next().addClass('active');
                //move to next tab content           
                activeTab.removeClass('active').next().addClass('active');
            }

        });
    }

    // // hover column highlight
    // jQuery('.js-select-option').hover(
    //     function () {
    //         const col = jQuery(this).data("col");
    //         jQuery(this).find('img').toggleClass('grayscale');
    
    //         jQuery('.js-wrapper__cover .js-el')
    //             .filter('[data-col="' + col + '"]')
    //             .addClass("bg-green3 opacity-50")
    //             .siblings()
    //             .removeClass("bg-green3 opacity-50");
    //     },
    //     function () {
    //         jQuery(this).find('img').addClass('grayscale');
    //         jQuery('.js-wrapper__cover .js-el').removeClass("bg-green3 opacity-50");
    //     }
    // );


    //select options for nav green to yellow
    jQuery('.js-select-option').on('click', function() {
        const category = jQuery(this).data('category'),
            selected = jQuery(this).data('value'),
            step = jQuery('.js-step-indicator.active'),
            subStep = jQuery('.js-step-indicator.active .js-sub-step');
        
        subStep.removeClass('hidden');      
        
        if(step.hasClass('js-has-sub-step')) {
            //set nav active
            step.find('.js-step-indicator')
                .filter('[data-category="' + category + '"]')
                .addClass('active')
                .html(selected);
        }                   
        
    });

    jQuery('.js-new-estimate').on('click', function (e){
        e.preventDefault();

        jQuery(this).toggleClass('active');

        jQuery(this).next().toggleClass('hidden');
    });


    /*
    *  Add char limits on fields
    *  Fields should have the markup below to automatically work
    * 
    *  Usage:
    *  <div class="js-count-chars">
    *   <input class="js-count-chars__field" />
    *   <div class="js-count-chars__status">
    * </div>
    */
    jQuery('.js-count-chars__field').on('input', function() {
        updateCharactersLeft(this);
    });
    
    function updateCharactersLeft(element) {
        var max = jQuery(element).attr('maxlength'),
            len = element.value.length,
            statusDiv = jQuery(element).closest('.js-count-chars').find('.js-count-chars__status');
    
        statusDiv.text((max - len) + '/' + max);
    }

    //range slider
    jQuery('.custom-range-slider input').on('change', function(e) {
        jQuery(this).parent().next().find('span').html(jQuery(this).val()).digits();
    });

    $.fn.digits = function(){ 
        return this.each(function(){ 
            $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
        })
    }

    //navigation blue
    jquery('.js-add-space').on('click', function(e) {
        e.preventDefault();
        jQuery('.js-more-space__block').clone().appendTo('.js-more-space');
    });

    //navigation red
    jQuery('.js-custom-checkbox').on('change', function(e) {
        jquery(this).next().toggleClass('hidden');

        jQuery('.main-form').find('input').toggleClass('hidden');
        jQuery('.main-form').find('label').toggleClass('hidden');
    
        //jQuery('.js-main-column')
    });
});

//# sourceURL=webpack://quotify/./src/js/forms.js?