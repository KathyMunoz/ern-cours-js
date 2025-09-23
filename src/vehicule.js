export default class Vehicule  {
    constructor(nomVehicule, nbrRoue, vitesse) {
        this.nomVehicule = nomVehicule;
        this.nbrRoue = nbrRoue;
        this.vitesse = vitesse;
    }
     detect() {
        if (this.nbrRoue == 4) {
        return "voiture";
        }
        if (this.nbrRoue == 2) {
            return "moto";
        }   
        return "Autre véhicule";   
    }
    boost () {
        this.vitesse += 50;
    }
    plusRapide (vehicule) {//pour quoi v minuscule?
        if (this.vitesse > vehicule.vitesse) {//vehicule.vitesse, vitesse est la propieté de vehicule ??
            return `Le vehicule : ${this.nomVehicule} est le plus rapide`;
        }
        if (this.vitesse < vehicule.vitesse) {
            return `Le vehicule : ${this.nomVehicule} est le plus rapide`
        }
        return "Les 2 vehicules vont à la meme vitesse";

    }
}