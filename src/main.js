import './style.css'
import { apikey} from './env.js'
//CETTE FAçON ON FAIT TOUT DEDANS REQUETE ET REPONSE

// const meteo = fetch('https://api.openweathermap.org/data/2.5/weather?lon=1.44&lat=43.6&appid=' + apikey)
//   .then(response=>{//je recupere la promise, ce que retourne fetch
//     //console.log(response);
//     return response// on la retourne
//   })
//   .then(data=>{//recupere le body de la reponse et le transforme en json
//     return data.json();
//     //console.log(data.json);//donnés (data ou nimporte quelle autre nom) qu'on recupere en format json// conversion en JSON
//   });

// console.log(meteo);


//Fetch (requete) sur l'API météo

// CE DEUX FAçON ON RECUPERE AVANT ET APRES ON TRAITE DEDANS? DANS LA FONCTION

const meteo = fetch('https://api.openweathermap.org/data/2.5/weather?lon=1.44&lat=43.6&appid=' + apikey)//fetch envoie une promesse
  .then(response=>response.json())//then: si tout va bien je fais une action, cest la reponse
  .then(data =>{
    console.log(data)
  });//premier façon de traiter une requete et sa reponse comme resultat du texte tres long 

const apiMeteo = async () =>{//deuxiemme façon de traiter une requete avec sa reponse
  return await fetch('https://api.openweathermap.org/data/2.5/weather?lon=1.44&lat=43.6&appid=' + apikey)
    .then(response => {
        return response.json();//avec console log on peut choisir le contenu qu'on veut recuperer
    });
}

async function apiFunction() {//cest la meme chose que avant mais en FONCTION
    return await fetch('https://api.openweathermap.org/data/2.5/weather?lon=1.44&lat=43.6&appid=' + apikey)
    .then(response => {
        return response.json();
    });

}

apiMeteo().then(json => {
  console.log(json.weather[0].main);
})


