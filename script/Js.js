function imageOverlay() {
    var imgHeight = $('#mainImg').height();
    $('#overlayDiv').height(imgHeight);
    $('#home').height(imgHeight);
    $('#aboutMe').css('top', imgHeight + 'px'); // ← මෙහෙම වෙනස් කරන්න
    var imgWidth = $('#mainImg').width();
    $('#overlayDiv').width(imgWidth - 2);
    console.log(imgWidth);
}

window.addEventListener("load", imageOverlay);
window.addEventListener("resize", imageOverlay);
