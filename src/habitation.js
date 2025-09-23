export default class Habitation {
    constructor (newnom, newlongueur, newlargeur, newnbrEtage) {//parametres
        this.nom = newnom; //nom est l'attribut du premier paramétre et l'attribut commence par this.
        this.longueur = newlongueur;//this fait reference sur objet  avec quil travaille
        this.largeur = newlargeur;
        this.nbrEtage = newnbrEtage;
    }
    //Méthode =  function
    superficie () {
        return this.longueur * this.largeur * this.nbrEtage;
    }
}