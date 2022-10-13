
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

function WallCards(props) {
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
      <Card className=' text-black text-center' sx={{ minWidth: 280, minHeight:120, backgroundColor:'#EBEBEB' }}>
      <CardContent>
      <div className="flex pb-2" style={{backGroundColor:'#EBEBEB'}}>
            <img src = {gigLogo}/>
            <div className="ml-2 text-left" style={{backGroundColor:'#EBEBEB'}}>
            <p className='medium-size cardhead'>Name</p>
            <Typography variant='h6'>Taiwo Daniel</Typography>
            </div>
    </div>
       
        <Divider />

        <div className='w-4/5 '>
            <div className="flex justify-between text-left pt-2">
                <div className=" " style={{backGroundColor:'#EBEBEB'}}>
                <p className='medium-size cardhead'>Company</p>
                <Typography className='text-sm font-bold' variant=''>GIG Logistics</Typography>
                </div>
                <div className="" style={{backGroundColor:'#EBEBEB'}}>
                <p className='text-ssm cardhead'>Contact</p>
                <Typography variant='' className='text-sm font-bold' >09013417032</Typography>
                </div>
            </div>
        </div>

        <div className='flex justify-between mt-3'>
            <Button className='px-10 py-1 ' color='primary' >Verify</Button>
            <Button className='px-10 py-1 bg-transparent text-cardhead text-cardhead-border'>Decline</Button>
        </div>
        
       
      </CardContent>
      
        {/* <Button size="small">Learn More</Button> */}
    </Card>
    </div>
  );
}

export default WallCards;
