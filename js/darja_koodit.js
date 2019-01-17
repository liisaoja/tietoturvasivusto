


$(document).ready(function () {
     
    var kuvat = [
        "darjankoodi/kuva1.html",
        "darjankoodi/kuva2.html",
        "darjankoodi/kuva3.html",
        "darjankoodi/kuva4.html"
        ];
        
        function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    
    
    
     
    $( "#aloita" ).click( function() {
        // onko taulukossa vielä kysymyksiä
        if (kuvat.length > 0) {
            // arvotaan kysymysnumero
            // jos 3 alkiota, niin viimeisen indeksi on 3-1 >> 2
            var vaittamanumero = getRndInteger(0, kuvat.length - 1);
            // otetaan arvotun kysymyksen osoite taulukosta
            var tiedosto = kuvat[vaittamanumero];
            // luetaan se ja sijoitetaan sivulle
            $("#kysymys").load(tiedosto);
            // poistetaan kysymyksen osoite taulukosta, jotta ei tule uudestaan
            kuvat.splice(vaittamanumero, 1);
            $(this).html("Seuraava");
        }
        else {
            // lopputoimet
            $("#kysymys").html("Sait visassa " + oikeita + "/4 oikein.");
            $(this).html("Aloita alusta"); //muuttaa painikkeen tekstin "Aloita alusta"
            kuvat = []; //tyhjentää taulukon
            //täyttää taulukon uudestaan
            kuvat.push("darjankoodi/kuva1.html", "darjankoodi/kuva2.html", "darjankoodi/kuva3.html", "darjankoodi/kuva4.html");
            oikeita = 0; //nollaa oikeiden vastausten määrän
            arvo1 = -1; //tämä on progress barin nollaus, negatiivinen koska kun painaa "Aloita alusta" saa arvon 0, minkä jälkeen kasvaa joka klikkauksella yhdellä
        }
        
    });
    
    
    
var oikeita = 0;
       //  click-tapahtumat täytyy sitoa bodyyn, koska aluksi ei kysymystä ole  
    $('body').on('click', '.vastaus', function (){
        // poistaVari($(this));
        estaVastaus($(this), "vastaus");
        var vastaus = $(this).attr("data-vastaus");
        if (vastaus === "1") {
            //pitää laskea oikeiden määrää myös
            $(this).addClass("oikein");
            oikeita++;
        }
        else {
            $(this).addClass("vaarin");
        } 
    });
   
    
     function estaVastaus(elementti, luokka) {
        var vanhempi = elementti.parent();
        vanhempi.children().each(function () {
            $(this).removeClass(luokka).off("click"); // poistetaan myös click-tapahtuma elementiltä
            $(this).removeClass("klikkaa");            
        });
    }     
    
   //progressbar >>
   
    var arvo1 = 0;
    $("#aloita").click(function(){
        // maksimiarvo html-koodista
        var maxarvo = Number($("#edistyminen1").attr("aria-valuemax"));
        // lasketaan seuraava palkin pituus
        arvo1++;
        if (arvo1 <= 4){
        var mitta = (arvo1 / maxarvo) * 100; // prosentteina
        }
        else {
             mitta = (maxarvo/ maxarvo)*100;
        }
        
        
        // muutetaan palkin attribuuttien arvoja
        $("#edistyminen1").attr("aria-valuenow", mitta);
        $("#edistyminen1").attr("style", "width: " + mitta + "%");
        // palkin päälle tuleva teksti, jos se halutaan
        if (arvo1 <= 4){
        $("#edistyminen1").html(arvo1 + "/" + maxarvo);
        }
        else {
              $("#edistyminen1").html(maxarvo + "/" + maxarvo);
        }
        
    });
    
    
    });