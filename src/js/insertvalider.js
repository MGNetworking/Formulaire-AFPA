/**
 * Ce script est a pour but d'inject les valeurs saisi du formulair
 * pour les ajouts au formulaire d'impression.
 *
 */


let params = new URLSearchParams(document.location.search.substring(1))

let nom = params.get("nom");
let prenom = params.get("prenom");
let formation_suivie = params.get("formation_suivie");
let delai_1 = params.get('delai_1');
let delai_2 = params.get('delai_2');
let nbjour = params.get('nbjour');

let code_radio = params.get('code_radio');


let mapMotif = new Map();

let code_06 = params.get('code_06');
let code_98 = params.get('code_98');
let code_accident = params.get('code_accident');

mapMotif.set(code_06, params.get('code_06'))
mapMotif.set(code_98, params.get('code_98'))
mapMotif.set(code_accident,  params.get('code_accident'))
mapMotif.set(code_radio,  params.get('code_radio'))


let delai_1_t = delai_1.split('T');
let delai_2_t = delai_2.split('T')


// injection de l'identité
const elementIdentiter = document.querySelectorAll('input[type=text]');
/*console.log(elementIdentiter);*/
elementIdentiter[0].value = nom;
elementIdentiter[1].value = prenom;
elementIdentiter[2].value = formation_suivie;


// injection des date et heures
const elementDate = document.querySelectorAll('input[type=datetime-local], input[type=number]');

elementDate[0].value= delai_1_t
elementDate[1].value= delai_2_t
elementDate[2].value= nbjour
console.log(elementDate);



// injection du motif
const elementMotif = document.getElementById('motif');
 mapMotif.forEach((element)=>{

     if (element != 0 ) {
         if (element != null) {
             elementMotif.innerHTML = element;

         }

     }
 });

window.addEventListener('click',function(){
    window.print();
}  )

