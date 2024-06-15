window.onload = function () {
  const requestOptions = {
    method: "POST",
    redirect: "follow",
  };

  // Ambil URL saat ini
  const urlParams = new URLSearchParams(window.location.search);

  // Ambil nilai parameter 'blogid'
  const taid = urlParams.get("taid");

  // Get data from API
  fetch(
    "https://comptour-be.vercel.app/api/tourist-attractions/get-detail?taid=" +
      taid,
    requestOptions
  )
    .then((response) => response.json())
    .then((data) => {
      const attractions = data.data;

      document.getElementById("province").innerText =
        attractions.province +
        ", " +
        attractions.regency +
        ", KECAMATAN " +
        attractions.district;
      document.getElementById("description-header").innerText =
        attractions.description;
      document.getElementById("description").innerText =
        attractions.description;

      // Create a map object
      const map = L.map("map").setView(
        [attractions.longtitude, attractions.latitude],
        6
      );

      // Add a tile layer
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
        subdomains: ["a", "b", "c"],
      }).addTo(map);

      L.marker([attractions.longtitude, attractions.latitude])
        .addTo(map)
        .bindPopup(attractions.name_place);

      const cultures = document.getElementById("cultures");
      cultures.innerHTML = "";

      attractions.Cultures.forEach((culture) => {
        console.log(culture);
        const cultureImage = document.createElement("div");
        cultureImage.innerHTML = `
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="${culture.image}"
                            alt="${culture.name_image}" />
                    </div>
                `;
        cultures.appendChild(cultureImage);
      });

      const comments = document.getElementById("comments");
      comments.innerHTML = "";

      attractions.Comment.forEach((comment) => {
        const commentsItem = document.createElement("div");
        commentsItem.innerHTML = `
                    <div>
                        <h3>${comment.name}</h3>
                        <small>
                            <i><span>${new Date(comment.time)}</span></i>
                        </small>
                        <p>${comment.description}</p>
                        <hr />
                    </div>
                `;
        comments.appendChild(commentsItem);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
};
