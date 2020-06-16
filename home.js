$(document).ready(function(){
    var dropdown = $(".navbar-right .dropdown");
    var toogleBtn = $(".navbar-right .dropdown-toggle");
    
    // Toggle search and close icon for search dropdown
    dropdown.on("show.bs.dropdown", function(e){
        toogleBtn.toggleClass("hide");
    });
    dropdown.on("hide.bs.dropdown", function(e){
        toogleBtn.addClass("hide");
        toogleBtn.first().removeClass("hide");
    });
});