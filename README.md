# DocGen

Un exercice consitant à créer un outil de génération de demande de 
justification d'absence.

Vous avez normalement tous vu le rendu final en cours. *Ceci est un exercice
de style en JavaScript*, pas en HTML/CSS. Vous pouvez utiliser les fichiers 
HTML, CSS et JSON présents ici. Vous n'y êtes obligés en aucun cas et pouvez 
proposer vos propres pages, auquel cas j'y jeterai un oeil également.

Si vous utiliser les fichiers ici présents, sentez-vous libre de les modifier
pour votre usage.

Vous réunirez votre exercise dans un dépôt sur GitLab, et me le partagerez.
Prévenez-moi quand vous pensez que je peux regarder.

Comme toujours, n'hésitez pas à poser des questions.


## Fonctionnalités demandées

* Deux pages HTML différentes.
  * `form.html` Un formulaire qui demande à renseigner les informations
    sur la demande
  * `template.html` est la page que l'on propose d'imprimer 


### `form.html`

* Dans la section "Dates", cliquer sur "Un jour ou moins" ou sur 
  "Plus d'un jour" affiche le morceau de formulaire approprié et 
  masque/désactive l'autre
* Les motifs d'absence ne sont pas écrit en HTML mais générés en JavaScript
  sur la base du contenu de fichiers JSON
* Cliquer sur "Générer le document" soumet le formulaire vers `template.html` 
  et poste les valeurs du formulaire dans l'URL


### `template.html`

* Les données contenue dans l'URL sont injectées au bon endroit dans la page
* Les motifs d'absence ne sont pas écrit en HTML mais générés en JavaScript
  sur la base du contenu de fichiers JSON, comme sur `form.html`
* Un bouton flottant dans un coin de la page propose d'imprimer. Ne vous 
  inquiétez pas du rendu final du document imprimé, c'est hors cadre.
* Les informations ne sont plus modifiables


### Documentation et amélioration

Ecrivez un ou plusieurs fichier texte qui documentent:

* Votre point d'avancement
* Les modifications faites au fichiers d'origine, si il a lieu.
* Les difficultées rencontrées
* Des propositions d'améliorations


### Fonctionnalités optionnelles, mais intéressantes

Sans forcément d'ordre particulier:

* Ne pas utiliser Bootstrap
* Utiliser une CSS Grid pour présenter les motifs d'absence
* Utiliser `fetch()` pour récupérer les fichiers JSON
* Utiliser les balises HTML `template` pour comme base des motifs insérés
  dans la page.
* Ne pas laisser l'utilisateur valider le formulaire sans renseigner les
  données nécéssaires, et l'avertir de son erreur, d'une manière ou d'une
  autre.
* Ajouter une comfiguration NPM au projet qui permet de le lancer avec 
  `npm start`
* English, English everywhere possible.
* Implémentater l'attribut HTML `param-to-value` (déjà présenht dans 
  `template.html`). Au chargement de la page, les éléments portant cet attribut
  voient leur attribuit `value` peuplé avec la valeur équivalent à l'attribut nommé dans l'URL, si 'existe
  Par exemple: 
  ```html
  <input param-to-value="first-name">
  <input param-to-value="last-name">
  <input param-to-value="does-not-exists">
  ```
  Devient, après passage du JavaScript: 
  ```html
  <input param-to-value="first-name" value="John">
  <input param-to-value="last-name" value="Doe">
  <input param-to-value="does-not-exists" value="">
  ```
  si l'URL contient `?first-name=John&last-name=Doe`


## Setup

Comme d'habitude, vous pouvez lancer le projet avec un serveur local:

Si vous avez [Python 3](https://www.python.org/) installé sur le système,
vous pouvez lancer un serveur local en lançant la commande suivante depuis
la racine du dépôt Git:

```bash
python3 -m http.server -d web/clock_and_timer/src/ 8000
```
Ou seulement:

```bash
python -m http.server -d web/clock_and_timer/src/ 8000
```

... sous Windows
Note: n'installez pas Python sous Windows en  utilisant le Windows Store: 
leur version est foireuse.

Si vous avez PHP installé et accessible en ligne de commande, vous pouvez
aussi lancer un serveur avec la commande suivante:

```bash
php -S 0.0.0.0:8000 -t web/clock_and_timer/src
```

Dans les deux cas, vous pouvez visiter le "site" à l'adresse http://localhost:8000

Ouvrir les fichiers directement ne fonctionnera pas: quand le fichier est 
ouvert en mode "file:///path/to/file.html" JavaScript n'est pas autorisé 
à faire des appels.
