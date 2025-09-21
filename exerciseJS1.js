//inputs
let nomProduit = document.getElementById("nom_produit");
let quantite = document.getElementById("quantite");
let prixHt = document.getElementById("prix_ht");//Cette variable prixHt contient l'élément HTML (l'input), pas la valeur tapée dedans
//button
let buttonCalculer = document.getElementById("calculer");
//zone de message
let resultatDiv = document.getElementById("resultat")// pour afficher DANS la div quelque chose//pour afficher dans le DOM

buttonCalculer.addEventListener("click", ()=>{
    let valeurPrixHt = prixHt.value;// valeurprixht , je recupere la valeur de mon input , la valeur de mon input qui est dans ma variable prixHt
    let valeurQuantite = quantite.value;//.value pour recuperer la valeur d'un input
    let valeurNomProduit = nomProduit.value;
//if (valeurPrixHt == "") → Cela teste SI c'est vide
//Mais l'exercice demande de vérifier SI les champs SONT remplis (l'inverse)→ !=
//&& pour combiner les 3 conditions et vérifier qu'elles sont vides
    
    if (valeurPrixHt != "" && valeurQuantite != "" && valeurNomProduit != "") {// si les 3 champs sont remplis// ""= vide
        
        if (!isNaN(valeurPrixHt) && !isNaN(valeurQuantite)) {//tester si valeurPrixHt et valeurQuantite sont bien des numeros
          //isNaN = is Not a Number//! = négation = inverse le résultat
        resultatDiv.textContent = `Le prix TTC est ${Math.round((valeurQuantite * valeurPrixHt)*100) /100} €`;
        } else {//si ce nest pas des numeros
            resultatDiv.textContent = "Attention ce n'est pas des numéros";
        }
    } else {
        resultatDiv.textContent = "Les champs ne sont pas remplis";
    }
  }
)   
        
  