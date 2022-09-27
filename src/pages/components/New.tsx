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
import { Box, Chip, Tab, Tabs } from "@mui/material";
import { useState, useMemo } from "react";
import { AMOUNTTYPE, Category } from "../../types";
import FaceIcon from "@mui/icons-material/Face";
import { allIconsMap, StyledSvgIcon } from '@/utils/icons'
import Keyboard from "../../components/Keyboard";
import { appState } from '@/valtio'
import { useSnapshot } from 'valtio'

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
  const snap = useSnapshot(appState)
  const [recordType, setRecordType] = useState<AMOUNTTYPE>(AMOUNTTYPE.expenses);

  const [amount, setAmont] = useState("0.00");
  const handleTap = (val: string) => {
    setAmont(val)
  };
  const [currentCat, setCurrentCat] = useState<Category | null>(null)
  const currentIcon = useMemo(() => {
    return {
      component: currentCat?.icon ? allIconsMap[currentCat.icon].component : allIconsMap.defaultIcon.component,
      name: currentCat?.name
    }
  }, [currentCat])

  function handleCatSelect(cat: Category) {
    setCurrentCat(cat)
  }
  function CatList({cats}: {cats: Category[]}) {
    return <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridTemplateRows: 'auto',
        justifyItems: 'center',
        maxHeight: 'calc(100vh - 440px)',
        overflowY: 'auto',
      }}
    >
      {
        cats.map(cat => {
          return <Cat cat={ cat } key={ cat.id }></Cat>
        })
      }
      
    </Box>
  }
  function Cat({cat}: { cat: Category }) {
    const icon = cat.icon ? allIconsMap[cat.icon] : allIconsMap.defaultIcon
    return <Box display="flex"  sx={
      {
        flexDirection: 'column',
        alignItems: 'center',
        height: 56,
        // width: 50,
      }
    } onClick={ () => {} }>
      <IconButton>
        <StyledSvgIcon
          component={icon.component}
          title={icon.importName}
          onClick={handleCatSelect.bind(null, cat)}
        >
        </StyledSvgIcon>
        </IconButton>
      <Typography variant="body2">{ cat.name }</Typography>
    </Box>
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
            <Typography sx={{ flex: 1 }} component="div">
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
          <Box sx={{
            display: 'flex',
            mx: 2,
            px: 2,
            py: 1,
            my:1,
            bgcolor: 'surfaceVariant.main',
            borderRadius: 2,
          }}>
            <Box display="flex" alignItems="center" gap={1} flex={1}>
              <StyledSvgIcon component={currentIcon.component}></StyledSvgIcon>
              <Typography variant="h6" >{ currentIcon.name }</Typography>
            </Box>

            <Typography variant="h4" sx={{
              color: 'error.main',
              textAlign: 'end',
               flex: '2',
               textOverflow: 'ellipsis',
               overflow: 'hidden',
               lineClamp: '1',
               WebkitLineClamp: '1',
              }}>{amount}</Typography>
          </Box>
         <CatList cats={snap.cats} />
          
          <Box
            sx={{
              position: "absolute",
              bottom: 8,
              padding: 1,
              width: 'calc(100% - 16px)'
            }}
          >
            <Box sx={{
              display: 'flex',
              gap: 1, 
              mb: 1,
             }}>
              <Chip icon={<FaceIcon />} label="现金" onClick={() => {}} />
              <Chip icon={<FaceIcon />} label="添加备注" onClick={() => {}} />
            </Box>
            <Keyboard onChange={handleTap} value={amount} />
          </Box>
        </Box>
      </Dialog>
    </div>
  );
}