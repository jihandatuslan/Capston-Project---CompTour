class Slider extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.initSlider();
    this.fetchData();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
       @import "/src/styles/tailwindcss-output/tailwind.css";
      </style>
      <div class="slider-container ">
    <div class="slider-content left-[50%] laptop:top-[35%] tablet:top-[20%] mobile:top-[20%] relative laptop:h-[50%] tablet:h-[30%] mobile:h-[30%] w-[90%]">
      <div class="slider-single ">
        <img
          class="slider-single-image relative left-0 top-0 w-[50%] mx-auto h-auto shadow-lg transition-transform duration-[500ms] transform scale-0 opacity-0 rounded-3xl"
          src="https://picsum.photos/id/973/200/300"
          alt="1" />
        <div class="slider-single-title laptop:mx-auto tablet:mx-auto mobile:mx-10">
                <div class="grid items-center grid-cols-1 gap-6 sm:grid-cols-2 ">
                  <div class="mb-3  laptop:text-end tablet:text-end mobile:text-start font-poppins ">
                    <h1 class="text-[#043420] laptop:text-lg tablet:text-base mobile:text-base font-bold " id="regency">Kabupaten</h1>
                    <h1 class="text-[#FA2D00] laptop:text-2xl tablet:text-xl mobile:text-lg font-bold " id="TouristAttraction">Nama tempat wisata</h1>
                    <h1 class="text-[#043420] laptop:text-lg tablet:text-base mobile:text-base font-bold " id="province">Nama Profinsi</h1>
                  </div>
                  <p class="pl-6 mb-3 laptop:text-lg tablet:text-base mobile:text-sm font-semibold border-l-4 border-black border-dotted ">
                    Deliver great service experiences fast - without the complexity of
                    traditional ITSM solutions.Accelerate critical development work,
                    eliminate toil, and deploy changes with ease, with a complete audit
                    trail for every change.
                  </p>
                </div>
            </div>
      </div>
  
        <div class="slider-single ">
          <img
            class="slider-single-image relative left-0 top-0 w-[50%] mx-auto h-auto shadow-lg transition-transform duration-[500ms] transform scale-0 opacity-0 rounded-3xl"
            src="https://picsum.photos/id/974/200/300"
            alt="2" />
               <div class="slider-single-title laptop:mx-auto tablet:mx-auto mobile:mx-10">
                <div class="grid items-center grid-cols-1 gap-6 sm:grid-cols-2 ">
                  <div class="mb-3  laptop:text-end tablet:text-end mobile:text-start font-poppins">
                    <h1 class="text-[#043420] laptop:text-lg tablet:text-base mobile:text-base font-bold " id="regency">Kabupaten</h1>
                    <h1 class="text-[#FA2D00] laptop:text-2xl tablet:text-xl mobile:text-lg font-bold " id="TouristAttraction">Nama tempat wisata</h1>
                    <h1 class="text-[#043420] laptop:text-lg tablet:text-base mobile:text-base font-bold " id="province">Nama Profinsi</h1>
                  </div>
                  <p class="pl-6 mb-3 laptop:text-lg tablet:text-base mobile:text-sm font-semibold border-l-4 border-black border-dotted">
                    Deliver great service experiences fast - without the complexity of
                    traditional ITSM solutions.Accelerate critical development work,
                    eliminate toil, and deploy changes with ease, with a complete audit
                    trail for every change.
                  </p>
                </div>
              </div>
        </div>
  
        <div class="slider-single">
          <img
            class="slider-single-image relative left-0 top-0 w-[50%] mx-auto h-auto shadow-lg transition-transform duration-[500ms] transform scale-0 opacity-0 rounded-3xl"
            src="https://picsum.photos/id/975/200/300"
            alt="3" />
          <div class="slider-single-title laptop:mx-auto tablet:mx-auto mobile:mx-10">
                <div class="grid items-center grid-cols-1 gap-6 sm:grid-cols-2 ">
                  <div class="mb-3  laptop:text-end tablet:text-end mobile:text-start font-poppins">
                    <h1 class="text-[#043420] laptop:text-lg tablet:text-base mobile:text-base font-bold " id="regency">Kabupaten</h1>
                    <h1 class="text-[#FA2D00] laptop:text-2xl tablet:text-xl mobile:text-lg font-bold " id="TouristAttraction">Nama tempat wisata</h1>
                    <h1 class="text-[#043420] laptop:text-lg tablet:text-base mobile:text-base font-bold " id="province">Nama Profinsi</h1>
                  </div>
                  <p class="pl-6 mb-3 laptop:text-lg tablet:text-base mobile:text-sm font-semibold border-l-4 border-black border-dotted">
                    Deliver great service experiences fast - without the complexity of
                    traditional ITSM solutions.Accelerate critical development work,
                    eliminate toil, and deploy changes with ease, with a complete audit
                    trail for every change.
                  </p>
                </div>
              </div>
        </div>
      </div>
    </div>
  </div>
  <style>
    .slider-container {
      position: relative;
      margin: 0 auto;
      margin-bottom: 40vh;
      width: 100%;
      height: 600px;
    }
    .slider-container .slider-content {
      transform: translate(-50%, -50%);
    }
      .slider-single-image {
      width: 50%;
      height: 100%;
      object-fit: cover; /* Maintain aspect ratio and cover the container */
    }
    .slider-container .slider-single {
      position: absolute;
      z-index: 0;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      transition: z-index 0ms 250ms;
    }
  
    .slider-container .slider-single-download:hover,
    .slider-container .slider-single {
      outline: none;
      text-decoration: none;
    }
    .slider-container .slider-single-title {
      display: grid;
      padding: 20px;
      height: 285px;
      font-size: 20px;
      font-weight: 400;
      color: #000000;
      transition: 500ms cubic-bezier(0.17, 0.67, 0.55, 1.43);
      opacity: 0;
    }
    .slider-single-title h2 {
      text-align: center;
      font-weight: bold;
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    }
    .slider-single-title p {
      text-align: left;
    }
    .slider-container .slider-single {
      outline: none;
      text-decoration: none;
    }
    .slider-container .slider-single.preactivede .slider-single-image {
      transform: translateX(-50%) scale(0);
    }
    .slider-container .slider-single.preactive {
      z-index: 1;
    }
    .slider-container .slider-single.preactive .slider-single-image {
      opacity: 0.3;
      transform: translateX(-25%) scale(0.8);
    }
    .slider-container .slider-single.preactive .slider-single-title {
      transform: translateX(-150px);
    }
    .slider-container .slider-single.proactive {
      z-index: 1;
    }
    .slider-container .slider-single.proactive .slider-single-image {
      opacity: 0.3;
      transform: translateX(25%) scale(0.8);
    }
    .slider-container .slider-single.proactive .slider-single-title {
      transform: translateX(150px);
    }
    .slider-container .slider-single.proactivede .slider-single-image {
      transform: translateX(50%) scale(0);
    }
    .slider-container .slider-single.active {
      z-index: 2;
    }
    .slider-container .slider-single.active .slider-single-image {
      opacity: 1;
      transform: translateX(0%) scale(1);
    }
    .slider-container .slider-single.active .slider-single-title {
      opacity: 1;
      transition-delay: 200ms;
      transform: translateX(0px);
    }
    .slider-container .slider-left {
      position: absolute;
      z-index: 3;
      display: block;
      right: 68%;
      color: #ffffff;
      transform: translateY(-50%);
      border-top: 2px solid #fdc84b;
      border-right: 2px solid #fdc84b;
      border-bottom: 2px solid #fdc84b;
      border-left: 2px solid #fdc84b;
      margin-right: -2px;
      cursor: pointer;
    }
    .slider-container .slider-right {
      position: absolute;
      z-index: 3;
      display: block;
      left: 68%;
      color: #ffffff;
      transform: translateY(-50%);
      border-top: 2px solid #fdc84b;
      border-right: 2px solid #fdc84b;
      border-bottom: 2px solid #fdc84b;
      border-left: 2px solid #fdc84b;
      margin-left: -2px;
      cursor: pointer;
    }
    .slider-container .not-visible {
      display: none !important;
    } /*# sourceMappingURL=style.css.map */
 `;
  }

  initSlider() {
    const noArrows = false;

    const container = this.shadowRoot.querySelector(".slider-container");
    var slide = this.shadowRoot.querySelectorAll(".slider-single");
    var slideTotal = slide.length - 1;
    var slideCurrent = -1;

    function initArrows() {
      if (noArrows) {
        return;
      }
      const leftArrow = document.createElement("a");
      const iLeft = document.createElement("i");
      iLeft.classList.add("fa");
      iLeft.classList.add("fa-arrow-left");
      leftArrow.classList.add(
        "slider-left",
        "laptop:top-[35%]",
        "tablet:top-[20%]",
        "mobile:top-[20%]",
        "laptop:py-[20px]",
        "tablet:py-[15px]",
        "mobile:py-[15px]",
        "laptop:px-[15px]",
        "tablet:px-[10px]",
        "mobile:px-[10px]"
      );
      leftArrow.appendChild(iLeft);
      leftArrow.addEventListener("click", () => {
        slideLeft();
      });
      const rightArrow = document.createElement("a");
      const iRight = document.createElement("i");
      iRight.classList.add("fa");
      iRight.classList.add("fa-arrow-right");
      rightArrow.classList.add(
        "slider-right",
        "laptop:top-[35%]",
        "tablet:top-[20%]",
        "mobile:top-[20%]",
        "laptop:py-[20px]",
        "tablet:py-[15px]",
        "mobile:py-[15px]",
        "laptop:px-[15px]",
        "tablet:px-[10px]",
        "mobile:px-[10px]"
      );
      rightArrow.appendChild(iRight);
      rightArrow.addEventListener("click", () => {
        slideRight();
      });
      container.appendChild(leftArrow);
      container.appendChild(rightArrow);
    }

    function slideInitial() {
      initArrows();
      setTimeout(function () {
        slideRight();
      }, 500);
    }

    function slideRight() {
      if (slideCurrent < slideTotal) {
        slideCurrent++;
      } else {
        slideCurrent = 0;
      }
      if (slideCurrent > 0) {
        var preactiveSlide = slide[slideCurrent - 1];
      } else {
        var preactiveSlide = slide[slideTotal];
      }
      var activeSlide = slide[slideCurrent];
      if (slideCurrent < slideTotal) {
        var proactiveSlide = slide[slideCurrent + 1];
      } else {
        var proactiveSlide = slide[0];
      }

      slide.forEach((elem) => {
        var thisSlide = elem;
        if (thisSlide.classList.contains("preactivede")) {
          thisSlide.classList.remove("preactivede");
          thisSlide.classList.remove("preactive");
          thisSlide.classList.remove("active");
          thisSlide.classList.remove("proactive");
          thisSlide.classList.add("proactivede");
        }
        if (thisSlide.classList.contains("preactive")) {
          thisSlide.classList.remove("preactive");
          thisSlide.classList.remove("active");
          thisSlide.classList.remove("proactive");
          thisSlide.classList.remove("proactivede");
          thisSlide.classList.add("preactivede");
        }
      });
      preactiveSlide.classList.remove("preactivede");
      preactiveSlide.classList.remove("active");
      preactiveSlide.classList.remove("proactive");
      preactiveSlide.classList.remove("proactivede");
      preactiveSlide.classList.add("preactive");

      activeSlide.classList.remove("preactivede");
      activeSlide.classList.remove("preactive");
      activeSlide.classList.remove("proactive");
      activeSlide.classList.remove("proactivede");
      activeSlide.classList.add("active");

      proactiveSlide.classList.remove("preactivede");
      proactiveSlide.classList.remove("preactive");
      proactiveSlide.classList.remove("active");
      proactiveSlide.classList.remove("proactivede");
      proactiveSlide.classList.add("proactive");
    }

    function slideLeft() {
      if (slideCurrent > 0) {
        slideCurrent--;
      } else {
        slideCurrent = slideTotal;
      }

      if (slideCurrent < slideTotal) {
        var proactiveSlide = slide[slideCurrent + 1];
      } else {
        var proactiveSlide = slide[0];
      }
      var activeSlide = slide[slideCurrent];
      if (slideCurrent > 0) {
        var preactiveSlide = slide[slideCurrent - 1];
      } else {
        var preactiveSlide = slide[slideTotal];
      }
      slide.forEach((elem) => {
        var thisSlide = elem;
        if (thisSlide.classList.contains("proactive")) {
          thisSlide.classList.remove("preactivede");
          thisSlide.classList.remove("preactive");
          thisSlide.classList.remove("active");
          thisSlide.classList.remove("proactive");
          thisSlide.classList.add("proactivede");
        }
        if (thisSlide.classList.contains("proactivede")) {
          thisSlide.classList.remove("preactive");
          thisSlide.classList.remove("active");
          thisSlide.classList.remove("proactive");
          thisSlide.classList.remove("proactivede");
          thisSlide.classList.add("preactivede");
        }
      });

      preactiveSlide.classList.remove("preactivede");
      preactiveSlide.classList.remove("active");
      preactiveSlide.classList.remove("proactive");
      preactiveSlide.classList.remove("proactivede");
      preactiveSlide.classList.add("preactive");

      activeSlide.classList.remove("preactivede");
      activeSlide.classList.remove("preactive");
      activeSlide.classList.remove("proactive");
      activeSlide.classList.remove("proactivede");
      activeSlide.classList.add("active");

      proactiveSlide.classList.remove("preactivede");
      proactiveSlide.classList.remove("preactive");
      proactiveSlide.classList.remove("active");
      proactiveSlide.classList.remove("proactivede");
      proactiveSlide.classList.add("proactive");
    }

    function goToIndexSlide(index) {
      const sliding =
        slideCurrent > index ? () => slideRight() : () => slideLeft();
      while (slideCurrent !== index) {
        sliding();
      }
    }

    slideInitial();
  }

  fetchData() {
    const requestOptions = {
      method: "POST",
      redirect: "follow",
    };

    fetch(
      "https://comptour-be.vercel.app/api/tourist-attractions/get-recommended",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        const images = data.recommendations
          .slice(0, 3)
          .map((item) => item.image);
        const names = data.recommendations
          .slice(0, 3)
          .map((item) => item.name_place);
        const descriptions = data.recommendations
          .slice(0, 3)
          .map((item) => item.description);
        const regency = data.recommendations
          .slice(0, 3)
          .map((item) => item.regency);
        const province = data.recommendations
          .slice(0, 3)
          .map((item) => item.province);

        const imgElements = this.shadowRoot.querySelectorAll("img");
        const nameElements =
          this.shadowRoot.querySelectorAll("#TouristAttraction");
        const descriptionElements = this.shadowRoot.querySelectorAll("p");
        const nameRegency = this.shadowRoot.querySelectorAll("#regency");
        const naemProvince = this.shadowRoot.querySelectorAll("#province");

        naemProvince.forEach((name, index) => {
          name.textContent = province[index];
        });

        nameRegency.forEach((name, index) => {
          name.textContent = regency[index];
        });

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

customElements.define("slider-image", Slider);
