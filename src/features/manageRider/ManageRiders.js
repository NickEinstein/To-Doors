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
import WallCards from "common/WallCards";
import ManageCompanyCard from "features/manageCompanies/ManageCompanyCard";
import ManageCompaniesTable from "features/manageCompanies/ManageCompaniesTable";

import {
  RiArrowDownSFill,
  RiArrowDownSLine,
  RiArrowLeftSLine,
} from "react-icons/ri";
import { MdRefresh } from "react-icons/md";
import ToDoorSearch from "common/ToDoorSearch";
function ManageRiders(props) {
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(event);
  };
  const history = useNavigate();

  const redirect = () => {
    history("/complete-signUp");
  };

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
      <ToDoorSearch />
      {/* <div className="flex items-center" style={{ backGroundColor: "#1E1E1E" }}>
        <img src={gigLogo} />
        <Typography variant="h5" className="font-bold ml-4 ">
          GIG LOGISTICS
        </Typography>
      </div> */}
      <div className="flex items-end mr-3 mt-12 w-3/6">
        <div className="mr-4">
          <WallCards
            className="mr-3"
            rider={false}
            big={true}
            green={true}
            name="Total Riders"
            count="20K"
          />
        </div>
        <div>
          <div className="relative w-full ">
            <div
              className="flex-between px-2 w-full text-xs absolute "
              style={{ top: "-20px" }}
            >
              <div className="flex">
                <p className="font-bold mr-1 flextext-xs self-end">Today</p>
                <div>
                  <RiArrowDownSLine
                    className=""
                    style={{ fontSize: "16px", color: "#494949" }}
                  />
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-xs mr-1 opacity-50">
                  <MdRefresh />
                </span>
                <span className="text-xs opacity-50">Refresh</span>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="">
              <WallCards short={true} name="Active" count="9K" />
            </div>
            <WallCards short={true} name="Non-Active" count="1K" />
          </div>
        </div>

        {/* <WallCards name='Total Raiders' count='116,019'/>
          <WallCards name='Rides in progress' count='13'/>
          <WallCards name='Active vehicles' count='8'/>
          <WallCards name='Earnings' count='3,000,000'/> */}
      </div>

      <Typography variant="h5" className="font-bold mt-8 text-primary-main">
        All Riders
      </Typography>
      {tableArray.map((e) => (
        <ManageCompaniesTable tableArray={e} />
      ))}

      {/* <div className="flex justify-between my-7">
                        <ManageCompanyCard/>
                        <ManageCompanyCard/>
                        <ManageCompanyCard/>
                    </div>
                    <div className="flex justify-between my-7">
                        <ManageCompanyCard/>
                        <ManageCompanyCard/>
                        <ManageCompanyCard/>
                    </div>
                    <div className="flex justify-between my-7">
                        <ManageCompanyCard/>
                        <ManageCompanyCard/>
                        <ManageCompanyCard/>
                    </div> */}
    </div>
  );
}

export default ManageRiders;
