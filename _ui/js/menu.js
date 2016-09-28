var topMenu = function() {
	$("#nav-icon").click(function(e) {
        $(this).toggleClass("open");
        $("#nav-links").toggleClass("popup");
	});
};

$(document).ready(topMenu);
