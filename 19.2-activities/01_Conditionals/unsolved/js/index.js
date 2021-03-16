$('.tab').on("click", function(){

    
    if ($(this).hasClass("tab1")) {
        $(".tab1").addClass("active");
        $(".tab2").removeClass("active");
        $("#tabcontent1").css("display", "block");
        $("#tabcontent2").css("display", "none");
        console.log("tab 1 was clicked")
    }
    }

    else if ($(this).hasClass("tab2")) {
        $(".tab2").addClass("active");
        $(".tab1").removeClass("active");
        $("#tabcontent2").css("display", "block");
        $("#tabcontent1").css("display", "none");
        console.log("tab 2 was clicked")
    }
});


