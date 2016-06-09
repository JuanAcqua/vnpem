/**
 * Created by marcoslopez7 on 9/06/16.
 */
$(document).ready(function () {
    $(window).scroll(function () {
        var $scrollPosition = $(window).scrollTop() - 1600;
        var imagePosition = $scrollPosition * 2;

        $('#armando').css(
            'background-position', '0 ' + (imagePosition * -1) + 'px'
        );
    });
})