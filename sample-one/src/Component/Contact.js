import React from 'react';
import NavMenu from './NavMenu';
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import images48 from '../images/images48.png';
import images35 from '../images/images35.jpg';
import images36 from '../images/images36.jpg';
import images37 from '../images/images37.jpg';
import images38 from '../images/images38.jpg';
import images39 from '../images/images39.jpg';
import images40 from '../images/images40.jpg';
import images41 from '../images/images41.png';
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


function Contact() {
  const listItem = ['What We Do', 'Available Services', 'Latest Posts', 'FAQs'];
  const listItem1= ['Sign In','View Cart','Order Tracking','Help & Support'];
  const listItem2 = ['Help & Contact Us','Returns & Refunds','Online Stores','Terms & Conditions'];

  return (
    <div>
      <div className='top-header'>
            <div className='logo'>
                <h2>Flatlogic</h2>
            </div>
            <div className='nav-menu'>
            <NavMenu />   
            </div>
          <div className='social-icons'>
            <ul>
              <li><a href="#"><FaSearch /></a></li>
              <li><a href="#"><FaUser /></a></li>
              <li><a href="#"><FaShoppingCart /></a></li>
            </ul>
          </div>
      </div>
      <div className="contact-section7">
        <div className="contact-section7-left">
          <h5>Contact Us</h5>
          <br/>
          <p>If you have any questions please fill out the form</p>
          <form className="form">
            <label><h4>Name</h4>
             <input type="text" />
            </label>
            <br/>
            <label className="row2"><h4>Email</h4>
             <input type="text" /> 
            </label> 
            &nbsp;   &nbsp;
            <label className="row3"><h4>Phone</h4>
             <input type="text" />
            </label>
            <br/>
            <br/>
            <label className='row4'><h4>Your Message</h4>
             <textarea/>
            </label>
            <button btn='#'>SEND MESSAGE</button>
          </form>
        </div>
        <div className="contact-sction7-right">
          <img src={images48}></img>
        </div>
      </div>
      <div className='section-3-content-bottom'>
                <h2>Follow us on Instagram</h2>
                <img src={images35}></img>
                <img src={images36}></img>
                <img src={images37}></img>
                <img src={images38}></img>
                <img src={images39}></img>
                <img src={images40}></img>
                <img src={images41}></img>
      </div>
      <div className='footer'>
            <div className='footer-top'>
              <div className='footer-top-left'>
                <h2>Many desktop publishing</h2>
                <p>Do you want to receive exclusive email offers? Subscribe to our newsletter! You will receive a unique promo code which gives you a 20% discount on all our products in 10 minutes.Enter your email</p>
              </div>
              <div className='footer-top-right'>
                <form>
                  <input type='#' placeholder='Enter Your Email'></input>
                </form>
                <button btn='#'>Subscribe</button>
              </div>
              <div className='footer-bottom'>
              <div className='footer-bottom-left'>
                <h2>Flatlogic.</h2>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                <div className='icons'>
                  <ul>
                       <li><a href="#"><FaFacebook /></a></li>
                       <li><a href="#"><FaGoogle /></a></li>
                       <li><a href="#"><FaLinkedinIn /></a></li>
                       <li><a href="#"><FaTwitter /></a></li>
                  </ul>
                </div>
              </div>
              <div className='footer-bottom-right'>
                <div className='list1'>
                  <h2>COMPANY</h2>
                  {
                               listItem.map((item, index) => (
                                <div key={index}>{item}</div>
                              )
                               )

                  }

                
                </div>
                <div className='list2'>
                  <h2>MY ACCOUNT</h2>
                  {
                               listItem1.map((item, index) => (
                                <div key={index}>{item}</div>
                              )
                               )

                  }
                </div>
                <div className='list3'>
                  <h2>CUSTOMER SERVICE</h2>
                  {
                               listItem2.map((item, index) => (
                                <div key={index}>{item}</div>
                              )
                               )

                  }
                </div>
              </div>
              </div>
            </div>
      </div>
    </div>
  )
}

export default Contact
