import React from "react";
function TypeOfWork() {
  return (
    <>
      <div className=" navbar-light bg-light ">
        <div className="container ">
          <nav class="navbar navbar-expand-xl d-flex justify-content-around">
            <ul class=" navbar-nav ">
              <li class="nav-item">
                <a class="nav-link" href="">
                  Trusted by:
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="">
                  Facebook
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="">
                  Google
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="">
                  Netflix
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="">
                  P&G
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="">
                  Paypal
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
