import { ListItem, ListItemAvatar, Avatar, ListItemText, Box } from "@mui/material";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import { useMemo } from "react";
import { AMOUNTTYPE } from "../types";

interface Color {
  textColor: string;
  bgColor: string;
}

function Text(props: { text: string; color: Color }) {
  return (
    <Box
      component={"span"}
      sx={{
        height: "22px",
        minWidth: "22px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0px 8px",
        color: props.color.textColor,
        bgcolor: props.color.bgColor,
        fontSize: "0.875rem",
        fontWeight: 700,
        borderRadius: "6px",
        paddingX: 1,
        textAlign: "end",
      }}
    >
      {props.text}
    </Box>
  );
}
export function Item({ data, listRounded = true }: { data: {
  primary: string
  secondary?: string
  type?: AMOUNTTYPE
  amount: number
}; listRounded?: boolean }) {
  const inCome = useMemo(() => {
    return data.type === AMOUNTTYPE.income;
  }, [data]);
  const color: Color = useMemo(() => {
    return inCome
      ? {
          textColor: "rgb(34, 154, 22)",
          bgColor: "rgba(84, 214, 44, 0.16)",
        }
      : {
          textColor: "rgb(183, 33, 54)",
          bgColor: "rgba(255, 72, 66, 0.16)",
        };
  }, [inCome]);
  return (
    <ListItem
      dense
      sx={{
        bgcolor: "surfaceVariant.main",
        paddingLeft: "12px",
        paddingRight: "12px",
        borderRadius: 1,
        ...(listRounded ? {
          "&:first-of-type": {
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
          },
          "&:last-of-type": {
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16,
          },
        }: {})
      }}
    >
      <ListItemAvatar>
        <Avatar
          sx={{
            bgcolor: color.bgColor,
            color: color.textColor,
          }}
        >
          <AccountBalanceWalletIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={data.primary} secondary={data.secondary} />
      <Text text={`${inCome ? "+" : ""}¥${data.amount}`} color={color}></Text>
    </ListItem>
  );
}