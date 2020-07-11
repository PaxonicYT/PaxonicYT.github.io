function farbe() {
    var Farben = new Array("Grün","Rot");
    var Ergebnis = Array(Farben);
     document.getElementById('ergebnis').innerHTML = Ergebnis;
    }

 function alge() {
    var Algen = new Array("Alge 2","Alge 3","Alge 4","Alge 5");
    var Ergebnis = Array(Farben);
     document.getElementById('ergebnis').innerHTML = Ergebnis;
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