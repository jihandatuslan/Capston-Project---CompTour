    class Footer extends HTMLElement {
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
                <footer>
                    <div class="container">
                        <div class="row">
                            <div class="footer-col">
                                <h4>Resources</h4>
                                <ul>
                                    <li><a href="">Flowbite</a></li>
                                    <li><a href="">TailwindCSS</a></li>
                                </ul>
                            </div>
            
                            <!-- 2nd Column -->
                            <div class="footer-col">
                                <h4>Follow Us</h4>
                                <ul>
                                    <li><a href="">Github</a></li>
                                </ul>
                            </div>
            
                            <!-- 3rd Column -->
                            <div class="footer-col">
                                <h4>About</h4>
                                <ul>
                                    <li><a href="">Team</a></li>
                                </ul>
                            </div>
            
                            <!-- 3th Column -->
            
                            <div class="footer-col">
                                <img src="/src/assets/logo.png" alt="">
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col">
                                <p>&#169; 2024 CompTour. All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </footer>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Poppins&family=Ubuntu&display=swap');
                    *{
                        padding: 0;
                        margin: 0;
                        box-sizing: border-box;
                        font-family: 'Poppins', sans-serif;
                    }
                    footer .container{
                        background-color: #054027;
                    }
                    
                    .row{
                        display: flex;
                        justify-content: space-between;
                        padding: 40px 100px;
                    }
                    .footer-col ul{
                        list-style: none;
                    }
                    
                    .footer-col h4{
                        color: white;
                        margin-bottom: 25px;
                        font-size: 22px;
                        position: relative;
                        font-family: 'Ubuntu', sans-serif;
                    }
                    
                    .footer-col h4::before{
                        content: '';
                        width: 70px;
                        height: 2px;
                        position: absolute;
                        background-color: rgb(233, 165, 40);
                        bottom: -10px;
                    }
                    
                    .footer-col ul li{
                        padding: 10px 0;
                    }
                    .footer-col ul li a{
                        color: white;
                        text-decoration: none;
                        font-size: 16px;
                        opacity: 0.7;
                        transition: 0.5s;
                    }
                    .footer-col ul li a:hover{
                        opacity: 1;
                    }
                    .footer-col img {
                        width: 10rem;
                    }
                    .col p{
                        color: white;
                    }
                    .row hr{
                        opacity: 0.7;
                    }
                    
                    .row .socialIcons i{
                        display: inline-block;
                        color: white;
                        font-size: 20px;
                        margin: 0 15px;
                        transition: 0.5s;
                    }
                    
                    .row .socialIcons i:hover{
                        color: #e91e64;
                    }
                    
                    @media (max-width: 600px){
                        footer .row{
                            flex-direction: column;
                            padding: 20px 30px;
                        }
                    
                        footer .footer-col ul{
                            margin-left: 20px;
                            margin-bottom: 20px;
                        }
                        .footer-col input{
                            width: 100%;
                        }
                    }
                </style>
            `;
        }
    }
    
customElements.define("footer-bar", Footer);