
// init Isotope catalogue
/*
var $grid = $('.grid').isotope({
	itemSelector: '.grid-item',
	layoutMode: 'fitRows',
    percentPosition: true,
	 sortAscending: {
    name: true,
	annee: false,
    category: false
  },
	  getSortData: {
    name: '.name',
    annee: '.annee',
    category: '[data-category]'
  },
  masonry: {
    columnWidth: '.grid-sizer'
  }
});*/

  
// init Isotope
var $grid = $('.grid').isotope({
   itemSelector: '.grid-item',
	layoutMode: 'fitRows',
    percentPosition: true,
	fitRows: {
		gutter: '.gutter-sizer'
	},
	sortAscending: {
    name: true,
	annee: false, // (plus récent d’abord)
    category: false
	},
	getSortData: {
    name: '.name',
    annee: '.annee',
    category: '[data-category]'
	},
	masonry: {
    // use element for option
    columnWidth: '.grid-sizer'
  }
});

$( document ).ready( function() {

  $grid.isotope({ sortBy: 'annee' }); // par ordre chronologique (plus récent d’abord)
  
  });

// layout Isotope after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.isotope('layout');
});

// sort items on button click
$('.sort-by-button-group').on( 'click', 'button', function() {
  var sortByValue = $(this).attr('data-sort-by');
  $grid.isotope({ sortBy: sortByValue });
});

/*
$("button").click(function(){
    $(this).css("background-color", "#cccccc");
});

*/


