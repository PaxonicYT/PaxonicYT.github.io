function farbe() {
    var Ergebnis = document.getElementById("ergebnis");
    var Random = Math.floor((Math.random() * 2) + 1);
    if(Random == 1) {
        var Farbe = "Grün"
    } else if(Random == 2) {
        var Farbe = "Rot"
    }
    var audio = new Audio('assets/AlgeSound.wav');
    audio.play();
    Ergebnis.innerHTML = Farbe;
    }

 function alge() {
    var Ergebnis = document.getElementById("ergebnis");
    var audio = new Audio('assets/AlgeSound.wav');
    audio.play();
    Ergebnis.innerHTML =  "Alge " + Math.floor((Math.random() * 4) + 2);
 }

 function iframe_farbe(url) {
    document.getElementById('iframe').src = "farbe.html";
 }

 function iframe_alge(url) {
    document.getElementById('iframe').src = "alge.html";
 }

 function iframe_about(url) {
    document.getElementById('iframe').src = "about.html";
 }

 function iframe_privacy(url) {
   document.getElementById('iframe').src = "privacy.html";
}