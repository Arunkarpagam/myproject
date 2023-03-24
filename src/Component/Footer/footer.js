import React from "react";
// import Carousel from 'react-bootstrap/Carousel';
import './footer.css';
function Footer(){
    return(<>
    {/* footer */}


 <footer>
        <div class="footer_main">

            <div class="footer_tag">
                <h2>Location</h2>
                <p id="pp">Sri Lanka</p>
                <p id="pp">USA</p>
                <p id="pp">India</p>
                <p id="pp">Japan</p>
                <p id="pp">Italy</p>
            </div>

            <div class="footer_tag">
                <h2>Quick Link</h2>
                <p id="pp">Home</p>
                <p id="pp">About</p>
                <p id="pp">Menu</p>
                <p id="pp">Gallary</p>
                <p id="pp">Order</p>
            </div>

            <div class="footer_tag">
                <h2>Contact</h2>
                <p id="pp">+94 12 3456 789</p>
                <p id="pp">+94 25 5568456</p>
                <p id="pp">johndeo123@gmail.com</p>
                <p id="pp">foodshop123@gmail.com</p>
            </div>

            <div class="footer_tag">
                <h2>Our Service</h2>
                <p id="pp">Fast Delivery</p>
                <p id="pp">Easy Payments</p>
                <p id="pp">24 x 7 Service</p>
            </div>
            <div class="footer_tag">
                <h2>Follows</h2>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin-in"></i>
            </div>
        </div>
        <p class="end">Design by<span><i class="fa-solid fa-face-grin"></i> Designed By Arun</span></p>
    </footer>
    </>
    )

}
export default Footer