import { Container, Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

// const Typography = styled.div`
//   text-align: center;
// `;

//!Nhúng video
export default function Video() {
  return (
    <div>
      <Typography>How Fiverr Works</Typography>
      <video controls>
        <source
          src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd_nl/v1/video-attachments/generic_asset/asset/ab0907217c9f9a2c1d2eee677beb7619-1626082923646/how_fiverr_works"
          type="video"
        />
      </video>
    </div>
  );
}
