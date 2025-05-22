let screen_width;
function updateWindowSize() {
     screen_width = window.innerWidth;
    const height = window.innerHeight;
    console.log(`Width: ${width}, Height: ${height}`);
}

// Call it initially
// updateWindowSize();

// Update when the window is resized
window.addEventListener('resize', updateWindowSize);





function imageOverlay() {

    var imgWidth = $('#mainImg').width();
    $('#overlayDiv').width(imgWidth - 2);
    console.log(imgWidth);
    // if (imgWidth > )
    var imgHeight = $('#mainImg').height();
    $('#overlayDiv').height(imgHeight);
    $('#home').height(imgHeight);
    $('#aboutMe').css('top', imgHeight+10 + 'px');
    var aboutHeight = $('#aboutMe').height();
    $('#myWorks').css('top', imgHeight+aboutHeight+10 + 'px');
    var worksHeight = $('#myWorks').height();
    $('#skill').css('top', imgHeight+aboutHeight+worksHeight+10 + 'px');
    var skillHeight = $('#skill').height();
    $('#contactme').css('top', imgHeight+aboutHeight+worksHeight+skillHeight+10 + 'px');



    // if (screen_width <)



}

window.addEventListener("resize", imageOverlay);


window.addEventListener("load", function () {
    imageOverlay();
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




// responsive header
const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("show");
});