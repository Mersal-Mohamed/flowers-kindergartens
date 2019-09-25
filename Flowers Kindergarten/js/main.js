/* global $, console, alert, prompt */



$(function () {

$("header .stacks-btn i").click(function (){
    $("header .icon-login").toggleClass("list-display");
    $("header .icon-div").toggleClass("list-display");
});

$(".f-nav .stacks-btn i").click(function (){
    $(".f-nav ul").toggleClass("list-display-2");
    $(".f-nav p").css({
        "display" : "inline-block",
        "margin-top" : "10px"
});
    $(this).left
});

});


