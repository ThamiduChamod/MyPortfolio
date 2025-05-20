
    function imageOverlay() {

        var imgHeight = $('#mainImg').height();
        $('#overlayDiv').height(imgHeight);
        console.log(imgHeight);

    }

    window.addEventListener("load", imageOverlay)
    window.addEventListener("resize", imageOverlay)