function farbe() {
    Farben = new Array("Grün","Rot");
    Ergebnis = new Array();
 
    for(i=0;i<2;i++) {
 
     zufall=parseInt(Math.random()*Farben.length);
     Ergebnis.push(Farben[zufall]);
     Farben[zufall]=null;
    }
                         
    alert(Ergebnis.join(""));
                 
 }

 function alge() {
    Algen = new Array("Alge 2","Alge 3","Alge 4","Alge 5");
    Ergebnis = new Array();
 
    for(i=0;i<2;i++) {
 
     zufall=parseInt(Math.random()*Algen.length);
     Ergebnis.push(Algen[zufall]);
     Algen[zufall]=null;
    }
                         
    alert(Ergebnis.join(""));
                 
 }