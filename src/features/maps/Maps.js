import React, { useEffect, useRef, useState } from "react";
// import UserApi from "apis/UserApi";
import { useFormik } from "formik";
import * as yup from "yup";
import { useSnackbar } from "notistack";
// import { Button, TextField, Typography } from "@mui/material";
// import PasswordTextField from "common/PasswordTextField";
// import { getTextFieldFormikProps } from "utils/FormikUtils";
import useAuthUser from "hooks/useAuthUser";
import { Navigate } from "react-router-dom";
import { BsCircleFill } from "react-icons/bs";
import { post, get, put } from "services/fetch";
import {w3cwebsocket as W3CWebSocket} from 'websocket'
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
import ToDoorSearch from "common/ToDoorSearch";
// import ManageCompanyCard from '.features/manageCompanies/ManageCompanyCard';
// import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import { makeStyles } from '@mui/styles';
import socketio from "socket.io-client";


// const client = new W3CWebSocket("ws://todoorapp.com");

function Trips(props) {
  const [map, setMap] = useState(/** @type google.maps.map*/ (null));
  const [distance, setDistance] = useState(/** @type google.maps.map*/ (null));
  const [duration, setDuration] = useState(/** @type google.maps.map*/ (null));
  const [directionResponse, setDirectionResponse] = useState(
    /** @type google.maps.map*/ (null)
  );
  let SOCKET_URL = `todoorapp.com:3000`;
  let token = localStorage.getItem("token").slice(0,7);

  // const [center, setcenter] = useState({
  //   lat: 6.458985,
  //   lng: 3.601521,
  // });
  // const [centers, setcenters] = useState([
  //   {
  //     lat: 37.772,
  //     lng: -122.214,
  //   },
  //   {
  //     lat: 37.672,
  //     lng: -122.219,
  //   },
  //   {
  //     lat: 37.832,
  //     lng: -122.424,
  //   },
  // ]);

 
 

  const ridersUnderCompanyR = async (companyId) => {
    const res = await get({
      endpoint: `api/super-admin/getAllRiders`,
      //  body: { ...payload },
      auth: true,
    });
    console.log(res.data.data);
    return res.data.data.length;
  };

  // const initSocket = () => {
  //   const socket = socketio(
  //     SOCKET_URL,
  //         {
  //       query: { token },
  //     }
  //   );
  //   // socket.on("connect", () => {
  //   //   console.log("Connected");
  //   // });
  //   // this.setState({ socket });
  // };
  useEffect(() => {
    // client.onopen = ()=>{
    //   console.log('Hello')
    // }
    ridersUnderCompanyR()
    // initSocket();
  }, []);

  // socketio.connect(SOCKET_URL, {
  //   query: { token },
  // });

  //  let socket = useRef(null);
  //  socket.current = io(
  //    `todoorapp.com:3000?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWVyZ2VuY3lEZXRhaWxzIjp7InBob25lIjoiIiwibmFtZSI6bnVsbH0sImJpa2VEZXRhaWxzIjp7InR5cGUiOiJHTyIsImNvbXBhbnkiOiJNYXJ1dGkgU3V6dWtpIiwicmVnTm8iOiJOWUMgMTIzIiwiUkNfb3duZXJOYW1lIjpudWxsLCJiaWtlTm8iOm51bGwsImJpa2VNb2RlbCI6IlN3aWZ0IER6aXJlIiwicmVnRGF0ZSI6IjIwMTctMDEtMDFUMDA6MDA6MDAuMDAwWiJ9LCJsaWNlbmNlRGV0YWlscyI6eyJsaWNlbmNlTm8iOm51bGwsImlzc3VlRGF0ZSI6bnVsbCwiZXhwRGF0ZSI6bnVsbH0sImJhbmtEZXRhaWxzIjp7ImFjY291bnRObyI6bnVsbCwiaG9sZGVyTmFtZSI6bnVsbCwiYmFuayI6bnVsbH0sIl9pZCI6IjYzNTEyZDQ4MWQyYWIxMmM5NjU4MDVjMiIsImZuYW1lIjpudWxsLCJsbmFtZSI6bnVsbCwiZW1haWwiOiJzdXBlcmFkbWluQHltYWlsLmNvbSIsInBob25lTm8iOiIrMjM0OTA2NjExMjg5NSIsInBhc3N3b3JkIjoiJDJiJDEwJGlIOEl1cWZnTFc3QlE2SFNzWm9IdS45T1ZLNDZsQXVPTHp5a3FBL1NXb0RpTnpBVnhBdTZHIiwiZG9iIjoiMTk5My0xMi0wOFQwMDowMDowMC4wMDBaIiwiYmxvb2RHcm91cCI6IkIrIiwiYWRkcmVzcyI6bnVsbCwiY2l0eSI6Ik1hcnlsYW5kIiwic3RhdGUiOiJMYWdvcyIsImNvdW50cnkiOiJOaWdlcmlhIiwiZ3BzTG9jIjpbMC4yMzQyNDIzNDI0LDMuMjM0MjM0MjM0MjQyNDIzXSwibGF0aXR1ZGVEZWx0YSI6MC4wMTMsImxvbmdpdHVkZURlbHRhIjowLjAyMiwidXNlclJhdGluZyI6MCwicHJvZmlsZVVybCI6Imh0dHA6Ly9yZXMuY2xvdWRpbmFyeS5jb20vdG9kb29yYXBwL2ltYWdlL3VwbG9hZC92MTUwNTgwNTEwNi9ub3VuXzE3MjM3X2Fnd3FndC5wbmciLCJjdXJyVHJpcElkIjpudWxsLCJjdXJyVHJpcFN0YXRlIjpudWxsLCJ1c2VyVHlwZSI6ImFkbWluIiwibG9naW5TdGF0dXMiOnRydWUsIm1vYmlsZVZlcmlmaWVkIjpmYWxzZSwiZW1haWxWZXJpZmllZCI6ZmFsc2UsIm90cCI6NTYwNjU0LCJpc0FwcHJvdmVkIjp0cnVlLCJob21lQWRkcmVzcyI6bnVsbCwid29ya0FkZHJlc3MiOm51bGwsInZlcmlmaWVkIjpmYWxzZSwiand0QWNjZXNzVG9rZW4iOm51bGwsInVzZXJDYXJkSWQiOm51bGwsImluc3VyYW5jZVVybCI6bnVsbCwiYmlrZVBhcGVyVXJsIjpudWxsLCJyY0Jvb2tVcmwiOm51bGwsImxpY2VuY2VVcmwiOm51bGwsImNhcmREZXRhaWxzIjpbXSwibWFwQ29vcmRpbmF0ZXMiOlswLDBdLCJkZXZpY2VJZCI6bnVsbCwicHVzaFRva2VuIjpudWxsLCJjb21wYW55SWQiOm51bGwsIl9fdiI6MSwiY29tcGFueU5hbWUiOm51bGwsImlzQXZhaWxhYmxlIjp0cnVlLCJjcmVhdGVkX2F0IjoiMjAyMi0xMi0wMlQxMjo0NToyNC44MTBaIiwiaWF0IjoxNjcxNTY0ODkzfQ.F_TNvU-ZUpt6DvEwDiGSNPcyR_2wwAhs3zYTYXyfUaw`
  //  );

  // let socket = socketio(
  //   SOCKET_URL,

  //   { query: { token } }
  // );

  useEffect(() => {
    const fetchData = async () => {
      // const deleteRider = async () => {
      const res = await get({
        endpoint: `api//super-admin/getAllRiders`,
        //  body: { ...payload },
        auth: true,
      });
      console.log(res);
      //  setAllBikez(res.data.data);
    };

    const intervalId = setInterval(fetchData, 3000);
    return () => clearInterval(intervalId);
  }, []);

  
  const history = useNavigate();

  // useEffect(() => {
  //   socket.current.on("connect", () => {
  //     //  setIsConnected(true);
  //     alert("hi");
  //     console.log("socket is connected");
  //   });

  //   // socket.on("disconnect", () => {
  //   //   console.log("socket is disconnected");
  //   //   //  setIsConnected(false);
  //   // });
  // }, []);

  const redirect = () => {
    history("/complete-signUp");
  };

  const toEmit = () => {
    let payload = {
      user: {
        _id: useAuthUser._id,
      },
    };

    //  socket.emit("adminMapSocket", payload);
  };

  function createData(
    destination,
    rider,
    orderId,
    status,
    fee,
    departureDate,
    arrivalDate,
    timeDelay
  ) {
    return {
      destination,
      rider,
      orderId,
      status,
      fee,
      departureDate,
      arrivalDate,
      timeDelay,
    };
  }
  console.log(process.env.TO_DOOR_MAP_API_KEY);
  console.log(process.env.REACT_APP_SOFTWORK_API);

  const { isLoaded } = useJsApiLoader({
    // id: "google-map-script",
    googleMapsApiKey: "AIzaSyAOcmuq7zgq9R_ZubLHlhw6VO_XRidO1Vg",
    // libraries: ["places"],
  });
  //   const {isLoaded} = useJsApiLoader({
  //     googleMapsApiKey:'AIzaSyB6dttqGcdoqUQYT4rt4ZEd9_UOwP4GoMc',
  //   })

  if (!isLoaded) {
    return <p>isloaded</p>;
  }

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

  //eslint-disable-next-line no-undef

  const center = {
    lat: 6.458985,
    lng: 3.601521,
  };

  const centers = [
    {
      lat: 6.59651,
      lng: 3.34205,
    },
    {
      lat: 7.376736,
      lng: 3.939786,
    },
    {
      lat: 37.832,
      lng: 7.42947,
    },
  ];
  const containerStyle = {
    width: "100%",
    height: "45vw",
  };
  return isLoaded ? (
    <div className="w-full">
      <ToDoorSearch />
      {/* <Autocomplete>
            <input/>
        </Autocomplete> */}
      <div className="flex justify-between items-center">
        <div className="mb-4">
          {/* <Button onClick={toEmit}>Emit</Button> */}
          {/* <Button onClick={() => map.panTo(center)} className=" ml-3 px-7 py-2">
            Heat Map
          </Button> */}
          <Button
            onClick={() => calculateRoute("Apapa, Lagos", "Ikeja, Lagos")}
            style={{ color: "#8C8C8C" }}
            className=" ml-3 px-7 py-2 bg-transparent"
          >
            God's View
          </Button>
        </div>

        <div className="flex-between w-2/5 mr-12">
          <div className=" flex items-center">
            <BsCircleFill
              className="mr-1"
              style={{ color: "#078532" }}
              fontSize={12}
            />

            <p>Free Flow</p>
          </div>
          <div className=" flex items-center">
            <BsCircleFill
              className="mr-1"
              style={{ color: "#F7AD2B" }}
              color="red"
              fontSize={12}
            />
            <p>A bit congested</p>
          </div>
          <div className=" flex items-center">
            <BsCircleFill
              className="mr-1"
              style={{ color: "#FF0000" }}
              fontSize={12}
            />
            <p>Congested</p>
          </div>
        </div>
      </div>
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
        onLoad={(map) => setTimeout(() => setMap(map))}
        // onLoad={(map) => setMap(map)}
        //   onUnmount={onUnmount}
      >
        {/* <Marker position={center} />
        <Marker
          icon={
            "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
          }
          position={centers[1]}
        /> */}
        {map && (
          <div>
            {/* <Marker
              position={center}
              // icon={{
              //   // url: markerUrl,
              //   // scaledSize: new google.maps.Size(markerSize, markerSize),
              //   // origin: new google.maps.Point(0, 0),
              //   // anchor: new google.maps.Point(markerSize / 2, markerSize / 2),
              // }}
            /> */}
            <Marker
              icon={
                "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
              }
              position={centers[0]}
            />
            <Marker
              icon={
                "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
              }
              position={centers[1]}
            />

            <Marker
              icon={
                "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
              }
              position={centers[2]}
            />
          </div>
        )}
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

export default Trips;
