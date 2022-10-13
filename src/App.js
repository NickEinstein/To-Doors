import { lazy } from "react";
import "./App.css";
import AppThemeProvider from "AppThemeProvider";
import { Icon, IconButton } from "@mui/material";
import { SnackbarProvider } from "notistack";
import { notistackRef } from "constants/RefConstants";
import Suspense from "common/Suspense";
import useAuthUser from "hooks/useAuthUser";

function App() {
  const authUser = useAuthUser();

  return (
    <AppThemeProvider>
      <SnackbarProvider
        ref={notistackRef}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
        preventDuplicate
        action={(key) => (
          <IconButton
            onClick={() => {
              notistackRef.current.closeSnackbar(key);
            }}
            color="inherit"
            size="small"
          >
            <Icon>close</Icon>
          </IconButton>
        )}
      >
        <Suspense>
          {/* { */}
            {/* // !!authUser?.accessToken &&
            // localStorage.getItem('authUser') == 'true' && */}
            <AppProtected /> 
            <AppPublic />
          {/* } */}
        </Suspense>
      </SnackbarProvider>
    </AppThemeProvider>
  );
}

export default App;

const AppPublic = lazy(() => import("./AppPublic"));
const AppProtected = lazy(() => import("./AppProtected"));
