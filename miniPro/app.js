document.addEventListener("DOMContentLoaded", function () {
    var elements = document.getElementsByTagName("INPUT");
    for (var i = 0; i < elements.length; i++) {
        elements[i].oninvalid = function (e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                e.target.setCustomValidity("Veuillez remplir ce champ baliz!");
            }
        };
        elements[i].oninput = function (e) {
            e.target.setCustomValidity("");
        };
    }
})


jQuery(document).ready(function ($) {
    var selectSport = $('select#sport');
    selectSport.prop('required', true);
    /* Check if there is no selected value on ready if not mark select as invalid */
    if (!selectSport.val()) {
        selectSport[0].setCustomValidity('Veuillez sélectionner un type de sport baliz!');
    }
    /* Do the same check when select value changed */
    selectSport.on('change', function () {
        if (!selectSport.val()) {
            selectSport[0].setCustomValidity('Veuillez sélectionner un type de sport baliz!');
        } else {
            selectSport[0].setCustomValidity('');
        }
    })
});

jQuery(document).ready(function ($) {
    var selectConvention = $('select#convention');
    selectConvention.prop('required', true);
    /* Check if there is no selected value on ready if not mark select as invalid */
    if (!selectConvention.val()) {
        selectConvention[0].setCustomValidity('Veuillez sélectionner un type de convention baliz!');
    }
    /* Do the same check when select value changed */
    selectConvention.on('change', function () {
        if (!selectConvention.val()) {
            selectConvention[0].setCustomValidity('Veuillez sélectionner un type convention sport baliz!');
        } else {
            selectConvention[0].setCustomValidity('');
        }
    })
});



/* EMPLOI DU TEMP */