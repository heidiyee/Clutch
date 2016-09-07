var magicLine = function() {
    $("#nav-links").hover(function(e) {
        $("#selected").toggleClass("selected");
    });
};

$(document).ready(magicLine);
