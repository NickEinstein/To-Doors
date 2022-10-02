import React,{useState} from 'react';
import UserApi from "apis/UserApi";
import { useFormik } from "formik";
import * as yup from "yup";
// import { useSnackbar } from "notistack";
// import { Button, TextField, Typography } from "@mui/material";
// import PasswordTextField from "common/PasswordTextField";
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

const SignupClient = (props) => {
    const  history  = useNavigate();
    // const email = useemail()
const { count}= props.payload
   
    const redirect = ()=>{

        history('/signup-client');
    }
   
        // const [age, setAge] = React.useState('');
        // const handleChange = (event) => {
        //   setAge(event.target.value);
        // };
      
        const authUser = useAuthUser();
      
        // const { enqueueSnackbar } = useSnackbar();
        // const [loginMuation, loginMutationResult] = UserApi.useLoginMutation();
      
        const formik = useFormik({
            initialValues: {
              email_address: "",
              // password: "",
            },
            validationSchema: yup.object({
              email: yup.string().trim().required(),
              // password: yup.string().label("Username").trim().required(),
            }),
            onSubmit: async (values) => {
                props.payloadController({
                    ...props.payload,
                    email_address:values.email,
                     count: count + 1

                })
                // redirect()
        
              // try {
              //   // const data = await loginMuation({ data: values }).unwrap();
              //   // TODO extra login
              //   redirect()
              //   enqueueSnackbar("Logged in successful", { variant: "success" });
              // } catch (error) {
              //   enqueueSnackbar(error?.data?.message, "Failed to login", {
              //     variant: "error",
              //   });
              // }
            },
          });
        
    
    // console.log(localStorage.getItem ('type'))
    // console.log(localStorage.getItem ('location'))


   
    return (
        <div className=' '>

            
           {/* <LoginHeader/> */}
           <div className='flex justify-between'>
                <div className='text-center p-100 w-1/2 ' >
                    <div className='flex-vertical' >
       <div className='w-3/4'>
                    <Typography variant='h4' className='m-b-50'>{'Join Softwrk'}</Typography>

           <form onSubmit={formik.handleSubmit}>
           
                                    <TextField placeholder='Enter your Email' className='w-full'
                                    
                                     {...getTextFieldFormikProps(formik, "email")}
                                    />
                                    <div className='m-t-20 w-100'>
                                        <Button type='submit' className='w-full' >Continue</Button>
                                    </div>
           
                                    <div style={{padding:'60px 0px',  marginBottom:'80px'}}>
                                        {/* <h3 className='p-30-0'>---------  - OR -  ---------</h3>
                                        <Button htmlType='' className='m-b-20 w-100'>Sign in with Google</Button>
                                        <Button htmlType=''className='m-b-60 w-100'>Sign in with Apple</Button>
                                        <a href="">
                                            <h2 className='size-11 m-t-0'>Already a Member? <b>Log In</b></h2>
                                        </a> */}
                                    </div>
                            </form>
           
       </div>  
                    </div>
                </div>
                <div className='relative flex-align flex-center w-50' style={{minHeight:'100%', position:'relative', backgroundColor:'#F6F6F6',}}>
                <div className='two-circles relative' style={{position:'relative'}}></div>
                <img src ={trustedBy3} className='' style={{position:'absolute', top:'50%', height:'49%', width:'98.8%' }}/>
                    {/* <div className='' style={{width:'100px', height:'50px', ottomLeftRadius:'100%',ottomRightRadius:'100%', position:'absolute', bottom:'0px', opColor:'blue'}}></div> */}
                </div>

           </div>
        </div>
    )
}
export default SignupClient;
