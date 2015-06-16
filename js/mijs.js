function inicio() {
    $('#slider').sliderPro({
        width: 1280,
        height: 400,
        arrows: true,
        buttons: false,
        waitForLayers: true,
        thumbnailWidth: 200,
        thumbnailHeight: 100,
        thumbnailPointer: true,
        autoplay: true,
        autoScaleLayers: false,
        breakpoints: {
            500: {
                thumbnailWidth: 120,
                thumbnailHeight: 50
            }
        },
        updateHash: true
    });
    
    $("#menu").slicknav({prependTo:'nav'});
}

$(document).ready(inicio);