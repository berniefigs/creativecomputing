




var baseURl = "",
    slideImg = [
        "https://farm5.staticflickr.com/4866/44459040200_eaeec7ef22_z.jpg",

        "https://farm5.staticflickr.com/4873/44459040270_2faa8fdd48_z.jpg",

        "https://farm5.staticflickr.com/4814/31337170517_637ee3d39c_z.jpg",

        "https://farm5.staticflickr.com/4874/44459040320_237f1fee25_z.jpg",

       "https://farm5.staticflickr.com/4820/46275785331_d3b5316924_z.jpg",

       "https://farm5.staticflickr.com/4813/31337170627_ffed8cbdbc_z.jpg",

       "https://farm5.staticflickr.com/4833/44459040400_7368c22951_z.jpg",

       "https://farm5.staticflickr.com/4889/44459040500_751b392c44_z.jpg",

       "https://farm5.staticflickr.com/4852/44459040530_419ed2d0dd_z.jpg",

       "https://farm5.staticflickr.com/4916/45552771554_54efaa95f4_z.jpg",

       "https://farm5.staticflickr.com/4860/44459040660_d853de4782_z.jpg",

         "https://farm5.staticflickr.com/4826/44459040670_28c1eb3a21_z.jpg",

       "https://farm5.staticflickr.com/4894/31337170747_829851d6f1_z.jpg", 

      "https://farm5.staticflickr.com/4857/44459040720_622f938c55_z.jpg", 

      "https://farm5.staticflickr.com/4870/44459040730_dc01527d91_z.jpg", 

      "https://farm5.staticflickr.com/4805/44459040840_408c2d50a8_z.jpg",

  "https://farm5.staticflickr.com/4832/31337170807_31fc8ac3ba_z.jpg",
      
 "https://farm5.staticflickr.com/4821/44459040810_0d1fef21fe_z.jpg",

 "https://farm5.staticflickr.com/4824/46276229801_065cfef947_z.jpg",
 
      "https://farm5.staticflickr.com/4858/44459040960_b00e6b5b78_z.jpg",],
    $gallery = $("#gallery");

$(function () {
    var files = "",
        bullets = "";
  
    for (var i = 0; i < slideImg.length; i++) {
        files += "" + "<div class=\"slide\">" + "<img class=\"slideImg\" src=\"" + baseURl + slideImg[i] + "\">" + "</div>";
        $gallery.html(files); 
    }
    for (var j = 0; j < slideImg.length; j++) {
        bullets += "" + "<div class=\"bulletOption\"></div>";
        $("#sliderBullets").html(bullets); // Injects content created by loop
    }
    $('#sliderBullets').children().attr('class', 'bulletOption').eq(0).addClass('bulletSelected'); // Sets first bullet as selected bullet
});



var slideIndex = 1, // Sets index number for first slide 
    slideChangeSpeed = 5000, // Time between slide change in milliseconds
    slideFadeIn = 1000, // Fade in time in milliseconds
    slideFadeOut = 1000; // Fade out time in milliseconds

// Start slideshow
var beginSlideShow = setInterval(function () {
    $gallery.children().fadeOut(slideFadeOut).eq(slideIndex).fadeIn(slideFadeIn);
    $('#sliderBullets').children().attr('class', 'bulletOption').eq(slideIndex).addClass('bulletSelected');
    slideIndex++;
    if (slideIndex === $('#gallery').children().length) {
        slideIndex = 0;
    }
}, slideChangeSpeed);

// Show specific slide based on bullet choice and stop slideshow
$(document).ready(function () {
    $('#sliderBullets').children().click(function () {
        clearInterval(beginSlideShow);
        $gallery.children().fadeOut(slideFadeOut); // Fades out all slides
        $gallery.children().eq($(this).index()).fadeIn(slideFadeIn); // Uses the selected bullet's index to fade in the corresponding slide
        $('#sliderBullets').children().attr('class', 'bulletOption').eq($(this).index()).addClass('bulletSelected'); // Sets all bullets to unselected, then sets the selected bullet to selected
    });
});

















// Create cross browser requestAnimationFrame method:
window.requestAnimationFrame = window.requestAnimationFrame
 || window.mozRequestAnimationFrame
 || window.webkitRequestAnimationFrame
 || window.msRequestAnimationFrame
 || function(f){setTimeout(f, 1000/60)}
 
var ok01 = document.getElementById('ok01')
var ok02 = document.getElementById('ok02')
var ok03 = document.getElementById('ok03')
 
var scrollheight = document.body.scrollHeight // height of entire document
var windowheight = window.innerHeight // height of browser window
 
function parallaxbubbles(){
 var scrolltop = window.pageYOffset // get number of pixels document has scrolled vertically 
 var scrollamount = (scrolltop / (scrollheight-windowheight)) * 100 // get amount scrolled (in %)
ok01.style.top = -scrolltop * .2 + 'px' // move bubble1 at 20% of scroll rate
ok02.style.top = -scrolltop * .5 + 'px' // move bubble2 at 50% of scroll rate
ok03.style.left = -100 + scrollamount + '%' // set position of fish in percentage (starts at -100%)
}
 
window.addEventListener('scroll', function(){ // on page scroll
 requestAnimationFrame(parallaxbubbles) // call parallaxbubbles() on next available screen paint
}, false)
 
window.addEventListener('resize', function(){ // on window resize
 var scrolltop = window.pageYOffset // get number of pixels document has scrolled vertically
 var scrollamount = (scrolltop / (scrollheight-windowheight)) * 100 // get amount scrolled (in %)
ok03.style.left = -100 + scrollamount + '%' // set position of fish in percentage (starts at -100%)
}, false)



