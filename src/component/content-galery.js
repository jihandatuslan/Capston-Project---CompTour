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
        <section class="h-auto mx-auto mt-12 max-w-7xl">
        <div class="p-3">
            <h1 class="text-3xl font-bold tracking-wide text-left text-[#FA2D00]">Budaya <span class="text-[#043420]">Local</span></h1>
            <h1 class="text-3xl font-bold tracking-wide text-left text-[#043420]">Nama provinsi/daerah wisata</h1>
        </div><br><br>
        </section> 
        <div class="">
            <div class="grid grid-cols-3 md:grid-cols-3 gap-4 mx-20">
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="../../assets/image/prambanan.jpg" alt="">
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="../../assets/image/gudeg.jpg" alt="">
                    </div>
                </div>
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="../../assets/image/tarian.jpg" alt="">
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="../../assets/image/wayang kulit.jpg" alt="">
                    </div>
                </div>
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="../../assets/image/prambanan.jpg" alt="">
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="../../assets/image/gudeg.jpg" alt="">
                    </div>
                </div>
            </div>
        </div><br><br>
        <p class="mx-20 sm:mx-0 text-center font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ad quae deleniti sequi alias, nam eius reiciendis, numquam cumque facere aspernatur velit similiqu.Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ad quae deleniti sequi alias, nam eius reiciendis, numquam cumque facere aspernatur velit similiqu.Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ad quae deleniti sequi alias, nam eius reiciendis, numquam cumque facere aspernatur velit similiqu.</p>
    `;
    }
}

customElements.define("content-galery", contentLanding);
