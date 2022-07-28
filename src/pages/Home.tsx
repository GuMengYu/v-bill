import { useSelector, useDispatch } from "react-redux";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SouthWestIcon from '@mui/icons-material/SouthWest';
import Chart from "react-apexcharts";

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
import { useState } from "react";

export default function Home() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const [options, setOptions] = useState(
    {
      colors: [theme.palette.primary.main],
      chart: {
          sparkline: {
              enabled: !0
          }
      },
      xaxis: {
          labels: {
              show: !1
          }
      },
      yaxis: {
          labels: {
              show: !1
          }
      },
      stroke: {
          width: 4
      },
      legend: {
          show: !1
      },
      grid: {
          show: !1
      },
      tooltip: {
          marker: {
              show: !1
          },
          y: {
              formatter: function(e) {
                  return 233
              },
              title: {
                  formatter: function() {
                      return ""
                  }
              }
          }
      },
      fill: {
          gradient: {
              opacityFrom: .56,
              opacityTo: .56
          }
      },
  })

  const [series, setSeries] = useState([{
    name: "series-1",
    data: [30, 40, 45, 50, 49, 60, 70, 91]
  }])

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
          <Box
          sx={{
            padding: 3,
            paddingBottom: 2,
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
              gap={'4px'}
            >
              <TrendingUpIcon fontSize="small" />
              <Typography variant="body2" sx={{ fontWeight: 600 }} > +2.6%</Typography>
              <Typography variant="body2">than last month</Typography>
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
                <SouthWestIcon />
              </Box>
            {/* <LinearProgress
              variant="determinate"
              value={23}
              color="secondary"
            /> */}
          </Box>
          <Chart
              options={options}
              series={series}
              type="line"
              width="100%"
              height={100}
            />
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
