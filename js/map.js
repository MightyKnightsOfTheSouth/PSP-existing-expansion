// Create Map
const map = L.map('map', {
    center: [37.3,-77.8],
    zoom: 5,
    minZoom: 3
});

// Dark-themed map layer
L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
    maxZoom: 20,
    attribution:
        '&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a> ' +
        '&copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> ' +
        '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
}).addTo(map);
