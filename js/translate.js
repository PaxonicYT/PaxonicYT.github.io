translations_en = {
    "about": "Alge is a game played on GoldenHand's twitch streams on the GoldenArmy.de server. In the game there are 2 sides, a red side and a green side. Before each round, the players can choose between these sides. Then a random colour is generated and the players of the opposite team(s) must leave. The winner(s) then get an Alge between 2 - 5."
}

translations_de = {
    "about": "Alge ist ein \"Spiel\", welches im Twitchstream von GoldenHand auf dem Server GoldenArmy.de gespielt wird. In dem Spiel geht es darum, dass es 2 Seiten gibt eine Rote und eine Grüne. Vor jeder Runde können die Spieler sich zwischen diesen Seiten entscheiden. Danach wird Random generiert, welche Farbe weiterkommt. Die jeweils andere Farbe scheidet aus. Der oder die Gewinner bekommen dann eine Alge zwischen 2 - 5."
}

translations_unknown = {
    "about": "Das sieht nicht nach einer gewöhnlichen Sprache aus. Hmm, viel mehr nach einem Barcode. Wenn du das liest hast du ihn vermutlich mit einem Barcode-Scanner eingescannt oder den Inhalt des Elements inspiziert. :)"
}



function get_language_changer() {
    var language_changer = document.getElementById("language-changer");
    return language_changer
}


function get_language() {
    var language = get_language_changer().src.split(".svg")[0].split("/").pop();
    return language
}


function change_language() {
    var language = get_language();
    // a little easteregg where the text is replaced by a barcode. the chance of this is 1 in 1000.
    if ( Math.floor( Math.random() * 1000 ) == 0 ) {
        console.log("wait... that isn't a common language")
        for ( key in translations_unknown ) {
            var translateable_element = document.getElementById(key);
            translateable_element.style = "font-family: 'Libre Barcode 39 Extended', cursive;";
            translateable_element.innerHTML = translations_unknown[key];
        }
        get_language_changer().src = "assets/unknown.svg";
    }

    // common languages
    else if ( language == "german" || language == "unknown" ) {
        console.log("changed language to english");
        for ( key in translations_en ) {
            var translateable_element = document.getElementById(key);
            translateable_element.style = "";
            translateable_element.innerHTML = translations_en[key];
        }
        get_language_changer().src = "assets/english.svg";
    }
    else if ( language == "english" ) {
        console.log("changed language to german")
        for ( key in translations_de ) {
            var translateable_element = document.getElementById(key);
            translateable_element.innerHTML = translations_de[key];
        }
        get_language_changer().src = "assets/german.svg";
    }
}
