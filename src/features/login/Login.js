
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

// import ReactDOM from 'react-dom';
// import trustedBy1 from './images/Vector.png'
import trustedBy2 from 'images/Rectangle 7.png'
import trustedBy3 from 'images/Rectangle 106.png'
// import LoginHeader from './LoginHeader';
// import trustedBy3 from './images/trustedBy-3.png'
// import trustedBy4 from './images/trustedBy-4.png'
import { Button, Input, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Login(props) {
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(event)
  };
  const history = useNavigate();


  const redirect = () => {

    history('/signup-client');
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
      // redirect()

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
    // <div>
    //  {/* <Typography variant="h6">Hi</Typography> */}
    //   <form onSubmit={formik.handleSubmit}>
    //     <TextField
    //       label="Username"
    //       {...getTextFieldFormikProps(formik, "username")}
    //     />
    //     <PasswordTextField
    //       label="Password"
    //       {...getTextFieldFormikProps(formik, "password")}
    //     />
    //     <Button type="submit">Submit</Button>
    //   </form>
    // </div>
    <div className=' '>
      <LoginHeader />
      <div className='flex justify-between text-center'>
        <div className='p-100' style={{ paddingLeft: '', paddingRight: '', minWidth: '40%', maxWidth: '80%', }}>
          <div className='flex-vertical' >
            <Typography variant='h3' className='m-b-60'>Welcome Back</Typography>


            <form onSubmit={formik.handleSubmit}>

              <TextField
                className='w-full'
                placeholder='Enter your username'
                // onChange={handleChange}
                //     onChange={(e)=>{
                //   alert('k')
                //   // console.log(e)
                //   // localStorage.setItem ('location', e.target.value)
                // }}
                name="username"
                {...getTextFieldFormikProps(formik, "username")}
              />

              <TextField
                className='w-full my-10'
                placeholder='Enter your Password'
                // onChange={handleChange}
                //     onChange={(e)=>{
                //   alert('k')
                //   // console.log(e)
                //   // localStorage.setItem ('password', e.target.value)
                // }}
                name="password"
                {...getTextFieldFormikProps(formik, "password")}
              />
              {/* <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          // inputProps={{ 'aria-label': 'Without label' }}
          name="Location"
          {...getTextFieldFormikProps(formik, "location")}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select> */}

              {/* <Input placeholder='Location' className='m-b-20'/> */}
              <div className="text-white m-b-30 mt-20  " >
                <Button className='p-3 w-full' type='submit' color='tetiary'
                // onClick={() => localStorage.setItem('type', 'CLIENT')}
                // className=' '
                >
                Continue
              </Button>
              </div>
              {/* <div className='login-bck w-100'><Button className='w-100' >Continue</Button></div> */}
              {/* <div className="secondary w-100"><Button type='submit'
                className='m-b-60 w-100'
                onClick={() => localStorage.setItem('type', 'FREELANCER')}
              >
                Sign up as a freelancer
              </Button></div> */}
              {/* <div className='login-bck w-100'><Button className='w-100' >Continue</Button></div> */}
            </form>


            <a href="">
              <h2 className='size-11 m-t-40'>Already a Member? <b>Log In</b></h2>
            </a>
          </div>
        </div>
        <div className='relative flex-align flex-center w-50' style={{ minHeight: '100%', position: 'relative', backgroundColor: '#F6F6F6', }}>
          <div className='two-circles relative' style={{ position: 'relative' }}></div>
          <img src={trustedBy3} className='' style={{ position: 'absolute', top: '50%', height: '49%', width: '98.8%' }} />
          {/* <div className='' style={{width:'100px', height:'50px', ottomLeftRadius:'100%',ottomRightRadius:'100%', position:'absolute', bottom:'0px', opColor:'blue'}}></div> */}
        </div>

      </div>
    </div>
  );
}

export default Login;
