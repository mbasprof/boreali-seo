"use strict";

$(function() {
    console.log("jQuery est branché et DOM chargé !");
    var cat = "";
    cat = monApp.categories;
    console.log(cat [1]);


function insérer_texte() {
    $('.cs_forfait_categorie h4').text(monApp.categories[0]);
    $('#img1 h2').text(monApp.produits[0].nom);
    $('#img2 h2').text(monApp.produits[1].nom);
    $('#img3 h2').text(monApp.produits[2].nom);
    $('#img4 h2').text(monApp.produits[3].nom);
    $('#img1 img').attr('src', monApp.produits[0].photo_cat);
    $('#img2 img').attr('src', monApp.produits[1].photo_cat);
    $('#img3 img').attr('src', monApp.produits[2].photo_cat);
    $('#img4 img').attr('src', monApp.produits[3].photo_cat);
    $('#img1 p:first span').text(monApp.produits[0].duree);
    $('#img2 p:first span').text(monApp.produits[1].duree);
    $('#img3 p:first span').text(monApp.produits[2].duree);
    $('#img4 p:first span').text(monApp.produits[3].duree);
    $('#img1 p:eq(1) span').text(monApp.produits[0].debut_saison);
    $('#img2 p:eq(1) span').text(monApp.produits[1].debut_saison);
    $('#img3 p:eq(1) span').text(monApp.produits[2].debut_saison);
    $('#img4 p:eq(1) span').text(monApp.produits[3].debut_saison);
    $('#img1 p:eq(2) span').text(monApp.produits[0].fin_saison);
    $('#img2 p:eq(2) span').text(monApp.produits[1].fin_saison);
    $('#img3 p:eq(2) span').text(monApp.produits[2].fin_saison);
    $('#img4 p:eq(2) span').text(monApp.produits[3].fin_saison);
    $('#img1 p:eq(3) span').text(monApp.produits[0].prix_basse_saison);
    $('#img2 p:eq(3) span').text(monApp.produits[1].prix_basse_saison);
    $('#img3 p:eq(3) span').text(monApp.produits[2].prix_basse_saison);
    $('#img4 p:eq(3) span').text(monApp.produits[3].prix_basse_saison);
    $('#img1 p:eq(4)').text(monApp.produits[0].numero);
    $('#img2 p:eq(4)').text(monApp.produits[1].numero);
    $('#img3 p:eq(4)').text(monApp.produits[2].numero);
    $('#img4 p:eq(4)').text(monApp.produits[3].numero);

    $("#cs_tab_controls button").click(function () {
        console.log('La machine est lançée')
        var test = '';
        test = $(this).text().substr(1, 3);
        console.log('La valeur de forf est : ', test);
        console.log(test);
        if (test == 'roi') {
            $('.cs_forfait_categorie h4').text(monApp.categories[0]);
            $('#img1 h2').text(monApp.produits[0].nom);
            $('#img2 h2').text(monApp.produits[1].nom);
            $('#img3 h2').text(monApp.produits[2].nom);
            $('#img4 h2').text(monApp.produits[3].nom);
            $('#img1 img').attr('src', monApp.produits[0].photo_cat);
            $('#img2 img').attr('src', monApp.produits[1].photo_cat);
            $('#img3 img').attr('src', monApp.produits[2].photo_cat);
            $('#img4 img').attr('src', monApp.produits[3].photo_cat);
            $('#img1 p:first span').text(monApp.produits[0].duree);
            $('#img2 p:first span').text(monApp.produits[1].duree);
            $('#img3 p:first span').text(monApp.produits[2].duree);
            $('#img4 p:first span').text(monApp.produits[3].duree);
            $('#img1 p:eq(1) span').text(monApp.produits[0].debut_saison);
            $('#img2 p:eq(1) span').text(monApp.produits[1].debut_saison);
            $('#img3 p:eq(1) span').text(monApp.produits[2].debut_saison);
            $('#img4 p:eq(1) span').text(monApp.produits[3].debut_saison);
            $('#img1 p:eq(2) span').text(monApp.produits[0].fin_saison);
            $('#img1 p:eq(2) span').text(monApp.produits[1].fin_saison);
            $('#img1 p:eq(2) span').text(monApp.produits[2].fin_saison);
            $('#img1 p:eq(2) span').text(monApp.produits[3].fin_saison);
            $('#img1 p:eq(3) span').text(monApp.produits[0].prix_basse_saison);
            $('#img2 p:eq(3) span').text(monApp.produits[1].prix_basse_saison);
            $('#img3 p:eq(3) span').text(monApp.produits[2].prix_basse_saison);
            $('#img4 p:eq(3) span').text(monApp.produits[3].prix_basse_saison);
            $('#img1 p:eq(4)').text(monApp.produits[0].numero);
            $('#img1 p:eq(4)').text(monApp.produits[1].numero);
            $('#img1 p:eq(4)').text(monApp.produits[2].numero);
            $('#img1 p:eq(4)').text(monApp.produits[3].numero);
            console.log("croisière");
        } else if (test == 'por') {
            $('.cs_forfait_categorie h4').text(monApp.categories[1]);
            $('#img1 h2').text(monApp.produits[4].nom);
            $('#img2 h2').text(monApp.produits[5].nom);
            $('#img3 h2').text(monApp.produits[6].nom);
            $('#img4 h2').text(monApp.produits[7].nom);
            $('#img1 img').attr('src', monApp.produits[4].photo_cat);
            $('#img2 img').attr('src', monApp.produits[5].photo_cat);
            $('#img3 img').attr('src', monApp.produits[6].photo_cat);
            $('#img4 img').attr('src', monApp.produits[7].photo_cat);
            $('#img1 p:first span').text(monApp.produits[4].duree);
            $('#img2 p:first span').text(monApp.produits[5].duree);
            $('#img3 p:first span').text(monApp.produits[6].duree);
            $('#img4 p:first span').text(monApp.produits[7].duree);
            $('#img1 p:eq(1) span').text(monApp.produits[4].debut_saison);
            $('#img2 p:eq(1) span').text(monApp.produits[5].debut_saison);
            $('#img3 p:eq(1) span').text(monApp.produits[6].debut_saison);
            $('#img4 p:eq(1) span').text(monApp.produits[7].debut_saison);
            $('#img1 p:eq(2) span').text(monApp.produits[4].fin_saison);
            $('#img2 p:eq(2) span').text(monApp.produits[5].fin_saison);
            $('#img3 p:eq(2) span').text(monApp.produits[6].fin_saison);
            $('#img4 p:eq(2) span').text(monApp.produits[7].fin_saison);
            $('#img1 p:eq(3) span').text(monApp.produits[4].prix_basse_saison);
            $('#img2 p:eq(3) span').text(monApp.produits[5].prix_basse_saison);
            $('#img3 p:eq(3) span').text(monApp.produits[6].prix_basse_saison);
            $('#img4 p:eq(3) span').text(monApp.produits[7].prix_basse_saison);
            $('#img1 p:eq(4)').text(monApp.produits[4].numero);
            $('#img2 p:eq(4)').text(monApp.produits[5].numero);
            $('#img3 p:eq(4)').text(monApp.produits[6].numero);
            $('#img4 p:eq(4)').text(monApp.produits[7].numero);
            console.log("sports d'hiver");
        } else if (test == 'atu') {
            $('.cs_forfait_categorie h4').text(monApp.categories[2]);
            $('#img1 h2').text(monApp.produits[8].nom);
            $('#img2 h2').text(monApp.produits[9].nom);
            $('#img3 h2').text(monApp.produits[10].nom);
            $('#img4 h2').text(monApp.produits[11].nom);
            $('#img1 img').attr('src', monApp.produits[8].photo_cat);
            $('#img2 img').attr('src', monApp.produits[9].photo_cat);
            $('#img3 img').attr('src', monApp.produits[10].photo_cat);
            $('#img4 img').attr('src', monApp.produits[11].photo_cat);
            $('#img1 p:first span').text(monApp.produits[8].duree);
            $('#img2 p:first span').text(monApp.produits[9].duree);
            $('#img3 p:first span').text(monApp.produits[10].duree);
            $('#img4 p:first span').text(monApp.produits[11].duree);
            $('#img1 p:eq(1) span').text(monApp.produits[8].debut_saison);
            $('#img2 p:eq(1) span').text(monApp.produits[9].debut_saison);
            $('#img3 p:eq(1) span').text(monApp.produits[10].debut_saison);
            $('#img4 p:eq(1) span').text(monApp.produits[11].debut_saison);
            $('#img1 p:eq(2) span').text(monApp.produits[8].fin_saison);
            $('#img2 p:eq(2) span').text(monApp.produits[9].fin_saison);
            $('#img3 p:eq(2) span').text(monApp.produits[10].fin_saison);
            $('#img4 p:eq(2) span').text(monApp.produits[11].fin_saison);
            $('#img1 p:eq(3) span').text(monApp.produits[8].prix_basse_saison);
            $('#img2 p:eq(3) span').text(monApp.produits[9].prix_basse_saison);
            $('#img3 p:eq(3) span').text(monApp.produits[10].prix_basse_saison);
            $('#img4 p:eq(3) span').text(monApp.produits[11].prix_basse_saison);
            $('#img1 p:eq(4)').text(monApp.produits[8].numero);
            $('#img2 p:eq(4)').text(monApp.produits[9].numero);
            $('#img3 p:eq(4)').text(monApp.produits[10].numero);
            $('#img4 p:eq(4)').text(monApp.produits[11].numero);
            console.log("Catégorie nature");
        }


    });
    $(".cs_forfait_categorie").click(function () {
        console.log('En avant');
        var row_items = this.getElementsByTagName("p");
        console.log("Dernier des p : ", row_items[row_items.length-1]);
        var i = row_items[row_items.length-1].innerHTML;
        console.log(i);
        $('#wrap-modal-info h3').text(monApp.produits[i].categorie);
        $('#wrap-modal-info h2').text(monApp.produits[i].nom);
        $('#wrap-modal-info-detail-01 ul li:first span').text(monApp.produits[i].debut_saison);
        $('#wrap-modal-info-detail-01 ul li:eq(1) span').text(monApp.produits[i].fin_saison);
        $('#wrap-modal-info-detail-01 ul li:eq(2) span').text(monApp.produits[i].duree);
        $('#wrap-modal-info-detail-01 ul li:eq(3) span').text(monApp.produits[i].places_dispo);
        $('#wrap-modal-info-detail-02 ul li:first span').text(monApp.produits[i].nb_animaux);
        $('#wrap-modal-info-detail-02 ul li:eq(1) span').text(monApp.produits[i].prix_animal).css('color','red');
        $('#wrap-modal-info-prix-b_saison span').text(monApp.produits[i].prix_basse_saison).css('color','red');
        $('#wrap-modal img').attr('src', monApp.produits[i].photo);
        $('#wrap-modal-info h2').hover(function(){   // fonction entrée
            $(this).animate({'padding-left' :'+=50px'}, 2000);

        }, function(){   // fonction sortie
            $(this).animate({'padding-left' :'-=50px'}, 2000);
        });

        openDialog('#eula');


    });

    function openDialog(selector) {  // le paramètre du sélecteur est le document à afficher
        console.log('Ouverture de ');
        $(selector)
            .clone(selector)
            .find('.cancel')    // sélectionne les deux liens a de fermeture
            .on('click', function(){
                $('#eula')// Appel de close dialog avec l'élément a
                    .parents('#overlay')
                    .fadeOut('fast', function () {
                        $(this);
                    })
            })
            .end()  // remonter sur la sélection avant le find (l'élément cloné)
            .appendTo('#overlay')
            .show()
            .parent()  // c'est le overlay
            .fadeIn();
    }





};
    insérer_texte();

});


