import './style.css'
import { apikey} from './env.js'


const meteo = fetch('https://api.openweathermap.org/data/2.5/weather?lon=1.44&lat=43.6&appid=' + apikey)
  .then(response=>{//je recupere la promise
    //console.log(response);
    return response// on la retourne
  })
  .then(data=>{
    return data.json();
    //console.log(data.json);//donnés (data) qu'on recupere en format json// conversion en JSON
  });

console.log(meteo);