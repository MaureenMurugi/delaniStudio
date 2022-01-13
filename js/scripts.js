$(document).ready(function() {
    $("#development-image").click(function() {
        $("#development-image").slideDown('1500').hide('1000');
        $("#development").show('1500');
        });
        $("#development").click(function() {
        $("#development").slideUp('1500');
        $("#development-image").slideDown('1500');
        });
        });
        
        $(document).ready(function() {
        $("#design-image").click(function() {
        $("#design-image").slideDown('1500').hide('1000');
        $("#design").show('1500');
        });
        $("#design").click(function() {
        $("#design").slideUp('1500');
        $("#design-image").slideDown('1500');
        });
        });
        
        $(document).ready(function() {
        $("#product-image").click(function() {
        $("#product-image").slideDown('1500').hide('1000');
        $("#product").show('1500');
        });
        $("#product").click(function() {
        $("#product").slideUp('1500');
        $("#product-image").slideDown('1500');
        });
            
});

$(".work1").mouseover(function() {
    $("#overlay").show();
});
$(".work1").mouseout(function() {
    $("#overlay").hide();
});

$(".work2").mouseover(function() {
    $("#overlay2").show();
});
$(".work2").mouseout(function() {
    $("#overlay2").hide();
});

$(".work3").mouseover(function() {
    $("#overlay3").show();
});
$(".work3").mouseout(function() {
    $("#overlay3").hide();
});

$(".work4").mouseover(function() {
    $("#overlay4").show();
});
$(".work4").mouseout(function() {
    $("#overlay4").hide();
});

$(".work5").mouseover(function() {
    $("#overlay5").show();
});
$(".work5").mouseout(function() {
    $("#overlay5").hide();
});

$(".work6").mouseover(function() {
    $("#overlay6").show();
});
$(".work6").mouseout(function() {
    $("#overlay6").hide();
});

$(".work7").mouseover(function() {
    $("#overlay7").show();
});
$(".work7").mouseout(function() {
    $("#overlay7").hide();
});

$(".work8").mouseover(function() {
    $("#overlay8").show();
});
$(".work8").mouseout(function() {
    $("#overlay8").hide();
});


$("form#my-form").submit(function (event){
    event.preventDefault();
    var name = $("#MERGE1").val();
    alert("Dear "+ name + "we have received your message. Thank you for reaching out to us");
    document.getElementById("my-form").reset();
});