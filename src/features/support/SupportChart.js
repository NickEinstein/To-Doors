import React, { useState } from "react";
import UserApi from "apis/UserApi";
import { useFormik } from "formik";
import * as yup from "yup";
import { useSnackbar } from "notistack";
// import { Button, TextField, Typography } from "@mui/material";
import PasswordTextField from "common/PasswordTextField";
import { getTextFieldFormikProps } from "utils/FormikUtils";
import useAuthUser from "hooks/useAuthUser";

import { Navigate } from "react-router-dom";
import { RouteEnum } from "constants/RouteConstants";
import LoginHeader from "common/LoginHeader";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import leftInput from "images/attach-circle.png";
import rightInput from "images/Vector.png";
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
  Autocomplete,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Input,
  InputAdornment,
  MenuItem,
  Rating,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import WallCards from "common/WallCards";
import { RiArrowLeftSLine } from "react-icons/ri";
import NewWallCards from "common/NewWallCards";
import ToDoorSearch from "common/ToDoorSearch";
import { MdOutlineSearch } from "react-icons/md";
import { borderRadius } from "@mui/system";

function SupportChart({ setOpen, open }) {
  const [show, setShow] = useState(false);
  const handleShow = (event) => {
    setShow(!show);
    // console.log("john");
  };
  const history = useNavigate();

  const redirect = () => {
    history("/complete-signUp");
  };

  const top100Films = [
    { label: "Edo State", year: 1994 },
    { label: "Oredo", year: 1972 },
  ];

  const tableArray = [
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

  const authUser = useAuthUser();

  const { enqueueSnackbar } = useSnackbar();
  const [loginMuation, loginMutationResult] = UserApi.useLoginMutation();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: yup.object({
      username: yup.string().trim().required(),
      password: yup.string().trim().required(),
    }),
    onSubmit: async (values) => {
      console.log(values);
      // localStorage.setItem('location', values.location)
      redirect();

      try {
        const data = await loginMuation({ data: values }).unwrap();
        // TODO extra login
        // redirect()
        enqueueSnackbar("Logged in successful", { variant: "success" });
      } catch (error) {
        enqueueSnackbar(error?.data?.message, "Failed to login", {
          variant: "error",
        });
      }
    },
  });

  // if (authUser.accessToken) {
  //   return <Navigate to={RouteEnum.HOME} />;
  // }

  return (
    <div>
      <div>
        <div
          onClick={handleShow}
          className="flex items-center mb-2 cursor-pointer w-16 p-2"
        >
          <div
            style={{ border: "1px solid #494949" }}
            className="border-solid w-5 mr-2 rounded h-5 flex justify-center items-center"
          >
            <RiArrowLeftSLine
              className=""
              style={{ fontSize: "22px", color: "#494949" }}
            />
          </div>
          <p
            onClick={() => setOpen(!open)}
            style={{ color: "#494949" }}
            className="text-base"
          >
            Back
          </p>
        </div>

        <div className="flex justify-between items-center">
          <div
            className="flex items-center"
            style={{ backGroundColor: "#1E1E1E" }}
          >
            <img src={gigLogo} />
            <Typography variant="h5" className="font-bold ml-4 ">
              Taiwo Daniel
            </Typography>
          </div>

          <Button variant="outlined">View Profile</Button>
        </div>
        <Divider className="my-4" />
        <div className=" ">
          <p className="text-center text-[#50555C]">Today Sept. 10th, 2022</p>
        </div>
      </div>
      <div className="relative p-4 w-full">
        <div className="">
          <div>
            <div className="  max-w-[25%] left-0 ">
              <div className="flex">
                <p
                  style={{ borderRadius: "5px" }}
                  className="px-4 py-1 bg-[#EBEBEB]"
                >
                  Hello
                </p>
              </div>
              <p
                className=" text-left"
                style={{
                  fontSize: "9px",
                  color: "#767676",
                }}
              >
                12:22pm
              </p>
            </div>
            <div className=" ml-auto text-white max-w-[25%] left-0 ">
              <p
                style={{ borderRadius: "5px" }}
                className="px-4 py-1 bg-[#037329]"
              >
                Good afternoon Taiwo How may we be of service to you.
              </p>
              <p
                className=" text-right "
                style={{
                  fontSize: "9px",
                  color: "#767676",
                }}
              >
                12:22pm
              </p>
            </div>
          </div>
        </div>

        <TextField
          className="w-full mt-12"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <img
                  className="cursor-pointer"
                  style={{ width: "18px" }}
                  src={rightInput}
                />
              </InputAdornment>
            ),
            startAdornment: (
              <InputAdornment position="start">
                <img
                  className="cursor-pointer"
                  style={{ width: "18px" }}
                  src={leftInput}
                />
              </InputAdornment>
            ),
          }}
        />
      </div>
    </div>
  );
}

export default SupportChart;
