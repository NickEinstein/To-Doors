import { lazy } from "react";
import { Container, Toolbar, Typography, useMediaQuery } from "@mui/material";
import { MediaQueryBreakpointEnum } from "constants/Global";
import { Navigate, useRoutes } from "react-router-dom";
import Suspense from "common/Suspense";
import { configureRoutes } from "utils/RouteUtils";
import { RouteEnum } from "constants/RouteConstants";
import Box from '@mui/material/Box';
import SideBar from "features/sideBar/SideBar";

function AppProtected(props) {
  const islg = useMediaQuery(MediaQueryBreakpointEnum.lg);
  const ismd = useMediaQuery(MediaQueryBreakpointEnum.md);

  const routes = useRoutes(ROUTES);
  return (
    <>
      {/* <Container maxWidth="xl"> */}
      { 
      localStorage.getItem('il') &&
      <div className="flex ">
        <SideBar/>
        <Box
        className="p-8"
        component=""
        sx={{ flexGrow: 1, bgcolor: 'background.default', }}
      >
          <Suspense>{routes}</Suspense>

         </Box>
        
      </div>}

      {/* </Container> */}
    </>
  );
}

export default AppProtected;

const ROUTES = configureRoutes([
  {
    path: "*",
    element: lazy(() => import("features/home/Home")),

    // element: <Navigate to={RouteEnum.HOME} replace />,
  },
  {
    path: RouteEnum.DASHBOARD,
    element: lazy(() => import("features/dashboard/Dashboard")),
  },
  {
    path: RouteEnum.MANAGE_COMPANIES,
    element: lazy(() => import("features/manageCompanies/ManageCompanies")),
  },
  {
    path: RouteEnum.MANAGE_RIDERS,
    element: lazy(() => import("features/manageRider/ManageRiders")),
  },
  {
    path: RouteEnum.TRIPS,
    element: lazy(() => import("features/trips/Trips")),
  },
  {
    path: RouteEnum.MAPS,
    element: lazy(() => import("features/maps/Maps")),
  },
  {
    path: RouteEnum.SUPPORT,
    element: lazy(() => import("features/support/Support")),
  },
]);
