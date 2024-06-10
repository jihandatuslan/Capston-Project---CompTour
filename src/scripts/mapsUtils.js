// Create a map object
const map = L.map('map').setView([-7.0693167, 108.7860433], 13);
    const requestOptions = {
        method: "POST",
        redirect: "follow"
    };
// Add a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
    subdomains: ['a', 'b', 'c']
}).addTo(map);

// Get data from API
fetch('https://comptour-be.vercel.app/api/tourist-attractions/get-all', requestOptions)
    .then(response => response.json())
    .then(data => {
        const attractions = data.data;
        for (let i = 0; i < attractions.length; i++) {
        const attraction = attractions[i];
        L.marker([attraction.longtitude, attraction.latitude]).addTo(map)
            .bindPopup(attraction.name_place);
    }
});