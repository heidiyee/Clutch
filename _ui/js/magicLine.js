var magicLine = function() {
    $("#nav-links").hover(function(e) {
        // console.log('hovered');
        $("#selected").toggleClass("selected");
    });
};

$(document).ready(magicLine);
