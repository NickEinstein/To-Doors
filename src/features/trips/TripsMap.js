import React, { useEffect, useState } from "react";
import UserApi from "apis/UserApi";
import { useFormik } from "formik";
import * as yup from "yup";
import { useSnackbar } from "notistack";
// import { Button, TextField, Typography } from "@mui/material";
import PasswordTextField from "common/PasswordTextField";
import { getTextFieldFormikProps } from "utils/FormikUtils";
import useAuthUser from "hooks/useAuthUser";
import { Navigate } from "react-router-dom";
import { arr } from "react-icons/ai";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { RouteEnum } from "constants/RouteConstants";
import LoginHeader from "common/LoginHeader";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import toDoorLogo from "images/Ellipse 30.png";
// import ManageCompanyCard from 'common/ManageCompanyCard'

// import { RouteEnum } from "constants/RouteConstants";
// import ReactDOM from 'react-dom';
// import trustedBy1 from './images/Vector.png'
import gigLogo from "images/Ellipse 56.png";
import trustedBy3 from "images/Rectangle 106.png";
// import LoginHeader from './LoginHeader';
// import trustedBy3 from './images/trustedBy-3.png'
// import trustedBy4 from './images/trustedBy-4.png'
import {
  Button,
  TableBody,
  TableCell,
  Table,
  Input,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import WallCards from "common/WallCards";
import { AiOutlineArrowRight } from "react-icons/ai";
// import ManageCompanyCard from '.features/manageCompanies/ManageCompanyCard';
// import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import { makeStyles } from '@mui/styles';

function TripsMap({ route, width }) {
  const [map, setMap] = useState(/** @type google.maps.map*/ (null));
  const [distance, setDistance] = useState(/** @type google.maps.map*/ (null));
  const [duration, setDuration] = useState(/** @type google.maps.map*/ (null));
  const [directionResponse, setDirectionResponse] = useState(
    /** @type google.maps.map*/ (null)
  );
  const [age, setAge] = useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(event);
  };
  const history = useNavigate();

  console.log(route);

  const redirect = () => {
    history("/complete-signUp");
  };

  // console.log(process.env.TO_DOOR_MAP_API_KEY)
  // console.log(process.env.REACT_APP_SOFTWORK_API)

  const calculateRoute = async (origin, destination) => {
    if (origin == "" || destination == "") {
      return;
    }
    //eslint-disable-next-line no-undef
    const directionService = new google.maps.DirectionsService();
    const result = await directionService.route({
      origin: origin,
      destination: destination,
      //eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionResponse(result);
    setDistance(result.routes[0].legs[0].distance.text);
    setDuration(result.routes[0].legs[0].duration.text);
  };

  useEffect(() => {
    console.log(route.origin);
    setTimeout(calculateRoute(route.origin, route.destination), 5000);
  }, [route]);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAssvIlc0TbayfgN6C3rfGtlCXQckeystQ",
    libraries: ["places"],
  });
  //   const {isLoaded} = useJsApiLoader({
  //     googleMapsApiKey:'AIzaSyB6dttqGcdoqUQYT4rt4ZEd9_UOwP4GoMc',
  //   })

  if (!isLoaded) {
    return <p>isloaded</p>;
  }

  //eslint-disable-next-line no-undef

  const center = {
    lat: 6.458985,
    lng: 3.601521,
  };
  const containerStyle = {
    width: "100%",
    height: !width ? "" : "38vw",
  };
  return isLoaded ? (
    <div className="w-[80%]">
      {/* <Autocomplete>
            <input/>
        </Autocomplete> */}

      {/* <div className="mb-4">
            <Button onClick={()=>map.panTo(center)} className=' ml-3 px-7 py-2'>Heat Map</Button>
            <Button  onClick={()=>calculateRoute('Apapa, Lagos', 'Ikeja, Lagos')} style={{color:'#8C8C8C'}} className=' ml-3 px-7 py-2 bg-transparent'>God's View</Button>
        </div> */}
      {width && (
        <div className="flex w-1/3  items-center mr-5">
          <Typography className="w-full text-green-600" variant="h6">
            {route.origin}
          </Typography>
          <AiOutlineArrowRight style={{ fontSize: "40px" }} />
          <Typography className="w-full text-green-600 ml-5" variant="h6">
            {route.destination}
          </Typography>
        </div>
      )}

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
        // onLoad={map => setMap(map)}
        //   onUnmount={onUnmount}
      >
        {/* <Marker position={center} /> */}
        {directionResponse && (
          <DirectionsRenderer directions={directionResponse} />
        )}
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}

export default TripsMap;
