import { useSelector, useDispatch } from "react-redux";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

import {
  Avatar,
  Box,
  Card,
  CardContent,
  Fab,
  Icon,
  IconButton,
  LinearProgress,
  SvgIcon,
  Toolbar,
  Typography,
} from "@mui/material";
import Zoom from "@mui/material/Zoom";
import AddIcon from "@mui/icons-material/Add";
import { useTheme } from "@mui/material/styles";
import { AccountBalanceWallet } from "@mui/icons-material";
import StreamList from "../components/StreamList";

export default function Home() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };
  return (
    <div>
      <Toolbar disableGutters>
        <Typography
          variant="h5"
          noWrap
          color={theme.palette.onSurface.main}
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            fontWeight: 600,
            flexGrow: 1,
          }}
        >
          Hello You
        </Typography>
        <IconButton sx={{ p: 0 }}>
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/2.jpg"
          />
        </IconButton>
      </Toolbar>
      <Box py={2}>
        <Card
          sx={{
            bgcolor: theme.palette.surfaceVariant.main,
            color: theme.palette.onSurfaceVariant.main,
            borderRadius: 6,
          }}
          elevation={0}
        >
          <CardContent
          sx={{
            padding: 3,
            position: 'relative'
          }}
          >
            <Typography
                variant="body1"
                sx={{ fontSize: '0.875rem', fontWeight: 600 }}
                color="text.secondary"
              >
                本月预算结余
              </Typography>

            <Typography
              sx={{ fontSize: '1.5rem', fontWeight: 700 }}
              color="text.secondary"
              mt={1}
            >
              $ 2123
            </Typography>
            <Box
              mt={1}
              display={'flex'}
              alignItems={'center'}
            >
              <TrendingUpIcon fontSize="small" />
              <Typography sx={{ paddingLeft: '4px' }} > +2.6%</Typography>
              <Typography> than last month</Typography>
            </Box>
            <Box
              sx={{
                height: 48,
                width: 48,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: theme.palette.primary.main,
                color: theme.palette.onPrimary.main,
                position: 'absolute',
                borderRadius: '50%',
                right: 24,
                top: 24,
              }}>
                <TrendingUpIcon />
              </Box>
            {/* <LinearProgress
              variant="determinate"
              value={23}
              color="secondary"
            /> */}
          </CardContent>
        </Card>
        <StreamList />
      </Box>
      <Zoom
        in={true}
        timeout={transitionDuration}
        style={{
          transitionDelay: `${transitionDuration.exit}ms`,
        }}
        unmountOnExit
      >
        <Fab
          size="medium"
          sx={{
            position: "absolute",
            bottom: 64,
            right: 24,
            borderRadius: 4,
            // backgroundColor: "#6750A4",
          }}
          aria-label="new"
          color="primaryContainer"
        >
          <AddIcon></AddIcon>
        </Fab>
      </Zoom>
    </div>
  );
}
