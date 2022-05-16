/*
Exercice :
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