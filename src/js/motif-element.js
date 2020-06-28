/**
 * Évenement :
 * Création de la parti motif dés le chargement de la page
 */
document.addEventListener('DOMContentLoaded', function () {

    construction('../json/motif.json')


})



/**
 * Parti injection de valeur dans le formulaire.
 * Cette fonction a pour but de créé les arborescences complet des trois
 * comboBox du formulaire.
 *
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


        //********************************************************************* creation du node code_06

        let nodeCode_06 = new Array(fichierJson[0].code_06.length)
        let selectNodeCode_06 = document.createElement('select')

        // ajout de l'entête de l'option
        nodeCode_06[0] = document.createElement('option')
        nodeCode_06[0].innerHTML = fichierJson[0].code_06[0].texte_option
        selectNodeCode_06.appendChild(nodeCode_06[0])

        // ajout des options avec valeur est text
        for(let i = 1 ; i < nodeCode_06.length ; i++){

            nodeCode_06[i] = document.createElement('option')
            nodeCode_06[i].value = fichierJson[0].code_06[i].value
            nodeCode_06[i].innerHTML = fichierJson[0].code_06[i].texte

            // ajout l'option au select
            selectNodeCode_06.appendChild(nodeCode_06[i])
        }

        // recupération du node pour l'insertion dans HTML existant
        const element = document.getElementById('insert_code06')
        // insertion de l'element selectNodeCode_06
        element.insertAdjacentElement('afterend',selectNodeCode_06)

        //**************************************************************** creation du node code accident

        let nodeCode_accident = new Array(fichierJson[1].code_accident.length)
        let selectNodeAccident = document.createElement('select')

        // ajout de l'entete de l'option
        nodeCode_accident[0] = document.createElement('option')
        nodeCode_accident[0].innerHTML = fichierJson[1].code_accident[0].texte_option

        selectNodeAccident.appendChild(nodeCode_accident[0])

        for(let i = 1 ; i < nodeCode_accident.length ; i++){

            nodeCode_accident[i] = document.createElement('option')
            nodeCode_accident[i].value = fichierJson[1].code_accident[i].value
            nodeCode_accident[i].innerHTML = fichierJson[1].code_accident[i].texte

            selectNodeAccident.appendChild(nodeCode_accident[i])
        }

        const elNode_Accident = document.getElementById('insert_code_accidente')
        elNode_Accident.insertAdjacentElement('afterend',selectNodeAccident)

        //************************************************************************************ code 98

        let selectNodeCode_98= document.createElement('select')

        // creation du node code 98
        let nodeCode_98 = new Array(fichierJson[2].code_98.length)

        nodeCode_98[0] = document.createElement('option')
        nodeCode_98[0].innerHTML = fichierJson[2].code_98[0].texte_option

        selectNodeCode_98.appendChild(nodeCode_98[0])

        for(let i = 1 ; i < nodeCode_98.length ; i++){

            nodeCode_98[i] = document.createElement('option')
            nodeCode_98[i].value = fichierJson[2].code_98[i].value
            nodeCode_98[i].innerHTML = fichierJson[2].code_98[i].texte

            selectNodeCode_98.appendChild(nodeCode_98[i])
        }

        const elNodeCode98 = document.getElementById('insert_code_98')
        elNodeCode98.insertAdjacentElement('afterend', selectNodeCode_98)

    })

}


