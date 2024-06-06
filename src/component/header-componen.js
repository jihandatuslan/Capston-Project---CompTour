class headerComponen extends HTMLElement {
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
        <nav
        class="py-2 bg-[#054027] md:flex md:items-center md:content-center md:justify-between">
        <div>
          <span class="cursor-pointer">
            <img
              class="inline h-16 md:w-[21.3125rem]"
              src="/src/assets/logoT.png"
              alt="logo" />
          </span>
        </div>

        <div class="w-full">
          <form class="">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >Search</label
            >
            <div class="relative">
              <div
                class="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
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

        <ul class="md:flex md:items-center md:px-6">
          <li class="">
            <a
              href="#"
              class="p-4 text-sm text-white font-bold hover:text-[#FA2D00] active active:text-[#FA2D00] focus:text-[#FA2D00]"
              aria-current="page"
              >Home</a
            >
          </li>
          <li class="">
            <a
              href="#"
              class="p-4 text-sm text-white font-bold hover:text-[#FA2D00] active active:text-[#FA2D00] focus:text-[#FA2D00]"
              aria-current="page"
              >Blog</a
            >
          </li>
          <li class="">
            <a
              href="#"
              class="p-4 text-sm text-white font-bold hover:text-[#FA2D00] active active:text-[#FA2D00] focus:text-[#FA2D00]"
              aria-current="page"
              >About</a
            >
          </li>
        </ul>
      </nav>
      `;
  }
}

customElements.define("nav-bar", headerComponen);
