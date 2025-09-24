export default class IMC {
  constructor (nom, poids, taille) {
    this.nom = nom;
    this.poids = poids;
    this.taille = taille;
  }
  calculImc () {
    return (this.poids / (this.taille ** 2)).toFixed(2);//.toFixed(2) : Arrondit le résultat à 2 décimales et le retourne sous forme de chaîne de caractères
    //Par exemple, si this.poids = 70 et this.taille = 1.75, le calcul sera :
    //70 ÷ (1.75)² = 70 ÷ 3.0625 = 22.857...
    //Avec .toFixed(2) : "22.86"
  }
  display () {
    console.log(`La personne : ${this.nom}, poids : ${this.poids}, taille : ${this.taille}, IMC : ${calculImc()} `);
  }
}