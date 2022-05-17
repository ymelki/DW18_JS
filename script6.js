/*
Exercice 1:
creez une variable nom contenant votre nom
creez une variable prenom contenant votre prenom
creez une variable age contenant votre age
Afficher dans la console.log "Bienvenue je m'appelle " suivie de votre prénom et nom
et j'ai suivi de votre age
Creez une variable prix_article1 = 50 
Creez une variable prix_article2 = 80 
Creez une variable prix_article3 = prix_article1 +  prix_article2
Afficher dans la console.log "Le prix de l'article 1 est " prix_article1
Afficher dans la console.log "Le prix de l'article 2 est " prix_article2
Afficher dans la console.log "La somme des article sera de : prix_article3
Mettre tout ce code dans une fonction ("debut") qui sera declenche suite au clique sur un bouton
que vous creerez qui aura l'identifiant "deb"

Exercice 2
Ajouter un champs texte comprenant un identifiant "test"
Lorsqu on clique sur le bouton précedement créé on affiche dans le texte 
ayant l'identifiant "test" l'information
"ce que je veux"

Exercice 3
1 CREEZ UN NOUVEAU BOUTON AVEC L IDENTIFIANT btest
2 CREEZ UN EVENEMENT SUR LE BOUTTON AU CLICK QUI VA DECLENCHER LA FONCTION ftest2
3 LA FONCTION VA FAIRE EN SORTE QUE LE TEXTE avec l'identifiant "test" recoivent en valeur
le texte "nouveau texte !"

Exercice 4
1 CREEZ UN NOUVEAU BOUTON AVEC L IDENTIFIANT btest3
HTML
2 CREEZ UN EVENEMENT SUR LE BOUTTON AU CLICK QUI VA DECLENCHER LA FONCTION ftest3
document.getElementById("deb").addEventListener("click", FONCTIONENQUESTION)
3 LA FONCTION VA FAIRE EN SORTE QUE LE TEXTE avec l'identifiant "test" recoivent en valeur
le texte "le texte nouveau !"
function fonctionenquestion(){ 
    document.getElementById("deb").value="text"
}

Exercice 5
1 CREEZ UN NOUVEAU BOUTON AVEC L IDENTIFIANT btest4
HTML
2 CREEZ UN EVENEMENT SUR LE BOUTTON AU CLICK QUI VA DECLENCHER LA FONCTION ftest4
3 LA FONCTION VA FAIRE EN SORTE QUE LE TEXTE avec l'identifiant "test" recoivent en valeur
le texte "le DERNIER nouveau TEXT !"
 

 Exercice 6
 1 Creez une div en html avec l identifiant madiv
 2 Creez un evenemement issue du dernier bouton au click lancant la fonction fdiv
 3 la fonction fdiv affiche dans la console vous avez bien cliqué sur le bouton
 4 la fonction fdiv affiche dans la div vous avez bien cliqué sur le bouton
 5 la fonction fdiv affiche le contenue du champs texte

 Exercice 7
 1 Creez une div en html avec l identifiant madiv2
 2 Creez un evenemement issue du dernier bouton au click lancant la fonction fdiv2
 3 la fonction fdiv affiche dans la console vous avez bien cliqué sur le bouton
 4 la fonction fdiv affiche dans la div vous avez bien cliqué sur le bouton
 5 la fonction fdiv dans la div affiche le contenue du champs texte

Exercice 7
 1 Creez une div en html avec l identifiant madiv3
 2 Creez un evenemement issue du dernier bouton au click lancant la fonction fdiv3
 3 la fonction fdiv3 affiche dans la console vous avez bien cliqué sur le bouton
 4 la fonction fdiv3 affiche dans la div vous avez bien cliqué sur le bouton
 5 la fonction fdiv3 dans la div affiche le contenue du champs texte 

 Exercice 8
 1 Creez une div en html avec l identifiant madiv4
 2 Creez un evenemement issue du dernier bouton au click lancant la fonction fdiv4
 3 la fonction fdiv4 affiche dans la console vous avez bien cliqué sur le bouton
 4 la fonction fdiv4 affiche dans la div vous avez bien cliqué sur le bouton
 5 la fonction fdiv4 dans la div affiche "vous avez bien cliqué sur le bouton" puis le contenue du champs texte 

 Exercice 9
 1 CREEZ UN CHAMPS DE TYPE NUMBER AVEC VALEUR PAR DEFAUT A 0 AVEC L ID TEXTID1
 2 CREEZ UN BOUTTON AVEC L ID B10
 3 CREEZ UN EVENEMENT SUR LE BOUTON ID10 LORSQUON CLIQUE QUI VA LANCER LA FONCTION FB10
 4 LA FONCTION VA AJOUTER 1 A LA VALEUR DU CHAMP TYPE NUMBER

 EXemple:
 Champ number : 0
 click =>  1, 2, 3 ...

 Exercice 10
 1 Creez un champs texte avec l'identifiant prenom
 2 CReez un bouton s'inscrire
 2 CReez une div avec l'id dprenom
 3 Creez un evenement qui va se produire lorsque je vais presser (keyup) les touches sur 
 le champs texte qui va declencher la fonction fprenom
 4 la fonction fprenom elle va afficher dans la div fprenom le nom de la personne
 5 la fonction fprenom elle va afficher dans la div fprenom le nombre de caractere du
 nom de la personne (length)
 6 Si le nombre de caractere est inferieur à 3 afficher dans la div "Attention :
 votre prenom doit faire plus de 3 caracteres"
 7 Si le nombre de caractere est superieur à 10  afficher dans la div "Attention :
 votre prenom doit faire moins de 10 caracteres"

1 Creez un champs texte avec l'identifiant nom
 2 CReez une div avec l'id dnom
 3 Creez un evenement qui va se produire lorsque je vais presser (keyup) les touches sur 
 le champs texte qui va declencher la fonction fnom 
 5 la fonction fnom elle va afficher dans la div fprenom le nombre de caractere du
 nom de la personne (length)
 6 Si le nombre de caractere est inferieur à 3 afficher dans la div "Attention :
 votre prenom doit faire plus de 3 caracteres"
 7 Si le nombre de caractere est superieur à 10  afficher dans la div "Attention :
 votre prenom doit faire moins de 10 caracteres"


1 Creez un champs texte avec l'identifiant nom
 2 CReez une div avec l'id dnom
 3 Creez un evenement qui va se produire lorsque je vais presser (keyup) les touches sur 
 le champs texte qui va declencher la fonction fnom 
 5 la fonction fnom elle va afficher dans la div dnom le nombre de caractere du
 nom de la personne (length)
 6 Si le nombre de caractere est inferieur à 3 afficher dans la div "Attention :
 votre prenom doit faire plus de 3 caracteres"
 7 Si le nombre de caractere est superieur à 10  afficher dans la div "Attention :
 votre prenom doit faire moins de 10 caracteres"

1 Creez un champs texte avec l'identifiant  age
 2 CReez une div avec l'id dage
 3 Creez un evenement qui va se produire lorsque je vais presser (keyup) les touches sur 
 le champs texte qui va declencher la fonction fage
 5 la fonction fage elle va verifier si il est >0 et <120 alors cela pourra 
 l'age est conforme sinon cela ecrira  l'age doit être 0 et 120

 1 Creez un champs password avec l'identifiant  pwd1 et pwd2
 2 CReez une div avec l'id dpwd
 3 Creez un evenement qui va se produire lorsque je vais presser (keyup) les touches sur 
 le champs texte pwd1 et pwd2 qui va declencher la fonction fpwd
 5 la fonction fpwd elle va verifier si le champs pwd1 et pwd2 sont identiques si 
 c'est le cas cela affiche les mot de passes sont OK si non
 Attention : les mots de passes ne sont pas identiques
 
 Exercice 11


 1 creez un champs texte avec l'id "mult". Creez une div avec l'id dmult
 2 Creez un evenement qui va se produire lorsque je vais presser (keyup) les touches sur 
ce champs texte declenchant la fonction fmult 
 3  la fonction fmult affichez les nombre dans la div de 1 à 10
 4 la fonction fmult affichez les nombre dans la div de 1 à 10  au nombre entré dans le champs 
 texte
 
 */


/**  RECAPITULATIF
 * 1 Faire un lien entre un fichier html et JS
 * => Dans le fichier html on aura le script après body
 * <script type="text/javascript" src="script5.js"></script>
 *
 * 2 L'objet parent de tout JS
 * window
 * 
 * 3 Objet à l'interieur de window
 * document : la page html
 * location : 
 * navigator
 * ...
 * console
 * 
 * 3 afficher des informations dans la console
 * console.log("mes informations")
 * 
 * 4 Creez une variable numérique
 * var=12
 * 
 * 5 Creez une variable string
 * var="Melki"
 * 
 * 6 Concatener du texte avec une variable
 * new_var="je m'appelle " + var // si on a une string ca renvoie NaN
 * console.log("je m'appelle " + var) 
 * 
 * 7 operation sur variable
 * a=4
 * b=8
 * c=a+B c=a*b c=a/b console.log(a+b)
 * 
 * 8 Afficher le nombre de 1 à 100
 * for (i=0; i < 100 ; i++ ){
 *    console.log(i) // ecriture dans la log du nombre i
 * }
 * 
 * 9 si j'ai une variable age=50, afficher OK si c'est > 18 et KO si c'est <18
 * if ( age>18 ) {
 *  console.log("OK")
 * }
 * else {
 *  console.log("KO")
 * }
 * 
 * 10 La methode permettant de recuperer une partie ID du code HTML
 *    HTML <input type="text" id="name" name="name" value="valeur par defaut">
 *    JS document.getElementByID("name")
 * 
 * 11 Declencher du JS sur un click / touche de clavier / passe la souris sur un element HTML
 * document.getElementById("name").addEventListener("click", notrefonction)
 * document.getElementById("name").addEventListener("keyup", notrefonction)
 * document.getElementById("name").addEventListener("mouseover", notrefonction)
 * 
 * 12 Modifier la propriété soit la valeur du champs
 *  HTML <input type="text" id="name" name="name" value="valeur par defaut">
 * document.getElementById("name").value="ce que je veux ! ";
 * 
 * 13 Modifier le HTML d'un composant
 * <div id="div_texte">   POTENTIELLEMENT DU HTML   </div>
 * document.getElementById("div_texte").innerHTML="ce que je veux"
 * 
 * 14 Retrouver la propriété de la taille d'un champs
 * document.getElementById("name").length
 * 
 * 15 Modifier un css par ex : la couleur d'un composant html
 * document.getElementById("name").style.color="blue"
 * 
 * 16 Creez une variable issue d'une autre variable
 * a=10
 * b=20
 * c=a // Affecte dans c la variable a.
 * 
 * 
 *  
*/