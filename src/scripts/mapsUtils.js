const raw = "";
const requestOptions = {
    method: "POST",
    body: raw,
    redirect: "follow"
};
// Create a map object
const map = L.map('map').setView([-7.0693167, 108.7860433], 6);

// Create an array to store the markers
const markers = [];

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
            const marker = L.marker([attraction.longtitude, attraction.latitude]).addTo(map)
                .bindPopup(attraction.name_place);

            // Store detail information in the marker
            marker.attraction = attraction;

            // Add the marker to the array
            markers.push(marker);

            // Add event listener on marker click
            marker.on('click', function () {
                const attraction = this.attraction;
                // Update HTML content with detail information
                const descriptionDiv = document.querySelector('.description');
                descriptionDiv.innerHTML = `
                <div class="bg-white rounded-xl shadow-md overflow-hidden">
                    <div class="relative">
                        <img class="w-full h-44 object-cover" src="${attraction.image}" alt="${attraction.name_place}">
                    </div>
                    <div class="p-4 h-44">
                        <div class="text-lg font-medium text-gray-800 mb-2"><a href="#"> ${attraction.name_place} </a></div>
                        <p class="text-gray-500 text-sm text-left">${attraction.description}</p>
                    </div>
                </div>
                `;
            });
        }
    });