$(document).ready(function() {
	/* sliding animations */
	var $itemsToAnimate = $("#content, #sidebar-toggle, #sidebar");
	var $contentContainer = $("#content");
	var open = function() {
		$($itemsToAnimate).removeClass("close").addClass("open");
	}
	var close = function() { 
		$($itemsToAnimate).removeClass("open").addClass("close");
	}
	$("#sidebar-toggle").click(function(){
		if ($contentContainer.hasClass("open")) {
			$(close);
		}
		else {
			$(open);
		}
	});
	$contentContainer.click(function() {
		if ($contentContainer.hasClass("open")) {
			$(close);
		}
	});
});