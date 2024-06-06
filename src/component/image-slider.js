
class Slider extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render(); 
        this.initSlider();
        this.fetchData();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <div class="slider-container">
            <div class="slider-content">

                <div class="slider-single">
                    <img class="slider-single-image" src="https://picsum.photos/id/973/200/300" alt="1" />
                        <div class="slider-single-title">
                            <h2></h2>                           
                            <p></p>
                        </div>
                </div>
        
                <div class="slider-single">
                    <img class="slider-single-image" src="https://picsum.photos/id/974/200/300" alt="2" />
                    <div class="slider-single-title">                         
                        <h2></h2>
                        <p></p>
                    </div>
                </div>
        
                <div class="slider-single">
                    <img class="slider-single-image" src="https://picsum.photos/id/975/200/300" alt="3" />
                    <div class="slider-single-title">                         
                        <h2></h2>
                        <p></p>
                    </div>
                </div>
        
        
                <div class="slider-single">
                    <img class="slider-single-image" src="https://picsum.photos/id/976/200/300" alt="4" />
                    <div class="slider-single-title">                         
                        <h2></h2>
                        <p></p>
                    </div>
                </div>
        
        
                <div class="slider-single">
                    <img class="slider-single-image" src="https://picsum.photos/id/977/200/300" alt="5" />
                    <div class="slider-single-title">                         
                        <h2></h2>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>

        <style>
            .slider-container {
                position: relative;
                margin: 0 auto;
                margin-bottom: 28%;
                width: 800px;
                height: 600px;
            }
            .slider-container .slider-content {
                position: relative;
                left: 50%;
                top: 50%;
                width: 70%;
                height: 60%;
                transform: translate(-50%, -50%);
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
            .slider-container .slider-single-image {
                position: relative;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.2);
                transition: 500ms cubic-bezier(0.17, 0.67, 0.55, 1.43);
                transform: scale(0);
                opacity: 0;
            }
            .slider-container .slider-single-download:hover, .slider-container .slider-single {
                outline: none;
                text-decoration: none;
            }
            .slider-container .slider-single-title {
                display: block;
                float: left;
                padding: 20px;
                height: 285px;
                overflow: hidden;
                font-size: 20px;
                font-weight: 400;
                color: #000000;
                transition: 500ms cubic-bezier(0.17, 0.67, 0.55, 1.43);
                opacity: 0;
            }
            .slider-single-title h2 {
                text-align: center;
                font-weight: bold;
                font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            }
            .slider-single-title p {
                text-align: justify;
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
                right: 85%;
                top: 50%;
                color: #ffffff;
                transform: translateY(-50%);
                padding: 20px 15px;
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
                left: 85%;
                top: 50%;
                color: #ffffff;
                transform: translateY(-50%);
                padding: 20px 15px;
                border-top: 2px solid #fdc84b;
                border-right: 2px solid #fdc84b;
                border-bottom: 2px solid #fdc84b;
                border-left: 2px solid #fdc84b;
                margin-left: -2px;
                cursor: pointer;
            }
            .slider-container .not-visible {
                display: none !important;
            }/*# sourceMappingURL=style.css.map */

            /* Mobile landscape */
            @media only screen and (max-width: 768px) {
              .slider-container {
                width: 100%;
                height: 300px;
              }
              .slider-content {
                width: 90%;
                height: 250px;
              }
              .slider-single {
                width: 100%;
                height: 250px;
                overflow: hidden;
              }
              .slider-single-image {
                width: 100%;
                height: 150px;
              }
              .slider-single-title {
                font-size: 16px;
              }
              .slider-single-likes {
                font-size: 14px;
              }
              .slider-left, .slider-right {
                padding: 10px 10px;
                font-size: 14px;
              }
            }
            
            /* Mobile portrait */
            @media only screen and (max-width: 480px) {
              .slider-container {
                width: 100%;
                height: 200px;
              }
              .slider-content {
                width: 90%;
                height: 180px;
              }
              .slider-single {
                width: 100%;
                height: 180px;
                overflow: hidden;
              }
              .slider-single-image {
                width: 100%;
                height: 100px;
              }
              .slider-single-title {
                font-size: 14px;
              }
              .slider-single-likes {
                font-size: 12px;
              }
              .slider-left, .slider-right {
                padding: 5px 5px;
                font-size: 12px;
              }
            }
        </style>
        `;
    }
    
    initSlider() {
    const noArrows = false;

    const container = this.shadowRoot.querySelector('.slider-container');
    var slide = this.shadowRoot.querySelectorAll('.slider-single');
    var slideTotal = slide.length - 1;
    var slideCurrent = -1;

    function initArrows() {
        if (noArrows) {
            return;
        }
        const leftArrow = document.createElement('a')
        const iLeft = document.createElement('i');
        iLeft.classList.add('fa')
        iLeft.classList.add('fa-arrow-left')
        leftArrow.classList.add('slider-left')
        leftArrow.appendChild(iLeft)
        leftArrow.addEventListener('click', () => {
            slideLeft();
        })
        const rightArrow = document.createElement('a')
        const iRight = document.createElement('i');
        iRight.classList.add('fa')
        iRight.classList.add('fa-arrow-right')
        rightArrow.classList.add('slider-right')
        rightArrow.appendChild(iRight)
        rightArrow.addEventListener('click', () => {
            slideRight();
        })
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
            if (thisSlide.classList.contains('preactivede')) {
                thisSlide.classList.remove('preactivede');
                thisSlide.classList.remove('preactive');
                thisSlide.classList.remove('active');
                thisSlide.classList.remove('proactive');
                thisSlide.classList.add('proactivede');
            }
            if (thisSlide.classList.contains('preactive')) {
                thisSlide.classList.remove('preactive');
                thisSlide.classList.remove('active');
                thisSlide.classList.remove('proactive');
                thisSlide.classList.remove('proactivede');
                thisSlide.classList.add('preactivede');
            }
        });
                preactiveSlide.classList.remove('preactivede');
                preactiveSlide.classList.remove('active');
                preactiveSlide.classList.remove('proactive');
                preactiveSlide.classList.remove('proactivede');
                preactiveSlide.classList.add('preactive');

                activeSlide.classList.remove('preactivede');
                activeSlide.classList.remove('preactive');
                activeSlide.classList.remove('proactive');
                activeSlide.classList.remove('proactivede');
                activeSlide.classList.add('active');

                proactiveSlide.classList.remove('preactivede');
                proactiveSlide.classList.remove('preactive');
                proactiveSlide.classList.remove('active');
                proactiveSlide.classList.remove('proactivede');
                proactiveSlide.classList.add('proactive');
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
                    if (thisSlide.classList.contains('proactive')) {
                        thisSlide.classList.remove('preactivede');
                        thisSlide.classList.remove('preactive');
                        thisSlide.classList.remove('active');
                        thisSlide.classList.remove('proactive');
                        thisSlide.classList.add('proactivede');
                    }
                    if (thisSlide.classList.contains('proactivede')) {
                        thisSlide.classList.remove('preactive');
                        thisSlide.classList.remove('active');
                        thisSlide.classList.remove('proactive');
                        thisSlide.classList.remove('proactivede');
                        thisSlide.classList.add('preactivede');
                    }
                });

                preactiveSlide.classList.remove('preactivede');
                preactiveSlide.classList.remove('active');
                preactiveSlide.classList.remove('proactive');
                preactiveSlide.classList.remove('proactivede');
                preactiveSlide.classList.add('preactive');

                activeSlide.classList.remove('preactivede');
                activeSlide.classList.remove('preactive');
                activeSlide.classList.remove('proactive');
                activeSlide.classList.remove('proactivede');
                activeSlide.classList.add('active');

                proactiveSlide.classList.remove('preactivede');
                proactiveSlide.classList.remove('preactive');
                proactiveSlide.classList.remove('active');
                proactiveSlide.classList.remove('proactivede');
                proactiveSlide.classList.add('proactive');
            }

            function goToIndexSlide(index) {
                const sliding = (slideCurrent > index) ? () => slideRight() : () => slideLeft();
                while (slideCurrent !== index) {
                    sliding();
                }
            }

            slideInitial();
    }

    fetchData() {
        const requestOptions = {
            method: "POST",
            redirect: "follow"
        };

        fetch('https://comptour-be.vercel.app/api/tourist-attractions/get-all', requestOptions)
        .then(response => response.json())
        .then(data => {
            const images = data.data.slice(0, 5).map(item => item.image);
            const names = data.data.slice(0, 5).map(item => item.name_place);
            const descriptions = data.data.slice(0, 5).map(item => item.description);

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

customElements.define("slider-image", Slider);