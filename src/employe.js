export default class Employee {
    constructor (nom, prenom, age, salaireMensuel){
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.salaireMensuel;
        this.cout = this.calculCout();
    }

    //calcul bilan
        calculCout(){
            const NB_MOIS = 12;
            const TAXE = 0.90;

            return this.salaireMensuel * NB_MOIS * (1+ TAXE);
        }
}