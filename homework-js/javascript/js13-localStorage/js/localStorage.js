
let currentTheme = "default";

function changeTheme() {
    window.localStorage.setItem("theme", currentTheme);

    let oldlink = document.getElementsByTagName("link").item(2);

    let newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", "css/" + currentTheme + ".css");

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}



document.addEventListener("DOMContentLoaded", function () {
    currentTheme = window.localStorage.getItem("theme");

    if (currentTheme != null) {
        changeTheme();
    }
    else {
        currentTheme = "default";
    }

});


function changeCSS() {
    if (currentTheme == "alt") {
        currentTheme = "default";
    }
    else {
        currentTheme = "alt";
    }

    changeTheme();

}


change.addEventListener("click", changeCSS);