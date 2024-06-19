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
        <div class=" laptop:mx-28 tablet:mx-10 mobile:mx-5 h-full m-auto laptop:my-20 tablet:my-10  text-center ">
                <h1 class=" font-poppins laptop:text-3xl tablet:text-2xl mobile:text-xl font-bold text-[#054027]">Comp<span class="text-[#FA2D00]">Tour</span></h1><br>
                
                <div class="content-wrapper">
                     <p class=" text-center laptop:text-xl tablet:text-base mobile:text-sm">
                     CompTour adalah aplikasi yang berfungsi sebagai rekomendasi tempat pariwisata yang ada di indonesia dan memberikan edukasi mengenai budaya lokal daerah tempat tersebut.Indonesia Mempunyai kekayaan alam dan budaya yang luar biasa untuk menarik para wisatawan untuk berkunjung.Oleh karena itu Untuk membantu wisatawan untuk mendapatkan rekomendasi tempat yang harus dikunjungi, CompTour hadir bertujuan untuk merekomendasikan tempat wisata menarik di Indonesia berdasarkan lokasi wisata, objek wisata, dan informasi budaya lokal.Dengan adanya aplikasi ini, kami berharap dapat memberikan manfaat yang besar bagi wisatawan dalam merencanakan dan menikmati perjalanannya ke Indonesia dan dapat membantu mempromosikan keindahan alam dan budaya Indonesia serta meningkatkan kepuasan pengguna dan pengalaman wisata.
                    </p>
                </div>
                <div class="flex justify-center sm:justify-center md:justify-end">
                    <a href="/src/assets/Buku-Panduan-CompTour.pdf" download="Buku-Panduan-CompTour.pdf" class="mt-8 inline-block rounded-xl bg-[#054027] px-8 py-2 text-sm font-medium 
                    text-white transition hover:bg-[#054027ec] focus:outline-none focus:ring focus:ring-[#FA2D00]">
                        Buku Panduan
                    </a>
                </div>
            </div>
        `;
  }
}

customElements.define("content-about", ContentAbout);
