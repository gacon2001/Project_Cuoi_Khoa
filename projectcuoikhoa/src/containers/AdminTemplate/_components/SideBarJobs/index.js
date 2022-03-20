import React from "react";
import PropTypes from "prop-types";

// const items = [
//   {
//     href: "",
//     title: "",
//   },
// ];

export default function SideBarJobs({ onMobileClose, openMobile }) {
  return (<div>

  </div>);
}

SideBarJobs.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

SideBarJobs.defaultProps = {
  onMobileClose: () => {},
  openMobile: false,
};
