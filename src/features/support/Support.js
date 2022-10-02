
import React, { useState } from 'react';
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
import ManageCompanyCard from 'features/manageCompanies/ManageCompanyCard';
import ManageCompaniesTable from 'features/manageCompanies/ManageCompaniesTable';

import { RiArrowLeftSLine } from 'react-icons/ri';
function ManageRiders(props) {
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(event)
  };
  const history = useNavigate();


  const redirect = () => {

    history('/complete-signUp');
  }


const tableArray = [
    {
        image:gigLogo,
        name:"Taiwo Daniel  ",
        company:"GIG Logistics",
        Id:"2234456",
        ratings:"4",
        message:"Hello",
    },

    {
        image:gigLogo,
        name:"Triumph Boyace  ",
        company:"GIG Logistics",
        Id:"2234456",
        message:"Hi",
        ratings:"4",
    },
    {
        image:gigLogo,
        name:"Tina Kumi  ",
        company:"GIG Logistics",
        Id:"2234456",
        message:"I've been waiting",
        ratings:"4",
    }
]

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
      console.log(values)
      // localStorage.setItem('location', values.location)
      redirect()

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
        
      

        <div className='mb-4'>
            <Button className='px-7 py-2 text-base mr-4 min-w-[140px]'>Customers</Button>
            <Button className='px-7 py-2 text-base min-w-[120px]'>Support</Button>
        </div>
            { tableArray.map((e)=>
            <div style={{border:"1px solid #DADADA"}} className=" px-5 mt-1 flex justify-between border2 background-table min-h-[50%]">
                          <div className='w-full flex items-center p-2 '>
                              <img src = {gigLogo} className='rounded-full'/>
                              <div className='w-full p-3 '>
                              <Typography variant='h6'>{e.name}</Typography>
                              <p className='medium-size'>{e.message}</p>
                          </div>
                          </div>
                         
                          <div className=' w-full flex justify-end items-center p-2 '>
                              <p className='font-bold cursor-pointer'>View Profile</p>
                              {/* <Typography variant='h6'>{e.company}</Typography> */}
                          </div>
                          {/* <div className='w-full  p-3 '>
                              <p className='medium-size'>ID Number</p>
                              <Typography variant='h6'>{e.id}</Typography>
                          
                          </div> */}
                         
                         



                        </div>)}



                   
    </div>
  );
}

export default ManageRiders;
