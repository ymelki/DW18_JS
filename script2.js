/* 
1 . CREEZ UN CHAMPS TEXTE DANS LA PAGE HTML ( COURS HTML )
1 . CREEZ UN CHAMPS BOUTON DANS LA PAGE HTML ( COURS HTML )
2 . AJOUTEZ DANS LE CHAMPS BOUTON UN EVENEMENT QUI VA SE DECLENCHER AU CLIQUE
3 . L EVENEMENT VA DECLENCHER UNE FONCTION QUI VA FAIRE LA CHOSE SUIVANTE : 
5 . AFFICHE DANS UNE DIV CE QU ON A ECRIS DEPUIS LE CHAMPS TEXTE 
6 . RECUPERER LA VALEUR ECRIS DANS LE TEXTE DE LE TRANSFORMER EN NUMERIQUE
7 . DE LE COMPARER A UN NOMBRE ALEATOIRE QUI SERAIT STOCKE DANS UNE VARIABLE
8 . SI ON EST = ON ECRIS DANS LA DIV GAGNE LE JEU
9 . SI ON EST > ON ECRIS DANS LA DIV CEST MOINS 
10 . SI ON EST < ON ECRIS DANS LA DIV CEST PLUS 
*/

/* Les evenements  */
 
// dans la documentation
// dans quel objet je suis ?
// est ce qu on me proposer de manipuler une méthode ou un propriété

function toto(){
    // le prompt permet de demander à l'utilisateur via une boite de dialogue d'entrer un nombre
    // on stocke l'information dans la variable nb_user
   nb_user=prompt("devinez un nombre entre 1 et 100");
   // On l'affiche 
   // on a implicement l'objet window
   // qui contient l'objet console
   // qui contient la méthode log
   console.log(nb_user);
   location.assign("http://google.fr");
}