var currentBackgroundIndex = 1;

links = {
    "CC BY-SA 4.0": "https://creativecommons.org/licenses/by-sa/4.0/deed.en",
    "Public Domain": "https://unsplash.com/license",
    "Pseudopanax": "https://en.wikipedia.org/wiki/User:Pseudopanax",
    "Johnny Chen": "https://unsplash.com/@johnnyafrica",
    "João D'Andretta": "https://commons.wikimedia.org/wiki/User:Jpdandretta",
    "Frédéric Ducarme": "https://commons.wikimedia.org/wiki/User:FredD"
}

image_sources = {
    "1": {
        "license": "",
        "author": ""
    },
    "2": {
        "license": "Public Domain",
        "author": "Johnny Chen"
    },
    "3": {
        "license": "CC BY-SA 4.0",
        "author": "Frédéric Ducarme"
    },
    "4": {
        "license": "CC BY-SA 4.0",
        "author": "João D'Andretta"
    },
    "5": {
        "license": "CC BY-SA 4.0",
        "author": "João D'Andretta"
    },
    "6": {
        "license": "CC BY-SA 4.0",
        "author": "João D'Andretta"
    },
    "7": {
        "license": "CC BY-SA 4.0",
        "author": "João D'Andretta"
    },
    "8": {
        "license": "Public Domain",
        "author": "Johnny Chen"
    }
}


function hide_image_source_field() {
    var image_source_field = get_image_source_field();
    image_source_field.classList.add("downscale");
    setTimeout( function() {
        image_source_field.hidden = true;
        image_source_field.classList.remove("downscale");
    },250);
}


function get_image_license_field() {
    var image_license_field = document.getElementById("image-license");
    return image_license_field
}


function get_image_author_field() {
    var image_author_field = document.getElementById("image-author");
    return image_author_field
}


function get_image_source_field() {
    var image_source_field = document.getElementById("image-source");
    return image_source_field
}


function set_source_notice(image) {
    var image_author_field = get_image_author_field();
    var image_license_field = get_image_license_field();
    var image_source_field = get_image_source_field();
    if ( ( image_sources[image]["license"] == "" ) && ( image_sources[image]["author"] == "" ) ) {
        hide_image_source_field()
    }
    else {
        image_source_field.hidden = false;
    }
    image_license_field.innerHTML = "<a class=\"blank-text\" href=\"" + links[image_sources[image]["license"]] + "\" target=\"_blank\">" + image_sources[image]["license"] + "</a>";
    image_author_field.innerHTML = "<a class=\"blank-text\" href=\"" + links[image_sources[image]["author"]] + "\" target=\"_blank\">" + image_sources[image]["author"] + "</a>";
}


function change_background() {
    currentBackgroundIndex++;
    if (currentBackgroundIndex > 8) {
        currentBackgroundIndex = 1;
    }
    document.body.style.backgroundImage = "url('assets/background" + currentBackgroundIndex + ".png')";
    set_source_notice(String(currentBackgroundIndex));
}
