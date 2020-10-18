$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 100) {
            $(".sidebar-wrapper").addClass("teste2");
        } else {
            $(".sidebar-wrapper").removeClass("teste2");
        }
    });
});
