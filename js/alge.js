function farbe() {
    Farben = new Array("Grün","Rot");
    Ergebnis = new Array();
 
     Ergebnis.push(Farben[1]);

     document.getElementById('ergebnis') = Ergebnis;
    }

 function alge() {
    Algen = new Array("Alge 2","Alge 3","Alge 4","Alge 5");
    Ergebnis = new Array();
 
     Ergebnis.push(Algen[1]);

     document.getElementById('ergebnis') = Ergebnis;
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