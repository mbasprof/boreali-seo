"use strict";

/**
 * Created by mbastide on 2016-04-23.
 */

var forfait_saisi = $("#choix_forfait option:selected").val().trim();


$.datepicker.setDefaults( $.datepicker.regional[ "fr" ] );

// Préparer le date picker pôur le champ #date_commande
$('#date_commande').datepicker({
    showOn: 'both',
    buttonText: '',
    buttonImage: 'images/calendar.png',
    numberOfMonths: 1,
    minDate: '0m',
    showButtonPanel: true
});



$('#input').datepicker({ minDate : new Date() });

// Synchronisation
$(function () {
    console.log("jQuery branché et DOM construit");
    soumettre();

});


/****************************************************/
/********FONCTION DE SOUMISSION DU FORMULAIRE********/
/****************************************************/

function soumettre(){
    console.groupCollapsed("Tentative de soumission du formulaire :");

    //Branchement du gestionnaire d'événement
   // $("#form_resa").bind("submit", valider_form);
   //  $("#btn_test").bind("click", valider_form);


    valider_form();

    // Fonction de validation du formulaire

    function valider_form(event) {
        console.log("Le formulaire est soumis (tentative)");
        var formulaire_ok = true ;

        //CODE DE VALIDATION


            // Un forfait doit être sélectionné
            console.log("Forfait sélectionné :", $('#choix_forfait option:selected').val());


            // Un nombre de participants doit être sélectionné  DEJA 1 PAR DEFAUT
            console.log("Nombre de participants sélectionné :", $('#nb_participants').val());


            // Le champ animaux doit s'afficher si le forfait admet les animaux, sinon disabled
            //  Dans ce cas, un nombre d'animaux DEJA 0 PAR DEFAUT
            console.log("Nombre d'animaux sélectionné :", $('#nb_animaux').val());
            $('#nb_animaux').val();




            // Validation du champ date
        // date >= date de début de saison ET dont la durée totale
        // (date_debut_saison + duree du séjour) <= date_fin_saison

            $("#date_commande").change(function (){

                        $(this).removeClass("invalid");
                        $("#erreur_date").removeClass("display");
                        var val = $(this).val();
                        // var expression_reg = new RegExp('^[a-zA-Z]{1,}$');

                    valider_date();
                    afficher_date_debut_sejour();
                    afficher_date_fin_sejour();

                    }

            ); // END change #date_commande


            // Un nom  doit être saisi (au moins un caractère alpha)
            $("#nom").change(function () {

                $(this).removeClass("invalid");
                $("#erreur_nom").removeClass("display");
                var val = $(this).val();
                var expression_reg = new RegExp('^[a-zA-Z]{1,}$');

                console.log("Valeur saisie:", val.length);
                if ( ! expression_reg.test(val) || (0 == val.length) ){ //si nom invalide
                    formulaire_ok = false; //on met à false
                    $(this).addClass("invalid"); //on met la bordure rouge
                    $("#erreur_nom").addClass("display"); //on affiche le msg d'erreur
                }
            }); //END change nom


            // Un prénom doit être saisi (au moins un caractère alpha)
            $("#prenom").change(function () {

                $(this).removeClass("invalid");
                $("#erreur_prenom").removeClass("display");
                var val = $(this).val();
                var expression_reg = new RegExp('^[a-zA-Z]{1,}$');

                console.log("Valeur saisie:", val.length);
                if ( ! expression_reg.test(val) || (0 == val.length)  ){
                    formulaire_ok = false; //on met à false
                    $(this).addClass("invalid"); //on met la bordure rouge
                    $("#erreur_prenom").addClass("display"); //on affiche le msg d'erreur
                }
            }); //END change prenom


            // Un courriel valide doit être saisi
            $("#email").change(function () {

                $(this).removeClass("invalid");
                $("#erreur_email").removeClass("display");
                var val = $(this).val();
                var expression_reg = new RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$');

                if ( ! expression_reg.test(val) || ( 0 == val.length) ){
                    formulaire_ok = false; //on met à false
                    $(this).addClass("invalid");
                    $("#erreur_email").addClass("display");
                }
            }); //END change email


            // Un numéro de tél. au format (xxx)xxx-xx-xx doit être saisi (chiffres)
            $("#tel").change(function () {

                $(this).removeClass("invalid");
                $("#erreur_tel").removeClass("display");
                var val = $(this).val();
                var expression_reg = new RegExp('^([\(]{1}[0-9]{3}[\)]{1}[0-9]{3}[\-]{1}[0-9]{4})$');

                if ( ! expression_reg.test(val) || ( 0 == val.length) ){
                    formulaire_ok = false; //on met à false
                    $(this).addClass("invalid");
                    $("#erreur_tel").addClass("display");
                }
            }); //END change tel


            //Une adresse valide doit être saisie (au moins 10 caract. alpha)
            // Un numéro de tél. au format (xxx)xxx-xx-xx doit être saisi (chiffres)
            $("#adresse").change(function () {

                $(this).removeClass("invalid");
                $("#erreur_adresse").removeClass("display");
                var val = $(this).val();
                var expression_reg = new RegExp('^[a-zA-Z0-9- ]{10,}$');

                if ( ! expression_reg.test(val) || ( 0 == val.length) ){
                    formulaire_ok = false; //on met à false
                    $(this).addClass("invalid");
                    $("#erreur_adresse").addClass("display");
                }
            }); //END change adresse



        //Si le formulaire n'est pas valide, on affiche les messages d'erreur et on empeche la soumission
        if(!formulaire_ok){ // not ok --> les champs ne sont pas valides


            //empeche la soumission
            event.preventDefault();
        }
    }

    console.groupEnd();
    } //End soumettre()




//AFFICHAGE PAR DÉFAUT DANS LE TABLEAU RECAPITULATIF


    //Durée du séjour par défaut
    afficher_duree_sejour();

    // Forfait affiché par défaut
    var nom_forfait = monApp.produits[forfait_saisi].nom;
    $("table tbody tr td:first").text("Forfait : " + nom_forfait);
    console.log(nom_forfait);

    //Prix du forfait qui s'affiche par défaut
    var prix_unitaire = monApp.produits[forfait_saisi].prix_basse_saison;
    $("table tbody tr:first-of-type td:last").text(prix_unitaire + " CAD");

    //Nombre de participants affiché par défaut
    var nb_participants = 1;
    $("table tbody tr:nth-of-type(1) td:nth-of-type(2)").text(nb_participants);


    //Nombre d'animaux affiché par défaut
    var nb_animaux = 0;
    $("table tbody tr:nth-of-type(2) td:nth-of-type(2)").text(nb_animaux);

    //Prix total par défaut
    var prix_total = prix_unitaire;
    $("table tfoot tr:first td:last").text(prix_total + " CAD");
    console.log("prix total qui s'affiche par défaut", prix_total);



/**********************************************************************************************
// ANIMAUX PERDUS
var nbr_animaux_admis = monApp.produits[forfait_saisi].nbr_max_animaux_admis;
console.log("nbr max animaux admis :", nbr_animaux_admis);
 $("#nb_animaux").val(nbr_animaux_admis);
**********************************************************************************************/









// RÉCUPÉRATION DES VALEURS

    // Forfait sélectionné
    $("#choix_forfait")
        .change(function () {
            var resultat;
            console.log("Valeur de ", this.name, "qui change", $(this).val());
            resultat = $(this).val().trim();
            console.log("resultat de la fonction", resultat);
            afficher_nom_forfait(resultat);
            afficher_duree_sejour();
            afficher_date_debut_sejour();
            calculer_prix_voyageurs();
            calculer_prix_total();
            afficher_champ_animaux();

            console.groupEnd();

            return resultat;

        }); //END change#choix_forfait



    // Nombre de participants saisi
    $("#nb_participants")
        .change(function () {
            var resultat;
            console.log("Valeur de ", this.name, "qui change", $(this).val());
            resultat = $(this).val().trim();
            console.log("nombre de participants apres change", resultat);
            // afficher_nb_participants(resultat);
            $("table tbody tr:nth-of-type(1) td:nth-of-type(2)").text(resultat);

            calculer_prix_voyageurs();
            calculer_prix_total();

            return resultat;

        }); //END change#nb_participants



// Nombre d'animaux saisi
$("#nb_animaux")
    .change(function () {
        var res_animaux;
        console.log("Valeur de ", this.name, "qui change", $(this).val());
        res_animaux = $(this).val().trim();
        console.log("resultat d'animaux apres change", res_animaux);
        // afficher_nb_animaux(res_animaux );
        $("table tbody tr:nth-of-type(2) td:nth-of-type(2)").text(res_animaux);

        calculer_prix_animaux();
        calculer_prix_total();

    }); //END change#nb_animaux



/**
 * AFFICHER LE NOM_et le PRIX du FORFAIT DANS LE RÉCAPITULATIF
 * @param valeur_forfait : le forfait saisi par l'utilisateur
 * @returns {string|string|string|string|string|string|*}
 */
function afficher_nom_forfait(valeur_forfait){

    //Initialisation
    nom_forfait = monApp.produits[valeur_forfait].nom;
    prix_unitaire = monApp.produits[valeur_forfait].prix_basse_saison;
    console.log("nom du forfait a afficher ds le tableau : nom_forfait", nom_forfait);
    var nb_voyageurs = $("#nb_participants").val().trim();

    //affichage du nom du forfait
    $("table tbody tr td:first").text("Forfait : " + nom_forfait);

    // calcul le coût du séjour en fonction du nombre de participants
    $("table tbody tr:first-of-type td:last").text((prix_unitaire * nb_voyageurs) + " CAD");


    return nom_forfait;

}


/**
 * Calcule le prix du séjour en fonction du nombre de voyageurs
 *
 */

// var cout_voyageurs ;
function calculer_prix_voyageurs(){

    console.groupCollapsed("Calculer prix voyageurs :");

    //calculer le coût du séjour pour les voyageurs (nb_participants * prix_basse_saison)
    var cout_voyageurs = 0;
    var nb_voyageurs = $("#nb_participants").val().trim();
    console.log(nb_voyageurs);
    // forfait_saisi = $("#choix_forfait option:selected").val().trim();
    console.log("valeur du forfait saisi:", forfait_saisi);
    cout_voyageurs =  nb_voyageurs * monApp.produits[forfait_saisi].prix_basse_saison ;
    console.log("cout des voyageurs :", cout_voyageurs);

    // affichage du cout
    $("table tbody tr:nth-of-type(1) td:nth-of-type(3)").text(cout_voyageurs + " CAD");

    console.groupEnd();
    return cout_voyageurs;

}


/**
 * Calcule le prix du séjour pour les animaux de compagnie
 *
 */
// var cout_animaux  ;
function calculer_prix_animaux(){

    //calculer le coût du séjour pour les animaux (nb_animaux * duree * prix_basse_saison)
    var  cout_animaux = 0;
    var nb_animaux = $("#nb_animaux").val().trim();
     // forfait_saisi = $("#choix_forfait").val().trim();
    console.log("valeur du forfait saisi:", forfait_saisi);
    cout_animaux =  nb_animaux * monApp.produits[forfait_saisi].duree  * monApp.produits[forfait_saisi].prix_animal ;
    console.log("cout des animaux :", cout_animaux);

    // affichage du cout
    $("table tbody tr:nth-of-type(2) td:nth-of-type(3)").text(cout_animaux + " CAD");

    return cout_animaux;
}


/**
 * Calculer le prix total (somme du cout des voyageurs et cout des animaux)
 * @param valeur_forfait : le forfait saisi par l'utilisateur
 */
// var prix_total ;
function calculer_prix_total() {
    console.log("Calculer prix total");

    // var forfait_saisi = $("#choix_forfait option:selected").val().trim();
    console.log("valeur du forfait saisi:", forfait_saisi);

    //calculer le coût du séjour pour les voyageurs (nb_participants * prix_basse_saison)
    var cout_voyageurs = 0;
    var nb_voyageurs = $("#nb_participants").val().trim();
    console.log(nb_voyageurs);
    cout_voyageurs = nb_voyageurs * monApp.produits[forfait_saisi].prix_basse_saison;

    //calculer le coût du séjour pour les animaux (nb_animaux * duree * prix_basse_saison)
    var cout_animaux = 0;
    var nb_animaux = $("#nb_animaux").val().trim();
    cout_animaux = nb_animaux * monApp.produits[forfait_saisi].duree * monApp.produits[forfait_saisi].prix_animal;
    console.log("cout des animaux :", cout_animaux);

    // Calculer le prix total
    prix_total = cout_animaux + cout_voyageurs;
    console.log("prix total :", prix_total);

    // affichage du prix total
    $("table tfoot tr:first td:last").text(prix_total + " CAD");
}




/**
 * Afficher la date du début du séjour en fonction de la date saisie par l'utilisateur
 */
function afficher_date_debut_sejour(){
    console.groupCollapsed("Afficher date début séjour");

    var date_saisie = $("#date_commande").val();
    console.log("Date saisie :", $("#date_commande").val());

    //affiche la date
    $("#date_debut").text(date_saisie);

    console.groupEnd();

} // END afficher_date_debut_sejour()


/**
 * CAlculer et et afficher la date de fin du séjour (>= date debut du sejour + duree ET <= date fin saison)
 */

function afficher_date_fin_sejour(){
    console.groupCollapsed("Calculer et Afficher date fin séjour");


    //récupération de la date saisie par l'utilisateur et conversion en Date Object
    var date_saisie = new Date($("#date_commande").val());
    console.log("Date saisie :", $("#date_commande").val());
    console.log("Date saisie à comparer :", date_saisie);

    $("#date_debut").text($("#date_commande").val());

    //récupération de la durée du forfait choisi
    forfait_saisi = $("#choix_forfait option:selected").val().trim();
    console.log("Valeur du forfait choisi", forfait_saisi);

    //récupérer la durée du séjour et l'afficher dans le récapitulatif
    var duree_sejour = monApp.produits[forfait_saisi].duree;
    console.log("Duree du sejour à afficher", duree_sejour);

    //Durée du séjour en millisecondes
    var duree_sejour_ms = duree_sejour * 1 * 24 * 60 * 60 * 1000 ;
    console.log("duree sejour en ms :", duree_sejour_ms);

    // détermine la date de fin de séjour en millisecondes
    var date_fin_sejour_ms =  date_saisie.setTime(date_saisie.getTime() +  duree_sejour_ms);
    console.log("date fin sejour:", date_fin_sejour_ms);

    // convertit la date de fin de séjour en millisecondes au format yyyy-mm-dd
    var date_fin_sejour = new Date();
    date_fin_sejour.setTime(date_fin_sejour_ms);
    console.log(date_fin_sejour);

        // obtient l'année YYYY, le mois MM et le jour DD de l'objet Date
            var yyyy = date_fin_sejour.getFullYear().toString();
            var mm = (date_fin_sejour.getMonth()+1).toString();
            var dd  = date_fin_sejour.getDate().toString();

        // convertit le mois et le jour en charactère
            var mmChars = mm.split('');
            var ddChars = dd.split('');

        // Concatène les chaines au format YYYY-MM-DD
            var datestring = yyyy + '-' + (mmChars[1]?mm:"0"+mmChars[0]) + '-' + (ddChars[1]?dd:"0"+ddChars[0]);

            console.log("date au format yyyy-mm-dd :", datestring);

            console.log(document.getElementById("date_fin").innerHTML = datestring);

    console.groupEnd();
    return date_fin_sejour;

} // END afficher date_fin_sejour()




/**
 * Valide la date de saisie (>= date debut_saison et <= date fin_saison)
 * @returns {*}
 */
function valider_date(){
    console.groupCollapsed("Valider date : ");

    //récupération de la date saisie par l'utilisateur et conversion en Date Object
    var date_saisie = new Date($("#date_commande").val());
    console.log("Date saisie :", date_saisie);
    console.log("Date saisie à comparer :", date_saisie);
    date_saisie = date_saisie.getTime(date_saisie);
    console.log("date saisie en millisecondes :", date_saisie);

    //conversion date début saison en millisecondes
    var date_debut_saison = new Date(monApp.produits[forfait_saisi].debut_saison);
    console.log("Valeur forfait saisi :", forfait_saisi);
    console.log("Date debut saison", date_debut_saison);
    date_debut_saison = date_debut_saison.getTime(date_debut_saison);
    console.log("Date debut saison en ms", date_debut_saison);

    //conversion date fin saison en millisecondes
    var date_fin_saison = new Date(monApp.produits[forfait_saisi].fin_saison);
    console.log("Valeur forfait saisi :", forfait_saisi);
    console.log("Date fin saison", date_fin_saison);
    date_fin_saison = date_fin_saison.getTime(date_fin_saison);
    console.log("Date fin saison en ms", date_fin_saison );

    $("#date_commande").removeClass("invalid");
    $("#erreur_date").removeClass("display");

    if  ( (date_saisie <= date_debut_saison) || (date_saisie >= date_fin_saison) || (date_saisie == "") )  {
        var formulaire_ok = true;
        formulaire_ok = false;
        console.log("date saisie invalide");
        $("#date_commande").addClass("invalid"); //on met la bordure rouge

        // afficher les dates de début et fin de saison du forfait choisi dans le message d'erreur
        $("#erreur_date").text("La date de départ doit être entre le " + monApp.produits[forfait_saisi].debut_saison + " et le " + monApp.produits[forfait_saisi].fin_saison + "."); //on affiche le msg d'erreur
        $("#erreur_date").addClass("display"); //on affiche le msg d'erreur

    } else {

        console.log("date saisie valide");

    } // END if ... else


    console.groupEnd();
    //return
} // END valider_date()







/**
 * Afficher la durée du séjour en fonction du forfait choisi
 */

function afficher_duree_sejour(){
    console.groupCollapsed("Afficher durée séjour");
    forfait_saisi = $("#choix_forfait option:selected").val().trim();
    console.log(forfait_saisi);
    //récupérer la durée du séjour et l'afficher dans le récapitulatif
    var duree_sejour = monApp.produits[forfait_saisi].duree;
    console.log("Duree du sejour à afficher", duree_sejour);
    $("#duree").text(duree_sejour + " jour(s)");

    console.groupEnd();

} // END afficher_duree_sejour()


// function afficher_champ_animaux(){
//
//     // $("#nb_animaux").val(nbr_animaux_admis);
//
// //Afficher ou cacher le champ des Animaux selon si le forfait les admet ou pas
// console.groupCollapsed("afficher le champ animaux :");
// forfait_saisi = $("#choix_forfait option:selected").val().trim();
// console.log("valeur du forfait saisi:", forfait_saisi);
//
// if (
//     ( 0 == $("#choix_forfait option:selected").val().trim())
//     ||  ( 1 == $("#choix_forfait option:selected").val().trim())
//     ||  ( 8 == $("#choix_forfait option:selected").val().trim())
//     )
//
//     {
//
//     $("#nb_animaux").hide();
//     $("#nb_animaux").prev().hide();
//     $("table tbody tr:nth-of-type(2)").hide();
//     console.log("forfait saisi n'admet pas les animaux");
//
//
//     } else {
//
//         $("#nb_animaux").show();
//         $("#nb_animaux").prev().show();
//         $("table tbody tr:nth-of-type(2)").show();
//         console.log("forfait saisi admet les animaux");
//
//     }
//
//
// } // END afficher_champs_animaux ()



