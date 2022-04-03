import React from "react";
import { FaCheck } from "react-icons/fa";

export default function Freelance() {
  return (
    <>
      <div className="freelance">
        <div className="freelance__content">
          <div className="freelance__left">
            <div className="freelance__title">
              <h3>A whole world of freelance tanlent at your fingertips</h3>
            </div>
            <div className="freelance__target">
              <h5>
                <FaCheck />
                <span> The best for every budget</span>
              </h5>
              <p>
                Find high-quality services at every price point. No hourly
                rates. Just porject-based pricing.
              </p>
            </div>
            <div className="freelance__target">
              <h5>
                <FaCheck />
                <span> Quality work done quickly</span>
              </h5>
              <p>
                Find high-freelance to begin working on your project within
                minutes.
              </p>
            </div>
            <div className="freelance__target">
              <h5>
                <FaCheck />
                <span> Project payments, every time</span>
              </h5>
              <p>
                Always konw what you'll pay upfont. Your payment isn't released
                until you approve the work.
              </p>
            </div>
            <div className="freelance__target">
              <h5>
                <FaCheck />
                <span> 24/7 support</span>
              </h5>
              <p>
                Question? Our round-the-clock support team is avaible to help
                anytime, anywhere.
              </p>
            </div>
          </div>
          <div className="freelance__right">
            <img src="../img/freelance.jpg" alt="pic_1" />
          </div>
        </div>
      </div>
    </>
  );
}
