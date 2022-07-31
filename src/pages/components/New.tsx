import * as React from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import MoreVert from "@mui/icons-material/MoreVert";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { AMOUNTTYPE, INPUTKEY } from "../../types";
import BackspaceIcon from "@mui/icons-material/Backspace";
import Keyboard from "../../components/Keyboard";
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({
  open = false,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };
  const [recordType, setRecordType] = useState<AMOUNTTYPE>(AMOUNTTYPE.expenses);

  const [amount, setAmont] = useState("0.00");
  const handleTap = (val: string) => {
    setAmont(val)
  };
  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={onClose}
        TransitionComponent={Transition}
      >
        <AppBar
          elevation={0}
          sx={{
            position: "relative",
            bgcolor: "surface.main",
            color: "onSurface.main",
          }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={onClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              新增明细
            </Typography>
            <IconButton edge="end" autoFocus color="inherit">
              <MoreVert />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box bgcolor="surface.main" flex={1}>
          <Tabs
            variant="fullWidth"
            value={recordType}
            onChange={(e, v) => {
              setRecordType(v);
            }}
          >
            <Tab label="支出" value={AMOUNTTYPE.expenses} />
            <Tab label="收入" value={AMOUNTTYPE.income} />
            <Tab label="转账" value={AMOUNTTYPE.transfer} />
          </Tabs>
          <Box display="flex" justifyContent="space-between" px={2} py={1}>
            <Box display="flex" alignItems="center" gap={1}>
              <BackspaceIcon color="error" />
              <Typography variant="h6">房租水电</Typography>
            </Box>
            <Box display="flex" alignItems="center" ml={2}>
              <Typography variant="h4" sx={{
                fontFamily: 'Roboto Mono'
              }}>{amount}</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              width: '100%',
            }}
          >
            <Keyboard onChange={handleTap} value={amount} />
          </Box>
        </Box>
      </Dialog>
    </div>
  );
}