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
  touristAttractionsContainer.innerHTML = "";

  attractions.forEach((attraction) => {
    const attractionItemContainer = document.createElement("div");
    attractionItemContainer.innerHTML = `
                <div class="bg-[#D9D9D9] shadow-md rounded-[30px]">
                    <div class="relative">
                        <img class="object-cover w-full h-48 rounded-t-[30px]" src="${attraction.image}" alt="${attraction.title}">
                        <div class="absolute top-0 right-0 px-2 py-1 m-3 font-bold text-white bg-indigo-500 rounded-md">New
                        </div>
                        <div class="absolute bottom-0 right-0 bg-gray-800 text-white px-2 py-1 m-2 rounded-md text-xs">3 min read
                        </div>
                         <div class="mb-2 pt-2 px-4 laptop:text-lg tablet:text-base mobile:text-base font-bold text-[#043420] "><a href="/src/page/detail-blog.html?blogid=${attraction.blogid}"> ${attraction.title} </a></div>
                    </div>
                    <div class="h-48 px-4 mb-2 overflow-auto text-justify no-scrollbar">
                        <p class="text-sm text-gray-500 font-poppins">${attraction.description}</p>
                    </div>
                </div>
                 <style>
                 .no-scrollbar::-webkit-scrollbar {
                display: none; /* Chrome, Safari, Opera */
                }
                .no-scrollbar {
                -ms-overflow-style: none; /* IE and Edge */
                scrollbar-width: none; /* Firefox */
                }
                </style>
                `;
    touristAttractionsContainer.appendChild(attractionItemContainer);
  });
};
