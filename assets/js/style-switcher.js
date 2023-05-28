/*------------------------------------------------------------------------------------
JS INDEX

01 - TOGGLE SWITCHER PANEL
02 - LAYOUT WIDTH (WIDE OR BOXED)
03 - HEADER PREVIEW (FIXED OR STATIC)
04 - NAVIGATION WIDTH (WIDE OR BOXED)
05 - PATTERN BACKGROUND SWITCHER
06 - BACKGROUND IMAGE SWITCHER
07 - 07 COLOR SKIN AND LOGO CHANGER
-------------------------------------------------------------------------------------*/

jQuery(document).ready(function(){
		"use strict";

		// 01 - TOGGLE SWITCHER PANEL
		jQuery(".switcher-btn").click(function(){
			if(jQuery(this).hasClass("open")){
				jQuery(this).addClass("closed");
				jQuery(this).removeClass("open");
				jQuery('#switcher').animate({
					'left': '-250px'
				},100);
			} else{
				jQuery(this).addClass("open");
				jQuery(this).removeClass("closed");
				jQuery('#switcher').animate({
					'left': '0'
				},100);
			}
		});



		// 02 - LAYOUT WIDTH (WIDE OR BOXED)

		// add active class to button
		jQuery(".layout-width li").click(function(){
			jQuery(".layout-width li").removeClass("active");
			jQuery(this).addClass("active");
		});

		// make layout boxed on click of layout-boxed button
		jQuery(".layout-boxed").click(function(){
			jQuery("body").addClass("boxed");
		});

		// make layout wide on click of layout-wide button
		jQuery(".layout-wide").click(function(){
			jQuery("body").removeClass("boxed");
		});
		


		// 03 - HEADER PREVIEW (FIXED OR STATIC)

		// add active class to button
		jQuery(".header-preview li").click(function(){
			jQuery(".header-preview li").removeClass("active");
			jQuery(this).addClass("active");
		});

		// make header fixed to top on click of header-fixed button
		jQuery(".header-fixed").click(function(){
			jQuery(".main-navigation").addClass("sticky-header");
			jQuery('.main-navigation').removeClass('not-fixed');
		});

		// make header static to top on click of header header-static button
		jQuery(".header-static").click(function(){
			jQuery('.main-navigation').addClass('not-fixed');
			jQuery(".main-navigation").removeClass("sticky-header");
		});




		// 04 - NAVIGATION WIDTH (WIDE OR BOXED)

		// add active class to button
		jQuery(".navigation-width li").click(function(){
			jQuery(".navigation-width li").removeClass("active");
			jQuery(this).addClass("active");
		});

		// make navigation wide on click of navigation-wide button
		jQuery(".navigation-wide").click(function(){
			jQuery(".header-portion").addClass("menu-wide");
		});

		// make navigation boxed on click of navigation-boxed button
		jQuery(".navigation-boxed").click(function(){
			jQuery(".header-portion").removeClass("menu-wide");
		});


		// 05 PATTERN BACKGROUND SWITCHER
		jQuery(".background-pattern li a img").on('click', function(){
	    	var rel = jQuery(this).attr("rel");
			jQuery("#bg").css({backgroundImage:"url("+rel+")"})
	    });




		// 06 - BACKGROUND IMAGE SWITCHER
		jQuery(".background-image li a img").on('click', function(){
	    	var rel = jQuery(this).attr("rel");
			jQuery("#bg").css({backgroundImage:"url("+rel+")"})
	    });




		// 07 - COLOR SKIN AND LOGO CHANGER
        jQuery(".skin-1").click(function(){
            jQuery("#changeStylesheet").attr("href", "assets/css/skins/skin-1.css");
            jQuery(".brand-logo > img").attr("src", "assets/images/logo-1.png"); 
            return false;
        });
        
        jQuery(".skin-2").click(function(){
            jQuery("#changeStylesheet").attr("href", "assets/css/skins/skin-2.css");
            jQuery(".brand-logo > img").attr("src", "assets/images/logo-2.png");
            return false;
        });
        
        jQuery(".skin-3").click(function(){
            jQuery("#changeStylesheet").attr("href", "assets/css/skins/skin-3.css");
            jQuery(".brand-logo > img").attr("src", "assets/images/logo-3.png");
            return false;
        });

        jQuery(".skin-4").click(function(){
            jQuery("#changeStylesheet").attr("href", "assets/css/skins/skin-4.css");
            jQuery(".brand-logo > img").attr("src", "assets/images/logo-4.png");
            return false;
        });

        jQuery(".skin-5").click(function(){
            jQuery("#changeStylesheet").attr("href", "assets/css/skins/skin-5.css");
            jQuery(".brand-logo > img").attr("src", "assets/images/logo-5.png");
            return false;
        });

        jQuery(".skin-6").click(function(){
            jQuery("#changeStylesheet").attr("href", "assets/css/skins/skin-6.css");
            jQuery(".brand-logo > img").attr("src", "assets/images/logo-6.png");
            return false;
        });

        jQuery(".skin-7").click(function(){
            jQuery("#changeStylesheet").attr("href", "assets/css/skins/skin-7.css");
            jQuery(".brand-logo > img").attr("src", "assets/images/logo-7.png");
            return false;
        });

        jQuery(".skin-8").click(function(){
            jQuery("#changeStylesheet").attr("href", "assets/css/skins/skin-8.css");
            jQuery(".brand-logo > img").attr("src", "assets/images/logo-8.png");
            return false;
        });
	});