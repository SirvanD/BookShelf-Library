import React from "react";
import GoogleMapReact from "google-map-react";
// import "./GoogleMapsComponent.css";
import { useState, useEffect } from "react";
import MarkerImage from "./MarkerImage.png";
import cafe from "./cafe.png";
import library from "./library.png";
import book from "./book.png";
import Tooltip from "@mui/material/Tooltip";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { format } from "date-fns";
import { CastForEducation } from "@mui/icons-material";

function ShowMap() {
  const [markers, setMarkers] = useState([]);
  const [open, setOpen] = useState({});

  // console.log(open);

  const handleTooltipClose = () => {
    setOpen({});
  };

  const handleTooltipOpen = (key) => {
    const current = {};
    current[key] = true;
    setOpen(current);
  };

  const Marker = (props) => {
    const { key, index, lat, lng, name, type } = props;
    const markerIcon = type == "cafe" ? cafe : type == "library" ? library : book;

    return (
      <>
        <ClickAwayListener onClickAway={handleTooltipClose}>
          <div>
            <Tooltip
              PopperProps={{
                disablePortal: true,
              }}
              onClose={handleTooltipClose}
              open={open[index]}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              title={
                <div style={{ width: "15vw" }}>
                  <h4>{name.toUpperCase()}</h4>
                  <p></p>
                </div>
              }
              arrow
              placement="top"
            >
              <img onClick={() => handleTooltipOpen(index)} className="markers" src={markerIcon}></img>
            </Tooltip>
          </div>
        </ClickAwayListener>
      </>
    );
  };

  const handleBoundsChange = (mapNew) => {
    let corners = {
      lattop: mapNew.marginBounds.ne.lat,
      lngtop: mapNew.marginBounds.ne.lng,
      latbottom: mapNew.marginBounds.sw.lat,
      lngbottom: mapNew.marginBounds.sw.lng,
    };
    fetch(
      `http://localhost:2020/locations/markers?lattop=${corners.lattop}&lngtop=${corners.lngtop}&latbottom=${corners.latbottom}&lngbottom=${corners.lngbottom}`
    )
      .then((res) => res.json())
      .then((res) => setMarkers(res));

    console.log(markers);
  };

  return (
    <div style={{ height: "88vh" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyAM0EpxhBTHgfutHud-t7rHWimU09T95ek",
        }}
        defaultCenter={{ lat: -33.32789335612147, lng: 115.65370583665717 }}
        defaultZoom={16}
        onChange={(e) => handleBoundsChange(e)}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            index={index}
            lat={marker.latlng.lat.$numberDecimal}
            lng={marker.latlng.lng.$numberDecimal}
            name={marker.name}
            type={marker.type}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
}

export default React.memo(ShowMap);

// import React from "react";
// import { GoogleMap, LoadScript } from "@react-google-maps/api";

// const containerStyle = {
//   width: "66vw",
//   height: "85vh",
// };

// const center = {
//   lat: -33.32789335612147,
//   lng: 115.65370583665717,
// };

// function GoogleMapsComponent() {
//   return (
//     <LoadScript googleMapsApiKey="AIzaSyAM0EpxhBTHgfutHud-t7rHWimU09T95ek">
//       <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
//         {/* Child components, such as markers, info windows, etc. */}
//         <></>
//       </GoogleMap>
//     </LoadScript>
//   );
// }

// export default React.memo(GoogleMapsComponent);
