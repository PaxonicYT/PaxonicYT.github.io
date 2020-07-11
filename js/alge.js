function farbe() {
    var Ergebnis = document.getElementById("ergebnis");
    var Farben = new Array("Grün","Rot");
     Ergebnis.innerHTML = Farben.random;
    }

 function alge() {
    var Ergebnis = document.getElementById("ergebnis");
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