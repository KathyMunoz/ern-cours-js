import './style.css'
import "./habitation.js"
import Habitation from './habitation.js'

const villa = new Habitation("villa", 15, 8, 1);// création instance
const maison = new Habitation("maison", 20, 12, 3);

console.log(villa.superficie());
console.log(maison.superficie());
 