$(document).ready(function() {  

$('.a').hover(function(){
    $(".origa").toggleClass("zoomtext");
});
$('.b').hover(function(){
    $(".origb").toggleClass("zoomtext");
});

uitleg = true;

//Uitleg knop
function verbergA(){
        if (uitleg == true){
        $(".origa").removeClass("zoomtext");
        $(".pop").toggleClass("belangh1");
        $(".a").toggleClass("belangbox");
        $(".a").toggleClass("origa");
        $(".a").toggleClass("box-text");
        $(".a").toggleClass("tbox-text");
        $(".teruga").toggleClass("invis");
        $(".b").toggleClass("invis");
        $(".uitlegtext").toggleClass("invis");
        uitleg = false;
    }
}

//Uitleg terug knop
function terugA(){
        $(".pop").toggleClass("belangh1");
        $(".a").toggleClass("belangbox");
        $(".a").toggleClass("origa");
        $(".a").toggleClass("box-text");
        $(".a").toggleClass("tbox-text");
        $(".teruga").toggleClass("invis");
        $(".b").toggleClass("invis");
        $(".uitlegtext").toggleClass("invis");
        uitleg = true;
}

//Uitleg knop
$('.a').click(verbergA);
//Uitleg terug knop
$('.teruga').click(terugA);

//Voor tutorial v2
tutorial = 0;
    $('.b').click(function(){
        if (tutorial == 0){
            $(".origb").removeClass("zoomtext");
            $(".pop").toggleClass("belangh1");
            $(".b").toggleClass("belangbox");
            $(".b").removeClass("origb");
            $(".b").toggleClass("box-text");
            $(".b").toggleClass("tbox-text");
            $(".terugb").toggleClass("invis");
            $(".a").toggleClass("invis");
            $(".box1").toggleClass("invis");
            tutorial = 1;
            
        }
    });
    
$('.terugb').click(function(){
    if (tutorial == 1){
    $(".pop").toggleClass("belangh1");
    $(".b").toggleClass("belangbox");
    $(".b").addClass("origb");
    $(".b").toggleClass("box-text");
    $(".b").toggleClass("tbox-text");
    $(".terugb").toggleClass("invis");
    $(".a").toggleClass("invis");
    $(".box1").addClass("invis");
    $(".box2").addClass("invis");
    $(".box3").addClass("invis");
    $(".box4").addClass("invis");
    tutorial = tutorial - 1;
    }

    else if (tutorial > 2){
        $(".box"+tutorial).toggleClass("invis");
        tutorialx = tutorial + 1;
        $(".box"+tutorialx).toggleClass("invis");
        tutorial = tutorial - 1;
    }
    else if (tutorial == 2){
        $(".box1").removeClass("invis");     
        $(".box2").removeClass("invis");
        $(".box3").addClass("invis");
        tutorial = tutorial - 1;
    }
    
});

//Eerste box geklikt
$('.box1 a').mouseup(function(){
    $(".box2").removeClass("invis");
});

//Tweede box geklikt
$('.box2 a').mouseup(function(){
    $(".box1").addClass("invis");
    $(".box2").addClass("invis");
    $(".box3").removeClass("invis");
    tutorial = tutorial + 1;
    
}); 

$('.kt a').mouseup(function(){
    tutorial = tutorial + 1;
    volgende = tutorial + 1;
    $(".box"+tutorial).addClass("invis");
    $(".box"+volgende).removeClass("invis");
});  


});

