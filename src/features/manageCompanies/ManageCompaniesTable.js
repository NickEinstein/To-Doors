
import React, { useState } from 'react';
import UserApi from "apis/UserApi";
import { useFormik } from "formik";
import * as yup from "yup";
import { useSnackbar } from "notistack";
// import { Button, TextField, Typography } from "@mui/material";
import Modal from "common/Modal";
import { getTextFieldFormikProps } from "utils/FormikUtils";

import { HiOutlineTrash } from "react-icons/hi";
import { TbMessage2, TbPhoneCall } from "react-icons/tb";

import { MdOutlineKeyboardArrowDown,MdKeyboardArrowRight } from 'react-icons/md';
import useAuthUser from "hooks/useAuthUser";
import { Navigate } from "react-router-dom";
import { RouteEnum } from "constants/RouteConstants";
import LoginHeader from 'common/LoginHeader';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import toDoorLogo from 'images/Ellipse 30.png'
// import ManageCompanyCard from 'common/ManageCompanyCard'

// import { RouteEnum } from "constants/RouteConstants";
// import ReactDOM from 'react-dom';
// import trustedBy1 from './images/Vector.png'
import gigLogo from 'images/Ellipse 56.png'
import trustedBy3 from 'images/Rectangle 106.png'
// import LoginHeader from './LoginHeader';
// import trustedBy3 from './images/trustedBy-3.png'
// import trustedBy4 from './images/trustedBy-4.png'
import { Button, Card, CardActions, CardContent, Input, MenuItem, Rating, Select, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import WallCards from 'common/WallCards';
import ManageCompanyCard from './ManageCompanyCard';

function ManageCompaniesTable(props) {
  const [suspend, setSuspend] = React.useState(false);
  const [closeModal, setCloseModal] = React.useState("");
  const [show, setShow] = React.useState('');
  // const handleChange = (event) => {
  //   setAge(event.target.value);
  //   console.log(event)
  // };
  const history = useNavigate();


const openModal = (bol)=>{
  setCloseModal(!closeModal)
  setSuspend(bol)

}

  const redirect = () => {

    history('/complete-signUp');
  }


const tableArrayz = [
    {
        image:gigLogo,
        name:"Nickky Samuel jonas  ",
        company:"GIG Logistics",
        Id:"2234456",
        ratings:"4",
    },

    {
        image:gigLogo,
        name:"John jimmy Samuel  ",
        company:"GIG Logistics",
        Id:"2234456",
        ratings:"4",
    }
]


const openBelow =()=>{
    setShow(!show)
}

  // if (authUser.accessToken) {
  //   return <Navigate to={RouteEnum.HOME} />;
  // }

  return (
    <div>
      {/* { props.tableArray.map((e)=> */}
      <div>
        <div
          onClick={openBelow}
          style={{ border: "1px solid #DADADA" }}
          className=" cursor-pointer mt-2 flex border2 background-table min-h-[50%]"
        >
          <div className="w-1/2  p-3 ">
            <img src={gigLogo} className="rounded-full" />
          </div>
          <div className="w-full  p-3 ">
            <p className="medium-size">Name</p>
            <Typography variant="h6">{props.tableArray.name}</Typography>
          </div>
          <div className="w-full  p-3 ">
            <p className="medium-size">company</p>
            <Typography variant="h6">{props.tableArray.company}</Typography>
          </div>
          <div className="w-full  p-3 ">
            <p className="medium-size">ID Number</p>
            <Typography variant="h6">{props.tableArray.id}</Typography>
          </div>
          <div className="w-full  p-3 ">
            <p className="medium-size">Ratings</p>
            <Rating
              name="read-only"
              value={props.tableArray.ratings}
              readOnly
            />
            {/* <Typography variant='h6'>{e.ratings}</Typography> */}
          </div>
          <div className="w-1/2   p-3">
            <p className="medium-size">
              {!show ? (
                <MdOutlineKeyboardArrowDown
                  style={{
                    fontSize: "30px",
                    cursor: "pointer",
                    color: "#888888",
                  }}
                />
              ) : (
                <MdKeyboardArrowRight
                  style={{
                    fontSize: "30px",
                    cursor: "pointer",
                    color: "#888888",
                  }}
                />
              )}
            </p>
          </div>
        </div>
        {show && (
          <div className="w-full flex justify-between background-table p-6">
            <div>
              <Button
              color='primary'
                // style={{ backgroundColor: "#20B553" }}
                className="px-6 min-w-[110px] ml-2"
                startIcon={<TbMessage2 />}
              >
                Message
              </Button>
              <Button
                startIcon={<TbPhoneCall />}
                style={{ backgroundColor: "#F7742B" }}
                className="px-6 min-w-[110px] ml-2"
              >
                Call
              </Button>
            </div>
            <div className="flex justify-between items-center">
              <Button
                onClick={() => openModal(true)}
                style={{ backgroundColor: "#DCDCDC", color: "black" }}
                className="mr-2 px-6 min-w-[110px] ml-2"
              >
                Suspend driver
              </Button>
              {/* <Button className='px-6 min-w-[110px] ml-2'>Call</Button> */}
              <HiOutlineTrash
                onClick={() => openModal(false)}
                style={{
                  fontSize: "26px",
                  cursor: "pointer",
                  color: "#888888",
                }}
              />
            </div>
          </div>
        )}
        <Modal
          suspend={suspend}
          openModal={openModal}
          closeModal={closeModal}
        />
      </div>
      {/* )} */}
    </div>
  );
}

export default ManageCompaniesTable;
