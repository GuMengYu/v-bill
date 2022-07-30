import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Divider from "@mui/material/Divider";
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

  const handleTap = (e, v) => {
    console.log(v)
  }
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
              <Typography variant="h4">0.00</Typography>
            </Box>
          </Box>
          <InputArea onTap={handleTap} />
        </Box>
      </Dialog>
    </div>
  );
}

function InputArea({ onTap }: { onTap?: (event: any, val: INPUTKEY) => void }) {
  function InputButton({
    children,
    bgcolor,
    val = 0,
  }: {
    children: React.ReactNode;
    val?: INPUTKEY;
    bgcolor?: string
  }) {
    return (
      <Button
      sx={{
        margin: '3px',
        bgcolor: bgcolor || 'surfaceVariant.main',
      }}
        size="large"
        onClick={(e) => {
          //
          onTap && onTap(e, val)
        }}
      >
        {children}
      </Button>
    );
  }
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
      }}
    >
      <InputButton val={INPUTKEY.seven}>7</InputButton>
      <InputButton val={INPUTKEY.eight}>8</InputButton>
      <InputButton val={INPUTKEY.nine}>9</InputButton>
      <InputButton val={INPUTKEY.del}>
        <BackspaceIcon />
      </InputButton>
      <InputButton val={INPUTKEY.four}>4</InputButton>
      <InputButton val={INPUTKEY.five}>5</InputButton>
      <InputButton val={INPUTKEY.six}>6</InputButton>
      <InputButton val={INPUTKEY.plus}>+</InputButton>
      <InputButton val={INPUTKEY.one}>1</InputButton>
      <InputButton val={INPUTKEY.two}>2</InputButton>
      <InputButton val={INPUTKEY.three}>3</InputButton>
      <InputButton val={INPUTKEY.minus}>-</InputButton>
      <InputButton val={INPUTKEY.eight}>$</InputButton>
      <InputButton val={INPUTKEY.zero}>0</InputButton>
      <InputButton val={INPUTKEY.dot}>.</InputButton>
      <InputButton val={INPUTKEY.confirm} bgcolor="primary.main">完成</InputButton>
    </Box>
  );
}
