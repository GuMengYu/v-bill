import { Avatar, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(e.currentTarget)
  }
  function handleClose() {
    setAnchorEl(null)
  }
  function handleNav(target: string) {
    switch(target) {
      case 'setting': navigate('./settings'); break;
    }
    handleClose()
  }
  return (
    <Toolbar disableGutters>
      <Typography
        variant="h5"
        noWrap
        color="onSurface.main"
        sx={{
          mr: 2,
          display: { xs: "flex", md: "none" },
          fontWeight: 600,
          flexGrow: 1,
        }}
      >
        Hello You
      </Typography>
      <IconButton sx={{ p: 0 }}
       onClick={handleClick}
      >
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/2.jpg"
        />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => handleNav('setting')}>Setting</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </Toolbar>
  );
}
