import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { actFetchListSubTypeJobsApi } from "./modules/actions";

export default function ListSubTypeJobs() {
    const dispatch = useDispatch();
    const listSubTypeJobs = useSelector((state)=> state.fetchListSubTypeJobsReducer.listSubTypeJobs);
    const {IDsubType} = useParams();

    const renderListSubTypeJobs = () => {
        return listSubTypeJobs?.map((subType)=>{
            return (
                //!!!!!!!!!!!!!!!!
                <div></div>
            )
        })
    }

    useEffect(()=>{
        dispatch(actFetchListSubTypeJobsApi(IDsubType));
    }, []);

  return (
    <div>
      <h3>ListSubTypeJobs</h3>

      <div className="container">
          <div className="row">
              {renderListSubTypeJobs()}
          </div>
      </div>
    </div>
  );
}
