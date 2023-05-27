/**
 * main js file for the whole project..don`t write js for single pages here
 */

/* Scroll header*/
window.onscroll = function() {
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        $('#company_logo').hide();
        $('#company_sub_quote').hide();
        if($(window).width() < 530) {
            $('.header').css("height", "80px");
        } else {
            $('.header').css("height", "50px");
        }
    } else {
        $('#company_logo').show();
        $('#company_sub_quote').show();
        if($(window).width() < 530) {
            $('.header').css("height", "150px");
        } else {
            $('.header').css("height", "120px");
        }
    }
}