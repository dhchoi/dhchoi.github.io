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
	$contentContainer.click(function(){
		if ($contentContainer.hasClass("open")) {
			$(close);
		}
	});

	/* page transitions */
	var $links = $("#sidebar a");
	var $pages = $("#content > .page");
	$(".scroll").click(function (event) {
		event.preventDefault();

		$($pages).not(this.hash).hide();
		$(this.hash).fadeIn();

		// link selected indicators
		$($links).not(this).removeClass("link-selected"); /* TODO: try using siblings */
		$(this).addClass("link-selected");

		$(close);
	});
});