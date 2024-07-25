import React from "react";
import GoogleMapReact from "google-map-react";
import { Typography, Paper, useMediaQuery } from "@material-ui/core";
import Rating from "@material-ui/lab";
import useStyles from "./styles";
import { LocationOnOutlined } from "@material-ui/icons/LocationOnOutlined";

const Maps = ({ cordinates, setCordinates, setBounds }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width : 600px)");

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCLEjiK5cwUSko4Nz0JRaz8jglBZnMjxK8" }}
        defaultCenter={cordinates}
        defaultZoom={14}
        center={cordinates}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setBounds ({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
          setCordinates({ lat: e.center.lat, lng: e.center.lng });
        }}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
};

export default Maps;
