import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import DashboardNavbar from "./DashboardPage/components/DashboardNavbar";
import DashboardSidebar from "./DashboardPage/components/DashboardSidebar";

export default function AdminTemplate({ exact, path, component }) {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  if (localStorage.getItem("Admin")) {
    return (
      <>
        {/* {path == "/admin" && <NavbarAdmin />} */}
        {/* <NavbarAdmin /> */}
        {/* <DashboardNavbar/> */}

        <Route exact={exact} path={path} component={component} />
        <DashboardNavbar onMobileNavOpen={() => setMobileNavOpen(true)} />
        <DashboardSidebar
          onMobileClose={() => setMobileNavOpen(false)}
          openMobile={isMobileNavOpen}
        />
      </>
    );
  }
  return <Redirect to="/signin" />;
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
