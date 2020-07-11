function farbe() {
    Farben = new Array("Grün","Rot");
    Ergebnis = new Array();
 
    for(i=0;i<2;i++) {
 
     Ergebnis.push(Farben[1]);
     Farben[zufall]=null;
    }
                         
    document.getElementById('ergebnis')
                 
 }

 function alge() {
    Algen = new Array("Alge 2","Alge 3","Alge 4","Alge 5");
    Ergebnis = new Array();
 
    for(i=0;i<2;i++) {
 
     Ergebnis.push(Algen[1]);
     Algen[zufall]=null;
    }
                         
    document.getElementById('ergebnis')
                 
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