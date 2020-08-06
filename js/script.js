$("#link").click(function() {
    $('html, body').animate({
        scrollTop: $(".about-me").offset().top
    }, 1000);
});

window.sr = ScrollReveal();
sr.reveal('.section-title', {duration: 2000, mobile: true });
sr.reveal('.section-subtitle', {duration: 2000, mobile: true });
sr.reveal('.feat-me', {duration: 2000, mobile: true });
sr.reveal('.about-me-paragraph', {origin: 'left', distance: '150px', duration: 2000, mobile: false });
sr.reveal('.contact-me-content', {origin: 'right', distance: '150px', duration: 2000, mobile: false });

$(function() {
    
    var $section = $('.skills-section');
	    function loadBars(){
		   	$('.skill-bar').each(function(){
		  		$(this).find('.skill-score').animate({
		    		width:$(this).attr('data-percent')
		  		},6000);
			});
		}	
    
    $(document).bind('scroll', function(ev) {
        var scrollOffset = $(document).scrollTop();
        var containerOffset = $section.offset().top - window.innerHeight;
        if (scrollOffset > containerOffset) {
            loadBars();
            // unbind event not to load scrolsl again
            $(document).unbind('scroll');
        }
    }); 
});