/**
 * Created by marcoslopez7 on 3/06/16.
 */
$("document").ready(function () {

    $(".media").css("display", "none");
    
    var animated = 0;

    $(window).scroll(function() {
        $( ".media" ).each(function() {
            if($(window).scrollTop() > 570 && animated === 0) {
                $(".media").first().show("slow", function showNext() {
                    $(this).next("div").show("slow", showNext);
                });
                animated = 1;
            }
        });
    });

    if ($(window).scrollTop() > 600){
        $(".media").first().show("slow", function showNext() {
            $(this).next("div").show("slow", showNext);
        });
        animated = 1;
    }
});
