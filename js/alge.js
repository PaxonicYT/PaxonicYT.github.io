alges = ["Alge 2", "Alge 3", "Alge 4", "Alge 5", "Alge 6"]
megaalge_colours = ["Grün", "Rot", "Gelb", "Blau"]
alge_colours = ["Grün", "Rot"]
colours_en = {
    "Grün": "green",
    "Rot": "red",
    "Gelb": "yellow",
    "Blau": "blue"
}


function get_log_field() {
    var log_field = document.getElementById("log")
    return log_field
}


function get_decoration_field() {
    var decoration_field = document.getElementById("decoration")
    return decoration_field
}


function log_activity(type, result) {
    var log_field = get_log_field();
    if (log_field.children.length > 14) {
        log_field.removeChild(log_field.children[0]);
    }
    log_field.innerHTML += "<pre>" + type + ": " + result + "</pre>"
    console.log(type + ": " + result)
}


function random_sound() {
    // a little easter egg that has a 1 in 100 chance of being triggered ;)
    if ( Math.floor( Math.random() * 100 ) == 0 ) {
        console.log("You have found an easter egg! :)")
        var audio = new Audio("assets/alge4.wav");
    }
    else {
        var audio = new Audio("assets/alge" + Math.floor((Math.random() * 3) + 1) + ".wav");
    }
    return audio
}


function random_alge() {
    var alge = alges[Math.floor(Math.random() * alges.length)];
    return alge
}


function set_text_colour(elment, colour) {
    elment.style.color = colour;
}


function set_glow(elment, colour) {
    for ( colour_en in colours_en ) {
        if ( elment.classList.contains("glow-" + colours_en[colour_en]) ) {
            elment.classList.remove("glow-" + colours_en[colour_en]);
        }
    }
    elment.classList.add("glow-" + colours_en[colour]);
}


function random_megaalge() {
    var colour = megaalge_colours[Math.floor(Math.random() * megaalge_colours.length)];
    return colour
}


function random_colour() {
    var colour = alge_colours[Math.floor(Math.random() * alge_colours.length)];
    return colour
}


function get_result_field() {
    var result_field = document.getElementById("ergebnis")
    return result_field
}


function delete_element(element) {
    element.parentNode.removeChild(bubble);
}

function get_random_position() {
    var x = Math.floor(Math.random() * 1680) + "px";
    var y = Math.floor(Math.random() * 850) + "px";
    return [x, y]
}


function create_bubble() {
    var decoration_field = get_decoration_field();
    if ( decoration_field.children.length > 0 ) {
        decoration_field.removeChild(decoration_field.children[0])
    }
    decoration_field.innerHTML += "<img src='assets/bubbles.gif' class='bubbles'>";
    var bubble = decoration_field.children[decoration_field.children.length - 1];
    var position = get_random_position()
    bubble.style.left = position[0]
    bubble.style.top = position[1]
    setTimeout(function(){
        bubble.classList.add("move-top");
    },100);
}


function clear_log() {
    var log_field = get_log_field();
    log_field.innerHTML = "";
}


function farbe() {
    var result_field = get_result_field();
    var sound_effect = random_sound();
    var colour = random_colour();
    set_glow(document.getElementById("Alge"), colour);
    set_text_colour(result_field, colours_en[colour]);
    sound_effect.play();
    result_field.innerHTML = colour;
    log_activity("Farbe", colour);
    create_bubble();
}

function alge() {
    var result_field = get_result_field();
    var sound_effect = random_sound();
    var alge = random_alge();
    sound_effect.play();
    result_field.innerHTML = alge;
    log_activity("Alge", alge);
    create_bubble();
}

function megaalge() {
    var result_field = get_result_field();
    var sound_effect = random_sound();
    var colour = random_megaalge();
    sound_effect.play();
    set_glow(document.getElementById("Alge"), colour);
    set_text_colour(result_field, colours_en[colour]);
    result_field.innerHTML = colour;
    log_activity("Megaalge-Farbe", colour);
    create_bubble();
}
