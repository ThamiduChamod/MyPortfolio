function imageOverlay() {
    var imgHeight = $('#mainImg').height();
    $('#overlayDiv').height(imgHeight);
    $('#home').height(imgHeight);
    $('#aboutMe').css('top', imgHeight + 'px'); // ← මෙහෙම වෙනස් කරන්න
    var imgWidth = $('#mainImg').width();
    $('#overlayDiv').width(imgWidth - 2);
    console.log(imgWidth);
}

$('#self-btn').on('click', function () {
    $('#edu-btn-div').css('display','none');
    $('#self-btn-div').css('display','block');

});



$('#education-btn').on('click', function () {
    $('#edu-btn-div').css('display','block');
    $('#self-btn-div').css('display','none');

});

window.addEventListener("load", function () {
    imageOverlay();
    $('#self-btn-div').css('display','block');
    $('#edu-btn-div').css('display','none');

} );
window.addEventListener("resize", imageOverlay);
