import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import NavbarJobs from "../_components/NavbarJobs";
import { actFetchListSubTypeJobsApi } from "./modules/actions";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { actDeleteJobsApi } from "../ListJobsPage/modules/actions";
import { actBookingJobsApi } from "../ListJobsPage/modules/actions";

export default function ListSubTypeJobs() {
    const dispatch = useDispatch();
    const listSubTypeJobs = useSelector((state)=> state.fetchListSubTypeJobsReducer.listSubTypeJobs);
    const {IDsubType} = useParams();
    const history = useHistory();

    const renderListSubTypeJobs = () => {
        return listSubTypeJobs?.map((subType)=>{
            return (
                <div className="card text-left">
                <img className="card-img-top" src={subType.image} alt={subType.name} />
                <div className="card-body">
                  <Link to="/detail-job">{subType.name}</Link>
                    <div>{subType.rating}</div>
                  <div>{subType.price}</div>
                  {/* <div>{subType.usersBooking}</div> */}
                  {/* <div>{subType.proServices}</div> */}
                </div>
      
                {/* <Link to="/edit-jobs" className="btn btn-success">Edit</Link> */}
                <button className="btn btn-success" onClick={()=> history.push(`/edit-jobs/${subType._id}`)}>Edit</button>
            <button className="btn btn-danger" onClick={()=> dispatch(actDeleteJobsApi(subType._id))}>Delete</button>
            <button className="btn btn-warning" onClick={()=> dispatch(actBookingJobsApi(subType._id))}>Booking</button>
              </div>
            )
        })
    }

    useEffect(()=>{
        dispatch(actFetchListSubTypeJobsApi(IDsubType));
    }, []);

  return (
    <div>
        <NavbarJobs/>
      <h3>ListSubTypeJobs</h3>

      <div className="container">
          <div className="row">
              {renderListSubTypeJobs()}
          </div>
      </div>
    </div>
  );
}
