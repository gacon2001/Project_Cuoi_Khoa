import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Jobs from "./Jobs";
import { actFetchTypeJobs } from "./modules/action";

export default function TypeJobs() {
  // const history = useHistory();
  const dispatch = useDispatch();
  const typeJobs = useSelector((state) => state.typeJobsReducer.data);
  useEffect(() => {
    dispatch(actFetchTypeJobs());
  }, []);
  const renderTypeJobs = () => {
    return typeJobs?.map((jobs) => {
      return <Jobs key={jobs._id} jobs={jobs} />;
    });
  };
  return (
    <>
      <hr style={{ marginTop: "0px" }} />
      <div className="typejobs__list">{renderTypeJobs()}</div>
      <hr style={{ marginTop: "0px" }} />
    </>
  );
}
