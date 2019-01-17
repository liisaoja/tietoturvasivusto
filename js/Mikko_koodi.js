/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 
 //interaktiivinen osuus. Sivulla väittämiä, jolla testataan yleistietoa tietoruvasta//

$(document).ready(function () {
     
    var vaittamat = [
        "Mikon_Koodit/Kysymys1.html",
        "Mikon_Koodit/Kysymys2.html",
        "Mikon_Koodit/Kysymys3.html",
        "Mikon_Koodit/Kysymys4.html",
        "Mikon_Koodit/Kysymys5.html"
        ];
        
        function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    
    
    
     //var oikein = $('.oikein').length
    
    $( "#seuraava" ).click( function() {
        // onko taulukossa vielä kysymyksiä
        if (vaittamat.length > 0) {
            // arvotaan kysymysnumero
            // jos 3 alkiota, niin viimeisen indeksi on 3-1 >> 2
            var vaittamanumero = getRndInteger(0, vaittamat.length - 1);
            // otetaan arvotun kysymyksen osoite taulukosta
            var tiedosto = vaittamat[vaittamanumero];
            // luetaan se ja sijoitetaan sivulle
            $("#vaittama").load(tiedosto);
            // poistetaan kysymyksen osoite taulukosta, jotta ei tule uudestaan
            vaittamat.splice(vaittamanumero, 1);
            $(this).html("Seuraava");
        }
        else {
            // lopputoimet
            $("#vaittama").html("Sait visassa " + oikeita + "/5 oikein.");
            $(this).html("Aloita alusta");
            vaittamat = [];
            vaittamat.push("Mikon_Koodit/Kysymys1.html", "Mikon_Koodit/Kysymys2.html", "Mikon_Koodit/Kysymys3.html", "Mikon_Koodit/Kysymys4.html", "Mikon_Koodit/Kysymys5.html");
            oikeita = 0;
            arvo1 = -1;
        }
        //var vaihe = $(this).attr("#seuraava");
        
      //  if(vaihe === "Aloita alusta") {
            
        //    $(this).html("Aloita");
      //  }
        
    });
    
    
    
var oikeita = 0;
       //  click-tapahtumat täytyy sitoa bodyyn, koska aluksi ei kysymystä ole  
    $('body').on('click', '.vastaus', function (){
        // poistaVari($(this));
        estaVastaus($(this), "vastaus");
        var vastaus = $(this).attr("data-vastaus");
        if (vastaus === "oikein") {
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
    $("#seuraava").click(function(){
        // maksimiarvo html-koodista
        var maxarvo = Number($("#edistyminen1").attr("aria-valuemax"));
        // lasketaan seuraava palkin pituus
        arvo1++;
        if (arvo1 <= 5){
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
    
    
    
//// $(".vastaus").click(function(){
////         //estaVastaus($(this), "vastaus");
////    var vastaus = $(this).attr("data-vastaus");
////    if(vastaus === "oikein") {
////        $(this).addClass("oikein");
////        //alert("Vastasit oikein.");
////    }
////    else {
////        $(this).addClass("vaarin");
////        //alert("Vastasit väärin.");
//    }
//    });
    
    });