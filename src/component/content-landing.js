class contentLanding extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.fetchData();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>@import "/src/styles/tailwindcss-output/tailwind.css";</style>
        <section>
          <div class="grid grid-cols-1 gap-6 my-12  laptop:grid-cols-2 bg-[#436850] rounded-[1.875rem] w-full mx-auto ">
            <div>
              <img
                src="../assets/image/gambar-pemandangan-indonesia.jpg"
                alt=""
                class="w-full h-full object-cover  rounded-l-[1.875rem]" />
            </div>
            <div class="p-5 ">
              <h2 class="laptop:text-2xl tablet:text-xl mobile:text-lg md:pb-6 font-bold  text-white">BROMO</h2>
              <p class="mb-3 text-white font-light laptop:text-lg tablet:text-base mobile:text-sm ">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions.Accelerate critical development work,
              eliminate toil, and deploy changes with ease, with a complete audit
              trail for every change.
              </p>
              <a
                href="#"
                class=" my-4 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                  ">
                Explore Now!
              </a>
            </div>
          </div>
  
          <div class="grid grid-cols-1 gap-6 my-12 laptop:grid-cols-2 bg-[#436850] rounded-[1.875rem] w-full mx-auto">
            <div class="p-5 ">
              <h2 class="laptop:text-2xl tablet:text-xl mobile:text-lg md:pb-6 font-bold  text-white">BROMO</h2>
              <p class="mb-3 text-white font-light laptop:text-lg tablet:text-base mobile:text-sm ">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions.Accelerate critical development work,
              eliminate toil, and deploy changes with ease, with a complete audit
              trail for every change.
              </p>
              <a
                href="#"
                class=" my-4 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                  ">
                Explore Now!
              </a>
            </div>
              <div>
              <img
                src="../assets/image/gambar-pemandangan-indonesia.jpg"
                alt=""
                class="w-full h-full object-cover  rounded-r-[1.875rem]" />
            </div>
          </div>
  
  
          <div class="grid grid-cols-1 gap-6 my-12 laptop:grid-cols-2 bg-[#436850] rounded-[1.875rem] w-full mx-auto">
            <div>
              <img
                src="../assets/image/gambar-pemandangan-indonesia.jpg"
                alt=""
                class="w-full h-full object-cover  rounded-l-[1.875rem]" />
            </div>
            <div class="p-5 ">
              <h2 class="laptop:text-2xl tablet:text-xl mobile:text-lg md:pb-6 font-bold  text-white">BROMO</h2>
              <p class="mb-3 text-white font-light laptop:text-lg tablet:text-base mobile:text-sm ">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions.Accelerate critical development work,
              eliminate toil, and deploy changes with ease, with a complete audit
              trail for every change.
              </p>
              <a
                href="#"
                class=" my-4 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                  ">
                Explore Now!
              </a>
            </div>
          </div>
  
          <div class="grid grid-cols-1 gap-6 my-12 laptop:grid-cols-2 bg-[#436850] rounded-[1.875rem] w-full mx-auto">
            <div class="p-5 ">
              <h2 class="laptop:text-2xl tablet:text-xl mobile:text-lg md:pb-6 font-bold  text-white">BROMO</h2>
              <p class="mb-3 text-white font-light laptop:text-lg tablet:text-base mobile:text-sm ">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions.Accelerate critical development work,
              eliminate toil, and deploy changes with ease, with a complete audit
              trail for every change.
              </p>
              <a
                href="#"
                class=" my-4 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                  ">
                Explore Now!
              </a>
            </div>
              <div>
              <img
                src="../assets/image/gambar-pemandangan-indonesia.jpg"
                alt=""
                class="w-full h-full object-cover  rounded-r-[1.875rem]" />
            </div>
          </div>
        </section>
      `;
  }

  fetchData() {
    const requestOptions = {
      method: "POST",
      redirect: "follow",
    };
    fetch(
      "https://comptour-be.vercel.app/api/tourist-attractions/get-all",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        const images = data.data.slice(0, 4).map((item) => item.image);
        const names = data.data.slice(0, 4).map((item) => item.name_place);
        const descriptions = data.data
          .slice(0, 4)
          .map((item) => item.description);

        const imgElements = this.shadowRoot.querySelectorAll("img");
        const nameElements = this.shadowRoot.querySelectorAll("h2");
        const descriptionElements = this.shadowRoot.querySelectorAll("p");

        imgElements.forEach((img, index) => {
          img.src = images[index];
          img.alt = names[index];
        });

        nameElements.forEach((name, index) => {
          name.textContent = names[index];
        });

        descriptionElements.forEach((description, index) => {
          description.textContent = descriptions[index];
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  }
}

customElements.define("content-item", contentLanding);
