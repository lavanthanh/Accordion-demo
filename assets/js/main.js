;(function($) {

    'use strict'

    var $toggles = function () {
    	var args = {easing:'easeOutExpo', duration:300};
    	$('#toggle-wrap .toggle-item.active').find('.toggle-content').show();
    	$('#toggle-wrap .toggle-item .toggle-heading').on('click', function() {
    		if( !$(this).parent().is('active')) {
    			$(this).parent().toggleClass('active')
    			.children('.toggle-content').slideToggle(args)
    			.parent().siblings('.active').removeClass('active')
    			.children('.toggle-content').slideToggle(args);
    		} else {
    			$(this).toggleClass('acitve');
    			$(this).next().slideToggle(args);
    		}
    	});
    }

    $(function() {
    	$toggles();
    });

})(jQuery);