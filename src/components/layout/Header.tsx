import { IconButton, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";

import MenuIcon from "@mui/icons-material/Menu";
import { AccountCircle } from "@mui/icons-material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Navigation from "../Navigation";
import { useDispatch, useSelector } from "react-redux";
import { setRail } from "../../store/app";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.leavingScreen,
  })
}));
export default function Header() {
  const rail = useSelector((state) => state.app.rail);
  const dispatch = useDispatch();
  const handleDrawertoggle = () => {
    dispatch(setRail(!rail));
  };

  return (
    <AppBar position="fixed" open={rail}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleDrawertoggle}
        >
          <MenuIcon />
        </IconButton>
        {/* <Navigation /> */}
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
