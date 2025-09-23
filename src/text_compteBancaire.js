// Partie JS :
// écouteur click sur le bouton id_create (qui va ajouter un compte au tableau de comptes),
// écouteur click sur le bouton id_crediter (qui va créditer le compte du montant saisie dans  id_montant du compte sélectionné dans id_compte),
// ecouteur click sur le bouton id_retirer (qui va retirer au compte id_compte le montant dans id_montant),

export default 

const create = document.getElementById("bt_create");
const champNom = document.getElementById("nom");

create.addEventListener("click", function(event) {
    const nomSaisi = champNom.value
    const nouveauCompte = new CompteBancaire("nom") // value,pour recuperer la valeur tapée dans un input
    comptes.push(nouveauCompte)

})