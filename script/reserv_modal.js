"use strict";
$(function(){
    console.log('jQuery est branché !');
    // Empecher le submit
    $('form[name=form_resa]').submit(function(ev){
        ev.preventDefault();
    });
    $('#btn_submit').click(function(){
        detailreserv('#recapitulatif');
    });
});



function detailreserv(selector) {  // le paramètre du sélecteur est le document à afficher
    console.log('Ouverture du modal ');
    $(selector)
        .clone(selector)
        .css({
            'width': '70%',
            'margin-top' : '50px',
            'position' : 'absolute',
            'background' : 'white',
            'left' :'15%'
        })
        .find('.cancel')    // sélectionne les deux liens a de fermeture
        .on('click', function(){
            console.log('fin');
            $('#recapitulatif')// Appel de close dialog avec l'élément a
                .parents('#overlay')
                .fadeOut('fast', function () {
                    $(this);
                })

        })
        .end()  // remonter sur la sélection avant le find (l'élément cloné)
        .appendTo('#overlay')
        .show()
        .parent()  // c'est le overlay
        .fadeIn()
        .css({
            'background-color': 'white'
        });


};