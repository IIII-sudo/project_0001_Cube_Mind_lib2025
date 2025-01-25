
$(window).on('load',function(){
	setTimeout(function(){ // allowing 3 secs to fade out loader
	$('.page-loader').fadeOut('slow');
  $('html, body').css({
    'overflow': 'auto',
    'height': 'auto'
  })
	},3500);
});

 $('html, body').css({
  'overflow': 'hidden',
  'height': '100%'
});
