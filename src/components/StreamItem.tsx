import { AccountBalanceWallet } from "@mui/icons-material";
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { useMemo } from "react";

export default function StreamItem() {
  const theme = useTheme();
  const fontColor = useMemo(() => {
    return theme.palette.onSurfaceVariant.main;
  }, [theme]);
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 360,
        borderRadius: 6,
        bgcolor: theme.palette.surfaceVariant.main,
      }}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        pt={1}
      >
        <Typography
          sx={{
            fontSize: 18,
            fontWeight: 500,
            marginLeft: 2,
          }}
          color={fontColor}
        >
          08-12
        </Typography>
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 500,
            marginRight: 2,
          }}
          color={fontColor}
        >
          收 12 支 12
        </Typography>
      </Box>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AccountBalanceWallet />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="面包" secondary="14:11" color={fontColor} />
        <Box
          component={"span"}
          sx={{
            borderRadius: 4,
            paddingX: 1,
            fontWeight: 600,
            fontSize: 14,
            textAlign: "end",
          }}
          color={fontColor}
        >
          $234
        </Box>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AccountBalanceWallet />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="午饭" secondary="12:11" />
        <Box
          component={"span"}
          sx={{
            borderRadius: 4,
            paddingX: 1,
            fontWeight: 600,
            fontSize: 14,
            textAlign: "end",
          }}
          color={fontColor}
        >
          $50
        </Box>
      </ListItem>
    </Box>
  );
}
