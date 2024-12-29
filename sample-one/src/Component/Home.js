import React from 'react';
import NavMenu from './NavMenu';
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Carousel from 'react-bootstrap/Carousel';
import images05 from '../images/images05.png';
import images07 from '../images/images07.jpg';
import images08 from '../images/images08.jpg';
import Card from 'react-bootstrap/Card';
import images11 from '../images/images11.png';
import images15 from '../images/images15.png';
import images16 from '../images/images16.png';
import images17 from '../images/images17.png';
import images18 from '../images/images18.png';
import images19 from '../images/images19.png';
import images20 from '../images/images20.png';
import images21 from '../images/images21.png';
import images22 from '../images/images22.png';
import Button from 'react-bootstrap/Button';
import { FaHeart } from "react-icons/fa";
import images23 from '../images/images23.png';
import images24 from '../images/images24.jpg';
import images25 from '../images/images25.jpg';
import images26 from '../images/images26.jpg';
import images27 from '../images/images27.jpg';
import images28 from '../images/images28.jpg';
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

function Home() {
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
        <div className='slider'>
          <Carousel>
      <Carousel.Item>
      <img src={images05} alt="Logo" />
        <Carousel.Caption>
          <h5>chair</h5>
          <h5>get all</h5>
          <h2>the good stuff</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={images07} alt="Logo" />
        <Carousel.Caption>
        <h5>chair</h5>
          <h5>get all</h5>
          <h2>the good stuff</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={images08} alt="Logo" />
        <Carousel.Caption>
          <h5>chair</h5>
          <h5>get all</h5>
          <h2>the good stuff</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
        <div className='main'>
            <h2>New Arrivals</h2>
            <p>Check out our new furniture collection! Cozy sofa, fancy chair, wooden casket, and many more. The new collection brings an informal elegance to your home.</p>
            <div className='inner-container'>
              <div className='row'>
              <Card>
                <Card.Img variant="top" src={images11} />
                  <Card.Body>
                    <Card.Title>Lighting</Card.Title>
                      <Card.Text>
                      Awesome Lamp
                      </Card.Text>
                      <Card.Text>
                        $40
                      </Card.Text>

                    <div className='left-icons'>
                      <ul>
                       <li><a href="#"><FaHeart /></a></li>
                       <li><a href="#"><FaShoppingCart /></a></li>
                       <li><a href="#"><FaSearch /></a></li>

                      </ul>
                    </div>
       
                  </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={images15} />
                  <Card.Body>
                    <Card.Title>Decoration</Card.Title>
                      <Card.Text>
                         Cool Flower
                      </Card.Text>
                      <Card.Text>
                        $20
                      </Card.Text>

                    <div className='left-icons'>
                      <ul>
                       <li><a href="#"><FaHeart /></a></li>
                       <li><a href="#"><FaShoppingCart /></a></li>
                       <li><a href="#"><FaSearch /></a></li>

                      </ul>
                    </div>
       
                  </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={images16} />
                  <Card.Body>
                    <Card.Title>Furniture</Card.Title>
                      <Card.Text>
                      Cozy Sofa
                      </Card.Text>
                      <Card.Text>
                        $150
                      </Card.Text>

                    <div className='left-icons'>
                      <ul>
                       <li><a href="#"><FaHeart /></a></li>
                       <li><a href="#"><FaShoppingCart /></a></li>
                       <li><a href="#"><FaSearch /></a></li>

                      </ul>
                    </div>
       
                  </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={images17} />
                  <Card.Body>
                    <Card.Title>Lighting</Card.Title>
                      <Card.Text>
                      Awesome Candle
                      </Card.Text>
                      <Card.Text>
                        $20
                      </Card.Text>

                    <div className='left-icons'>
                      <ul>
                       <li><a href="#"><FaHeart /></a></li>
                       <li><a href="#"><FaShoppingCart /></a></li>
                       <li><a href="#"><FaSearch /></a></li>

                      </ul>
                    </div>
       
                  </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={images18} />
                  <Card.Body>
                    <Card.Title>Furniture</Card.Title>
                      <Card.Text>
                        Fancy Chair
                      </Card.Text>
                      <Card.Text>
                        $70
                      </Card.Text>

                    <div className='left-icons'>
                      <ul>
                       <li><a href="#"><FaHeart /></a></li>
                       <li><a href="#"><FaShoppingCart /></a></li>
                       <li><a href="#"><FaSearch /></a></li>

                      </ul>
                    </div>
       
                  </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={images19} />
                  <Card.Body>
                    <Card.Title>Decoration</Card.Title>
                      <Card.Text>
                         Chinese TeaPot
                      </Card.Text>
                      <Card.Text>
                        $50
                      </Card.Text>

                    <div className='left-icons'>
                      <ul>
                       <li><a href="#"><FaHeart /></a></li>
                       <li><a href="#"><FaShoppingCart /></a></li>
                       <li><a href="#"><FaSearch /></a></li>

                      </ul>
                    </div>
       
                  </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={images20} />
                  <Card.Body>
                    <Card.Title>Bedding</Card.Title>
                      <Card.Text>
                        Soft pillow
                      </Card.Text>
                      <Card.Text>
                        $30
                      </Card.Text>

                    <div className='left-icons'>
                      <ul>
                       <li><a href="#"><FaHeart /></a></li>
                       <li><a href="#"><FaShoppingCart /></a></li>
                       <li><a href="#"><FaSearch /></a></li>

                      </ul>
                    </div>
       
                  </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={images21} />
                  <Card.Body>
                    <Card.Title>Decoration</Card.Title>
                      <Card.Text>
                      Wooden casket
                      </Card.Text>
                      <Card.Text>
                        $20
                      </Card.Text>

                    <div className='left-icons'>
                      <ul>
                       <li><a href="#"><FaHeart /></a></li>
                       <li><a href="#"><FaShoppingCart /></a></li>
                       <li><a href="#"><FaSearch /></a></li>

                      </ul>
                    </div>
       
                  </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={images22} />
                  <Card.Body>
                    <Card.Title>Furniture</Card.Title>
                      <Card.Text>
                      Awesome Armchair
                      </Card.Text>
                      <Card.Text>
                        $90
                      </Card.Text>

                    <div className='left-icons'>
                      <ul>
                       <li><a href="#"><FaHeart /></a></li>
                       <li><a href="#"><FaShoppingCart /></a></li>
                       <li><a href="#"><FaSearch /></a></li>

                      </ul>
                    </div>
       
                  </Card.Body>
                </Card>
              
              </div>
            </div>
            <div className='button'>
            <button btn='#'>View More</button>
            </div>
        </div>
        <div className='section-one'>
            <div className='section-one-left'>
              <h5>news and inspiration</h5>
              <h2>new arrivals</h2>
              <div className='dummy'></div>
              <div className='row-nex-section'>
              <div className='section-one-content'>
               <p>0</p>
               <span>days</span>

</div>
<div className='section-one-content'>
               <p>0</p>
               <span>Hours</span>

</div>
<div className='section-one-content'>
               <p>0</p>
               <span>mins</span>

</div>
<div className='section-one-content'>
               <p>0</p>
               <span>secs</span>

</div>
              </div>
             <h3><del>$140,56</del>&nbsp; $ 70</h3>
             
            </div>
            <div className='section-one-right'>
              <img src={images23}></img>

            </div>
        </div>

        <div className='section-two'>
            <div className='top'>
              <h2>Top Selling Products</h2>
              <p>These furniture sets will become an essential part of an ecosystem of elements in your home. Your domestic space will easily embrace these tables, chairs, and bookshelves.</p>
            </div>
            <div className='bottom-container'>
            <div className='bottom'>
            <div className='bottom-left'>
              <img src={images24}></img>
              <div className='bottom-left-child'>
                <h3>All New</h3>
                <a href="#">SPRING THINGS</a>
                <div className='dummy1'></div>
                <p>save upto 30%</p>
              </div>
            </div>
            <div className='bottom-center'>
              <div className='bottom-center1'>
                <img src={images25}></img>
                <div className='bottom-center1-child'>
                  <p>Online exclusive</p>
                  <a href="#">shop now</a>
                </div>
              </div>
              <div className='bottom-center2'>
                <img src={images26}></img>
                <div className='bottom-center2-child'>
                  <button btn='#'>Spring Sale</button>
                </div>
              </div>
            </div>
            <div className='bottom-right'>
            <div className='bottom-right1'>
                <img src={images27}></img>
                <div className='bottom-right1-child'>
                    <button>70% Sale</button>
                </div>
              </div>
              <div className='bottom-right2'>
                <img src={images28}></img>
                <div className='bottom-right2-child'>
                  <p>Collections</p>
                  <h2>SUMMER</h2>
                </div>
              </div>

            </div>
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

export default Home
