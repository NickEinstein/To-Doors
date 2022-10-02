
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
import { Button, TableBody, TableCell, Table, Input, TableContainer, Paper, TableHead, TableRow, Typography, } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import WallCards from 'common/WallCards';
import TripsMap from './TripsMap';
import { selectRowsFn } from '@tanstack/react-table';
// import ManageCompanyCard from '.features/manageCompanies/ManageCompanyCard';
// import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import { makeStyles } from '@mui/styles';
import { RiArrowLeftSLine } from 'react-icons/ri';


function Trips(props) {
  const [age, setAge] = React.useState('');
  const [show, setShow] = React.useState(false);
  const [route, setRoute] = React.useState({});
  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(event)
  };
  const history = useNavigate();


  const redirect = () => {

    history('/complete-signUp');
  }

  function createData(origin, destination, rider, orderId, status, fee, departureDate, arrivalDate, timeDelay) {
    return { origin, destination, rider, orderId, status, fee, departureDate, arrivalDate, timeDelay };
  }

  const rows = [
    createData('Ikeja, Lagos', 'Apapa, Lagos', 'Taiwo Daniel', 'WXHDGDJKGG', 'Delivered', 'N200,000', '11 Sept. 9:00am', '15 Sept. 1:00am', '-'),
    createData('Lekki, Lagos', 'Apapa, Lagos', 'Taiwo Daniel', 'WXHDGDJKGG', 'Delivered', 'N200,000', '11 Sept. 9:00am', '15 Sept. 1:00am', '-'),
    createData('Yaba, Lagos', 'Apapa, Lagos', 'Taiwo Daniel', 'WXHDGDJKGG', 'Delivered', 'N200,000', '11 Sept. 9:00am', '15 Sept. 1:00am', '-'),
    createData('Sabo, Kaduna', 'Apapa, Lagos', 'Taiwo Daniel', 'WXHDGDJKGG', 'Delivered', 'N200,000', '11 Sept. 9:00am', '15 Sept. 1:00am', '-'),
    // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    // createData('Eclair', 262, 16.0, 24, 6.0),
    // createData('Cupcake', 305, 3.7, 67, 4.3),
    // createData('Gingerbread', 356, 16.0, 49, 3.9),
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

  const handleShow = (e) => {
    setShow(true)
    setRoute(e)
  }


  // if (authUser.accessToken) {
  //   return <Navigate to={RouteEnum.HOME} />;
  // }
  //  const useRowStyles = makeStyles({
  //   root: ({ open }) => ({
  //     backgroundColor: "pink"
  //   }),
  //   tableBody: {
  //     "& > :not(:last-child)": {
  //       borderBottom: "25px solid red"
  //     }
  //   }
  // });

  // const classes = useRowStyles();

  return (

    <div>
{!show&&<div>
        <div class="flex justify-between w-1/12 mb-8 items-center" style={{ backGroundColor: '#1E1E1E' }}>
          {/* <img src = {gigLogo}/> */}
          <Typography variant='h5' className='font-bold text-blue-800' >
            Trips
  
          </Typography>
          <div class="flex justify-between w-3/5">
            <Button color='secondary' className='ml-4'>Confirmed</Button>
            <Button className='text-neutral-800 ml-3' color='buttonhead'>Pending</Button>
            <Button color='buttonhead' className='text-neutral-800 ml-3'>Declined</Button>
          </div>
        </div>
  
  
  
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650, backgroundColor: '#EBEBEB', }} aria-label="simple table">
            <TableHead sx={{ marginBottom: '10px', backgroundColor: '#EBEBEB', }} className='mb-4'>
              <TableRow sx={{ marginBottom: 5, backgroundColor: '#EBEBEB', }} >
                <TableCell sx={{ marginBottom: 5, backgroundColor: '#EBEBEB', }}>Origin</TableCell>
                <TableCell sx={{ marginBottom: 5, backgroundColor: '#EBEBEB', }}>Destination</TableCell>
                <TableCell sx={{ marginBottom: 5, backgroundColor: '#EBEBEB', }} align="right">Rider</TableCell>
                <TableCell sx={{ marginBottom: 5, backgroundColor: '#EBEBEB', }} align="right">Order ID&nbsp;(g)</TableCell>
                <TableCell sx={{ marginBottom: 5, backgroundColor: '#EBEBEB', }} align="right">Status&nbsp;(g)</TableCell>
                <TableCell sx={{ marginBottom: 5, backgroundColor: '#EBEBEB', }} align="right">Fee&nbsp;(g)</TableCell>
                <TableCell sx={{ marginBottom: 5, backgroundColor: '#EBEBEB', }} align="right">Departure Date&nbsp;(g)</TableCell>
                <TableCell sx={{ marginBottom: 5, backgroundColor: '#EBEBEB', }} align="right">Arrival Date&nbsp;(g)</TableCell>
                <TableCell sx={{ marginBottom: 5, backgroundColor: '#EBEBEB', }} align="right">Action&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody >
              {rows.map((row) => (
                <TableRow
                  key={row.name}
  
                  sx={{ '&:last-child td, &:last-child th': { border: 0 }, marginTop: 10, backgroundColor: '', }}
                >
                  <TableCell component="th" scope="row">
                    {row.origin}
                  </TableCell>
                  <TableCell align="right">{row.destination}</TableCell>
                  <TableCell align="right">{row.rider}</TableCell>
                  <TableCell align="right">{row.orderId}</TableCell>
                  <TableCell align="right">{row.status}</TableCell>
                  <TableCell align="right">{row.fee}</TableCell>
                  <TableCell align="right">{row.departureDate}</TableCell>
                  <TableCell align="right">{row.arrivalDate}</TableCell>
                  <TableCell align="right"><Button onClick={() => { handleShow(row) }}>View Route</Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
</div>}


      {show &&
        <div>
          <div>
            <div onClick={() => setShow(!show)} className='flex items-center mb-8 cursor-pointer w-16 p-2'>
              <div style={{ border: '1px solid #494949' }} className='border-solid w-5 mr-2 rounded h-5 flex justify-center items-center'>
                <RiArrowLeftSLine className='' style={{ fontSize: '22px', color: "#494949" }} />
              </div>
              <p style={{ color: '#494949' }} className='text-base'>Back</p>
            </div>
          </div>
</div>
      }
          <div className='w-full flex items-center justify-center'>
            <TripsMap route={route} width={show} />
          </div>
        
    </div>
  );
}

export default Trips;
