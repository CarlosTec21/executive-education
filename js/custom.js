/* =====================================
All JavaScript fuctions Start
======================================*/

/*--------------------------------------------------------------------------------------------
	document.ready ALL FUNCTION START
---------------------------------------------------------------------------------------------*/
 /* 

	> Top Search bar Show Hide function by = custom.js  
	> On scroll content animated function by = Viewportchecker.js 	
	> Video responsive function by = custom.js 
	> magnificPopup function	by = magnific-popup.js
	> magnificPopup for video function	by = magnific-popup.js
	> Vertically center Bootstrap modal popup function by = custom.js
	> Main menu sticky on top  when scroll down function by = custom.js
	> page scroll top on button click function by = custom.js	
	> input type file function by = custom.js	 
	> input Placeholder in IE9 function by = custom.js
	> footer fixed on bottom function by = custom.js	
	> accordion active calss function by = custom.js
    > Nav submenu show hide on mobile by = custom.js
	> Vertical Nav submenu show hide on mobile by = custom.js
	> Home Carousel_1 Full Screen with no margin function by = owl.carousel.js
	> related with content function by = owl.carousel.js
	> Fade slider for home function by = owl.carousel.js
	> home_carousel_1 Full Screen with no margin function by = owl.carousel.js
	> home_carousel_2 Full Screen with no margin function by = owl.carousel.js
	> home_projects_filter Full Screen with no margin function by = owl.carousel.js
	> Home page testimonial function by = owl.carousel.js
    > home_client_carouse function by = owl.carousel.js 
	> work carousel  function by = owl.carousel.js
    > Hover Tab  function
    > Portfolio Carousel no margin function by = owl.carousel.js ========================== //

	
 */	

/*--------------------------------------------------------------------------------------------
	window on load ALL FUNCTION START
---------------------------------------------------------------------------------------------*/
 /* 
	 > equal each box
	 > text animation function 
	 > masonry function function by = isotope.pkgd.min.js
	 > page loader function by = custom.js
 */	
 
/*--------------------------------------------------------------------------------------------
	Window Scroll ALL FUNCTION START
---------------------------------------------------------------------------------------------*/
 /*
 	 > Window on scroll header color fill 
 */

/*--------------------------------------------------------------------------------------------
	Window Resize ALL FUNCTION START
---------------------------------------------------------------------------------------------*/
jQuery(document).ready(function($) {
  //  CounterUp function by = counterup-min.js ========================== //

	jQuery('.counter').counterUp({
		delay: 10,
		time: 1000,
		offset: 100
	});
});

(function ($) {
	
    'use strict';
/*--------------------------------------------------------------------------------------------
	document.ready ALL FUNCTION START
---------------------------------------------------------------------------------------------*/	

//  > Top Search bar Show Hide function by = custom.js =================== //	
	 function site_search(){
			jQuery('a[href="#search"]').on('click', function(event) {                    
			jQuery('#search').addClass('open');
			jQuery('#search > form > input[type="search"]').focus();
		});
					
		jQuery('#search, #search button.close').on('click keyup', function(event) {
			if (event.target === this || event.target.className === 'close') {
				jQuery(this).removeClass('open');
			}
		});  
	 }	
	 
// > Video responsive function by = custom.js ========================= //	
	function video_responsive(){	
		jQuery('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
		jQuery('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');	
	}  

// > magnificPopup function	by = magnific-popup.js =========================== //
	function magnific_popup(){
        jQuery('.mfp-gallery').magnificPopup({
          delegate: '.mfp-link',
          type: 'image',
          tLoading: 'Loading image #%curr%...',
          mainClass: 'mfp-img-mobile',
          gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
          },
          image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
          }
       });
	}

// > magnificPopup for video function	by = magnific-popup.js ===================== //	
	function magnific_video(){	
		jQuery('.mfp-video').magnificPopup({
			type: 'iframe',
		});
	}

// Vertically center Bootstrap modal popup function by = custom.js ==============//
	function popup_vertical_center(){	
		jQuery(function() {
			function reposition() {
				var modal = jQuery(this),
				dialog = modal.find('.modal-dialog');
				modal.css('display', 'block');
				// Dividing by two centers the modal exactly, but dividing by three 
				// or four works better for larger screens.
				dialog.css("margin-top", Math.max(0, (jQuery(window).height() - dialog.height()) / 2));
			}
			// Reposition when a modal is shown
			jQuery('.modal').on('show.bs.modal', reposition);
			// Reposition when the window is resized
			jQuery(window).on('resize', function() {
				jQuery('.modal:visible').each(reposition);
			});
		});
	}

// > Main menu sticky on top  when scroll down function by = custom.js ========== //		
	function sticky_header(){
		if(jQuery('.sticky-header').length){
			var sticky = new Waypoint.Sticky({
			  element: jQuery('.sticky-header')
			})
		}
	}

// > page scroll top on button click function by = custom.js ===================== //	
	function scroll_top(){
		jQuery("button.scroltop").on('click', function() {
			jQuery("html, body").animate({
				scrollTop: 0
			}, 1000);
			return false;
		});

		jQuery(window).on("scroll", function() {
			var scroll = jQuery(window).scrollTop();
			if (scroll > 900) {
				jQuery("button.scroltop").fadeIn(1000);
			} else {
				jQuery("button.scroltop").fadeOut(1000);
			}
		});
	}

// > input type file function by = custom.js ========================== //	 	 
	function input_type_file_form(){
		jQuery(document).on('change', '.btn-file :file', function() {
			var input = jQuery(this),
				numFiles = input.get(0).files ? input.get(0).files.length : 1,
				label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
			input.trigger('fileselect', [numFiles, label]);
		});

		jQuery('.btn-file :file').on('fileselect', function(event, numFiles, label) {
			var input = jQuery(this).parents('.input-group').find(':text'),
				log = numFiles > 10 ? numFiles + ' files selected' : label;
			if (input.length) {
				input.val(log);
			} else {
				if (log) alert(log);
			}
		});	
	}

// > input Placeholder in IE9 function by = custom.js ======================== //	
	function placeholderSupport(){
	/* input placeholder for ie9 & ie8 & ie7 */
		jQuery.support.placeholder = ('placeholder' in document.createElement('input'));
		/* input placeholder for ie9 & ie8 & ie7 end*/
		/*fix for IE7 and IE8  */
		if (!jQuery.support.placeholder) {
			jQuery("[placeholder]").on('focus', function () {
				if (jQuery(this).val() === jQuery(this).attr("placeholder")) jQuery(this).val("");
			}).blur(function () {
				if (jQuery(this).val() === "") jQuery(this).val(jQuery(this).attr("placeholder"));
			}).blur();

			jQuery("[placeholder]").parents("form").on('submit', function () {
				jQuery(this).find('[placeholder]').each(function() {
					if (jQuery(this).val() === jQuery(this).attr("placeholder")) {
						 jQuery(this).val("");
					}
				});
			});
		}
		/*fix for IE7 and IE8 end */
	}	


// > footer fixed on bottom function by = custom.js ======================== //	
	function footer_fixed() {
	  jQuery('.site-footer').css('display', 'block');
	  jQuery('.site-footer').css('height', 'auto');
	  var footerHeight = jQuery('.site-footer').outerHeight();
	  jQuery('.footer-fixed > .page-wraper').css('padding-bottom', footerHeight);
	  jQuery('.site-footer').css('height', footerHeight);
	}

// > accordion active calss function by = custom.js ========================= //	
	function accordion_active() {
		$('.acod-head a').on('click', function() {
			$('.acod-head').removeClass('acc-actives');
			$(this).parents('.acod-head').addClass('acc-actives');
			$('.acod-title').removeClass('acc-actives'); //just to make a visual sense
			$(this).parent().addClass('acc-actives'); //just to make a visual sense
			($(this).parents('.acod-head').attr('class'));
		 });
	}	

// > Nav submenu show hide on mobile by = custom.js
	 function mobile_nav(){
		jQuery(".sub-menu").parent('li').addClass('has-child');
		jQuery(".mega-menu").parent('li').addClass('has-child');
		jQuery("<div class='glyphicon glyphicon-chevron-right submenu-toogle'></div>").insertAfter(".has-child > a");
		jQuery('.has-child a+.submenu-toogle').on('click',function(ev) {
			jQuery(this).next(jQuery('.sub-menu')).slideToggle('fast', function(){
				jQuery(this).parent().toggleClass('nav-active');
			});
			ev.stopPropagation();
		});
		
		  jQuery('.has-child').on('click',function(ev) {
		   jQuery(this).find(jQuery('.sub-menu')).slideToggle('fast', function(){
			jQuery(this).parent().toggleClass('nav-active');
		   });
		  });
		
	 }

// >Vertical Nav submenu show hide on mobile by = custom.js
 function vertical_nav(){
//		jQuery(".v-sub-menu").parent('li').addClass('has-child');
//		jQuery("<div class='glyphicon glyphicon-chevron-right submenu-toogle'></div>").insertAfter(".has-child > a");
//		jQuery('.has-child a+.submenu-toogle').click(function(ev) {
//			jQuery(this).next(jQuery('.v-sub-menu')).slideToggle('fast', function(){
//				jQuery(this).parent().toggleClass('nav-active');
//			});
//			ev.stopPropagation();
//		});
 }

//  related with content function by = owl.carousel.js ========================== //
	function blog_related_slider(){
	jQuery('.blog-related-slider').owlCarousel({
		loop:true,
		margin:30,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			480:{
				items:2
			},			
			767:{
				items:3
			},
			1000:{
				items:3
			}
		}
	});
	}
	
// Fade slider for home function by = owl.carousel.js ========================== //
	function aboutus_carousel(){
	jQuery('.about-us-carousel').owlCarousel({
		loop:true,
		autoplay:true,
		autoplayTimeout:3000,
		margin:30,
		nav:true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		items:1,
		dots: false,
	});
	}
	
// > Home Carousel_1 Full Screen with no margin function by = owl.carousel.js ========================== //
	function home_carousel_1(){
	jQuery('.home-carousel-1').owlCarousel({
        loop:true,
		margin:0,
		autoplay:true,
		autoplayTimeout:6000,
		//center: true,
		nav:false,
		dots: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			480:{
				items:1
			},			
			767:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
	}	
	
// > Home Carousel_1 Full Screen with no margin function by = owl.carousel.js ========================== //
	function home_carousel_2(){
	jQuery('.home-carousel-2').owlCarousel({
        loop:true,
		autoplay:true,
		margin:0,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			480:{
				items:1
			},			
			767:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
	}
			
// > home_projects_filter Full Screen with no margin function by = owl.carousel.js ========================== //
	function home_projects_filter(){
		
		var owl = jQuery('.owl-carousel-filter').owlCarousel({
		loop:false,
		autoplay:true,
		margin:20,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			480:{
				items:1
			},
			580:{
				items:2
			},						
			767:{
				items:2
			},
			991:{
				items:3
			},			
			1152:{
				items:4
			},
			1360:{
				items:4
			},
			1366:{
				items:5
			}	
		    }
		})
		
		/* Filter Nav */

		jQuery('.btn-filter-wrap').on('click', '.btn-filter', function(e) {
			var filter_data = jQuery(this).data('filter');

			/* return if current */
			if(jQuery(this).hasClass('btn-active')) return;

			/* active current */
			jQuery(this).addClass('btn-active').siblings().removeClass('btn-active');

			/* Filter */
			owl.owlFilter(filter_data, function(_owl) { 
				jQuery(_owl).find('.item').each(owlAnimateFilter); 
			});
		})
	
	
	
	}
	
	
	
// Home page testimonial function by = owl.carousel.js ========================== //
	function testimonial_home(){
	jQuery('.testimonial-home').owlCarousel({
		loop:true,
		autoplay:false,
		margin:80,
		nav:false,
		dots: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			991:{
				items:2
			}
		}
	});
	}	
	
//  home_client_carouse function by = owl.carousel.js ========================== //
	function home_client_carousel(){
	jQuery('.home-client-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:2
			},
			480:{
				items:3
			},			
			767:{
				items:4
			},
			1000:{
				items:5
			}
		}
	});
	}	


//  home_client_carouse function by = owl.carousel.js ========================== //
	function home_client_carousel_2(){
	jQuery('.home-client-carousel-2').owlCarousel({
		loop:true,
		margin:10,
		autoplay:true,
		nav:false,
		dots: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:2
			},
			480:{
				items:3
			},			
			767:{
				items:4
			},
			1000:{
				items:5
			}
		}
	});
	}		
// > work carousel  function by = owl.carousel.js ========================== //
	function work_carousel(){
	jQuery('.work-carousel').owlCarousel({
        loop:true,
		autoplay:false,
		center: true,
		items:3,
		margin:0,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			854:{
				items:2
			}
			
		}
	});
	}	


//  Portfolio Carousel no margin function by = owl.carousel.js ========================== //
	function portfolio_nogap_carousel(){
	jQuery('.portfolio-carousel-nogap').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			480:{
				items:2
			},			
			767:{
				items:3
			},
			1000:{
				items:3
			}
		}
	});
	}
	
// > Hover Tab  function ========================== //
	function hover_tab(){
	jQuery('.circle-block-outer[data-toggle="tab-hover"] div').on('mouseenter', function(){
		jQuery(this).tab('show');
	});
	}

/*--------------------------------------------------------------------------------------------
	Window on load ALL FUNCTION START
---------------------------------------------------------------------------------------------*/

// > equal each box function by  = custom.js =========================== //	 
	function equalheight(container) {
		var currentTallest = 0, 
			currentRowStart = 0, 
			rowDivs = new Array(), 
			$el, topPosition = 0,
			currentDiv = 0;

		jQuery(container).each(function() {
			$el = jQuery(this);
			jQuery($el).height('auto');
			var topPostion = $el.position().top;
			if (currentRowStart != topPostion) {
				for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
					rowDivs[currentDiv].height(currentTallest);
				}
				rowDivs.length = 0; // empty the array
				currentRowStart = topPostion;
				currentTallest = $el.height();
				rowDivs.push($el);
			} else {

				rowDivs.push($el);
				currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
			}

			for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
				rowDivs[currentDiv].height(currentTallest);
			}
		});
	}


	// text animation function
	
	var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap {}";
        document.body.appendChild(css);
    };


// > On scroll content animated function by = Viewportchecker.js ============= //
	function animate_content(){
		jQuery('.animate').scrolla({
			mobile: false,
			once: true
		});
	}

// > masonry function function by = isotope.pkgd.min.js ========================= //	
	function masonryBox() {
        if ( jQuery().isotope ) {      
            var $container = jQuery('.portfolio-wrap');
                $container.isotope({
                    itemSelector: '.masonry-item',
                    transitionDuration: '1s',
					originLeft: true
                });

            jQuery('.masonry-filter li').on('click',function() {                           
                var selector = jQuery(this).find("a").attr('data-filter');
                jQuery('.masonry-filter li').removeClass('active');
                jQuery(this).addClass('active');
                $container.isotope({ filter: selector });
                return false;
            });
    	};
	}	

// > background image parallax function by = stellar.js ==================== //	
	function bg_image_stellar(){
		jQuery(function(){
				jQuery.stellar({
					horizontalScrolling: false,
					verticalOffset:100
				});
			});			
	}	

// > page loader function by = custom.js ========================= //		
	function page_loader() {
		$('.loading-area').fadeOut(1000)
	};

/*--------------------------------------------------------------------------------------------
    Window on scroll ALL FUNCTION START
---------------------------------------------------------------------------------------------*/

    function color_fill_header() {
        var scroll = $(window).scrollTop();
        if(scroll >= 100) {
            $(".is-fixed").addClass("color-fill");
        } else {
            $(".is-fixed").removeClass("color-fill");
        }
    };	

/*--------------------------------------------------------------------------------------------
	document.ready ALL FUNCTION START
---------------------------------------------------------------------------------------------*/
	jQuery(document).ready(function() {
		// > Top Search bar Show Hide function by = custom.js  		
		site_search(),
		// > Video responsive function by = custom.js 
		video_responsive(),
		// > magnificPopup function	by = magnific-popup.js
		magnific_popup(),
		// > magnificPopup for video function	by = magnific-popup.js
		magnific_video(),
		// > Vertically center Bootstrap modal popup function by = custom.js
		popup_vertical_center();
		// > Main menu sticky on top  when scroll down function by = custom.js		
		sticky_header(),
		// > page scroll top on button click function by = custom.js	
		scroll_top(),
		// > input type file function by = custom.js	 	
		input_type_file_form(),
		// > input Placeholder in IE9 function by = custom.js		
		placeholderSupport(),
		// > footer fixed on bottom function by = custom.js	
		footer_fixed(),
		// > accordion active calss function by = custom.js ========================= //			
		accordion_active(),
		// > Nav submenu on off function by = custome.js ===================//
		mobile_nav(),
		// >Vertical Nav submenu show hide on mobile by = custom.js
	    vertical_nav(),
		//  related with content function by = owl.carousel.js ========================== //
		blog_related_slider(),
		// Fade slider for home function by = owl.carousel.js ========================== //   
		aboutus_carousel(),
		//  home_carousel_1 Full Screen with no margin function by = owl.carousel.js ==========================  //  
		home_carousel_1(),
		//  home_carousel_2 Full Screen with no margin function by = owl.carousel.js ==========================  //  
		home_carousel_2(),
		//  home_projects_filter() Full Screen with no margin function by = owl.carousel.js ==========================  //  
		home_projects_filter(),
		// Home page testimonial function by = owl.carousel.js ========================== //
		testimonial_home(),
		//  Client logo Carousel function by = owl.carousel.js ========================== //
		home_client_carousel(),
		//  Client logo Carousel function by = owl.carousel.js ========================== //
		home_client_carousel_2(),		
		// > Hover Tab  function ========================== //
		hover_tab(),
		//  Portfolio Carousel no margin function by = owl.carousel.js ========================== //
	        portfolio_nogap_carousel()
	}); 

/*--------------------------------------------------------------------------------------------
	Window Load START
---------------------------------------------------------------------------------------------*/
	jQuery(window).on('load', function () {
		// > equal each box function by  = custom.js			
		equalheight(".equal-wraper .equal-col"),
		// > On scroll content animated function by = Viewportchecker.js	
		animate_content(),
		// > masonry function function by = isotope.pkgd.min.js		
		masonryBox(),
		// > background image parallax function by = stellar.js	
		bg_image_stellar(),
		// > page loader function by = custom.js		
		page_loader(),
		// > work carousel  function by = owl.carousel.js
		work_carousel()		 
});

 /*===========================
	Window Scroll ALL FUNCTION START
===========================*/

	jQuery(window).on('scroll', function () {
	// > Window on scroll header color fill 
		color_fill_header()
	});
	
/*===========================
	Window Resize ALL FUNCTION START
===========================*/

	jQuery(window).on('resize', function () {
	// > footer fixed on bottom function by = custom.js		 
	 	footer_fixed()
	});

/*===========================
	Document on  Submit FUNCTION START
===========================*/

	// > Contact form function by = custom.js	
	jQuery(document).on('submit', 'form.cons-contact-form', function(e){
		e.preventDefault();
		var form = jQuery(this);
		/* sending message */
		jQuery.ajax({
			url: 'http://thememajestic.com/modern/form-handler.php',
			data: form.serialize() + "&action=contactform",
			type: 'POST',
			dataType: 'JSON',
			beforeSend: function() {
				jQuery('.loading-area').show();
			},

			success:function(data){
				jQuery('.loading-area').hide();
				if(data['success']){
				jQuery("<div class='alert alert-success'>"+data['message']+"</div>").insertBefore('form.cons-contact-form');
				}else{
				jQuery("<div class='alert alert-danger'>"+data['message']+"</div>").insertBefore('form.cons-contact-form');	
				}
			}
		});
		return false;
	});	

/*===========================
	Document on  Submit FUNCTION END
===========================*/	

//=== Switcher panal slide function	=====================//

	jQuery(window).load(function(){
		jQuery('.nav-sidebar').animate({'right': '-500px'});
		jQuery('.vnav-btn').addClass('closed');
	});
	
	jQuery(document).ready(function () {
				
		jQuery('.vnav-btn').on('click', function () {	
			if (jQuery(this).hasClass('open')) {
				jQuery('.nav-sidebar').animate({'right': '-500px'});
			} 
			else {
				if (jQuery(this).hasClass('closed')) {
				jQuery('.nav-sidebar').animate({'right': '0'});
				}
			}
		});
	

//============== Transparent Part ===========//	
	    jQuery('.nav-transparent-area').fadeOut(500);	
		jQuery('.vnav-btn').on('click', function () {	
			if (jQuery(this).hasClass('open')) {
				jQuery('.nav-transparent-area').animate({'left': '100%'});
			} 
			else {
				if (jQuery(this).hasClass('closed')) {
				jQuery('.nav-transparent-area').fadeIn(500);
				}
			}
		});
						
		jQuery('.nav-transparent-area').on('click', function () {	
				jQuery('.nav-sidebar').animate({'right': '-500px'});
				jQuery('.nav-transparent-area').fadeOut(500);
				jQuery('.vnav-btn').addClass('closed');
			});
			
//==============close btn ===========//		
		jQuery('.vnav-close ').on('click', function () {	
				jQuery('.nav-sidebar').animate({'right': '-500px'});
				jQuery('.nav-transparent-area').fadeOut(500);
				jQuery('.vnav-btn').addClass('closed');
			}); 				
	});
	
//=== Switcher panal slide function END	=====================//

})(window.jQuery);

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
 
      
});


    $('.open-popup-link').magnificPopup({
      type:'inline',
      midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });

    $('.close_popup').on('click',function(){                                                      
        $.magnificPopup.proto.close.call(this);
    }); 


    $(function(){ 
     var navMain = $(".navbar-collapse"); // avoid dependency on #id
     // "a:not([data-toggle])" - to avoid issues caused
     // when you have dropdown inside navbar
     navMain.on("click", "a:not([data-toggle])", null, function () {
         navMain.collapse('hide');
     });
 });


      $(function() {
                window.prettyPrint && prettyPrint()
                $(document).on('click', '.yamm .dropdown-menu', function(e) {
                  e.stopPropagation()
                })
              });

              $(document).on('click', '.yamm .dropdown-menu', function(e) {
          e.stopPropagation()
        });

    $('.modulo-1').on('click', function () {
      $.magnificPopup.open({ items: { src: '#modulo-1', }, type: 'inline' });
    });

    $('.modulo-2').on('click', function () {
      $.magnificPopup.open({ items: { src: '#modulo-2', }, type: 'inline' });
    });

    $('.modulo-3').on('click', function () {
      $.magnificPopup.open({ items: { src: '#modulo-3', }, type: 'inline' });
    });

    $('.modulo-4').on('click', function () {
      $.magnificPopup.open({ items: { src: '#modulo-4', }, type: 'inline' });
    });

    $('.modulo-5').on('click', function () {
      $.magnificPopup.open({ items: { src: '#modulo-5', }, type: 'inline' });
    });

    $('.modulo-6').on('click', function () {
      $.magnificPopup.open({ items: { src: '#modulo-6', }, type: 'inline' });
    });

    $('.modulo-7').on('click', function () {
      $.magnificPopup.open({ items: { src: '#modulo-7', }, type: 'inline' });
    });

    $('.modulo-8').on('click', function () {
      $.magnificPopup.open({ items: { src: '#modulo-8', }, type: 'inline' });
    });

    $('.modulo-9').on('click', function () {
      $.magnificPopup.open({ items: { src: '#modulo-9', }, type: 'inline' });
    });

    $('.modulo-10').on('click', function () {
      $.magnificPopup.open({ items: { src: '#modulo-10', }, type: 'inline' });
    });

    $('.modulo-11').on('click', function () {
      $.magnificPopup.open({ items: { src: '#modulo-11', }, type: 'inline' });
    });

    $('.modulo-12').on('click', function () {
      $.magnificPopup.open({ items: { src: '#modulo-12', }, type: 'inline' });
    });

	$('.modulo-13').on('click', function () {
		$.magnificPopup.open({ items: { src: '#modulo-13', }, type: 'inline' });
	});

	$('.modulo-14').on('click', function () {
		$.magnificPopup.open({ items: { src: '#modulo-14', }, type: 'inline' });
	});

	$('.modulo-15').on('click', function () {
		$.magnificPopup.open({ items: { src: '#modulo-15', }, type: 'inline' });
	});

	$('.modulo-16').on('click', function () {
		$.magnificPopup.open({ items: { src: '#modulo-16', }, type: 'inline' });
	});

	$('.modulo-17').on('click', function () {
		$.magnificPopup.open({ items: { src: '#modulo-17', }, type: 'inline' });
	});

	$('.modulo-18').on('click', function () {
		$.magnificPopup.open({ items: { src: '#modulo-18', }, type: 'inline' });
	});

	$('.modulo-19').on('click', function () {
		$.magnificPopup.open({ items: { src: '#modulo-19', }, type: 'inline' });
	});

	$('.modulo-20').on('click', function () {
		$.magnificPopup.open({ items: { src: '#modulo-20', }, type: 'inline' });
	});
 

    $('.instructor-1').on('click', function () {
      $.magnificPopup.open({ items: { src: '#instructor-1', }, type: 'inline' });
    });

    $('.instructor-2').on('click', function () {
      $.magnificPopup.open({ items: { src: '#instructor-2', }, type: 'inline' });
    });

    $('.instructor-3').on('click', function () {
      $.magnificPopup.open({ items: { src: '#instructor-3', }, type: 'inline' });
    });

    $('.instructor-4').on('click', function () {
      $.magnificPopup.open({ items: { src: '#instructor-4', }, type: 'inline' });
    });

    $('.instructor-5').on('click', function () {
      $.magnificPopup.open({ items: { src: '#instructor-5', }, type: 'inline' });
    });

    $('.instructor-6').on('click', function () {
      $.magnificPopup.open({ items: { src: '#instructor-6', }, type: 'inline' });
    });

    $('.instructor-7').on('click', function () {
      $.magnificPopup.open({ items: { src: '#instructor-7', }, type: 'inline' });
    });

    $('.instructor-8').on('click', function () {
      $.magnificPopup.open({ items: { src: '#instructor-8', }, type: 'inline' });
    });

    $('.instructor-9').on('click', function () {
      $.magnificPopup.open({ items: { src: '#instructor-9', }, type: 'inline' });
    });

    $('.instructor-10').on('click', function () {
      $.magnificPopup.open({ items: { src: '#instructor-10', }, type: 'inline' });
    });

    $('.instructor-11').on('click', function () {
      $.magnificPopup.open({ items: { src: '#instructor-11', }, type: 'inline' });
    });

    $('.instructor-12').on('click', function () {
      $.magnificPopup.open({ items: { src: '#instructor-12', }, type: 'inline' });
    });

    $('.instructor-13').on('click', function () {
      $.magnificPopup.open({ items: { src: '#instructor-13', }, type: 'inline' });
    });

    $('.instructor-14').on('click', function () {
      $.magnificPopup.open({ items: { src: '#instructor-14', }, type: 'inline' });
    });

    $('.instructor-15').on('click', function () {
      $.magnificPopup.open({ items: { src: '#instructor-15', }, type: 'inline' });
    });

    $('.instructor-16').on('click', function () {
      $.magnificPopup.open({ items: { src: '#instructor-16', }, type: 'inline' });
    });

    $('.instructor-17').on('click', function () {
       $.magnificPopup.open({ items: { src: '#instructor-17', }, type: 'inline' });
    });

    $('.instructor-18').on('click', function () {
       $.magnificPopup.open({ items: { src: '#instructor-18', }, type: 'inline' });
    });

    $('.instructor-19').on('click', function () {
       $.magnificPopup.open({ items: { src: '#instructor-19', }, type: 'inline' });
    });

    $('.instructor-20').on('click', function () {
		$.magnificPopup.open({ items: { src: '#instructor-20', }, type: 'inline' });
	});
	
	$('.instructor-21').on('click', function () {
		$.magnificPopup.open({ items: { src: '#instructor-21', }, type: 'inline' });
	});
	
	$('.instructor-22').on('click', function () {
		$.magnificPopup.open({ items: { src: '#instructor-22', }, type: 'inline' });
	});
	
	$('.instructor-23').on('click', function () {
		$.magnificPopup.open({ items: { src: '#instructor-23', }, type: 'inline' });
	});
	
	$('.instructor-24').on('click', function () {
		$.magnificPopup.open({ items: { src: '#instructor-24', }, type: 'inline' });
	});
	
	$('.instructor-25').on('click', function () {
		$.magnificPopup.open({ items: { src: '#instructor-25', }, type: 'inline' });
	});
	
	$('.instructor-26').on('click', function () {
		$.magnificPopup.open({ items: { src: '#instructor-26', }, type: 'inline' });
	});
	
	$('.instructor-27').on('click', function () {
		$.magnificPopup.open({ items: { src: '#instructor-27', }, type: 'inline' });
	});
	
	$('.instructor-28').on('click', function () {
		$.magnificPopup.open({ items: { src: '#instructor-28', }, type: 'inline' });
	});
	
	$('.instructor-29').on('click', function () {
		$.magnificPopup.open({ items: { src: '#instructor-29', }, type: 'inline' });
	});
	
	$('.instructor-30').on('click', function () {
		$.magnificPopup.open({ items: { src: '#instructor-30', }, type: 'inline' });
	});



    const programas = [ 
    ["Familias Empresarias Líderes", "FEL.html"], 
    ["Advanced Management Program", "AMP-curso.html"], 
    ["Formación de Consejeros en Administración", "FCA-curso.html"],  
    ["Gobernanza Climática para Consejeros y Altos Directivos", "GCCD.html"], 
    ["Women Leading Organizations", "WLO.html"], 
    ["HR Evolution", "HRE.html"],
	["Journey to Conscious Capitalism ", "JCC.html"],
	["ESG y Finanzas Sostenibles para la Empresa", "ESG.html"],
	["Seminario de Administración y Planeación Estratégica del Comercio Detallista", "SAPECD.html"],
	["Diploma: Empresas Conscientes | EMERITUS", "https://em.egade.tec.mx/empresas-conscientes?utm_source=EGADE&utm_medium=website&utm_campaign=B-27474_WW_EM_Website_emco-la_JUN_23_Sitio-EGADE&utm_content=learn-more"],
	["Liderazgo Sustentable | EMERITUS", "https://em.egade.tec.mx/liderazgo-sustentable?utm_medium=EmWebsite&utm_content=University&utm_term=EGADE-Business-School&utm_campaign=direct_EmWebsite_University_EGADE-Business-School"],
	["Estrategia de Negocio: de la tecnología a la IA | EMERITUS", "https://bitly.emeritus.org/3SuVGKI"],
	["Digital Mindset & Acceleration for Business | EMERITUS", "https://em.egade.tec.mx/digital-mindset?utm_source=EGADE&utm_medium=website&utm_campaign=B-26128_WW_EM_Website_edimab-la_JUN_23_Sitio-EGADE&utm_content=learn-more"],
	["Economía Circular | EMERITUS", "https://em.egade.tec.mx/economia-circular?utm_source=EGADE&utm_medium=website&utm_campaign=B-26121_WW_EM_Website_egade-eci-la_JUN_23_Sitio-EGADE&utm_content=learn-more"],
	["Finanzas para la Sustentabilidad | EMERITUS", "https://em.egade.tec.mx/finanzas-sustentabilidad?utm_source=EGADE&utm_medium=website&utm_campaign=B-26530_WW_EM_Website_egade-fin-la_JUN_23_Sitio-EGADE&utm_content=learn-more"]
    ];

    for (var i = 0; i < programas.length; i++) {
		  programas[i];

			//console.log( programas[i][0]+", "+programas[i][1]);
			document.getElementById("sub-menu-progrmas").innerHTML += '<ul class="col-sm-3 list-unstyled">  <li class="list-li"><a class="list-a" href="'+ programas[i][1]+'">'+ programas[i][0]+'</a></li> </ul>';
		}

    //$("#sub-menu-progrmas").html(' ');
/*

(function() {
  var domainsToDecorate = [
          'egade.csf.itesm.mx/prueba/educacion-ejecutiva',
          'egade.csf.itesm.mx/sites/executive-education' 
      ],
      queryParams = [
          'utm_medium',
          'utm_source',
          'utm_campaign'
      ]

  var links = document.querySelectorAll('a'); 


  for (var linkIndex = 0; linkIndex < links.length; linkIndex++) {
      for (var domainIndex = 0; domainIndex < domainsToDecorate.length; domainIndex++) { 
          if (links[linkIndex].href.indexOf(domainsToDecorate[domainIndex]) > -1 && links[linkIndex].href.indexOf("#") === -1) {
              links[linkIndex].href = decorateUrl(links[linkIndex].href);
          }
      }
  }

  function decorateUrl(urlToDecorate) {
      urlToDecorate = (urlToDecorate.indexOf('?') === -1) ? urlToDecorate + '?' : urlToDecorate + '&';
      var collectedQueryParams = [];
      for (var queryIndex = 0; queryIndex < queryParams.length; queryIndex++) {
          if (getQueryParam(queryParams[queryIndex])) {
              collectedQueryParams.push(queryParams[queryIndex] + '=' + getQueryParam(queryParams[queryIndex]))
          }
      }
      return urlToDecorate + collectedQueryParams.join('&');
  }


  function getQueryParam(name) {
      if (name = (new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(window.location.search))
          return decodeURIComponent(name[1]);
  }

})();*/
