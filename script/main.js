$(function(){
/*	var maxScrollTop=200;
	$(window).scroll(function(event){
		$(".header").slideUp(1000);
		$(".nav").css({
			position: 'fixed',
			top: '0',
			opacity: "1"
		});
	});*/
	$(window).one("scroll",function(){
		$(".header").slideUp(1000);
		$(".nav").css({
			position: 'fixed',
			top: '0',
			opacity: "1"
		});
		$(window).scrollTop(0);
	})
})