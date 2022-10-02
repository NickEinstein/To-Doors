
import React,{} from 'react';
// import UserApi from "apis/UserApi";
import { useFormik } from "formik";
import * as yup from "yup";
// import { useSnackbar } from "notistack";
// import { Button, TextField, Typography } from "@mui/material";
// import PasswordTextField from "common/PasswordTextField";
import { getTextFieldFormikProps } from "utils/FormikUtils";
// import useAuthUser from "hooks/useAuthUser";
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
import { Button,TextField, Typography } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

function SignupLocation(props) {
//   const [payHolder, setPayHolder] = React.useState('');
  const [type, seTtype] = React.useState('');
const {count}= props.payload

//   const handleChange = (event) => {
//     alert('go')
//     console.log(event.target.value)
//     setPayHolder({
//         ...props.payload,
//         location:event.target.value
//     })
//     props.payloadController(payHolder)

//     // props.payload.location = event.target.value
//     // setAge(event.target.value);
//     console.log(event)
//   };

//   const history = useNavigate();


//   const redirect = ()=>{

//     history('/signup-client');
// }




//   const authUser = useAuthUser();

//   const { enqueueSnackbar } = useSnackbar();
//   const [signupMuation, signupMutationResult] = UserApi.useSignupMutation();

  const formik = useFormik({
    initialValues: {
      location: "",
      // password: "",
    },
    validationSchema: yup.object({
      location: yup.string().trim().required(),
      // password: yup.string().label("Username").trim().required(),
    }),
    onSubmit: async (values) => {
       
        props.payloadController({
            ...props.payload,
            location:values.location,
            type:type,
            count: count + 1
        })
      // localStorage.setItem('location', values.location)
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


  // if (authUser.accessToken) {
  //   return <Navigate to={RouteEnum.HOME} />;
  // }

  return (
    
    <div className=' '>
    {/* <LoginHeader/> */}
    <div className='flex justify-between text-center'>
         <div className='p-100' style={{paddingLeft:'',paddingRight:'', minWidth:'40%', maxWidth:'80%', }}>
             <div className='flex-vertical' >
                 <Typography variant='h3' className='m-b-60'>Join Softwork</Typography>
                 
                 
       <form onSubmit={formik.handleSubmit}>
       
       <TextField
       className='w-full'
       placeholder='Enter your Location'
        //   onChange={(e)=>handleChange(e)}
         
          name="Location"
          {...getTextFieldFormikProps(formik, "location")}
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

                 <div className="secondary mt-20 w-100" ><Button type='submit' color='secondary'
                  onClick={()=>{
                    seTtype('CLIENT')
                    localStorage.setItem('type', 'CLIENT')}}
                   className='m-b-30 w-100 '>
                    Sign up as a client
                   </Button></div>
                 <div className="secondary w-100"><Button type='submit' 
                 className='m-b-60 w-100'
                 onClick={()=>{
                    seTtype('FREELANCER')
                    
                    localStorage.setItem('type', 'FREELANCER')}}
                 >
                  Sign up as a freelancer
                 </Button></div>
       </form>
                 
                 
                 <a href="/login">
                     <h2 className='size-11 m-t-40'>Already a Member? <b>Log In</b></h2>
                 </a>
             </div>
         </div>
        <div className='relative flex-align flex-center w-50' style={{minHeight:'100%', position:'relative', backgroundColor:'#F6F6F6',}}>
         <div className='two-circles relative' style={{position:'relative'}}></div>
         <img src ={trustedBy3} alt='cirle' className='' style={{position:'absolute', top:'50%', height:'49%', width:'98.8%' }}/>
        </div>

    </div>
 </div>
  );
}

export default SignupLocation;
