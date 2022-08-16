import Chart from "react-apexcharts";
import { AMOUNTTYPE, Stream } from "../types";

import {
  Avatar,
  Box,
  Card,
  Fab,
  IconButton,
  Menu,
  Toolbar,
  Typography,
} from "@mui/material";
import Zoom from "@mui/material/Zoom";
import AddIcon from "@mui/icons-material/Add";
import { useTheme } from "@mui/material/styles";
import StreamList from "../components/StreamList";
import { useEffect, useState } from "react";
import { ApexOptions } from "apexcharts";
import PageTransition from "../components/PageTransition";
import NewDialog from "./components/New";
import Welcome from "./components/Welcome";
import Header from "@/components/layout/Header";
import { flowList } from "@/api";

export default function Home() {
  const theme = useTheme();
  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const [options] = useState<ApexOptions>({
    colors: [theme.palette.primary.main],
    chart: {
      sparkline: {
        enabled: true,
      },
    },
    xaxis: {
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    stroke: {
      width: 3,
      curve: "smooth",
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
    tooltip: {
      marker: {
        show: false,
      },
    },
  });

  const [series, setSeries] = useState([
    {
      name: "series-1",
      data: [1987, 23.3, 234, 67, 110, 110],
    },
  ]);

  const [list, setList] = useState<Stream[]>([]);

  const [open, setOpen] = useState(false)

  const close = () => {
    setOpen(false)
  }
  
  console.log('render home page')

  // useEffect(() => {
  //   flowList().then(res => {
  //     setList(res.data.flows)
  //   })
  // }, [])
                                                                                                              
  return (
    <PageTransition>
      <div>
        <Header title="交易" height={64}></Header>
        <Box py={3}>
          <Card
            sx={{
              bgcolor: theme.palette.surfaceVariant.main,
              color: theme.palette.onSurfaceVariant.main,
              borderRadius: 6,
              display: "flex",
              padding: 3,
              marginBottom: 2,
            }}
            elevation={0}
          >
            <Box
              sx={{
                position: "relative",
              }}
              flex="1"
            >
              <Typography variant="body2" color="text.secondary">
                本月预算结余
              </Typography>

              <Typography
                variant="h5"
                sx={{ fontWeight: 700 }}
                color="text.secondary"
                mt={1}
              >
                $2123
              </Typography>
              <Box mt={1} display="flex" alignItems="center" gap="4px">
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {" "}
                  +2.6%
                </Typography>
                <Typography variant="body2">than last month</Typography>
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
              width="100"
              height={80}
            />
          </Card>
          <Box>
            <StreamList list={list} />
          </Box>
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
              position: "fixed",
              bottom: 64,
              right: 24,
              borderRadius: 4,
            }}
            aria-label="new"
            color="primaryContainer"
            onClick={() => {
              setOpen(true)
            }}
          >
            <AddIcon></AddIcon>
          </Fab>
        </Zoom>
        <NewDialog open={open} onClose={close} />
      </div>
    </PageTransition>
  );
}
