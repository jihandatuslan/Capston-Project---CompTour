class HeaderLanding extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.setupToggle();
  }

  render() {
    this.shadowRoot.innerHTML = `
          <header>
              <div class="header-left">
                  <div class="logo"><img src="./src/LogoT.png" alt="Logo"></div>
                  <button class="toggle-btn">&#9776;</button>
              </div>
              <div class="header-left">
                  <input type="text" class="search-input" placeholder="Search...">
              </div>
              <nav>
                  <ul>
                      <li><a href="#">Home</a></li>
                      <li><a href="#">Blog</a></li>
                      <li><a href="#">About</a></li>
                  </ul>
              </nav>
          </header>
          <style>
              :host {
                  display: block;
              }
              header {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  padding: 10px 20px;
                  background-color: transparent;
                  color: #fff;
              }
              .header-left {
                  display: flex;
                  align-items: center;
              }
              .logo img {
                  width: 17rem;
                  height: 5rem;
                  flex-shrink: 0;
              }
              .search-input {
                margin-left: 20px;
                text-align: center;
                font-family: Poppins;
                font-size: 1.5rem;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                padding: 8px;
                border-radius: 4px;
                border: none;
                width: 45rem;
                height: 2rem;
                flex-shrink: 0;
                
            }
              nav ul {
                  list-style: none;
                  display: flex;
                  gap: 20px;
              }
              nav a {
                  text-decoration: none;
                  color: #fff;
                  text-align: center;
                  font-family: Poppins;
                  font-size: 1.5rem;
                  font-style: normal;
                  font-weight: 600;
                  line-height: normal;
                  letter-spacing: 0.105rem;
                  padding: 12px 16px 8px 16px;
                  position: relative;
                  transition: color 0.3s, background-color 0.3s;
              }
              nav a::after {
                content: '';
                position: absolute;
                width: 20%;
                height: 4px;
                left: 50%;
                bottom: -5px;
                background-color: #fff;
                transform: translateX(-50%) scaleX(0);
                transition: transform 0.3s ease;
            }
            nav a:hover::after {
                transform: translateX(-50%) scaleX(1);
            }
              .toggle-btn {
                  display: none;
                  cursor: pointer;
                  background: none;
                  border: none;
                  color: #fff;
                  font-size: 2.2em;
                  padding: 16px 16px 16px 16px;
              }
              
              /* Responsive CSS */
              @media screen and (max-width: 768px) {
                  .header-left {
                      width: 100%;
                      justify-content: space-between;
                      align-items: center; 
                  }
                  .search-input {
                    margin-left: 0px;
                    font-size: 1.5rem;
                    width: 10rem;
                    height: 2rem;
                    padding : 5px  6px;
                    
                }
                  nav {
                      display: none;
                      flex-direction: column;
                      align-items: center;
                      width: 100%;
                      background-color: #333;
                      position: absolute;
                      top: 60px; /* Adjust based on your header height */
                      left: 0;
                  }
                  nav.active {
                      display: flex;
                      margin-top:3vh;
                  }
                  nav ul {
                      flex-direction: column;
                      gap: 10px;
                  }
                  nav a {
                    font-size: 1.4em;
                    padding: 16px 16px 16px 16px;
                  }
                  nav a::after {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 4px;
                    left: 50%;
                    bottom: 7px;
                    background-color: #fff;
                    transform: translateX(-50%) scaleX(0);
                    transition: transform 0.3s ease;
                }
                nav a:hover::after {
                    transform: translateX(-50%) scaleX(1);
                }

                  .toggle-btn {
                      display: block;
                  }
              }
          </style>
      `;
  }

  setupToggle() {
    const nav = this.shadowRoot.querySelector("nav");
    const toggleBtn = this.shadowRoot.querySelector(".toggle-btn");
    toggleBtn.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }
}

customElements.define("header-transparan", HeaderLanding);
