import React from "react";

import { BsWhatsapp, BsInstagram } from "react-icons/bs";

import styles from './FooterComponent.module.css'

export default function FooterComponent(props) {

    return (
        <footer>
            <div className={`${styles.footerContainer}`}>
                <div className="footer-info">
                    <h3>Contact Information</h3>
                    <p>123 Main Street, City</p>
                    <p>Phone: (123) 456-7890</p>
                    <p>Email: info@example.com</p>
                </div>
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-social">
                    <h3>Follow Us</h3>
                    <ul>
                        <li><a href="#"><BsWhatsapp /></a></li>
                        <li><a href="#"><BsInstagram/></a></li>
                        
                    </ul>
                </div>
            </div>
            <div className={`${styles.footerContainer}`}>   
                <p>&copy; 2023 Your Company. All rights reserved.</p>
            </div>
            {/* Image by <a href="https://www.freepik.com/free-photo/variety-dark-shapes-background_9464829.htm#query=background&position=8&from_view=search&track=robertav1_2_sidr">Freepik</a>
          Image by <a href="https://www.freepik.com/free-photo/wavy-copy-space-background-close-up_9465188.htm#query=background&position=22&from_view=search&track=robertav1_2_sidr">Freepik</a>
          Image by <a href="https://www.freepik.com/free-photo/layers-black-torn-paper_11068923.htm#page=2&query=background&position=30&from_view=search&track=robertav1_2_sidr">Freepik</a> */}
        </footer>
    )
}