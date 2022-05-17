// appel de la fonction debut lors du click sur le bouton "deb"
document.getElementById("deb").addEventListener("click", debut)

// appel de la fonction debut lors du load de la page
window.addEventListener("load",debut)

function debut(){
   nom="deto"
   prenom="pierre"
   age=31
   console.log("Bienvenue je m'apelle " + prenom + nom + age)
   prix_article1 = 50
   prix_article2 = 80
   prix_article3 = prix_article1 + prix_article2
   console.log("Le prix de l'article 1 est " + prix_article1)
   console.log("Le prix de l'article 2 est " + prix_article2)
   console.log("La somme des articles sera de " + prix_article3)
   document.getElementById("deb").addEventListener("click", ftest)
}

/** Exercice 2
Ajouter un champs texte comprenant un identifiant "test"
Lorsqu on clique sur le bouton précdemment créé on affiche dans le texte
ayant l'identifiant "test" l'information
"ce que je veux"
*/
// 1 CREER UN EVENEMENT SUR LE BOUTON AU CLIQUE : ADDEVENTLISTENER
// 2 UI VA AFFICHER SUR LE CHAMPS TEXTE "ce que je veux" : FONCTION A CODER

document.getElementById("deb").addEventListener("click", ftest)
document.getElementBy
function ftest(){
   document.getElementById("test").value="ce que je veux"
}

/** 
* EXERCICE 3
* 1 CREER UN NOUVEAU BOUTON AVEC L IDENTIFIANT btest
* 2 CREER UN EVENEMENT SUR LE BOUTON AU CLIC QUI VA DECLENCHER LA FONCTION ftest2
* 3 LA FONCTION VA FAIRE EN SORTE QUE LE TEXTE avec l'identifiant "test" 
* recoivent en valeur le texte "nouveau texte !"
*/

document.getElementById("btest").addEventListener("click",ftest2)

function ftest2(){
   document.getElementById("test").value="nouveau texte !"
}

/*Exercice 4
1 CREEZ UN NOUVEAU BOUTON AVEC L IDENTIFIANT btest3
2 CREEZ UN EVENEMENT SUR LE BOUTTON AU CLIC QUI VA DECLENCHER LA FONCTION ftest3
3 LA FONCTION VA FAIRE EN SORTE QUE LE TEXTE avec l'identifiant "test" recoivent en valeur
le texte "le texte nouveau !"
*/

document.getElementById("btest3").addEventListener("click", ftest3)

function ftest3(){
   document.getElementById("test").value="le texte nouveau !"
}

/*Exercice 5
1 CREEZ UN NOUVEAU BOUTON AVEC L IDENTIFIANT btest4
2 CREEZ UN EVENEMENT SUR LE BOUTTON AU CLIC QUI VA DECLENCHER LA FONCTION ftest4
3 LA FONCTION VA FAIRE EN SORTE QUE LE TEXTE avec l'identifiant "test" recoivent en valeur
le texte "le DERNIER texte nouveau !"
*/

document.getElementById("btest4").addEventListener("click", ftest4)

function ftest4(){
   document.getElementById("test").value="le DERNIER texte nouveau"
}

/**Exercice 6
* Creer une div en html avec l identifiant madiv
* creer un evenement issu du dernier bouton au clic lançant la fonction fdiv
* la fonction fdiv affiche dans la console "vous avez bien cliqué sur le bouton"
* la fonction fdiv affiche dans la div "vous avez bien cliqué sur le bouton"
* la fonction fdiv affiche le contenu du champs texte
* 
*/

document.getElementById("btest5").addEventListener("click", fdiv)

function fdiv(){
   console.log("vous avez bien cliqué sur le bouton")
   document.getElementById("madiv").innerHTML="vous avez bien cliqué sur le bouton"
   document.getElementById("madiv").innerHTML="vous avez bien cliqué sur le bouton  " + document.getElementById("test").value
}

/*Exercice 7
1 Creez une div en html avec l identifiant madiv2
2 Creez un evenemement issue du dernier bouton au click lancant la fonction fdiv2
3 la fonction fdiv affiche dans la console vous avez bien cliqué sur le bouton
4 la fonction fdiv affiche dans la div vous avez bien cliqué sur le bouton
5 la fonction fdiv dans la div affiche le contenu du champs texte
*/

document.getElementById("btest6").addEventListener("click",fdiv2)

function fdiv2(){
   console.log("vous avez bien cliqué sur le bouton")
   document.getElementById("madiv2").innerHTML="vous avez bien cliqué sur le bouton"
   document.getElementById("madiv2").innerHTML="vous avez bien cliqué sur le bouton  " + document.getElementById("test").value
}


/*Exercice 8
1 Creez une div en html avec l identifiant madiv3
2 Creez un evenemement issue du dernier bouton au click lancant la fonction fdiv3
3 la fonction fdiv3 affiche dans la console vous avez bien cliqué sur le bouton
4 la fonction fdiv3 affiche dans la div vous avez bien cliqué sur le bouton
5 la fonction fdiv3 dans la div affiche le contenu du champs texte
*/

document.getElementById("btest7").addEventListener("click",fdiv3)

function fdiv3(){
   console.log("vous avez bien cliqué sur le bouton")
   document.getElementById("madiv3").innerHTML="vous avez bien cliqué sur le bouton"
   document.getElementById("madiv3").innerHTML="vous avez bien cliqué sur le bouton  " + document.getElementById("test").value
}

/*Exercice 8
1 Creez une div en html avec l identifiant madiv4
2 Creez un evenement issue du dernier bouton au click lancant la fonction fdiv4
3 la fonction fdiv4 affiche dans la console vous avez bien cliqué sur le bouton
4 la fonction fdiv4 affiche dans la div vous avez bien cliqué sur le bouton
5 la fonction fdiv4 dans la div affiche "vous avez bien cliqué sur le bouton" puis le contenue du champs texte
*/

document.getElementById("btest8").addEventListener("click", fdiv4)

function fdiv4(){
    console.log("vous avez bien cliqué sur le bouton")
    // document.getElementById("madiv4").innerHTML="vous avez bien cliqué sur le bouton"
    // Vous avez concaténé "vous avez bien clicke sur le bouton suivi du texte"
    //document.getElementById("madiv4").innerHTML="vous avez bien cliqué sur le bouton  " + document.getElementById("test").value

         // affichez ce qui a dans le champs texte. A chaque fois on affiche ce qui avant et le nouveau texte
         // "oiseau" => "" + oiseau
         // "tel" => oiseau tel

   document.getElementById("madiv4").innerHTML=document.getElementById("madiv4").innerHTML+ " " +  document.getElementById("test").value
}


document.getElementById("btest8").addEventListener("click", fdiv4)

function fdiv4(){
   document.getElementById("madiv4").innerHTML=document.getElementById("madiv4") + "  " + document.getElementById("test").value
}

/* Exercice 9
1 CREER UN CHAMPS DE TYPE NUMBER AVEC VALEUR PAR DEFAUT A 0 AVEC L ID TEXTID1
2 CREEZ UN BOUTTON AVEC L ID B10
3 CREER UN BOUTON AVEC L ID ID10 LORSQUON CLIQUE QUI VA LANCER LA FONCTION FB10
4 LA FONCTION VA AJOUTER 1 A LA VALEUR DU CHAMP TYPE NUMBER
EXemple:
Champ number : 0
click =>  1, 2, 3 ...
*/

document.getElementById("B10").addEventListener("click", FB10)

function FB10(){
   console.log("test")
   document.getElementById("TEXTID1").value = parseInt(document.getElementById("TEXTID1").value) + 1
   document.getElementById("TEXTID1").value = parseInt(document.getElementById("TEXTID1").value) + parseInt(document.getElementById("TEXTID2").value)
}
/* Exercice 10
1 Creer un champs texte avec l'identifiant prenom
2 Creer un bouton s'inscrire
2.1 Creer une div avec l'id dprenom
3 Creer un evenement qui va se produire lorsque je vais presser (keyup) les touches sur
le champs texte qui va déclencher la fonction fprenom
4 la fonction fprenom elle va afficher dans la div dprenom le nom de la personne
5 la fonction fprenom elle va afficher dans la div fprenom le nombre de caractere du
nom de la personne (length)
6 Si le nombre de caractere est inferieur à 3 afficher dans la div "Attention :
votre prenom doit faire plus de 3 caracteres"
7 Si le nombre de caractere est superieur à 10  afficher dans la div "Attention :
votre prenom doit faire moins de 10 caracteres"
*/

/*document.getElementById("prenom").addEventListener("keyup", fprenom)
function fprenom(){
   document.getElementById("dprenom").innerHTML=document.getElementById("prenom").value
   taille_prenom=document.getElementById("dprenom").innerHTML=document.getElementById("prenom").value.length
   // on stocke dans la variable taille_prenom le nombre de caractères
   if (taille_prenom<3){
       document.getElementById("dprenom").innerHTML="Attention : votre prénom doit faire plus de 3 caractères"
   }
   if (taille_prenom>10){
       document.getElementById("dprenom").innerHTML="Attention : votre prénom doit faire moins de 10 caractères"
   }
   if (taille_prenom>3 && taille_prenom<10) {
       document.getElementById("dprenom").innerHTML="Votre prénom est conforme"
   }
}*/

/* 1 Creez un champs texte avec l'identifiant nom
2 CReez une div avec l'id dnom
3 Creez un evenement qui va se produire lorsque je vais presser (keyup) les touches sur 
le champs texte qui va declencher la fonction fnom 
5 la fonction fnom elle va afficher dans la div dnom le nombre de caractere du
nom de la personne (length)
6 Si le nombre de caractere est inferieur à 3 afficher dans la div "Attention :
votre prenom doit faire plus de 3 caracteres"
7 Si le nombre de caractere est superieur à 10  afficher dans la div "Attention :
votre prenom doit faire moins de 10 caracteres"
*/

document.getElementById("prenom").addEventListener("keyup", fnom)

function fnom(){
   taille_nom=document.getElementById("dnom").innerHTML=document.getElementById("prenom").value.length
   if (taille_nom<3){
       document.getElementById("dnom").innerHTML="Attention : votre prenom doit faire plus de 3 caracteres"
   }
       if (taille_nom>10){
       document.getElementById("dnom").innerHTML="Attention : votre prenom doit faire moins de 10 caracteres"
   }
       if (taille_nom>3 && taille_nom<10) {
           document.getElementById("dnom").innerHTML="Votre prénom est conforme"
       }
}

/*1 Creez un champs texte avec l'identifiant  age
2 CReez une div avec l'id dage
3 Creez un evenement qui va se produire lorsque je vais presser (keyup) les touches sur 
le champs texte qui va declencher la fonction fage
5 la fonction fage elle va verifier si il est >0 et <120 alors cela pourra 
l'age est conforme sinon cela ecrira  l'age doit être 0 et 120
*/

document.getElementById("age").addEventListener("keyup", fage)

function fage(){
   v_age=document.getElementById("age").value
   if (v_age>0 && v_age<120){
   document.getElementById("dage").innerHTML= "l'âge est conforme"
   }
   else{
       document.getElementById("dage").innerHTML="l'âge n'est pas conforme"
   }
}

/* 1 Creez un champs password avec l'identifiant  pwd1 et pwd2
2 CReez une div avec l'id dpwd
3 Creez un evenement qui va se produire lorsque je vais presser (keyup) les touches sur 
le champs texte pwd1 et pwd2 qui va declencher la fonction fpwd
5 la fonction fpwd elle va verifier si le champs pwd1 et pwd2 sont identiques si 
c'est le cas cela affiche les mot de passes sont OK si non
Attention : les mots de passes ne sont pas identiques
*/

document.getElementById("pwd1").addEventListener("keyup", fpwd)
document.getElementById("pwd2").addEventListener("keyup", fpwd)

function fpwd(){
   mdp1=document.getElementById("pwd1").value
   mdp2=document.getElementById("pwd2").value
   if (mdp1==mdp2){
       document.getElementById("dpwd").innerHTML="les mots de passe sont OK"
   }
   else{
   document.getElementById("dpwd").innerHTML="les mots de passe ne sont pas identiques"
   }
}

/* Exercice 11
1 creer un champs texte avec l'id "mult". Creer une div avec l'id dmult
2 Creer un evenement qui va se produire lorsque je vais passer (keyup) les touches sur 
ce champs texte declenchant la fonction fmult
3 la fonction fmult affiche les nombres dans la div de 1 à 10
4 la fonction fmult affiche les nombres dans la div de 1 à 10 au nombre entré dans le champs
texte
*/

document.getElementById("mult").addEventListener("keyup", fmult)

function fmult(){
   val_num=document.getElementById("mult").value
   for(i=0;i<val_num;i++) {
   document.getElementById("dmult").innerHTML=document.getElementById("dmult").innerHTML + " " + i
   }
}

// lorsque je vais ecrire un nombre dans le champ tva 
document.getElementById("tva").addEventListener("keyup", ftva)
function ftva(){
    // val_tva=document.getElementById("tva").value*1.2
    val_tva=calcul_TTC(document.getElementById("tva").value)
    // dans la div dtva j'écris la valeur du PRIX TTC : Valeur ecrite * 1.2
    document.getElementById("dtva").innerHTML=val_tva
}

// fonctin qui ne renvoie rien
function test2(){
    console.log("j affiche des choses")
}
test2()
// fonction qui renvoie une valeur elle doit être recuperer par une variable
function test(){
    // la fonction test renvoie la valeur 1
    return "bonjour"
}
// test() va executer la fonction => 1
// a va recevoir ce 1
a=test();
console.log(a)

// fonction calcul_TTC qui va renvoyé le prix * 1.2 pour renvoye le Prix TTC
// fonction calcul_TVA qui va renvoyé le prix * 0.2 pour renvoye le Prix de la taxe
// fonction calcul_reduc_10 qui va renvoyé le prix * 0.9 pour renvoye le Prix reduit de 10%
// fonction calcul_reduc_n qui va renvoyé le prix * reduc pour renvoye le Prix reduit du pourcentage renvoyé

// fonction calcul reduc qui va multiplier le prix * la reduction qui va etre demande

// fonction addition qui renvoie le resultat de l'addition de deux nombres

function calcul_reduc(  param_prix  ,  param_reduc     ){
    result=param_prix*param_reduc
    return result
}
// la fonction calcul_reduc est appellé 
le_prix=calcul_reduc(300,1.50)
console.log("300*1.50=" + le_prix)


// declarer un prix à 100

function calcul_TTC(param_prix){
    // elle créé une variable prix_ttc qui contient le param_prix(100) * 1.2 et elle le renvoie (120)
    prix_ttc= param_prix*1.2   ;
    return prix_ttc
}
// la fonction calcul_ttc est appellé 
le_prix=calcul_TTC(300)
console.log(le_prix)
// la fonction calcul_ttc est appellé 
le_prix=calcul_TTC(200)
console.log(le_prix)
// la fonction calcul_ttc est appellé 
le_prix=calcul_TTC(50)
console.log(le_prix)
// la fonction calcul_ttc est appellé 
le_prix=calcul_TTC(500)
console.log(le_prix)


// booleen
// LA FONCTION VA RENVOYER VRAI SOIT FAUX

// check_majeur // vrai la personne est majeur soit c'est faut
info=true; 
info2=false;

console.log(info)
console.log(info2)

// fonction qui verfie si est majeur ou pas : renvoie true si on est majeur

function check_age( age  ){
   
    if (age >17){
      return true;
   }
   else {
      return false;
   }

}

a=check_age(15)
console.log("check_age:"+a)

// fonction de verifier si un nombre est superieur à 0
function positif(nb){
    if (nb > 0) {
        return true
    }
    if (nb < 0) {
       return false
    }
}
a=positif(15)
console.log("positif:"+a)


// fonction de verifier si un nombre est  pair
function check_pair(  nb ) {
    if (nb % 2 == 0){
        return true
    }
    else {
        return false;
    }
}
a=check_pair(12)
console.log("pair:"+a)

// portée des variables
// const (constante ca empeche toute modification possible) : A utiliser en priorité 1
// , let : A utiliser mais on protege nos bloc de fonction , de if , de boucle 2
// portée (scope) => limité au bloc
//, var priorité 3
const mavariable="ce que je veux" // variable qui ne peut plus être modifié
// erreur : mavariable="autre chose"
console.log(mavariable)

// age à 45 ans
let age=45;
console.log(age);

function test20(){
    let age=56 
    let var_temp="ce que je veux"
    console.log(var_temp)
    console.log("L age dans la fonction " +age)
}

test20()
console.log(age)
 

{
  let tr2="test" // liberte : erreurs potentiels avec les autres blocs
  const tre2="test"
  // tre2="je modifier"
  let  tre="test"
  tre="je peux le modifier"
}   










 // var  abc="test issue du code general"

 let b="test issue du code general"
 let variablestest="testvariablestest"
function test23(){
    //console.log(variablestest)
    let variablestest="test_fonction"
    console.log(variablestest)
    let b="test issue de la fonction test23" // abc est definit avec let et n existe que dans le bloc
    // abc="test issue de la fonction test23" // abc est definit avec let et n existe que dans le bloc
    console.log(b)
}
test23()
console.log(b)


















// string : "" , number : sans "", booleen : true , false
// tableau [ 23  , 56  , 78  , 90  ]
//           0     1     2     3
let tab=[23,"tre",78,true]
console.table(tab)

// creez un tableau "votre prenom" , votre nom et votre age et affichez le 
// afficher une case n2 précise du tableau
console.log(tab[2])

// boucle sur un tableau 

for (const element of tab ){
    console.log(element)
}


// creez un tableau de 5 valeur , afficher le tableau console.tab 
// affiche la cellule 3 et 5 du tableau
// boucler pour afficher tout le tableau













// on declare nos variable au debut du bloc avec const ou let 







// tableau console.tab
// ajouter des données dans un tableau
// supprimer des données dans un tableau
// somme des elements d'un tableau
// max min d'un tableau
// copier un tableau dans un autre tableau



// echanger les deux premiers parametre d un tableau