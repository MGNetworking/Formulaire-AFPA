/**
 * Ce Scritp permet la gestion du formulaire au moment de la soumission.
 * Il collect tout les informations utilisateur pour les ajoutés au
 * formulaire d'impression dans la page suivant.
 *
 */


const form = document.getElementById('form-information');
let mapChecked;

/**
 * Ce teste permet de verifier si il y a un formulaire dans la page html
 * En l'occurrence dans le formulaire d'impression il n'y en pas.
 */
if (form != null) {
    /**
     * Fonction d'evenement , réagit a la soumission du formulaire.
     * Cette fonction teste tout les champs avant la soumission
     *
     * */
    form.addEventListener('submit', (event) => {

        // initialisation des variable a chaque soumission
        mapChecked = new Map();

        let testRadio = false;
        let testCombo = false;

        // block submit
        event.preventDefault();

        let fieldsRadio = document.querySelectorAll('input[type=radio]');
        let fieldsRequired = document.querySelectorAll('input[required]');

        // supprime tout les message d'erreur Required
        fieldsRequired.forEach((field) => {

            resetValidation(field);
        });


        //***************************************************************
        // Champs Information personnelle et Autorisation d'absence
        fieldsRequired.forEach((field) => {

            if (field.checkValidity()) {
                mapChecked.set(field.name, field.value);
            } else {
                //  a l'input ajout classe d'invalidation saisi
                field.classList.add('invalid');

                /**
                 * Dans chque l'element label , ajout de l'element span
                 * avant la fin de ce label.
                 * L'element span contient le message d'erreur que génére l'HTML
                 */
                field.previousElementSibling
                    .insertAdjacentHTML(
                        'beforeend',
                        `<span class="errorMsg">${field.validationMessage}</span>`);


            }

        });


        //***************************************************************
        // Champs radio Motif de l'absence
        fieldsRadio.forEach((field) => {

            if (field.checked) {
                mapChecked.set(field.name, field.value)
                testRadio = true;
            }

        });

        //***************************************************************
        // Champsdes comboBox
        ['code_06', 'code_accident', 'code_98'].forEach(id => {

            let fielsComboBox = document.getElementById(id);
            let value = fielsComboBox.options[fielsComboBox.selectedIndex].value;
            let name = fielsComboBox.options[fielsComboBox.selectedIndex].name;

            if (value != '0') {

                mapChecked.set(fielsComboBox.id, value)
                testCombo = true;
            }
        });

        //***************************************************************
        // message d'erreur motif de l'absence

        if (testCombo == testRadio) {

            let span = document.getElementById('Msg-motif');
            console.log(span)

            span.classList.add('errorMsg');
            span.innerText = 'Vous devez selection une seul option';


        }

        //***************************************************************
        /**
         * Si tout les champs Information personnelle et
         * Autorisation d'absence sont present et que le motif
         * d'absence ne possede pas de champs selection en double
         * la soumission du formulaire et envoyer.
         */
        if (mapChecked.size == 7 && (testCombo != testRadio)) {

            // soumission du formulaire
            event.target.submit()
        }


        console.log(mapChecked);


    }, false);

    /**
     * Pour chaque element span contenut dans le label
     * L'element span sera supprimer
     *
     * @param field correspond a l'input
     */
    function resetValidation(field) {

        // supprime le couleur de l'input
        field.classList.remove('invalid');

        // recupération du champs precedent de l'input ( le label )
        let label = field.previousElementSibling;

        /**
         * Tant que le label possède le 1er element enfant ( span message d'erreur )
         * Je supprime cette element
         */
        while (label.firstElementChild) {

            // supprime l'element enfant ( le span )
            label.removeChild(label.firstElementChild);


        }

        /**
         * Supprime le message d'erreur du motif d'absence.
         * @type {HTMLElement} le span message d'erreur
         */
        let span = document.getElementById('Msg-motif');
        /*console.log(span)*/

        span.classList.remove('errorMsg');
        span.innerText = '';


    }
}






