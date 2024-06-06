class Footer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
<style>
     @import "/src/styles/tailwindcss-output/tailwind.css";
</style>
<footer class="bg-[#043420] shadow ">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center ">© 2024 <a href="" class="hover:underline">CompTour</a>. All Rights Reserved.
    </span>
    <a href="" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
        <img src="../assets/logo.png" class="h-16" alt="CompTour Logo" /></a>
    </div>
</footer>

    `;
  }
}

customElements.define("footer-bar", Footer);
