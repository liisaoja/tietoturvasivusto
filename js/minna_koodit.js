$(document).ready(function() {
    var kysymykset = [
        "minnank/kysymys1.html",
        "minnank/kysymys2.html",
       "minnank/kysymys3.html",
       "minnank/kysymys4.html",
       "minnank/kysymys5.html",
       "minnank/kysymys6.html",
       "minnank/kysymys7.html",
       "minnank/kysymys8.html",
       "minnank/kysymys9.html",
       "minnank/kysymys10.html",
       "minnank/kysymys11.html",
       "minnank/kysymys12.html",
       "minnank/kysymys13.html",
       "minnank/kysymys14.html",
       "minnank/kysymys15.html"
        ];
    


    // satunnaisjärjestys
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    
   $( "#lataa_kysymys2" ).click( function() {
        // onko taulukossa vielä kysymyksiä
        if (kysymykset.length > 10) {
            // arvotaan kysymysnumero
            
            var kysymysnumero = getRndInteger(0, kysymykset.length - 1);
            // otetaan arvotun kysymyksen osoite taulukosta
            var tiedosto = kysymykset[kysymysnumero];
            // luetaan se ja sijoitetaan sivulle
            $("#kysymys").load(tiedosto);
            // poistetaan kysymyksen osoite taulukosta, jotta ei tule uudestaan
            kysymykset.splice(kysymysnumero, 1);
            $(this).html("Seuraava");
        }
        else {
            // lopputoimet
             $("#kysymys").html("Sait visassa " + oikeita + "/5 oikein.");
            $(this).html("Aloita alusta");   //muuttaa painikkeen tekstin "Aloita alusta"
            kysymykset = [];  //tyhjentää taulukon
            // täytetään taulukko uudelleen
            kysymykset.push("minnank/kysymys1.html", 
        "minnank/kysymys2.html",
       "minnank/kysymys3.html",
       "minnank/kysymys4.html",
       "minnank/kysymys5.html",
       "minnank/kysymys6.html",
       "minnank/kysymys7.html",
       "minnank/kysymys8.html",
       "minnank/kysymys9.html",
       "minnank/kysymys10.html",
       "minnank/kysymys11.html",
       "minnank/kysymys12.html",
       "minnank/kysymys13.html",
       "minnank/kysymys14.html",
       "minnank/kysymys15.html");
            oikeita = 0; //nollaa oikeiden vastausteen määrän
            arvo1 = -1; // edistyspalkin nollaus, arvon tulee olla negatiivinen, jotta palkki ei kasva
        }
        
        
    });
    
    var oikeita = 0;
  //  click-tapahtumat täytyy sitoa bodyyn, koska aluksi ei kysymystä ole  
    $('body').on('click', '.vastaus', function (){
        // poistaVari($(this));
        estaVastaus($(this), "vastaus");
        var vastaus = $(this).attr("data-vastaus");
        if (vastaus === "1") {
            // pitää laskea oikeiden määrää myös
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

// progressbar
    var arvo1 = 0;
    $("#lataa_kysymys2").click(function(){
        // maksimiarvo html-koodista
        var maxarvo = Number($("#edistyminen1").attr("aria-valuemax"));
        // lasketaan seuraava palkin pituus
        arvo1++;
        if(arvo1<= 5) {
        var mitta = (arvo1 / maxarvo) * 100; // prosentteina
}
else {
    mitta = (maxarvo/ maxarvo)*100;
}
        // muutetaan palkin attribuuttien arvoja
        $("#edistyminen1").attr("aria-valuenow", mitta);
        $("#edistyminen1").attr("style", "width: " + mitta + "%");
        // palkin päälle tuleva teksti, jos se halutaan
        if (arvo1 <= 5){
        $("#edistyminen1").html(arvo1 + "/" + maxarvo);
        }
        else {
              $("#edistyminen1").html(maxarvo + "/" + maxarvo);
        }
    });
    
   
});