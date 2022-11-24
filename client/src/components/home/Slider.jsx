import { CardMedia } from "@mui/material";
import React from "react";
import Carousel from "react-bootstrap/Carousel";

function UncontrolledExample({sponsorredVideos}) {
  return (
    <CardMedia
    component="img"
    image={sponsorredVideos.imgUrl}
    alt="green iguana"
    sx={{

      objectFit: "cover",
      borderRadius: "10px",
      paddingLeft: "20px",
      height:"350px"
    }}
  />
  );
}

export default UncontrolledExample;
