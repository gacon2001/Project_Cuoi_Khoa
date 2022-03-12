import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { actDetailJobsApi } from "./modules/actions";
import { actBookingJobsApi } from "../ListJobsPage/modules/actions";

export default function DetailJobPage() {
  const dispatch = useDispatch();
  const { _id } = useParams();
  const detailJobs = useSelector((state) => state.detailJobsReducer.detailJobs);
  const [state, setState] = useState({
    image: "",
    name: "",
    rating: "",
    price: "",
  });

  useEffect(() => {
    if (detailJobs !== null) setState(detailJobs);
  }, [detailJobs]);

  useEffect(() => {
    dispatch(actDetailJobsApi(_id));
  }, []);

  // const handleOnChange = (event) => {
  //   const { name, value } = event.target;
  //   setState({
  //     ...state,
  //     [name]: value,
  //   });
  // };

  return (
    <div>
      <h3>DetailJobPage</h3>

      <div>
        <Link>{state.type.name}</Link>
        <Link>{state.subType.name}</Link>
      </div>
      <h3>{state.name}</h3>
      <div>
        <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/9e96d2e75ba1b33abf8ad43a72b0bae0-1511318608456/5e9a9c82-dd2b-4ec7-85f5-bb9ff0f4d9fb.jpg" />
        {/* tên seller */}
        <p>
          Top Rated Seller
          {state.rating}
        </p>
        <hr />
        {state.image}

        {/* basic, standard, premium */}
      </div>

      <hr />
      <div>
        <h4>Choose your plan</h4>
        <button
          className="btn btn-warning"
          onClick={() => dispatch(actBookingJobsApi(state._id))}
        >
          Booking
        </button>
      </div>

      <button>Contact Seller</button>

      <div>
        <h3>About This Gig</h3>
        <p>
          A logo is a customer's first impression of your brand, and it should
          be unforgettable.
          <br>Check out our portfolio: ei8htz.tumblr.com</br>
          <br>
            Ei8htz is a team of professional designers experienced in creating
            hand-crafted outstanding logo designs. We’ve helped thousands of
            small to big companies around the world making attractive logos that
            stand out from the crowd.{" "}
          </br>
          <br>
            We’ll help you create the best logo that can take your business to
            the next level. We guarantee outstanding service for your project.
          </br>
          <br>
            <h4>What makes us strong!</h4>
            <ul>
              <li>Leading Fiverr logo design service</li>
              <li>Affordable cost</li>
              <li>Top-notch design and high quality work</li>
              <li>Custom design - made from scratch</li>
              <li>Commit to finish project until satisfaction</li>
              <li>24/7 support</li>
            </ul>
          </br>
          <h4>
            For the same quality as shown in our portfolio please select PREMIUM
            package.
          </h4>
        </p>
      </div>
    </div>
  );
}
