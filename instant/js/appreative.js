// JavaScript Document

$(document).ready(function() {
	
	
	setTimeout (function() {$('#options').animate({left:'-220px'});}, 400);
	// switch
	$('span.dialog').click(function() {
		var optionsPos = $('#options').css("left");
		if(optionsPos == "0px") {
				$('#options').animate({ "left": "-220px" }, "fast" );
				$(this).find('h4').html('&raquo;').parent().css({'background':'#333'});
		} else {
				$('#options').animate({ "left": "0px" }, "fast" );
				$(this).find('h4').html('&laquo;').parent().css({'background':'#000'});
		}
	 });
	 
	$('#options .readyColors a').each(function(index) {
			var ownColor = $(this).text();
			$(this).css({'background-color':'#'+ownColor+''});
	});
	
	$('body').append('<input type="text" style="visibility:hidden; position:fixed; top:20px; right:20px;" id="siteColorBox">');
	$('body').append('<input type="text" style="visibility:hidden; position:fixed; top:20px; right:20px;" id="siteTexBox">');
	
	function DynamicCss() {
				
			var mainColor = $('#siteColorBox').val();
						
			$('head style').append('h1, h3, h4, h5, h6, #home nav li a {font-family:"'+Heading_Font+'"; } html, body, div, p, table, tr, td, th, tbody, tfoot, ul, li, ol, dl, dd, dt, fieldset, blockquote, cite, input, select, textarea, button, a, section, article, aside, header, footer, nav, h2, a.carousel-control {font-family:"'+Site_Font+'"; } body, #copyright, #quoteSlider h3 span.quote, span.author i.user, #quoteSlider ol.carousel-indicators li.active, img.envelop, .priceBox h3, .priceBox li span, a.btn-xlarge, input.btn-xlarge, .btn-custom, span.medium-circle:hover, span.large-circle:hover, span.small-circle:hover, .downloadBtn, .active_accord a, span.accordion_status, a.top {background-color:#'+mainColor+';}  ::selection, ::-moz-selection{background-color:#'+mainColor+'; color:#fff;}   img.img-circle, span.medium-circle, span.large-circle, span.small-circle {border:#'+mainColor+' 1px solid;}   a, span.feature-icon i, span.large-circle i, span.small-circle i, span.medium-circle i, #contact div.span4 p i, .ulList li:before {color:#'+mainColor+';} @media screen and (min-width:320px) and (max-width:800px) {  #home nav {background-color:#'+mainColor+'!important;} }');
		
			 
		}
	 
	$('.readyColors a').click( function() { 
			var getColor = $(this).text(); 
			$('#siteColorBox').val(getColor);  
			DynamicCss();  
			event.preventDefault();  
	});
	
	$('#customcolorsform').submit( function() { 
			var getCustColor = $('#customColor').val(); 
			$('#siteColorBox').val(getCustColor);  
			DynamicCss();  
			return false;
	});
	
	
	
	
	// Global Color
	$('head style').append('h1, h3, h4, h5, h6, #home nav li a {font-family:"'+Heading_Font+'"; } html, body, div, p, table, tr, td, th, tbody, tfoot, ul, li, ol, dl, dd, dt, fieldset, blockquote, cite, input, select, textarea, button, a, section, article, aside, header, footer, nav, h2, a.carousel-control {font-family:"'+Site_Font+'"; } body, #copyright, #quoteSlider h3 span.quote, span.author i.user, #quoteSlider ol.carousel-indicators li.active, img.envelop, .priceBox h3, .priceBox li span, a.btn-xlarge, input.btn-xlarge, .btn-custom, span.medium-circle:hover, span.large-circle:hover, span.small-circle:hover, .downloadBtn, .active_accord a, span.accordion_status, a.top {background-color:#'+site_color+';}  ::selection, ::-moz-selection{background-color:#'+site_color+'; color:#fff;}   img.img-circle, span.medium-circle, span.large-circle, span.small-circle {border:#'+site_color+' 1px solid;}   a, span.feature-icon i, span.large-circle i, span.small-circle i, span.medium-circle i, #contact div.span4 p i, .ulList li:before {color:#'+site_color+';} @media screen and (min-width:320px) and (max-width:800px) {  #home nav {background-color:#'+site_color+'!important;} }');
	
	// Fixed Top
	$(window).scroll(function() {
		if ($(window).scrollTop() > 80) { 
			$('#top').css("background", "rgba(0,0,0,0.8)"); $('#top').css("border-bottom", "1px solid rgba(0, 0, 0, 1)"); 
		} else { 
			$('#top').css("background","none"); $('#top').css("border-bottom", "none"); $('#top').css("box-shadow", "none");
		}
		
		if ($(window).scrollTop() > 1000) { 
			$('a.top').fadeIn('slow'); 
		} else { 
			$('a.top').fadeOut('slow');
		}
		
	});
	
	$('span.tabMenu').click(function() {
		$('#home nav').slideToggle('slow');	
	});
	
	 var swidth = $(window).width();	 
	 if(swidth <= "800") {
		
		$('#top nav li a').click(function() {
			$('#home nav').slideToggle('slow');	
		});
	}
	
	//Feature Box
	$('.featureBox').append('<span class="arrow"><span>');
	$('.featureBox').animate({opacity:'0'}, 0);
	
	setTimeout(function() {
		
		$('.leftFeatures .featureBox').each(function(index) {
			$(this).delay(120*index).animate({left:'0px', opacity:'1'}, 400);
		});
			
	}, 400);
	
	setTimeout(function() {
	
		$('.rightFeatures .featureBox').each(function(index) {
			$(this).delay(120*index).animate({right:'0px', opacity:'1'}, 400);
		});
	
	}, 1000);
	
	var get_left_features = $('.LeftFBoxes').html();
	var get_right_features = $('.fBoxes').html();
	$('section.page-block:eq(1)').before('<section class="page-block no-border" id="homeFeatures"><div class="container">'+get_left_features+get_right_features+'</div></section>');
	$('section.page-block:eq(2)').removeClass('no-border');
	
	//Quotes
	$('.carousel').carousel('cycle', {
	 	 interval: 5000
	 });
	 
	 // Accordion
	 $('a.accordion-toggle').append('<span class="accordion_status"></span>');
	 
	 $('a.accordion-toggle').click(function() {
		var thisParent = $(this).parent();
		$('.accordion-heading').not(thisParent).removeClass('active_accord');
		$(this).parent().toggleClass('active_accord');	 
	 });
	 
	// Tabs
	$('#hTabs a, .tabs-left > .nav-tabs li a').click(function (e) {
	  e.preventDefault();
	  $(this).tab('show');
	});
	
	//gallery
	$('#gallery .imgGal a').hover(function() {
		$(this).append('<span class="overlay"></span>');	
	}, function() {
		$(this).find('span.overlay').remove();	
	});
	
	//page Scroll
	$('nav a[href^=#], a.top[href^=#]').click(function() {
			$('html,body').animate({
            scrollTop: $(this.hash).offset().top},
            1000);	
			event.preventDefault();
	});
	
	// Image Lightbox
	 $("a[rel^='prettyPhoto']").prettyPhoto({overlay_gallery: true});
	 $('a.imgHover').append('<span class="link"><i class="fa fa-search-plus"></i></span>');
	
	// Subscription Form Validation
	$('#subscribeForm').submit(function() {
		if($('#emailSubscribe').val() != "") {
			var subEmail = $('#emailSubscribe').val();	
			 if(subEmail.indexOf('@') == -1 || subEmail.indexOf('.') == -1) {
				  $('#subscribeForm')
				  .append('<div class="alert alert-error alert-block fade in">Please enter valid email address!</div>');
				  $('#subscribeForm').find('.alert').animate({ marginTop:'15px', opacity:'1'}, 300);
				  setTimeout(function() {
					  $('#subscribeForm').find('.alert').animate({ marginTop:'-10px', opacity:'0'}, 300);
				  }, 3000);
				  setTimeout(function() {
					  $('#subscribeForm').find('.alert').remove();
				  }, 3300);
			  } else {
				  $('#subscribeForm')
				  .append('<div class="alert alert-success alert-block fade in"><h4 class="alert-heading">Thank You!</h4>Your email address has been added in our list.</div>');
				 $('#subscribeForm').find('.alert').animate({ marginTop:'15px', opacity:'1'}, 300);
				  setTimeout(function() {
					  $('#subscribeForm').find('.alert').animate({ marginTop:'-10px', opacity:'0'}, 300);
				  }, 3000);
				  setTimeout(function() {
					  $('#subscribeForm').find('.alert').remove();
				  }, 3300);
			  }
		} else {
			  $('#subscribeForm')
			  .append('<div class="alert alert-error alert-block">Please enter your email address!</div>');
			  $('#subscribeForm').find('.alert').animate({ marginTop:'15px', opacity:'1'}, 300);
				  setTimeout(function() {
					  $('#subscribeForm').find('.alert').animate({ marginTop:'-10px', opacity:'0'}, 300);
				  }, 3000);
				  setTimeout(function() {
					  $('#subscribeForm').find('.alert').remove();
				  }, 3300);
			
		}
		 return false;
	});	
	
	// Contact Form
				 $('.loader').hide();
				 $("input, textarea").focus(function() {
					$(this).prev("label").hide();
					$(this).prev().prev("label").hide();	 		 	
				});
				 
				$("#submit").click(function() {
						  // validate and process form here
						  var name = $("input#name").val();
								if (name == "") {
								$('#name').css({'border':'#F96 1px solid', 'background-color':'#FFE6E8'});
								$('<span class="error" style="display:none; margin-top:0px;">Required!</span>').insertBefore('#name').fadeIn(400);
								$("input#name").focus(function() {  $(this).prev().fadeOut(400); $('#name').css({'border':'1px solid #555555', 'background-color':'#444444'});});
								return false;
						  }
							
						  var phone = $("input#phone").val();
								if (phone == "") {
								$('#phone').css({'border':'#F96 1px solid', 'background-color':'#FFE6E8'});
								$('<span class="error" style="display:none;">Required!</span>').insertBefore('#phone').fadeIn(400);
								$("input#phone").focus(function() {  $(this).prev().fadeOut(400); $('#phone').css({'border':'1px solid #555555', 'background-color':'#444444'});});
								return false;
						  }
						  
						  var email = $("input#email").val();
						  if (email == "") {
								$('#email').css({'border':'#F96 1px solid', 'background-color':'#FFE6E8'});
								$('<span class="error" style="display:none;">Required!</span>').insertBefore('#email').fadeIn(400);
								$("input#email").focus(function() {  $(this).prev().fadeOut(400); $('#email').css({'border':'1px solid #555555', 'background-color':'#444444'});});
								return false;
						   } else if(email.indexOf('@') == -1 || email.indexOf('.') == -1) {
								$('#email').css({'border':'#F96 1px solid', 'background-color':'#FFE6E8'});
								$('<span class="error" style="display:none;">Invalid Email Address!</span>').insertBefore('#email').fadeIn(400);
								$("input#email").focus(function() {  $(this).prev().fadeOut(400); $('#email').css({'border':'1px solid #555555', 'background-color':'#444444'});});
								return false;
						  }
						  
						  var comment = $("textarea#comment").val();
								if (comment == "") {
								$('#comment').css({'border':'#F96 1px solid', 'background-color':'#FFE6E8'});
								$('<span class="error" style="display:none;">Required!</span>').insertBefore('#comment').fadeIn(400);
								$("#comment").focus(function() {  $(this).prev().fadeOut(400); $('#comment').css({'border':'1px solid #555555', 'background-color':'#444444'});});
								return false;
						  }
						  
						  $('.loader').show();
						  $('#contact_form').animate({opacity:'0.3'}, 500);
						  
						  var dataString = 'name='+ name + '&email=' + email + '&phone=' + phone + '&comment=' + comment;
						  //alert (dataString);return false;
						  $.ajax({
							type: "POST",
							url: "form/contact.php",
							data: dataString,
							success: function() {
							  $("#contact_form").animate({opacity:'1'}, 500);
							  $('.loader').hide();
							  $("<div id='success' style='border:#"+successBox_Border_Color+" 1px "+successBoxBorderStyle+"; background:#"+successBoxColor+";' ></div>").insertAfter('#contact_form');
							  $('#contact_form').slideUp(300);
							  $('#success').html("<h4 style='color:#"+textColor+";'>"+submitMessage+"</h4><p style='color:#"+textColor+";'>"+successParagraph+"</p>")
							  .hide().delay(300)
							  .fadeIn(1500);
							}
						  });
						  return false;
				});
});
