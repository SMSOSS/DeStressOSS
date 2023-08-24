/*
    Cookie Monster - Cookie set/get script
    Usage: setCookie(cookie name, cookie value) | getCookie(name)

    2023/08/24
*/

function setCookie(name, value) {
    var expires = "; expires=Fri, 31 Dec 9999 23:59:59 GMT"; // HACK: cookies never expire
    document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length === 2) {
        return decodeURIComponent(parts.pop().split(";").shift());
    }
}

function checkCookie(cookieName) {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();

        // Check if the cookie starts with the given name
        if (cookie.indexOf(cookieName + "=") === 0) {
            return true;
        }
    }

    return false;
}