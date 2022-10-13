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
import ManageTripsTable from "./ManageTripsTable";
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
  TableBody,
  TableCell,
  Table,
  TextField,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  Typography,
  Badge,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import WallCards from "common/WallCards";
import TripsMap from "./TripsMap";
import { selectRowsFn } from "@tanstack/react-table";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

// import ManageCompanyCard from '.features/manageCompanies/ManageCompanyCard';
// import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import { makeStyles } from '@mui/styles';
import { RiArrowLeftSLine } from "react-icons/ri";
import { LocalizationProvider } from "@mui/x-date-pickers";
import ToDoorSearch from "common/ToDoorSearch";

function Trips(props) {
  const [age, setAge] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [route, setRoute] = React.useState({});
  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(event);
  };
  const history = useNavigate();

  const redirect = () => {
    history("/complete-signUp");
  };

  function createData(
    origin,
    destination,
    rider,
    orderId,
    status,
    fee,
    departureDate,
    arrivalDate,
    timeDelay
  ) {
    return {
      origin,
      destination,
      rider,
      orderId,
      status,
      fee,
      departureDate,
      arrivalDate,
      timeDelay,
    };
  }

  const rows = [
    createData(
      "Ikeja, Lagos",
      "Apapa, Lagos",
      "Taiwo Daniel",
      "WXHDGDJKGG",
      "Delivered",
      "N200,000",
      "11 Sept. 9:00am",
      "15 Sept. 1:00am",
      "-"
    ),
    createData(
      "Lekki, Lagos",
      "Apapa, Lagos",
      "Taiwo Daniel",
      "WXHDGDJKGG",
      "Delivered",
      "N200,000",
      "11 Sept. 9:00am",
      "15 Sept. 1:00am",
      "-"
    ),
    createData(
      "Yaba, Lagos",
      "Apapa, Lagos",
      "Taiwo Daniel",
      "WXHDGDJKGG",
      "Delivered",
      "N200,000",
      "11 Sept. 9:00am",
      "15 Sept. 1:00am",
      "-"
    ),
    createData(
      "Sabo, Kaduna",
      "Apapa, Lagos",
      "Taiwo Daniel",
      "WXHDGDJKGG",
      "Delivered",
      "N200,000",
      "11 Sept. 9:00am",
      "15 Sept. 1:00am",
      "-"
    ),
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

  const handleShow = (e) => {
    setShow(true);
    setRoute(e);
  };

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
      <ToDoorSearch />
      {!show && (
        <div>
          <div
            className="flex justify-between mb-8 items-center"
            style={{ backGroundColor: "#1E1E1E" }}
          >
            {/* <img src = {gigLogo}/> */}

            <div className="flex justify-between w-2/5">
              <Typography variant="h5" className="font-bold text-blue-800 ">
                Trips
              </Typography>
              <Button color="primary" className="ml-4 px-16">
                Confirmed
              </Button>
              <Badge badgeContent={4} color="error">
                <Button
                  className="text-neutral-800 ml-3 px-12"
                  color="buttonhead"
                >
                  Pending
                </Button>
              </Badge>{" "}
              <Button
                color="buttonhead"
                className="text-neutral-800 ml-5 px-16"
              >
                Declined
              </Button>
            </div>

            <div>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <div className="flex-between">
                  <DatePicker
                    className=" mr-8 w-full"
                    // label="Basic example"
                    // value={start_date}
                    onChange={(newValue) => {
                      // console.log(newValue)
                      // setWorkList({ ...workList, start_date: newValue });
                      // setStart_date(newValue);
                      // setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </div>
              </LocalizationProvider>
            </div>
          </div>

          <div
            sx={{ minWidth: 650, backgroundColor: "#EBEBEB" }}
            aria-label="simple table"
          >
            {/* <TableHead
              sx={{
                padding: "100px",
                backgroundColor: "#EBEBEB",
                border: "2px solid red",
              }}
              className="mb-4"
            >
              <TableRow sx={{ marginBottom: 5, backgroundColor: "#EBEBEB" }}>
                <TableCell sx={{ marginBottom: 5, backgroundColor: "#EBEBEB" }}>
                  Origin
                </TableCell>
                <TableCell sx={{ marginBottom: 5, backgroundColor: "#EBEBEB" }}>
                  Destination
                </TableCell>
                <TableCell
                  sx={{ marginBottom: 5, backgroundColor: "#EBEBEB" }}
                  align="right"
                >
                  Rider
                </TableCell>
                <TableCell
                  sx={{ marginBottom: 5, backgroundColor: "#EBEBEB" }}
                  align="right"
                >
                  Order ID&nbsp;(g)
                </TableCell>
                <TableCell
                  sx={{ marginBottom: 5, backgroundColor: "#EBEBEB" }}
                  align="right"
                >
                  Status&nbsp;(g)
                </TableCell>
                <TableCell
                  sx={{ marginBottom: 5, backgroundColor: "#EBEBEB" }}
                  align="right"
                >
                  Fee&nbsp;(g)
                </TableCell>
                <TableCell
                  sx={{ marginBottom: 5, backgroundColor: "#EBEBEB" }}
                  align="right"
                >
                  Departure Date&nbsp;(g)
                </TableCell>
                <TableCell
                  sx={{ marginBottom: 5, backgroundColor: "#EBEBEB" }}
                  align="right"
                >
                  Arrival Date&nbsp;(g)
                </TableCell>
                <TableCell
                  sx={{ marginBottom: 5, backgroundColor: "#EBEBEB" }}
                  align="right"
                >
                  Action&nbsp;(g)
                </TableCell>
              </TableRow>
            </TableHead> */}

            <div
              //   onClick={openBelow}
              style={{ border: "1px solid #DADADA" }}
              className=" cursor-pointer mt-2 flex border2 background-table min-h-[50%]"
            >
              <div className="w-[11.11%] text-center  px-3 py-3">
                <h6 className="font-bold text-[#454647]">Origin</h6>
                <Typography variant="h6"></Typography>
              </div>
              <div className="w-[11.11%] text-center  px-3 py-3">
                <h6 className="font-bold text-[#454647]">Destination</h6>
                <Typography variant="h6">{tableArray.company}</Typography>
              </div>
              <div className="w-[11.11%] text-center  px-3 py-3">
                <h6 className="font-bold text-[#454647]">Rider</h6>
                <Typography variant="h6">{tableArray.id}</Typography>
              </div>

              <div className="w-[11.11%] text-center  px-3 py-3">
                <h6 className="font-bold text-[#454647]">Order ID</h6>
              </div>
              <div className="w-[11.11%] text-center  px-3 py-3">
                <h6 className="font-bold text-[#454647]">Status</h6>
              </div>
              <div className="w-[11.11%] text-center  px-3 py-3">
                <h6 className="font-bold text-[#454647]">Fee</h6>
              </div>
              <div className="w-[11.11%] text-center  px-3 py-3">
                <h6 className="font-bold text-[#454647]">Departure Date</h6>
              </div>
              <div className="w-[11.11%] text-center  px-3 py-3">
                <h6 className="font-bold text-[#454647]">Arrival Date</h6>
              </div>
              <div className="w-[11.11%] text-center  px-3 py-3">
                <h6 className="font-bold text-[#454647]">Time Delay</h6>
              </div>
              <div className="w-[11.11%] text-center  px-3 py-3">
                <h6 className="font-bold text-[#454647]">Action</h6>
              </div>
            </div>
            <div className="mt-3 background-table">
              {rows.map((row) => (
                <div
                  className="flex"
                  key={row.name}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    marginTop: 10,
                    backgroundColor: "",
                  }}
                >
                  <div className="w-[11.11%] border3b px-3 py-3  text-center">
                    {row.origin}
                  </div>
                  <div className="w-[11.11%]  px-3 py-3  border3b text-center">
                    {row.destination}
                  </div>
                  <div className="w-[11.11%]  px-3 py-3  border3b text-center">
                    {row.rider}
                  </div>
                  <div className="w-[11.11%]  px-3 py-3  border3b text-center">
                    {row.orderId}
                  </div>
                  <div className="w-[11.11%]  px-3 py-3  border3b text-center">
                    <p className="bg-[#03732930] px-3 py-1 text-[#0C3BAA] font-semibold">
                      {row.status}
                    </p>
                  </div>
                  <div className="w-[11.11%]  px-3 py-3  border3b text-center">
                    {row.fee}
                  </div>
                  <div className="w-[11.11%]  px-3 py-3  border3b text-center">
                    {row.departureDate}
                  </div>
                  <div className="w-[11.11%]  px-3 py-3  border3b text-center">
                    {row.arrivalDate}
                  </div>
                  <div className="w-[11.11%]  px-3 py-3  border3b text-center">
                    -
                  </div>
                  <div className="w-[15%]  px-3 py-3  border3b text-center">
                    <Button
                      onClick={() => {
                        handleShow(row);
                      }}
                    >
                      View Route
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* <Table
            sx={{ minWidth: 650, backgroundColor: "#EBEBEB" }}
            aria-label="simple table"
          >
            <TableHead
              sx={{
                padding: "100px",
                backgroundColor: "#EBEBEB",
                border: "2px solid red",
              }}
              className="mb-4"
            >
              <TableRow sx={{ marginBottom: 5, backgroundColor: "#EBEBEB" }}>
                <TableCell sx={{ marginBottom: 5, backgroundColor: "#EBEBEB" }}>
                  Origin
                </TableCell>
                <TableCell sx={{ marginBottom: 5, backgroundColor: "#EBEBEB" }}>
                  Destination
                </TableCell>
                <TableCell
                  sx={{ marginBottom: 5, backgroundColor: "#EBEBEB" }}
                  align="right"
                >
                  Rider
                </TableCell>
                <TableCell
                  sx={{ marginBottom: 5, backgroundColor: "#EBEBEB" }}
                  align="right"
                >
                  Order ID&nbsp;(g)
                </TableCell>
                <TableCell
                  sx={{ marginBottom: 5, backgroundColor: "#EBEBEB" }}
                  align="right"
                >
                  Status&nbsp;(g)
                </TableCell>
                <TableCell
                  sx={{ marginBottom: 5, backgroundColor: "#EBEBEB" }}
                  align="right"
                >
                  Fee&nbsp;(g)
                </TableCell>
                <TableCell
                  sx={{ marginBottom: 5, backgroundColor: "#EBEBEB" }}
                  align="right"
                >
                  Departure Date&nbsp;(g)
                </TableCell>
                <TableCell
                  sx={{ marginBottom: 5, backgroundColor: "#EBEBEB" }}
                  align="right"
                >
                  Arrival Date&nbsp;(g)
                </TableCell>
                <TableCell
                  sx={{ marginBottom: 5, backgroundColor: "#EBEBEB" }}
                  align="right"
                >
                  Action&nbsp;(g)
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    marginTop: 10,
                    backgroundColor: "",
                  }}
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
                  <TableCell align="right">
                    <Button
                      onClick={() => {
                        handleShow(row);
                      }}
                    >
                      View Route
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table> */}
        </div>
      )}

      {/* <ManageTripsTable tableArray={tableArray} /> */}

      {show && (
        <div>
          <div>
            <div
              onClick={() => setShow(!show)}
              className="flex items-center mb-8 cursor-pointer w-16 p-2"
            >
              <div
                style={{ border: "1px solid #494949" }}
                className="border-solid w-5 mr-2 rounded h-5 flex justify-center items-center"
              >
                <RiArrowLeftSLine
                  className=""
                  style={{ fontSize: "22px", color: "#494949" }}
                />
              </div>
              <p style={{ color: "#494949" }} className="text-base">
                Back
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="w-full flex items-center justify-center">
        <TripsMap route={route} width={show} />
      </div>
    </div>
  );
}

export default Trips;
