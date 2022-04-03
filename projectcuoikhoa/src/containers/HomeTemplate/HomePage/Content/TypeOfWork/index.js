import React from "react";
function TypeOfWork() {
  return (
    <>
      <div className=" navbar-light bg-light ">
        <div className="container ">
          <nav className="navbar navbar-expand-xl d-flex justify-content-around">
            <ul className=" navbar-nav ">
              <li className="nav-item">
                <p className="nav-link text-secondary">
                  Trusted by:
                </p>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://twitter.com/fiverr">
                Twitter
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.facebook.com/Fiverr/">
                  Facebook
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.linkedin.com/company/fiverr-com">
                  Linked In
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.pinterest.com/fiverr/">
                  Pinterest
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.instagram.com/fiverr/">
                  Instagram
                </a>
              </li>
             
            </ul>
          </nav>
        </div>
      </div>
      <div className="tok">
        <h4>Popular Professional Services</h4>
        <div className="tok__content">
          <div className="tok_item">
            <div className="tok__title">
              <p>Build your brand</p>
              <h5>Logo Design</h5>
            </div>
            <img src="../img/design.jpg" alt="pic_1" />
          </div>
          <div className="tok_item">
            <div className="tok__title">
              <p>Customize your site</p>
              <h5>Wordpress</h5>
            </div>
            <img src="../img/wordpress.jpg" alt="pic_1" />
          </div>
          <div className="tok_item">
            <div className="tok__title">
              <p>Share your message</p>
              <h5>Voice Over</h5>
            </div>
            <img src="../img/voice.jpg" alt="pic_1" />
          </div>
          <div className="tok_item">
            <div className="tok__title">
              <p>Engage your audience</p>
              <h5>Video Explainer</h5>
            </div>
            <img src="../img/video.jpg" alt="pic_1" />
          </div>
          <div className="tok_item">
            <div className="tok__title">
              <p>Reach more customers</p>
              <h5>Social Media</h5>
            </div>
            <img src="../img/social.jpg" alt="pic_1" />
          </div>
        </div>
      </div>
    </>
  );
}
export default TypeOfWork;
