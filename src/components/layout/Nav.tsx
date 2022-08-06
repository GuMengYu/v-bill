import * as React from "react";
import { NavLink } from "react-router-dom";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import { ListAlt, AccountBalanceWallet, Score } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "@mui/material";

function ButtomLink() {
  return (
    <BottomNavigationAction
      value="assets"
      icon={<AccountBalanceWallet />}
    ></BottomNavigationAction>
  );
}
export default function Nav() {
  const [value, setValue] = useState("home");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0, bgcolor: 'surface.main' }}
      elevation={0}
    >
      <BottomNavigation value={value} onChange={handleChange} showLabels sx={{ bgcolor: 'surface.main' }}>
        <BottomNavigationAction
         component={NavLink}
          to="/"
          // label="明细"
          value="home"
          icon={<ListAlt />}
        ></BottomNavigationAction>
        <BottomNavigationAction
         component={NavLink}
         to="/analysis"
          // label="统计"
          value="analysis"
          icon={<Score />}
        />
        <BottomNavigationAction
          component={NavLink}
          to="/assets"
          // label="资产"
          value="assets"
          icon={<AccountBalanceWallet />}
        />
      </BottomNavigation>
    </Paper>
  );
}
