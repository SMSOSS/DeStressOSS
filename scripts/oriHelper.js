function isPortrait() {
    if (window.orientation == 0 || window.orientation == 180) {
        return true;
    }
}

function handleOrientationChange() {
    if (!isPortrait()) {
        console.log("oriHelper: show blocker");
        var rotateBlock = document.getElementById("rotate-block");
        var elements = document.body.getElementsByClassName("*");
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            if (element !== rotateBlock) {
                element.style.display = "none";
            } else {
                console.log("element detect NOT hide!!");
            }
        }
        rotateBlock.style.display = "block";
    } else {
        console.log("oriHelper: show blocker");
        var rotateBlock = document.getElementById("rotate-block");
        var elements = document.body.getElementsByClassName("*");
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            if (element !== rotateBlock) {
                element.style.display = "block";
            } else {
                console.log("element detect NOT hide!!");
            }
        }
        rotateBlock.style.display = "none";
    }
}

console.log("oriHelper: init");
handleOrientationChange();

window.addEventListener("orientationchange", handleOrientationChange);