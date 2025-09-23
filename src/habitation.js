export default class Habitation {//export??
    constructor (newnom, newlongueur, newlargeur, newnbrEtage) {//parametres
        this.nom = newnom; //nom est l'attribut du premier paramétre et l'attribut commence par this.
        this.longueur = newlongueur;//this??
        this.largeur = newlargeur;
        this.nbrEtage = newnbrEtage;
    }
    //Méthode =  function?
    superficie () {
        return this.longueur * this.largeur * this.nbrEtage;
    }
}