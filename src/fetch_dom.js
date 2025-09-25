//Récupération des élèments du DOM 

const blocMeteo = document.querySelector('#bloc_meteo');
const inputTextCity = document.querySelector('#city');
const boutonCharger = document.querySelector('#charger');
const box = document.createElement("div");
box.style.display = "flex";
box.style.flexDirection = "column";

//meteobloc cest le parent 
blocMeteo.appendChild(box); 

//Créer les 3 titres
for ( let i=0 ; i < 3 ; i++) {
   const h2 = document.createElement("h2");
    h2.style.width = "auto";
    h2.style.height = "10vh";
    h2.style.backgroundColor = "grey";
    h2.style.textAlign = "center";
    h2.style.alignContent = "center";
    h2.style.paddingTop = "20px";
    h2.style.paddingBottom = "20px";
    h2.textContent = "vide";
    h2.setAttribute("id","id_title" + (i+1));
}
    box.appendChild(h2);
    // ajouter h2 comme enfant de box  
    const getMeteoJson = async (inputTextCity) =>{
       return await fetch('https://api.openweathermap.org/data/2.5/weather?q='+ inputTextCity + '&units=metric&lang=fr&appid=' + apikey)//units=metric comme ça le calvin se transforme en degrees .then(response => {//await en attente tant qu'on a une reponse//avec .then on traite la reponse on la declare avec response et on a comme resultat (return)le body en format json mais je ne peut pas acceder à ces info , jai besoin dutiliser autre .then* (.then data) 
       return response.json(); }); } 
       //const title1 = document.getElementById("id_title1") 
       boutonCharger.addEventListener("click", () => {
         const city = inputTextCity.value;
          if(city === "") { 
            return "Champ vide";
           } else { getMeteoJson(city).then(data => { 
            document.getElementById("id_title1").textContent = Ville : ${data.name} 
            document.getElementById("id_title2").textContent = Température : ${data.main.temp.toFixed(2)} °;//toFixed : je veux que deux chiffres apres la virgule 
           
           document.getElementById("id_title3").textContent = Description : ${data.weather[0]description}; }); } }) et je voudrais ajouter une image avec ce code const image = document.createElement("img"); // image.src = https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png; // image.width = 90; // image.height = 90; // image.alignSelf = start; // box.appendChild(image);