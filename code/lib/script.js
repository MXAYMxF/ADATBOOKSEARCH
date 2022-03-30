

	$("#openurl").click( function(evt) {
 	 $('li > :checked + a').each(function(i, el) {
         console.log("opening... "+el.getAttribute('href'));
         console.log("decoding... "+el.getAttribute('href'));
        var uri = el.getAttribute('href');
        var res = decodeURI(uri);
        console.log(res);   
        console.log(decodeURIComponent(uri));   
         window.open(decodeURIComponent(uri));

	  });
	});
			

	$("#selectall").click (function (){

            $(" INPUT[type='checkbox']").attr('checked', true);
            return false;
    		
	});
		$("#selectnone").click (function (){

            $(" INPUT[type='checkbox']").attr('checked', false);
            return false;
	});

        $(document).ready(function () {
        $('input.qurls').hide(); //feature under development
        $('.hidden').hide();
        $('#guide').hide();
        // $('.spinner').hide();
        $('.spinner').css("display","none");
        $('li ').css("display","inline");

        if (navigator.userAgent.indexOf('Mac') != -1) {
 		 $("#key").text("COMMAND");
		} else {
 		 $("#key").text("CTRL");
		}
    });

/**
		MAIN SCRIPT FOR PROCESSING URLS
**/

$("#Qbtn").click( function(){

//put in the input's current store 'cur' . (data) the current input's value
$("#Q").data('cur', ($("#Q").val()));	

if ( $.trim($("#Q").val()) != ""){	// avoid empty search queries

$("#guide").show();




	if ( $("#Q").data('prev') == null ){ //the first time this is run: 

		 // $("#cur").text("prev input is null and current stored is: "+ $("#Q").data('cur') +"while current value is"+$("#Q").val()  ); //div to show me
 	
 	//the following span is placed inside $(#guide) span
 	$("#cur").text($("#Q").data('cur') );

	
		/**	Here comes logic to traverse each LI, find the Test value in each href, replace it with input value **/

		$( ' li ').each (function() {
			$('a[href*="Test"]').each( function(){  
		 		var oldUrl  = $(this).attr("href"); // Get current url          
		        var newUrl = oldUrl.replace("Test",  $("#Q").data('cur')); // Create new url
		        $(this).attr("href", newUrl); // Set href value
		        $ (this).append($(".hidden").html()).hide().fadeIn(600);
		        
			});
		});

		/** END of FIRST LI Logic and we will update the stored value for the 2nd run *****/
		/** START SECOND TIME Logic if Test value is no longer in the hrefs of LI **/
		$("#Q").data('prev', $("#Q").val());	//add prev value

	} else { //this is not the first time it runs:

		//show me the prev	
		// $("#prev").text ("input is not null, it was "+$("#Q").data('prev')+" and new input is: "+$("#Q").data('cur'));

		var temp = $("#Q").data('prev'); // grab the stored value
 		// $("#cur").text($("#Q").data('cur') );

		/**	Here comes logic **/
		//**. The try and catch statements are to hadnle multiword search terms that could not be passed to the condition $('a[href*='+temp+']')//

		$( ' li ').each (function() {
			try{
			  console.log("TRY statement")

			  $('a[href*='+temp+']').each( function(){  //identify its location in the urls
			  var oldUrl  = $(this).attr("href"); // Get current url          
			         var newUrl = oldUrl.replace( $("#Q").data('prev'),  $("#Q").data('cur')); // Create new url with stored value replaced by new input text
			         $(this).attr("href", newUrl); // Set href value 
			  });
			} catch (error) {
				  console.log("Error has been handled")

			} finally {
				 console.log("Error is being handled")
			        window.onerror = function() {
 					   location.reload();
					}

				var encodedQ = encodeURI(temp);
				  $('a[href*='+encodedQ+']').each( function(){  //identify its location in the urls
			  		var oldUrl  = $(this).attr("href"); // Get current url          
			        var newUrl = oldUrl.replace( $("#Q").data('prev'),  $("#Q").data('cur')); // Create new url with stored value replaced by new input text
			        $(this).attr("href", newUrl); // Set href value 

			     });

			}
		});
		/** END of LI Logic **/

		$("#Q").data('prev', $("#Q").val());	//update prev value
	}
}


});
  

//if they wants to test the tool
$("#trythis").click(function(){
	$("#Q").val($("#trythis").text());
	$("#Qbtn").click();

});

//This is to enable the return key response
$("#Q").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#Qbtn").click();
    }
});
