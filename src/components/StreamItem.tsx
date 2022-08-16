import { Box, Typography, useTheme } from "@mui/material";
import dayjs from "dayjs";
import { useMemo } from "react";
import type { Flow } from "../types";
import { AMOUNTTYPE } from "../types";
import { Item } from "./Item";

function SymbolText({ text, bg = true }: { text: string; bg?: boolean }) {
  return (
    <Typography
      variant="caption"
      sx={{
        fontWeight: 700,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 24,
        padding: "0 6px",
        bgcolor: bg ? "surfaceVariant.main" : "",
        color: "onSurfaceVariant.main",
        borderRadius: 1,
      }}
    >
      {text}
    </Typography>
  );
}
const formatTime = (time?: string) => time && dayjs(time).format('HH:mm')

export default function StreamItem({
  date,
  list,
}: {
  date: string;
  list: Flow[];
}) {
  const theme = useTheme();
  const fontColor = useMemo(() => {
    return theme.palette.primary.main;
  }, [theme]);
  const incomeAndExpensesCount = useMemo(() => {
    let income = 0;
    let expenses = 0;
    list.map((i) => {
      if (i.recType === AMOUNTTYPE.income) {
        income += i.amount;
      } else if (i.recType === AMOUNTTYPE.expenses) {
        expenses += i.amount;
      }
    });
    return { income, expenses };
  }, [list]);
  return (
    <Box display={"flex"} flexDirection="column" gap="2px">
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        mb={'4px'}
      >
        <Typography
          sx={{
            fontSize: 18,
            fontWeight: 500,
            marginLeft: 1,
          }}
          color={fontColor}
        >
          {date}
        </Typography>
        <Box display={"flex"} alignItems="center">
          <SymbolText text="收" />{" "}
          <SymbolText text={`¥${incomeAndExpensesCount.income}`} bg={false} />
          <SymbolText text="支" />{" "}
          <SymbolText text={`¥${incomeAndExpensesCount.expenses}`} bg={false} />
        </Box>
      </Box>

      {list.map((i) => {
        return <Item data={{
          primary: i.category?.name,
          secondary: formatTime(i.createTime),
          amount: i.amount,
          type: i.recType
        }} key={i.id} />;
      })}
    </Box>
  );
}
