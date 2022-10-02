import React,{useState} from 'react';
// import SignupApi from "apis/SignupApi";
import UserApi from "apis/UserApi";
import { useFormik } from "formik";
import * as yup from "yup";
import { useSnackbar } from "notistack";
import PasswordTextField from "common/PasswordTextField";
import { getTextFieldFormikProps } from "utils/FormikUtils";
import useAuthUser from "hooks/useAuthUser";
// import { Navigate } from "react-router-dom";
// import { RouteEnum } from "constants/RouteConstants";
// import LoginHeader from 'common/LoginHeader';

// import ReactDOM from 'react-dom';
// import trustedBy1 from './images/Vector.png'
// import trustedBy2 from 'images/Rectangle 7.png'
import trustedBy3 from 'images/Rectangle 106.png'
// import LoginHeader from './LoginHeader';
// import trustedBy3 from './images/trustedBy-3.png'
// import trustedBy4 from './images/trustedBy-4.png'
import { Button, Input, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';




const FindYourPerfectJob = ({payload}) => {
  // const {type, email, location} = payload

        const [username, setUsername] = useState('type')
        const [namez, setName] = useState('')
        const [comez, setcome] = useState('')
        const [passwordz, setPassword] = useState('')
        const [confirmPasswordz, setConfirmPassword] = useState('')
        const [errorMsg, setErrorMsg] = useState('')



        
    // const history  = useNavigate();

    // const openNotificationWithIcon = (type, description, title) => {
    //     notification[type]({
    //       message: title,
    //       description: description
    //     });
    //   };

      // const [age, setAge] = React.useState('');
      // const handleChange = (event) => {
      //   setAge(event.target.value);
      // };
      const history = useNavigate();
    
    
      const redirect = ()=>{
    
        history('/signup');
    }
    
      const authUser = useAuthUser();
    
      const { enqueueSnackbar } = useSnackbar();
  const [signupMuation, signupMutationResult] = UserApi.useSignupMutation();
//   const [loginMuation, loginMutationResult] = UserApi.useLoginMutation();
        // console.log(type)
    
      const formik = useFormik({
        enableReinitialize:true,
        // enableReinitialize = {true},
        initialValues: {
          firstname: "",
          // email_address: 'f',
          lastname: "",
          username: "",
          password: "",
          // location: 'kn',
          // type: username,
          // confirmPassword: "",
        },
        validationSchema: yup.object({
          username: yup.string().trim().required(),
          password: yup.string().trim().required(),
        //   confirmPassword: yup.string().trim().required(),
          firstname: yup.string().trim().required(),
          lastname: yup.string().trim().required(),
          // email_address: yup.string().trim().required(),
          // location: yup.string().trim().required(),
          // type: yup.string().trim().required(),
        //   password: yup.string().label("Username").trim().required(),
        }),
        onSubmit: async (values) => {
            console.log({...values,...payload})
          try {
            const data = await signupMuation({ data: {...values,...payload} }).unwrap();
            // TODO extra login
            enqueueSnackbar("Logged in successful", { variant: "success" });
          } catch (error) {
            enqueueSnackbar(error?.data?.message, "Failed to login", {
              variant: "error",
            });
          }
        },
      });
    
    

    
    const signIn = ()=>{
       
}
          

    
    return (
        <div className=' '>
           {/* <LoginHeader/> */}
           <div className='flex justify-between'>
                <div className='w-1/2 px-40 py-20 text-center' >
                    <div className='flex-vertical' >
                        <Typography variant='h4' className='mb-10'>Find your perfect job</Typography>
                        <Typography variant='h6' className=' pb-10'>This will only take a few minutes</Typography>
                        <Typography variant='h6' className='mb-16 bold'>Enter Information</Typography>
                        
                        
                      <form  onSubmit={formik.handleSubmit}>
                        <TextField 
                        // className=''
                          name="firstname "
                          {...getTextFieldFormikProps(formik, "firstname")}
                           placeholder='First name' className='m-b-20 w-full'/>
                            <TextField 
                          name="lastname"
                          {...getTextFieldFormikProps(formik, "lastname")}
                           placeholder='Last name' className='m-b-20 w-full'/>
                        <TextField 
                          name="username"
                          {...getTextFieldFormikProps(formik, "username")}
                           placeholder='Choose a username' className=' w-full'/>
                        <p className='m-b-20' style={{fontSize:"7px", margin:'5px', textAlign:'left'}}>Make it catchy, this will be displayed to your employer</p>
                        <TextField 
                        type='password'
                        name="password"
                          {...getTextFieldFormikProps(formik, "password")}
                          placeholder='Choose a password' className='w-full' style={{textAlign:'left'}}/>
                        <p className='m-b-20' style={{fontSize:"7px", margin:'5px', textAlign:'left'}}>8 characters or longer. Combine upper and lowercase letters and numbers.</p>
                        <TextField
                        type='password'
                        name="confirmPassword"
                          {...getTextFieldFormikProps(formik, "confirmPassword")}
                            placeholder='Confirm Password' className='m-b-20 w-full'/>
                        {/* <Button className='m-b-20'>Sign up as a client</Button> */}
                        {/* <Button className='m-b-60'>Sign up as a freelancer</Button> */}
                        <p className='nine-size my-10 w-full'>By pressing “Create account”, you agree to our <a className='nine-size bold'>Terms & Conditions</a></p>

                               <Button className='w-full' type="submit">Create Account</Button>
                        {/* <div className='login-bck w-100 m-t-40'><Button type='submit' onClick={signIn} className='w-100' >Create Account</Button></div> */}
                        
                </form>
                        
                        <a href="">
                            <h2 className='medium-size m-t-20'>Already a Member? <b>Log In</b></h2>
                        </a>
                    </div>
                </div>
                <div className='relative flex items-center justify-center w-50' style={{minHeight:'100%', position:'relative', backgroundColor:'#F6F6F6',}}>
                <div className='two-circles relative'></div>
                <img src ={trustedBy3} className='' style={{position:'absolute', top:'50%', height:'49%', width:'98.8%' }}/>
                    {/* <div className='' style={{width:'100px', height:'50px', ottomLeftRadius:'100%',ottomRightRadius:'100%', position:'absolute', bottom:'0px', opColor:'blue'}}></div> */}
                </div>

           </div>
        </div>
    )
}
export default FindYourPerfectJob;
