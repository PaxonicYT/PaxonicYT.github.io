var currentTheme = "dark";


function get_theme() {
    return currentTheme;
}


function get_theme_changer() {
    return document.getElementById("theme-changer");
}


function set_theme_dark() {
    console.log("Changed theme to dark");
    currentTheme = "dark";
    document.documentElement.setAttribute("data-theme", "dark");
    get_theme_changer().src = "assets/dark/sun.svg";
    document.getElementById("background-changer").src = "assets/dark/picture.svg";
    document.getElementById("development-tools").src = "assets/dark/settings.svg";
    document.getElementById("github-link").src = "assets/dark/github.png";
    var closeBtn = document.getElementById("close-source-btn");
    if (closeBtn) closeBtn.src = "assets/dark/close.svg";
}

function set_theme_bright() {
    console.log("Changed theme to bright");
    currentTheme = "bright";
    document.documentElement.setAttribute("data-theme", "bright");
    get_theme_changer().src = "assets/bright/moon.svg";
    document.getElementById("background-changer").src = "assets/bright/picture.svg";
    document.getElementById("development-tools").src = "assets/bright/settings.svg";
    document.getElementById("github-link").src = "assets/bright/github.png";
    var closeBtn = document.getElementById("close-source-btn");
    if (closeBtn) closeBtn.src = "assets/dark/close.svg";
}


function change_theme() {
    var theme = get_theme();
    if ( theme == "dark" ) {
        set_theme_bright();
    }
    else if ( theme == "bright" ) {
        set_theme_dark();
    }
}
