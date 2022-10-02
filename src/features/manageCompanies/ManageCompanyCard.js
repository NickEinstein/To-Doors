
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
import gigLogo from 'images/Ellipse 56.png'

// import { RouteEnum } from "constants/RouteConstants";
// import ReactDOM from 'react-dom';
// import trustedBy1 from './images/Vector.png'
import trustedBy2 from 'images/Rectangle 7.png'
import trustedBy3 from 'images/Rectangle 106.png'
// import LoginHeader from './LoginHeader';
// import trustedBy3 from './images/trustedBy-3.png'
// import trustedBy4 from './images/trustedBy-4.png'
import { Button, Card, CardActions, CardContent, Input, Divider, Select, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function ManageCompanyCard(props) {
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
   
    <div className=''>
      <Card  className=' text-black text-center' sx={{ minWidth: 325, minHeight:120, backgroundColor:'#EBEBEB' }}>
      
      <CardContent>
      <div onClick={props.handleShow} class="flex pb-2 cursor-pointer" style={{backGroundColor:'#EBEBEB'}}>
            <img src = {gigLogo}/>
            <div class="ml-2 text-left" style={{backGroundColor:'#EBEBEB'}}>
            <Typography variant='h6'>GIG Logistics</Typography>
            <p className='medium-size cardhead'>Apapa, Lagos</p>
            </div>
    </div>
       
        <Divider />

        <div className='w-4/5 '>
            <div class=" text-left pt-2">

                <div className=''>

                    <div className=' relative flex'>
                        <img className='absolute' style={{width:"30px", }}  src = {gigLogo}/>
                        <img className='absolute' style={{width:"30px", left:'20px'}} src = {gigLogo}/>
                    </div>
                    <div>
                        <Typography className='ml-14 mt-1 font-bold text-sm'>33 Riders</Typography>
                    </div>

                </div>
                <div class="mt-4 " style={{backGroundColor:'#EBEBEB'}}>
                <Typography className='text-sm font-bold text-cardhead-blue'>NGN 20,000 Earned</Typography>
                <p className='medium-size cardhead'>Since Aug 29, 2022</p>
                </div>
               
            </div>
        </div>

        
        
       
      </CardContent>
      
        {/* <Button size="small">Learn More</Button> */}
    </Card>
    </div>
  );
}

export default ManageCompanyCard;
