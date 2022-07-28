import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import { ListAlt, AccountBalanceWallet, Score } from "@mui/icons-material";
import { useState } from "react";

export default function Nav() {
  const [value, setValue] = useState("recents");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0, bgcolor: 'red' }}
      elevation={0}
    >
      <BottomNavigation value={value} onChange={handleChange} showLabels>
        <BottomNavigationAction
          // label="明细"
          value="recents"
          icon={<ListAlt />}
        ></BottomNavigationAction>
        <BottomNavigationAction
          // label="统计"
          value="favorites"
          icon={<Score />}
        />
        <BottomNavigationAction
          // label="资产"
          value="assets"
          icon={<AccountBalanceWallet />}
        />
      </BottomNavigation>
    </Paper>
  );
}
