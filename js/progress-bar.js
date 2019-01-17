$(document).ready(function() {

    var arvo1 = 0;
    $("#lisaa1").click(function(){
        // maksimiarvo html-koodista
        var maxarvo = Number($("#edistyminen1").attr("aria-valuemax"));
        // lasketaan seuraava palkin pituus
        arvo1++;
        var mitta = (arvo1 / maxarvo) * 100; // prosentteina
        
        // muutetaan palkin attribuuttien arvoja
        $("#edistyminen1").attr("aria-valuenow", mitta);
        $("#edistyminen1").attr("style", "width: " + mitta + "%");
        // palkin päälle tuleva teksti, jos se halutaan
        $("#edistyminen1").html(arvo1 + "/" + maxarvo);
    });
    
    var arvo2 = 0;
    $("#lisaa2").click(function(){
        var maxarvo = Number($("#edistyminen2").attr("aria-valuemax"));
        arvo2++;
        var mitta = (arvo2 / maxarvo) * 100;
        $("#edistyminen2").attr("aria-valuenow", mitta);
        $("#edistyminen2").attr("style", "width: " + mitta + "%");
        $("#edistyminen2").html(arvo2+ "/" + maxarvo);
    });    
});


