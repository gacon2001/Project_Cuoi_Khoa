import { Button, Container, Typography } from "@material-ui/core";
import React, { useState, useRef } from "react";
import styled from "styled-components";

// const Button = styled.div`
// text-align: center;
// `

//!Nhúng video
export default function Video() {
  const [showVideo, setShowVideo] = useState(false); //false: ban đầu chưa hiện
  const ref = useRef(null); //dùng DOM tới video
  return (
    <div>
      <Button
        sx={{ textAlign: "center" }}
        color="success"
        variant="contained"
        onClick={() => setShowVideo(true)}
      >
        How Fiverr Works
      </Button>
      {showVideo && ( 
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
          }}
          onClick={(e) => {
            //target là cái mà mình nhấn vào => so sánh target có phải là cái video
            if (e.target == ref?.current) return;
            setShowVideo(false);
          }}
        >
          <video ref={ref} controls width="400px">
            <source
              src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd_nl/v1/video-attachments/generic_asset/asset/ab0907217c9f9a2c1d2eee677beb7619-1626082923646/how_fiverr_works"
              type="video"
            />
          </video>
        </div>
      )}
    </div>
  );
}
