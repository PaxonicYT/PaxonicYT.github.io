function farbe() {
    var Ergebnis = document.getElementById("ergebnis");
    var Random = Math.floor((Math.random() * 2) + 1);
    if(Random == 1) {
        var Farbe = "Grün"
    } else if(Random == 2) {
        var Farbe = "Rot"
    }
    var Random = Math.floor((Math.random() * 3) + 1);
    if(Random == 1) {
       var audio = new Audio('assets/alge1.wav');
   } else if(Random == 2) {
       var audio = new Audio('assets/alge2.wav');
   } else if(Random == 3) {
       var audio = new Audio('assets/alge3.wav');
   }
    audio.play();
    Ergebnis.innerHTML = Farbe;
    }

 function alge() {
    var Ergebnis = document.getElementById("ergebnis");
    var Random = Math.floor((Math.random() * 3) + 1);
    if(Random == 1) {
       var audio = new Audio('assets/alge1.wav');
   } else if(Random == 2) {
       var audio = new Audio('assets/alge2.wav');
   } else if(Random == 3) {
       var audio = new Audio('assets/alge3.wav');
   }
    audio.play();
    Ergebnis.innerHTML =  "Alge " + Math.floor((Math.random() * 5) + 2);
 }

 function megaalge() {
   var Ergebnis = document.getElementById("ergebnis");
   var Random = Math.floor((Math.random() * 4) + 1);
   if(Random == 1) {
       var Farbe = "Grün"
   } else if(Random == 2) {
       var Farbe = "Rot"
   } else if(Random == 3) {
       var Farbe = "Blau"
   } else if(Random == 4) {
       var Farbe = "Gelb"
}
   var Random = Math.floor((Math.random() * 3) + 1);
    if(Random == 1) {
       var audio = new Audio('assets/alge1.wav');
   } else if(Random == 2) {
       var audio = new Audio('assets/alge2.wav');
   } else if(Random == 3) {
       var audio = new Audio('assets/alge3.wav');
   }
    audio.play();
   Ergebnis.innerHTML = Farbe;
   } 

 function iframe_farbe(url) {
    document.getElementById('iframe').src = "farbe.html";
 }

 function iframe_alge(url) {
    document.getElementById('iframe').src = "alge.html";
 }

 function iframe_megaalge(url) {
    document.getElementById('iframe').src = "megaalge.html";
 }

 function iframe_about(url) {
    document.getElementById('iframe').src = "about.html";
 }

 function iframe_privacy(url) {
   document.getElementById('iframe').src = "privacy.html";
}