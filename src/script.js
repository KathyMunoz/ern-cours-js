import L from "https://unpkg.com/leaflet@1.9.4/dist/leaflet-src.esm.js";
// Paris : latitude et longitude
const parisCoords = [48.8566, 2.3522];

// Création de la carte centrée sur Paris
const map = L.map('map').setView(parisCoords, 13);

// Fond de carte OpenStreetMap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Marqueur sur Paris
L.marker(parisCoords).addTo(map)
  .bindPopup("Bienvenue à Paris 🗼")
  .openPopup();


// 2 → vue du monde

// 5 → vue d’un pays

// 10 → vue d’une grande ville

// 15 → vue d’un quartier