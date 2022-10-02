import {
  AppBar,
  Avatar,
  Container,
  Icon,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { MediaQueryBreakpointEnum } from "constants/Global";
import useAuthUser from "hooks/useAuthUser";
import useToggle from "hooks/useToggle";

function AppProtectedHeader(props) {
  const ismd = useMediaQuery(MediaQueryBreakpointEnum.md);
  const authUser = useAuthUser();

  const [isDrawer, toggleDrawer] = useToggle();

  return (
    <>
      <AppBar>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton color="inherit" onClick={toggleDrawer}>
              <Icon>menu</Icon>
            </IconButton>
            <div className="flex-1" />
            <div className="flex items-center">
              <div className="font-merriweather">
                <Typography className="font-semibold font-inherit">
                  Musa Ahmad
                </Typography>
                <Typography
                  variant="body2"
                  className="font-inherit whitespace-nowrap"
                >
                  Admin
                </Typography>
              </div>
              <Avatar className="ml-4">M</Avatar>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </>
  );
}

export default AppProtectedHeader;

const DRAWER_WIDTH = 256;
