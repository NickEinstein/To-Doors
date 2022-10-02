
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
import background from 'images/background.png'

// import { RouteEnum } from "constants/RouteConstants";
// import ReactDOM from 'react-dom';
// import trustedBy1 from './images/Vector.png'
import trustedBy2 from 'images/Rectangle 7.png'
import trustedBy3 from 'images/Rectangle 106.png'
// import LoginHeader from './LoginHeader';
// import trustedBy3 from './images/trustedBy-3.png'
// import trustedBy4 from './images/trustedBy-4.png'
import { Button, Card, CardActions, CardContent, Input, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import WallCards from 'common/WallCards';

function Signup(props) {
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(event)
  };
  const history = useNavigate();


  const redirect = () => {

    history('/complete-signUp');
  }

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
         <Typography  variant='h5'  className='font-bold' >
            Welcome Back

            </Typography>
        <div className='flex justify-between mt-4'>
          <div>
            <WallCards green={true} name='Total Riders' count='20'/>
          </div>
          <div>
            <WallCards name='Total Raiders' count='116,019'/>
          </div>
          <div>
            <WallCards name='Rides in progress' count='13'/>
          </div>
          <div>
            <WallCards name='Active vehicles' count='8'/>
          </div>
          <div>
            <WallCards name='Earnings' count='3,000,000'/>
          </div>
        </div>

        <Typography  variant='h5'  className='font-bold mt-8 text-blue-800' >
            Verify Riders

            </Typography>

            <div class="flex w-2/3 mt-4">
                <TextField className='w-full'  placeholder='Search with Email address, Phone number, Name '/>
                <Button className='p-3 w-1/3 ml-4'>Search</Button>
            </div>
    </div>
  );
}

export default Signup;
