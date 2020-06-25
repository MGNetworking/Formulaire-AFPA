// recupération des valeurs du formulaire
const identity = document.querySelectorAll('.identification input[type=text]')
console.log(identity)

const duration = document.querySelectorAll('.dates input[type=radio]')
console.log(duration)

const date = document.querySelectorAll('.dates input[type=date]')
console.log(date)

const time = document.querySelectorAll('.subforms input[type=number]')
console.log(time)

/**
 * Évenement :
 * Création de la parti motif dés le chargement de la page
 */
document.addEventListener('DOMContentLoaded', function () {

    construction('../json/motive-categories.json')


})


/*********** parti injection de valeur dans le formulaire */
/**
 * Fonction de récupération de valeur dans un fichier Json
 * @param fichier
 */
function construction(fichier) {

    // requete vers le fichier
    fetch(fichier)
        .then(function (responseFetch) {

            console.log(responseFetch)

            if (responseFetch.ok) {
                return responseFetch.json()         // renvoi les info en Json
            } else {
                console.log("Erreur technique sur le fichier : " + fichier.toString())
            }

        }).then(function (fichierJson) {
        console.log(fichierJson)

    })

}


