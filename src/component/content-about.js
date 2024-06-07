class ContentAbout extends HTMLElement {
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
        <div class="w-3/4 h-80 m-auto mt-20 p-5 text-center ">
                <h1 class="text-3xl font-bold">Comp<span class="text-[#FA2D00]">Tour</span></h1>
                
                <div class="overflow-hidden h-40">
                    <p class="mt-5 text-center text-xl">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Iste laudantium nihil itaque ab ea distinctio facilis amet earum quaerat repudiandae aut quibusdam eligendi, 
                        nam alias beatae cupiditate, dignissimos dolor necessitatibus!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Iste laudantium nihil itaque ab ea distinctio facilis amet earum quaerat repudiandae aut quibusdam eligendi, 
                        nam alias beatae cupiditate, dignissimos dolor necessitatibus!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Iste laudantium nihil itaque ab ea distinctio facilis amet earum quaerat repudiandae aut quibusdam eligendi, 
                        nam alias beatae cupiditate, dignissimos dolor necessitatibus!
                    </p>
                </div>
                <div class="flex justify-center sm:justify-center md:justify-end">
                    <a href="#" class="mt-8 inline-block rounded-xl bg-[#054027] px-8 py-2 text-sm font-medium 
                    text-white transition hover:bg-[#054027ec] focus:outline-none focus:ring focus:ring-yellow-400">
                        Book Guide
                    </a>
                </div>
            </div>
        `;
    }
}

customElements.define("content-about", ContentAbout);