import React from "react";
import { Route, Redirect } from "react-router-dom";
import NavbarAdmin from "./_components/NavbarAdmin";

export default function AdminTemplate({ exact, path, component }) {
  if (localStorage.getItem("Admin"))
    return (
      <>
        {/* {path == "/admin" && <NavbarAdmin />} */}
        {/* <NavbarAdmin /> */}
        <Route exact={exact} path={path} component={component} />
      </>
    );
  return <Redirect to="/login" />;
}

/*
cha, con trong đây nói là kiểu component A mà chứa component B thì tui nói là cha con á
function Button() {
  return <button></button>
}
function App() { 
  return <Button></Button> // chỗ này tui nói App là cha của Button,
}
kiểu nói "cha", "con" ở đây cho dễ hình dung thôi á nha :V.
*/
