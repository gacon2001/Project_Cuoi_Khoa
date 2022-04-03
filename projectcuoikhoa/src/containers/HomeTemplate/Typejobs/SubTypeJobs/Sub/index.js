import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Sub(props) {
  // const dispatch = useDispatch();
  // const history = useHistory();
  const { sub } = props;
  // const [subtype, setSubtype] = useState("");
  // const hanldeOnChange=(event)=>{
  //   setSubtype(event.target.value);
  // }
  // const { type } = useParams();
  return (
    <>
      <ul className="subtypejob__left">
        <div className="subtypejob__left">
          <Link to={`/subtypejob/listworks/${sub._id}`}>{sub.name}</Link>
        </div>
      </ul>
    </>
  );
}
