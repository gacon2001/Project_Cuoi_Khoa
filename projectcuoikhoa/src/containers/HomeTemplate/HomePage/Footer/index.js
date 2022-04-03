import React from "react";
import { FaTwitter, FaFacebookSquare, FaLinkedin,FaPinterest,FaInstagramSquare } from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer__content">
          <div className="footer__categories">
            <p>Categories</p>
            <ul className="categories__list">
              <li>Graphics & Design</li>
              <li>Digitial Marketing</li>
              <li>Writting & Translation</li>
              <li>Video & Animation</li>
              <li>Music & Audio</li>
              <li>Programming & Tech</li>
              <li>Data</li>
              <li>Business</li>
              <li>Lifestyle</li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div className="footer__categories">
            <p>About</p>
            <ul className="categories__list">
              <li>Careers</li>
              <li>Press & News</li>
              <li>Partnerships</li>
              <li>Privacy Policy</li>
              <li>Terms of Services</li>
              <li>Intellectual Property Claims</li>
              <li>Investor Relations</li>
            </ul>
          </div>
          <div className="footer__categories">
            <p>Support</p>
            <ul className="categories__list">
              <li>Help & Support</li>
              <li>Trust & Safety</li>
              <li>Selling on Fiverr</li>
              <li>Buying on Fiverr</li>
            </ul>
          </div>
          <div className="footer__categories">
            <p>Community</p>
            <ul className="categories__list">
              <li>Events</li>
              <li>Blog</li>
              <li>Forum</li>
              <li>Community</li>
              <li>Podcast</li>
              <li>Affilliates</li>
              <li>Invite a Friend</li>
              <li>Become a Seller</li>
              <li>Fiverr Elevate</li>
              <li>Exclusive Benefits</li>
            </ul>
          </div>
          <div className="footer__categories">
            <p>More From Fiverr</p>
            <ul className="categories__list">
              <li>Fiverr Business</li>
              <li>Fiver Pro</li>
              <li>Fiver Studio</li>
              <li>Fiver Logo Maker</li>
              <li>Fiver Guides</li>
              <li>Get Inspired</li>
              <li>ClearVoice</li>
              <li>AND CO</li>
              <li>Learn</li>
            </ul>
          </div>
        </div>
        <div className="footer__copyright">
          <hr style={{width:"70%",margin:"auto",padding:"10px"}}/>
          <div className="copyright__content">
            <div className="copyright__logo">
              <h3>
                fiverr <small> &#174;</small>
              </h3>
              <p>&#169; Fiverr International Ltd. 2021</p>
            </div>
            <div className="copyright__contact">
           <div className="copyright__item">
                <FaTwitter />
           </div>
              <div className="copyright__item">
                <FaFacebookSquare />
              </div>
             <div className="copyright__item">
                <FaLinkedin />
             </div>
           <div className="copyright__item">
                <FaPinterest/>
           </div>
             <div className="copyright__item">
                <FaInstagramSquare/>
             </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
