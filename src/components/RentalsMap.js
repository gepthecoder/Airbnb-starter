import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import { useState, useEffect } from "react";

function RentalsMap({locations, google, setHighLight}) {

  const [center, setCenter] = useState();
  useEffect(()=> {
    var arr = Object.keys(locations);
    var getLat = (key) => locations[key]["lat"];
    var avgLat = arr.reduce((a, c) => a + Number(getLat(c)), 0) / arr.lenght;

    var getLng = (key) => locations[key]["lng"];
    var avgLng = arr.reduce((a, c) => a + Number(getLng(c)), 0) / arr.lenght;

    setCenter({lat:avgLat, lng:avgLng})

  }, [locations])

  return (
    <>
    {center &&
      (
        <Map
          google={google}
          containerStyle={{
            width: "50vw",
            height: "calc(100vh - 135px)", //vh - view height
        }}
          center={center}
          initialCenter={locations[0]}
          zoom={13}
          disableDefaultUI = {true}
        >
          {locations.map((cords, i) => (
            <Marker postion={cords} onClick={() => setHighLight(i)} />
          ))}
        </Map>
      )}
    </>
  );
}

export default GoogleApiWrapper ({
  apiKey: "AIzaSyDKUx_KNHQ2shDNl7BoUewrX_L9b2CJY7Q"
}) (RentalsMap);
