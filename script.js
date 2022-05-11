// LA PARTIE DU DOM : POUR MODIFIER LA PARTIE HTML LORS D EVENEMENTS 

// on a appris à modifier une div
// document.getElementById("madiv") : qui va recuperer l'emplacement de la div
// innerHTML="le nouveau text"; qui modifier le HTML de la div
document.getElementById("madiv").innerHTML="le nouveau text";

/* ALGORITHMIQUE

1 VARIABLES
Lorsque on va stocke 
ou manipulé on va avoir besoin de données on va mettre dans une variables

2 CONDITIONS

3 BOUCLES

4 FONCTION

*/

/* 1 LES VARIALES */
// VARIABLES NUMERIQUE SANS GUILLEMENT
// CREATION DE LA VARIABLE NUMERIQUE AGE CONTENANT 34
age=15;
alert(age);

// VARIABLES CHAINE DE CARACTERE AVEC GUILLEMENT
// CREATION DE LA VARIABLE CHAINE DE CARACTERE NOM CONTENANT MELKI
nom="Melki";
alert(nom);


/* 2 LES CONDITIONS */
if (age > 17 ) {
    alert("Vous êtes majeur ! ");
}
if (age < 18 ) {
    alert("Vous êtes mineur ! ");
}

/* 3 LES BOUCLES */
// objectif : affiche 10 fois l'alerte : je suis heureux X fois !
// ON DEMMARE la variable I A 0;ON S ARRETTE A 10;A CHAQUE FOIS ON INCREMENT DE 1
/*for (i=0;i<2;i++) {
    alert("Je suis heureux !");
}*/

/* Les fonctions */
// SEGMENTER SON CODE
// ON VA AVOIR DU CODE QUI VA ETRE DANS UNE FONCTION

// 1. CREATION DU CORP DE LA FONCTION
function blabla(){
    // DEBUT DE CODE  300 LIGNES
    alert("je suis dans la fonction VOILA CE QU IL SE PASSE! ");
}

// 2. l appel de la fonction
blabla()