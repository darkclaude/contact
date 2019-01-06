	
/* CUSTOM PARAMETERS */

/* ==================================  GLOBAL  ==================================== */

			var site_color = "f1601f"; // This is global main color for your template.
			
			var Heading_Font = "Amaranth"; // thats your special heading font
			
			var Site_Font = "asap"; // thats your special body content font
			
/* ================================  CONTACT PAGE  =================================== */
			
	/* SET CONTACT FORM SUCCESS MESSAGE */
	
			var submitMessage = "Your form has been submitted successfully.";
			
			var successParagraph = "We'll respond to your message within 24 hours. <br> Please call <b>123.456.789</b> for any urgent queries. Thank You!";
			
			var successBoxColor = "f9ffef"; // Background color for the success box
			
			var successBoxBorderStyle = "solid"; // Border Style  -  Example: solid, dotted, dashed, double
			
			var successBox_Border_Color = "bede8f"; // Border color for success box
			
			var textColor = "7a994c"; // text color for success box
			
/* ================================  REPLACE GOOGLE FONT CODE HERE  =================================== */

// Google Web Fonts
	WebFontConfig = {
    google: { families: [ 'Amaranth:400,400italic,700,700italic:latin', 'Asap:400,400italic,700,700italic:latin' ] }
	  };
	  (function() {
		var wf = document.createElement('script');
		wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
		  '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
		wf.type = 'text/javascript';
		wf.async = 'true';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(wf, s);
	  })();