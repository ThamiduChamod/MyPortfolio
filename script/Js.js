
    function imageOverlay() {

        var imgHeight = $('#mainImg').height();
        $('#overlayDiv').height(imgHeight);
        console.log(imgHeight);
        var imgWidth = $('#mainImg').width();
        $('#overlayDiv').width(imgWidth-2);
        console.log(imgWidth);

    }

    window.addEventListener("load", imageOverlay)
    window.addEventListener("resize", imageOverlay)