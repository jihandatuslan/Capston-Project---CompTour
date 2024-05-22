class contentLanding extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
    this.shadowRoot.innerHTML = `
    <style>@import "/src/public/css/style.css";</style>

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

                <p class="mt-4 text-gray-50">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
                eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
                quidem quam repellat.
                </p>

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

                <p class="mt-4 text-gray-50">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
                eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
                quidem quam repellat.
                </p>

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
    
}


customElements.define("content-item", contentLanding);