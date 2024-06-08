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
        <h1 class=" pt-10 text-3xl text-center font-bold text-[#043420]">kolom <span class="text-[#FA2D00]">komentar</span></h1><br>
        <form>
            <div class="bg-[#436850] rounded-[1.875rem] mx-20 p-10">
                 <div class="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label for="name" class="block mb-2 text-sm font-medium text-white ">Nama Lengkap:</label>
                        <input type="text" id="full name" class="bg-gray-50 border-4 border-solid focus:outline-none border-green-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Isi nama anda disini" required />
                    </div>
                    <div>
                        <label for="phone" class="block mb-2 text-sm font-medium text-white ">email / no hanphone:</label>
                        <input type="tel" id="phone" class="bg-gray-50 border-4 border-solid focus:outline-none border-green-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Isi nomor telp atau email" required />
                    </div>
                 </div>
                <div>
                     <label for="message" class="block mb-2 text-sm font-medium text-white">Berikan Komentar :</label>
                     <textarea id="message" class="bg-gray-50 border-4 border-solid border-green-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Write your thoughts here..."></textarea>
                </div> 
            </div> <br>
            <div class="mx-20 text-end">
                <button type="submit" class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>  
            </div>                         
        </form><br><br> 
         </section>
         <section class="bg-white">
            <h1 class="mx-20 pt-10 text-3xl text-start font-bold text-[#043420]">Komentar :</h1><br>
            <div class="bg-[#436850] rounded-[1.875rem] mx-20 p-10">
                <h1 class="text-white">nama :<h1>
                <p class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Otio ad quae deleniti sequi alias, nam eius reiciendis, numquam cumque facere aspernatur velit similiqu.</p>
            </div><br>
            <div class="bg-[#436850] rounded-[1.875rem] mx-20 p-10">
                <h1 class="text-white">nama :<h1>
                <p class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Otio ad quae deleniti sequi alias, nam eius reiciendis, numquam cumque facere aspernatur velit similiqu.</p>
            </div><br>
            <div class="bg-[#436850] rounded-[1.875rem] mx-20 p-10">
                <h1 class="text-white">nama :<h1>
                <p class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Otio ad quae deleniti sequi alias, nam eius reiciendis, numquam cumque facere aspernatur velit similiqu.</p>
            </div><br>
            <div class="bg-[#436850] rounded-[1.875rem] mx-20 p-10">
                <h1 class="text-white">nama :<h1>
                <p class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Otio ad quae deleniti sequi alias, nam eius reiciendis, numquam cumque facere aspernatur velit similiqu.</p>
            </div><br>
         </section>
         `;
  }
}

customElements.define("content-comment", contentLanding);
