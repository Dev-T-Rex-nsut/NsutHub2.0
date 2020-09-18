import React from "react"
import "./footer.css";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaPhone, FaMapMarker, FaEnvelope } from "react-icons/fa"


const Footer = () =>{
    return (
        <div className="moveRt">
          	    <footer class="footer-distributed">

                <div class="footer-left">

                    <h3>Company<span>logo</span></h3>

                    <p class="footer-links">
                        <a href="#">Home</a>
                        ·
                        <a href="#">Blog</a>
                        ·
                        <a href="#">About</a>
                        ·
                        <a href="#">Faq</a>
                        ·
                        <a href="#">Contact</a>
                    </p>

                    <p class="footer-company-name">Dev.T.Rex © 2020</p>
                </div>

                <div class="footer-center">

                    <div>
                        <FaMapMarker color="white"/><span> </span>
                        <p> <span>Azad Hind fauz Marg, Dwarka</span> New Delhi, India</p>
                    </div>

                    <div>
                        <FaPhone color="white"/><span> </span>
                        <p> 931320XXXX</p>
                    </div>

                    <div>
                        <FaEnvelope color="white"/><span> </span>
                        <p> <a href="mailto:support@company.com">dev.t.rex.nsut@gmail.com</a></p>
                    </div>

                </div>

                <div class="footer-right">

                    <p class="footer-company-about">
                        <span>About NsutHub</span>
                        A website to connect students and help each other. Lorem Ipsumlorem desk desk dep
                    </p>

                    <div class="footer-icons">

                        <a href="#"><FaFacebook></FaFacebook></a>
                        <a href="#"><FaTwitter></FaTwitter></a>
                        <a href="#"><FaLinkedin></FaLinkedin></a>
                        <a href="#"><FaGithub></FaGithub></a>

                    </div>

                </div>

            </footer>
        </div>
    );
}

export default Footer