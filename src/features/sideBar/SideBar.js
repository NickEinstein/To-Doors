import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { BsPeople } from "react-icons/bs";
import MailIcon from "@mui/icons-material/Mail";
import message from "images/message.png";
import messages from "images/messages.png";
import companies from "images/lifebuoy.png";
import dashboard from "images/category-2.png";
import trips from "images/routing.png";
import rider from "images/profile-2user.png";
import map from "images/map.png";
import logouts from "images/logout.png";
import LoginHeader from "common/LoginHeader";
import { RouteEnum } from "constants/RouteConstants";
import { useNavigate } from "react-router-dom";
import { Logout } from "@mui/icons-material";

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  const history = useNavigate();

  const [outcasts, setOutcasts] = React.useState([
    { name: "Logout", linx: RouteEnum.HOME, image: logouts },
  ]);

  const [pat, setPat] = React.useState([
    {
      name: "Dashboard",
      d: RouteEnum.DASHBOARD,
      image: dashboard,
      color: true,
    },
    {
      name: "Manage Companies",
      d: RouteEnum.MANAGE_COMPANIES,
      image: companies,
      color: false,
    },
    {
      name: "Manage riders",
      d: RouteEnum.MANAGE_RIDERS,
      image: rider,
      color: false,
    },
    { name: "Trips", d: RouteEnum.TRIPS, image: trips, color: false },
    { name: "Maps", d: RouteEnum.MAPS, image: map, color: false },
    // {name:'Reviews', d:RouteEnum.MANAGE_COMPANIES},
    { name: "Reviews", d: "", image: message, color: false },
    { name: "Support", d: RouteEnum.SUPPORT, image: messages },

    // {name:'Support', d:RouteEnum.SUPPORT}
  ]);

  const redirect = (push) => {
    console.log(push);
    history(push);
    // logout()
  };

  const logout = (push) => {
    localStorage.removeItem("il");
    console.log('hi')
    history(push);
  };

  // const pat =

  const changeColorOnActive = (num) => {
    let k = pat.map((e, index) => ({
      name: e.name,
      d: e.d,
      image: e.image,
      color: num==index ? true: false,
    }));

    

    setPat(k);
  };

  return (
    <Box sx={{ display: "flex", backgroundColor: "#1E1E1E" }}>
      {/* <CssBaseline /> */}
      {/* <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {/* <Toolbar /> */}
        <div className="px-3 py-5">
          <LoginHeader />
        </div>
        {/* <Divider /> */}
        <List>
          {pat.map((text, index) => (
           
            <ListItem
              style={{
                backgroundColor: text.color ? "#0C3BAA" : "",
                color: text.color ? "white" : "",
              }}
              // inkBarStyle={{ background: "yellow" }}
              key={text.name}
              disablePadding
            >
              <ListItemButton
                onClick={() => {
                  redirect(text.d);
                  changeColorOnActive(index);
                }}
              >
                <ListItemIcon>
                  {index === 2 ? (
                    <BsPeople fontSize={24} />
                  ) : (
                    <img src={text.image} />
                  )}
                </ListItemIcon>
                <ListItemText primary={text.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {outcasts.map((text, index) => (
            <ListItem
              className={index % 2 == 0 ? "mt-36" : ""}
              key={text.name}
              disablePadding
            >
              <ListItemButton
                onClick={() =>
                  logout(text.linx) 
                }
              >
                <ListItemIcon>
                  <img src={text.image} />
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                </ListItemIcon>
                <ListItemText primary={text.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
