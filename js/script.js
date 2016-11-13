$(document).ready(function(){
	// Declare Variables
	var totalWidth=0;
	var positions=new Array();

	$('#slides .slide').each(function(i){
		// Get Slider width
		positions[i] = totalWidth;
		totalWidth+=$(this).width();

		// Check Widths
		if(!$(this).width()){
			alert('Please Add a width to your images');
			return false;
		}
	});


	// Set Width
	$('#slides').width(totalWidth);

	// Menu Item click Handler 
	$('#menu ul li a').click(function(e, keepScroll){

		// Remove Active class and Add inactive
		$('li.product').removeClass('active').addClass('inactive');
		// Add Active class to Parent
		$(this).parent().addClass('active');

		var pos = $(this).parent().prevAll('.product').length;

		$('#slides').stop().animate({marginLeft:-positions[pos]+'px'},450);

		// prevent Default
		e.preventDefault();

		// Stop Autoscrolling
		if(!autoScroll) clearInterval(itvl);
	});

	// Make first image active
	$('#menu ul li.product:first').addClass('active').siblings().addClass('inactive');

	// Auto Scroll
	var current=1;
	function autoScroll(){
		if(current==-1) return false;

		$('#menu ul li a').eq(current%$('#menu ul li a').length).trigger('click', [true]);
		current++;
	}

	// Duration fo Auto Scroll  
	var duration=5;
	var itvl=setInterval(function(){
		autoScroll()}, duration*1000);

});