function get_theme() {
    var icon = get_theme_changer().src.split(".svg")[0].split("/").pop();

    if ( icon == "sun" ) {
        var theme = "dark";
    }
    else if ( icon == "moon" ) {
        var theme = "bright";
    }

    return theme
}


function get_theme_changer() {
    theme_changer = document.getElementById("theme-changer");
    return theme_changer
}


function get_theme_css_import() {
    var theme_css_import = document.getElementById("theme-css");
    return theme_css_import
}


function set_theme_dark() {
    console.log("Changed theme to dark")
    get_theme_changer().src = "assets/dark/sun.svg";
    document.getElementById("background-changer").src = "assets/dark/picture.svg";
    document.getElementById("development-tools").src = "assets/dark/settings.svg";
    document.getElementById("github-link").src = "assets/dark/github.png";
    get_theme_css_import().href = "css/dark.css";
}

function set_theme_bright() {
    console.log("Changed theme to bright")
    get_theme_changer().src = "assets/bright/moon.svg";
    document.getElementById("background-changer").src = "assets/bright/picture.svg";
    document.getElementById("development-tools").src = "assets/bright/settings.svg";
    document.getElementById("github-link").src = "assets/bright/github.png";
    get_theme_css_import().href = "css/bright.css";
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
