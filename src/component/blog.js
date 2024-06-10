
        const requestOptions = {
            method: "POST",
            redirect: "follow",
        };
        const searchInput = document.getElementById("default-search");
        fetch("https://comptour-be.vercel.app/api/blogs/get-all", requestOptions)
        .then((response) => response.json())
        .then((response) => {
            const attractions = response.data;
            renderTouristAttractions(attractions);

            searchInput.addEventListener("input", () => {
            const searchTerm = searchInput.value.trim().toLowerCase();
            const filteredAttractions = attractions.filter((attraction) => {
                const title = attraction.title.toLowerCase();
                return title.includes(searchTerm);
            });
            renderTouristAttractions(filteredAttractions);
            });
        })
        .catch((error) => console.error(error));

        const renderTouristAttractions = (attractions) => {
            const touristAttractionsContainer = document.getElementById("blog-items");
            touristAttractionsContainer.innerHTML = '';
        
            attractions.forEach((attraction) => {
            const attractionItemContainer = document.createElement('div');
            attractionItemContainer.innerHTML = `
                <div class="bg-white rounded-xl shadow-md overflow-hidden">
                    <div class="relative">
                        <img class="w-full h-48 object-cover" src="${attraction.image}" alt="${attraction.title}">
                        <div class="absolute top-0 right-0 bg-indigo-500 text-white font-bold px-2 py-1 m-2 rounded-md">New
                        </div>
                        <div class="absolute bottom-0 right-0 bg-gray-800 text-white px-2 py-1 m-2 rounded-md text-xs">3 min read
                        </div>
                    </div>
                    <div class="p-4 h-48">
                        <div class="text-lg font-medium text-gray-800 mb-2"><a href="#"> ${attraction.title} </a></div>
                        <p class="text-gray-500 text-sm">${attraction.description}</p>
                    </div>
                </div>
                `;
                touristAttractionsContainer.appendChild(attractionItemContainer);
            });
        }
        