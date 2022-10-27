
$(".show-options").click(function (e) { 
    e.preventDefault();
    $(".options").css("display", "block")
        .css("z-index", "1")
    $(".options").addClass("clicked")
    $(".show-options").css("display", "none")
    $(".shade").css("backround-color", "black");
    $(".hide-options").css("display", "block");
    $(".shade").css("display", "block");

    
});

$(".hide-options").click(function (e) { 
    e.preventDefault();
    $(".options").css("display", "none")
    $(".hide-options").css("display", "none");
    $(".show-options").css("display", "block");
    $(".shade").css("display", "none");
});

$(window).resize(function () {
    if (Number($("body").css("width").slice(0, 4)) > 900) {
        $(".options").css("display", "none");
        $(".hide-options").css("display", "none");
        $(".show-options").css("display", "block")
        $(".shade").css("display", "none");
    }
})
$(".shade").click(function (e) {
    e.preventDefault();
    $(this).css("display", "none");
    $(".hide-options").css("display", "none");
    $(".show-options").css("display", "block");
    $(".options").css("display", "none");
})


