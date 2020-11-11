$(function(){
	$(".navbar-toggler").blur(function(event){
		var screenwidth=window.innerwidth;
		if(screenwidth<780){
			$("#navbarSupportedContent").collapse('hide');
		}


	})
})