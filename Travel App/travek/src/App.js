import Map from "./Components/Maps/maps";
import List from "./Components/List/list";
import PlaceDetails from "./Components/PlaceDetails/placedetails";
import Header from "./Components/Header/header";
import "./App.css";
import { CssBaseline, Grid } from "@material-ui/core";
import { getPlacesData } from "./Api";
import React, { useEffect, useState } from "react";

function App() {
  const [places, setPlaces] = useState([]);
  const [cordinates, setCordinates] = useState({lat : 0, lng:0});
  const [bounds, setBounds] = useState(null);
useEffect( () => {
navigator.geolocation.getCurrentPosition(({coords : {latitude, longitude}}) => {
  setCordinates({lat: latitude, lng: longitude});
})
},[]);

  useEffect(() => {
    console.log(cordinates, bounds);
    getPlacesData().then((data) => {
      setPlaces(data);
      console.log(data);
    });
  }, [cordinates, bounds]);

  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>

        <Grid item xs={12} md={8}>
          <Map />
          setCordinates = {setCordinates}
          setBounds = {setBounds}
          cordinates = {cordinates}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
