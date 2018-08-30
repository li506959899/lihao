$(function(){
    $("#goodshover").mouseenter(function () {
        $(this).find(".size_lie").stop().slideDown(500);
        $(this).find(".size_p").stop().slideUp(500)
    })
    $("#goodshover").mouseleave(function () {
        $(this).find(".size_lie").stop().slideUp(500);
        $(this).find(".size_p").stop().slideDown(500)
    })
})