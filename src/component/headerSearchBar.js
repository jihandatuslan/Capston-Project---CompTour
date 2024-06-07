class headerSearchBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
    this.shadowRoot.innerHTML = `
        <style>@import "/src/styles/tailwindcss-output/tailwind.css";</style>
            <header>
                <div class="bg-[#054027] mx-auto h-16  w-full px-4 sm:px-6 lg:px-8">
                    <div class="flex h-16 items-center justify-between">
                        <div class="flex-1 md:flex md:items-center md:gap-12">
                            <a class="block" href="#">
                                <img src="/src/assets/logo.png" alt="Comp Tour" class="bg-center bg-no-repeat bg-cover w-32 md">
                            </a>
                        </div>

                        <div class="flex justify-center w-2/3">
                            <form class="">
                                <label
                                for="default-search"
                                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                                >Search</label
                                >
                                <div class="relative md:w-80 lg:w-98">
                                    <div class="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                                        <svg
                                        class="w-4 h-4 text-gray-500 dark:text-gray-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 20">
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <input
                                        type="search"
                                        id="default-search"
                                        class="block w-full p-3 mx-auto text-sm text-gray-900 bg-white border border-gray-300 rounded-lg ps-10 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Search...."
                                        required />
                                </div>
                            </form>
                        </div>
            
                        <div class="md:flex md:items-center md:gap-12">
                            <nav aria-label="Global" class="hidden md:block">
                                <ul class="flex items-center gap-10 text-sm ">
                                <li>
                                    <a class="text-xl font-bold text-white transition hover:text-[#FA2D00] focus:text-[#FA2D00]" href="#"> Home </a>
                                </li>
                    
                                <li>
                                    <a class="text-xl font-bold text-white transition hover:text-[#FA2D00] focus:text-[#FA2D00]" href="#"> Blog </a>
                                </li>
                    
                                <li>
                                    <a class="text-xl font-bold text-white transition hover:text-[#FA2D00] focus:text-[#FA2D00]" href="#"> About </a>
                                </li>
                                </ul>
                            </nav>
            
                            <div class="block md:hidden">
                                <button class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        `;
    }
}

customElements.define("header-search", headerSearchBar);