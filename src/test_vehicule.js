import Vehicule from "./vehicule.js";
//instances de deux nouveaux vehicules
const voiture = new Vehicule("Mercedes CLK", 4, 250);//objet: voiture
const moto = new Vehicule("Honda CBR", 2, 280);//objet: moto


//Affichage type de vehicule
console.log("Le vehicule est de type : " + voiture.detect());
console.log("Le vehicule est de type : " + moto.detect());

//Aplication methode boost
voiture.boost();
console.log("La nouvelle vitesse est de : " + voiture.vitesse + "km/h");

console.log(voiture.plusRapide());
console.log(moto.plusRapide(voiture));