function isPortrait() {
    if (window.orientation == 0 || window.orientation == 180) {
        return true;
    } else if (screen.orientation.type.includes("portrait")) {
        return true;
    }
}

function handleOrientationChange() {
    if (!isPortrait()) {
        var rotateBlock = document.getElementById("rotate-block");
        var elements = document.body.getElementsByClassName("*");
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            if (element !== rotateBlock) {
                element.style.display = "none";
            }
        }
        rotateBlock.style.display = "block";
    } else {
        var rotateBlock = document.getElementById("rotate-block");
        var elements = document.body.getElementsByClassName("*");
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            if (element !== rotateBlock) {
                element.style.display = "block";
            }
        }
        rotateBlock.style.display = "none";
    }
}

console.log("oriHelper: init");
handleOrientationChange();

window.addEventListener("orientationchange", handleOrientationChange);