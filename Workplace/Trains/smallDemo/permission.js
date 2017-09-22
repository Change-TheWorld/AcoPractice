$(document).ready(function() {
	$('.bk-button').click(function() {
		if(this.hasClass("bk-button-current")){
			$(this).removeClass("bk-button-current");
		}else{
			$(this).addClass("bk-button-current");
		}
	});
    
    $("#a").click(function() {
		$("dd").fadeToggle("slow");
	});
});