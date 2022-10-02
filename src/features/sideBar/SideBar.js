import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import LoginHeader from 'common/LoginHeader';
import { RouteEnum } from "constants/RouteConstants";
import { useNavigate } from 'react-router-dom';
import { Logout } from '@mui/icons-material';

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  const history = useNavigate();


  const redirect = (push) => {
console.log(push)
    history(push);
  }

  const logout = (push)=>{
localStorage.removeItem('il')
history(push);


  }

  const pat = [
    {name:'Dashboard',d:RouteEnum.DASHBOARD}, 
    {name:'Manage Companies', d:RouteEnum.MANAGE_COMPANIES}, 
    {name:'Manage riders', d:RouteEnum.MANAGE_RIDERS}, 
    {name:'Trips', d:RouteEnum.TRIPS},
    {name:'Maps', d:RouteEnum.MAPS},
    // {name:'Reviews', d:RouteEnum.MANAGE_COMPANIES},
    {name:'Reviews', d:''},
    // {name:'Support', d:RouteEnum.SUPPORT}
  ]
  return (
    <Box sx={{ display: 'flex', backgroundColor:'#1E1E1E' }}>
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
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {/* <Toolbar /> */}
        <div className='px-3 py-5'><LoginHeader/></div>
        {/* <Divider /> */}
        <List>
          {pat.map((text, index) => (
            <ListItem key={text.name} disablePadding>
              <ListItemButton onClick={()=>redirect(text.d)}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {[{name:'Support' ,linx:RouteEnum.SUPPORT,},
          {name:'Logout' ,linx:RouteEnum.HOME}
          
        ].map((text, index) => (
            <ListItem className={index % 2 !== 0?'mt-36':''}  key={text.name}  disablePadding>
              <ListItemButton onClick={()=>index % 2 !== 0?logout(text.linx):redirect(text.linx)}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
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
