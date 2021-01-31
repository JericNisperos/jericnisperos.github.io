

// function getCssValuePrefix()
// {
//     var rtrnVal = '';//default to standard syntax
//     var prefixes = ['-o-', '-ms-', '-moz-', '-webkit-'];

//     // Create a temporary DOM object for testing
//     var dom = document.createElement('div');

//     for (var i = 0; i < prefixes.length; i++)
//     {
//         // Attempt to set the style
//         dom.style.background = prefixes[i] + 'linear-gradient(#000000, #ffffff)';

//         // Detect if the style was successfully set
//         if (dom.style.background)
//         {
//             rtrnVal = prefixes[i];
//         }
//     }

//     dom = null;
//     delete dom;

//     return rtrnVal;
// }


function homecolor() {
    document.body.style.backgroundColor = "rgb(68,68,68)";
}

function workcolor() {
    document.body.style.backgroundColor = "rgb(68,68,68)";
    //var dome = document.getElementById('bodystyle');
    // dome.style.backgroundImage = getCssValuePrefix() + 'linear-gradient('
    //     + "to top right" + ', ' + "black" + ', ' + "red" + ')';
    //dome.style.backgroundImage ='-moz-linear-gradient('
         // + "to top right" + ', ' + "black" + ', ' + "red" + ')';

    // var dom = document.getElementById('bodystyle');
    // dom.style.backgroundImage = '-moz-linear-gradient('
    //     + "-45deg" + ', ' + "black" + ', ' + "green" + ')';
}

function artscolor() {
    document.body.style.backgroundColor = "rgb(68,68,68)";
}

function resumecolor() {
    document.body.style.backgroundColor = "rgb(68,68,68)";
}

function sentjs() {
    alert("Message Sent Successfully!");
}




// Setting the gradient with the proper prefix
// dom.style.backgroundImage = getCssValuePrefix() + 'linear-gradient('
//         + orientation + ', ' + colorOne + ', ' + colorTwo + ')';








































// if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
// window.onmousewheel = document.onmousewheel = wheel;

// function wheel(event) {
//     var delta = 0;
//     if (event.wheelDelta) delta = event.wheelDelta / 120;
//     else if (event.detail) delta = -event.detail / 3;

//     handle(delta);
//     if (event.preventDefault) event.preventDefault();
//     event.returnValue = false;
// }

// function handle(delta) {
//     var time = 300;
//     var distance = 200;
    
//     $('html, body').stop().animate({
//         scrollTop: $(window).scrollTop() - (distance * delta)
//     }, time );
// }


var $numberofSlides = $('.carousel-item').length;
var $currentSlide = Math.floor((Math.random() * $numberofSlides));

$('.carousel-indicators li').each(function(){
  var $slideValue = $(this).attr('data-slide-to');
  if($currentSlide == $slideValue) {
    $(this).addClass('active');
    $item.eq($slideValue).addClass('active');
  } else {
    $(this).removeClass('active');
    $item.eq($slideValue).removeClass('active');
  }
});
// function setup() {
// }
//  function draw() {
//     noStroke();
//     fill(100, 250, 100);
//     translate(mouseX, mouseY);
//     angleMode(DEGREES);
//     rotate(-45);
//     beginShape();
//     vertex(0, 0);
//     vertex(-8, 15);
//     vertex(0, 10);
//     vertex(8, 15);
//     endShape();
//  }

// $('#carousel-example-captions').on('slid.bs.carousel', function () {
//     $(this).find('.active .carousel-letters').animate(
//         {bottom: '20px'},
//         '1000'
//     );
// })


// var limenu = document.getElementsByClassName("limenu");
// var windowWidth = window.innerWidth;
// if (windowWidth < 320) {
//     limenu.fontSize = 20px;
// }



























//Color Changing on Menu

$(document).ready(function(){
    $("#homemenu").css({color:"white","border-bottom":"2px solid white"}),
    $("#homediv").show(),
        $("#worksdiv").hide(),
        $("#artsdiv").hide(),
        $("#resumediv").hide(),
        $("#homemenu").click(function(){
            $(this).css({color:"white","border-bottom":"2px solid white"}),
            $("#resumemenu, #worksmenu, #artsmenu").css({color:"rgb(0, 255, 255)","border-bottom":"0px"}),
            $("#homediv").show(300),
            $("#worksdiv").hide(100),
            $("#artsdiv").hide(100),
            $("#resumediv").hide(100)}),
        $("#resumemenu").click(function(){
            $(this).css({color:"white","border-bottom":"2px solid white"}),
            $("#homemenu, #worksmenu, #artsmenu").css({color:"rgb(0, 255, 255)","border-bottom":"0px"}),
            $("#homediv").hide(100),
            $("#worksdiv").hide(100),
            $("#artsdiv").hide(100),
            $("#resumediv").show(100)}),
        $("#artsmenu").click(function(){
            $(this).css({color:"white","border-bottom":"2px solid white"}),
            $("#homemenu, #worksmenu, #resumemenu").css({color:"rgb(0, 255, 255)","border-bottom":"0px"}),
            $("#homediv").hide(100),
            $("#worksdiv").hide(100),
            $("#artsdiv").show(100),
            $("#resumediv").hide(100)}),
        $("#worksmenu").click(function(){
            $(this).css({color:"white","border-bottom":"2px solid white"}),
            $("#homemenu, #resumemenu, #artsmenu").css({color:"rgb(0, 255, 255)","border-bottom":"0px"}),
            $("#homediv").hide(100),
            $("#artsdiv").hide(100),
            $("#worksdiv").show(100),
            $("#resumediv").hide(100)})});



//IMG TO IFRAMES

$(document).ready(function(){

    //     $("#lastdiv").hide()
    //     $("#flipcard").flip(function(){
    //         console.log("TRY");
    //    $("#firstdiv").hide()
    //    $("#lastdiv").show()
    //    return true;
    // })

// $(".workdiv").flip({
//   trigger: 'hover'
// });
});