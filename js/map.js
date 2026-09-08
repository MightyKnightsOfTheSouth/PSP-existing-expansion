```javascript
// Create Map
const map = L.map('map', {
    center: [37.3,-77.8],
    zoom: 5,
    minZoom: 3
});

// OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
}).addTo(map);
```
