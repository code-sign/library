$(document).ready(function(){



// init Isotope
var $grid = $('.item_wrap').isotope({
	itemSelector: '.item',
	//item center align
	masonry:{
		columWidth:110,
		isFitWidth:true
	}
});


// bind filter button click
$('.filters-button-group').on( 'click', '.filter_btn', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  $grid.isotope({ filter: filterValue });
  return false;
});



});