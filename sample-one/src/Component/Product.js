import React from 'react';
import NavMenu from './NavMenu';
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import images42 from '../images/images42.jpg';
import images43 from '../images/images43.jpg';
import images44 from '../images/images44.png';
import images45 from '../images/images45.jpg';
import images46 from '../images/images46.jpg';
import images47 from '../images/images47.jpg';
import Card from 'react-bootstrap/Card';
import images11 from '../images/images11.png';
import images15 from '../images/images15.png';
import images16 from '../images/images16.png';
import images17 from '../images/images17.png';
import images29 from '../images/images29.png';
import images30 from '../images/images30.png';
import images31 from '../images/images31.png';
import images32 from '../images/images32.jpg';
import images33 from '../images/images33.jpg';
import images34 from '../images/images34.jpg';
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


function Product() {

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

      <div className='section-4'>
        <img src={images42}></img>
        <div className='section-4-content'>
          <h2>NEW ARRIVALS</h2>
        </div>
      </div>
      <div className='section-5'>
        <div className='section-5-top'>
          <div className='section-5-top-left'>
            <img src={images43}></img>
            <div className='section-5-top-left-content'>
              <button btn="#">SPRING SALE</button>
            </div>
          </div>
          <div className='section-5-top-right'>
            <img src={images44}></img>
            <div className='section-5-top-right-content'>
              <p>Accessories</p>
              <h2>For Living Room</h2>
              <a href='#'>View collections</a>
            </div>
          </div>
        </div>
        <div className='section-5-bottom'>
          <div className='section-5-bottom-left'>
            <img src={images45}></img>
            <div className='section-5-bottom-left-content'>
              <a href='#'>upto 60% off</a>
              <h2>PILLOWS</h2>
            </div>

          </div>
          <div className='section-5-bottom-center'>
            <img src={images46}></img>
            <div className='section-5-bottom-center-content'>
              <p>Accessories</p>
              <h2>For Living Room</h2>
              <a href='#'>View collections</a>
            </div>
          </div>
          <div className='section-5-bottom-right'>
            <img src={images47}></img>
            <div className='section-5-bottom-right-content'>
              <h2>BED LINEN</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='section-6'>
        <h2>You may also like:</h2>
        <div className='section-6-content'>
          <Card>
          <Card.Img variant="top" src={images11} />
            <Card.Body>
                    <Card.Title>Category</Card.Title>
                      <Card.Text>
                        Awesome Product
                      </Card.Text>
                      <Card.Text>
                        $70
                      </Card.Text>
            </Card.Body>
          </Card>
          <Card>
          <Card.Img variant="top" src={images15} />
            <Card.Body>
                    <Card.Title>Category</Card.Title>
                      <Card.Text>
                        Awesome Product
                      </Card.Text>
                      <Card.Text>
                        $70
                      </Card.Text>
            </Card.Body>
          </Card>
          <Card>
          <Card.Img variant="top" src={images16} />
            <Card.Body>
                    <Card.Title>Category</Card.Title>
                      <Card.Text>
                        Awesome Product
                      </Card.Text>
                      <Card.Text>
                        $70
                      </Card.Text>
            </Card.Body>
          </Card>
          <Card>
          <Card.Img variant="top" src={images17} />
            <Card.Body>
                    <Card.Title>Category</Card.Title>
                      <Card.Text>
                        Awesome Product
                      </Card.Text>
                      <Card.Text>
                        $70
                      </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className='bottom-footer'>
              <div className='bottom-footer-left'>
                <img src={images29}></img>
                <h2>free shipping</h2>
                <p>On all orders of $ 150</p>
              </div>
              <div className='bottom-footer-center'>
                <img src={images30}></img>
                <h2>24/7 support</h2>
                <p>Get help when you need it</p>
              </div>
              <div className='bottom-footer-right'>
                <img src={images31}></img>
                <h2>100% money back</h2>
                <p>30 day money back guarante</p>
              </div>
      </div>
      <div className='section-3'>
            <div className='section-3-content'>
              <h2>From Our Blogs</h2>
              <p>Design your home interior story! Here are the latest trends, tips, and design tricks to help you out.</p>
              <div className='section-3-content-left'>
                <img src={images32}></img>
                <p>March 12, 2020</p>
                <h2>What is Shabby Chic?</h2>
                <a href='#'>Read More</a>
              </div>
              <div className='section-3-content-center'>
                <img src={images33}></img>
                <p>March 12, 2020</p>
                <h2>Best Examples of Maximalism</h2>
                <a href='#'>Read More</a>
              </div>
              <div className='section-3-content-right'>
                <img src={images34}></img>
                <p>March 12, 2020</p>
                <h2>What is Lorem Ipsum?</h2>
                <a href='#'>Read More</a>
              </div>
              <button type="btn">VIEW MORE</button>
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
            </div>

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

export default Product
