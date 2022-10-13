import React, { useState } from "react";
// import { Button, TextField, Typography } from "@mui/material";
import Modal from "common/Modal";

// import { RouteEnum } from "constants/RouteConstants";
// import ReactDOM from 'react-dom';
// import trustedBy1 from './images/Vector.png'
import gigLogo from "images/Ellipse 56.png";
// import LoginHeader from './LoginHeader';
// import trustedBy3 from './images/trustedBy-3.png'
// import trustedBy4 from './images/trustedBy-4.png'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Input,
  MenuItem,
  Rating,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function ManageTripsTable(props) {
  const [suspend, setSuspend] = React.useState(false);
  const [closeModal, setCloseModal] = React.useState("");
  const [show, setShow] = React.useState("");
 
  

  

  const tableArrayz = [
    {
      image: gigLogo,
      name: "Nickky Samuel jonas  ",
      company: "GIG Logistics",
      Id: "2234456",
      ratings: "4",
    },

    {
      image: gigLogo,
      name: "John jimmy Samuel  ",
      company: "GIG Logistics",
      Id: "2234456",
      ratings: "4",
    },
  ];

  
  // if (authUser.accessToken) {
  //   return <Navigate to={RouteEnum.HOME} />;
  // }

  return (
    <div>
      {/* { props.tableArray.map((e)=> */}
      {/* <div>
        <div
          //   onClick={openBelow}
          style={{ border: "1px solid #DADADA" }}
          className=" cursor-pointer mt-2 flex border2 background-table min-h-[50%]"
        >
          
          <div className="w-[11.11%] text-center  px-3 py-5 border">
            <p className="medium-size">company</p>
            <Typography variant="h6">{props.tableArray.company}</Typography>
          </div>
          <div className="w-[11.11%] text-center  px-3 py-5 border">
            <p className="medium-size">ID Number</p>
            <Typography variant="h6">{props.tableArray.id}</Typography>
          </div>

          <div className="w-[11.11%] text-center  px-3 py-5 border">
            <p className="medium-size">Hi</p>
          </div>
          <div className="w-[11.11%] text-center  px-3 py-5 border">
            <p className="medium-size">Hi</p>
          </div>
          <div className="w-[11.11%] text-center  px-3 py-5 border">
            <p className="medium-size">Hi</p>
          </div>
          <div className="w-[11.11%] text-center  px-3 py-5 border">
            <p className="medium-size">Hi</p>
          </div>
          <div className="w-[11.11%] text-center  px-3 py-5 border">
            <p className="medium-size">Hi</p>
          </div>
          <div className="w-[11.11%] text-center  px-3 py-5 border">
            <p className="medium-size">Hi</p>
          </div>
          <div className="w-[11.11%] text-center  px-3 py-5 border">
            <p className="medium-size">Hi</p>
          </div>
        </div>

        <div component="th" scope="row">
          {row.origin}
        </div>
        <div align="right">{row.destination}</div>
        <div align="right">{row.rider}</div>
        <div align="right">{row.orderId}</div>
        <div align="right">{row.status}</div>
        <div align="right">{row.fee}</div>
        <div align="right">{row.departureDate}</div>
        <div align="right">{row.arrivalDate}</div>
        <div align="right">
          <Button
            onClick={() => {
              handleShow(row);
            }}
          >
            View Route
          </Button>
        </div>
      </div> */}
    </div>
  );
}

export default ManageTripsTable;
