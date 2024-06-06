class contentLanding extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.fetchData();
    }

    render() {
    this.shadowRoot.innerHTML = `
    <style>@import "/src/styles/tailwindcss-output/tailwind.css";</style>

    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 bg-orange-600/65 mt-20 mb-20 rounded-3xl">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                <img
                alt=""
                src="../assets/image/BROMO.jpg"
                class="absolute inset-0 h-full w-full object-cover"
                />
            </div>

            <div class="lg:py-24">
                <h2 class="text-3xl font-bold sm:text-4xl">BROMO</h2>

                <p class="mt-4 text-gray-50"></p>

                <a
                href="#"
                class="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                Explore Now!
                </a>
            </div>
        </div>
    </div>

    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 bg-orange-600/65 mt-20 mb-20 rounded-3xl">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-first lg:h-full">
                <img
                alt=""
                src="../assets/image/BROMO.jpg"
                class="absolute inset-0 h-full w-full object-cover"
                />
            </div>

            <div class="lg:py-24">
                <h2 class="text-3xl font-bold sm:text-4xl">BROMO</h2>

                <p class="mt-4 text-gray-50"></p>

                <a
                href="#"
                class="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                Explore Now!
                </a>
            </div>
        </div>
    </div>

    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 bg-orange-600/65 mt-20 mb-20 rounded-3xl">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                <img
                alt=""
                src="../assets/image/BROMO.jpg"
                class="absolute inset-0 h-full w-full object-cover"
                />
            </div>

            <div class="lg:py-24">
                <h2 class="text-3xl font-bold sm:text-4xl">BROMO</h2>

                <p class="mt-4 text-gray-50"></p>

                <a
                href="#"
                class="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                Explore Now!
                </a>
            </div>
        </div>
    </div>

    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 bg-orange-600/65 mt-20 mb-20 rounded-3xl">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-first lg:h-full">
                <img
                alt=""
                src="../assets/image/BROMO.jpg"
                class="absolute inset-0 h-full w-full object-cover"
                />
            </div>

            <div class="lg:py-24">
                <h2 class="text-3xl font-bold sm:text-4xl">BROMO</h2>

                <p class="mt-4 text-gray-50"></p>

                <a
                href="#"
                class="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                Explore Now!
                </a>
            </div>
        </div>
    </div>
    `;
    }
    
    fetchData() {
        const requestOptions = {
            method: "POST",
            redirect: "follow"
        };
        fetch('https://comptour-be.vercel.app/api/tourist-attractions/get-all', requestOptions)
        .then(response => response.json())
        .then(data => {
            const images = data.data.slice(0, 4).map(item => item.image);
            const names = data.data.slice(0, 4).map(item => item.name_place);
            const descriptions = data.data.slice(0, 4).map(item => item.description);

            const imgElements = this.shadowRoot.querySelectorAll('img');
            const nameElements = this.shadowRoot.querySelectorAll('h2');
            const descriptionElements = this.shadowRoot.querySelectorAll('p');

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
        .catch(error => console.error('Error fetching data:', error));
    }
}


customElements.define("content-item", contentLanding);