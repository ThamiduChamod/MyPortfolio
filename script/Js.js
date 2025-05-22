


//
// function imageOverlay() {
//
//     var imgWidth = $('#mainImg').width();
//     $('#overlayDiv').width(imgWidth - 2);
//     console.log(imgWidth);
//     // if (imgWidth > )
//     var imgHeight = $('#mainImg').height();
//     $('#overlayDiv').height(imgHeight);
//     $('#home').height(imgHeight);
//     $('#aboutMe').css('top', imgHeight+10 + 'px');
//     var aboutHeight = $('#aboutMe').height();
//     $('#myWorks').css('top', imgHeight+aboutHeight+10 + 'px');
//     var worksHeight = $('#myWorks').height();
//     $('#skill').css('top', imgHeight+aboutHeight+worksHeight+10 + 'px');
//     var skillHeight = $('#skill').height();
//     $('#contactme').css('top', imgHeight+aboutHeight+worksHeight+skillHeight+10 + 'px');
//
//
//
//     // if (screen_width <)
//
//
//
// }

// window.addEventListener("resize", imageOverlay);


window.addEventListener("load", function () {
    // imageOverlay();
    $('#self-btn-div').css('display','block');
    $('#edu-btn-div').css('display','none');

} );



$('#self-btn').on('click', function () {
    $('#edu-btn-div').css('display','none');
    $('#self-btn-div').css('display','block');

});



$('#education-btn').on('click', function () {
    $('#edu-btn-div').css('display','block');
    $('#self-btn-div').css('display','none');

});

$('#hamburger').on('click', function () {
    $('.navbar').toggleClass('show');
});


function swapImageForSmallScreens() {
    const image = document.getElementById("mainImg");
    const newImageSrc = "asserts/images/my_4.jpg"; // ✅ Replace with your mobile image path

    if (window.matchMedia("(max-width: 768px)").matches) {
        image.src = newImageSrc;
    } else {
        image.src = "asserts/images/12.jpg"; // ✅ Default image for larger screens
    }
}

// Run on page load
window.addEventListener("load", swapImageForSmallScreens);
// Run on resize
window.addEventListener("resize", swapImageForSmallScreens);


// // responsive header
// const hamburger = document.getElementsByClassName("hamburger");
// const navbar = document.getElementsByClassName("navbar");
//
// hamburger.addEventListener("click", function () {
//
//     navbar.classList.toggle("show");
//     console.log('qqqq')
// });
