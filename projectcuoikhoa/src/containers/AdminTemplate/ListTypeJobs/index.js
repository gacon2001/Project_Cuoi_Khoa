import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { actFetchListTypeJobsApi } from "./modules/actions";

export default function ListTypeJobs() {
    const dispatch = useDispatch();
    const listTypeJobs = useSelector((state)=> state.fetchListTypeJobsReducer.listTypeJobs);
    const {IDType} = useParams();

    const renderListTypeJobs = () => {
        return listTypeJobs?.map((type)=>{
            return (
                //!!!!!!!!!!!!!!!!
                <div></div>
            )
        })
    }

    useEffect(()=>{
        dispatch(actFetchListTypeJobsApi(IDType));
    }, []);

  return (
    <div>
      <h3>ListTypeJobs</h3>

      <div className="container">
          <div className="row">
              {renderListTypeJobs()}
          </div>
      </div>
    </div>
  );
}
