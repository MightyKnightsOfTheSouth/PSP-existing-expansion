// Geographical center of the US is 39.8283, -98.5795

// Create Map
const map = L.map('map', {
    center: [37.3,-77.8],
    zoom: 5,
    minZoom: 3
});

// OpenStreetMap raster tiles
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors',
    maxZoom: 19
}).addTo(map);
