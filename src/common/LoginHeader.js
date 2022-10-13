import React from 'react';
import ReactDOM from 'react-dom';
// import trustedBy1 from './images/Vector.png'
import toDoorLogo from 'images/Ellipse 30.png'
import trustedBy3 from '../images/Rectangle 78.png'
// import trustedBy3 from './images/trustedBy-3.png'
// import trustedBy4 from './images/trustedBy-4.png'
import { useNavigate } from "react-router-dom";
import { Button, Input, MenuItem, Select, TextField, Typography } from '@mui/material';


const LoginHeader = (prop) => {
    const history = useNavigate();
    const redirect = ()=>{
//   localStorage.setItem('auth', null)
      history('/');
  }
    return (
      <div className="flex ">
        <div className="flex items-center">
          <div className="flex relative items-center">
            <img
              src={toDoorLogo}
              style={{ width: "70px" }}
              alt="softwork logo"
              className="cursor-pointer"
              onClick={redirect}
            />
            <Typography
              variant="h4"
              className="absolute font-bold"
              style={{ marginLeft: "16px", color: "white" }}
            >
              TO
            </Typography>
          </div>
          <div>
            <Typography
              variant="h4"
              className="font-bold text-primary-main ml-1"
              
            //   style={{ color: "0C3BAA", marginLeft: "1px" }}
            >
              -Door
            </Typography>
          </div>
        </div>
      </div>
    );
}
export default LoginHeader;
