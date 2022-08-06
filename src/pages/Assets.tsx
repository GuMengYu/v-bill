import { Box, Card, Typography } from "@mui/material";
import PageTransition from "../components/PageTransition";

import {
  Money as MoneyIcon,
  AccountBalance as AccountBalanceIcon,
} from "@mui/icons-material";
import { Item } from "../components/Item";
export default function Assets() {
  return (
    <PageTransition>
      <Box mt={8}>
        <Typography
          variant="h5"
          noWrap
          color="onSurface.main"
          sx={{
            flexGrow: 1,
          }}
        >
          资产
        </Typography>

        <Box display="flex" gap={1} mt={2}>        
          <Card
            sx={{
              flex: 1,
              bgcolor: "surfaceVariant.main",
              color: "onSurfaceVariant.main",
              borderRadius: 6,
              display: "flex",
              padding: 3,
            }}
            elevation={0}
          >
            <Box
              sx={{
                position: "relative",
              }}
              flex="1"
            >
              <Typography
                variant="body2"
                color="text.secondary"
                fontWeight={700}
              >
                总资产
              </Typography>

              <Typography
                variant="h6"
                sx={{ fontWeight: 700 }}
                color="text.secondary"
                mt={1}
              >
                $293456.45
              </Typography>
              <Box
                sx={{
                  height: 32,
                  width: 32,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "primary.main",
                  color: "onPrimary.main",
                  position: "absolute",
                  borderRadius: "50%",
                  right: -8,
                  top: -8,
                }}
              >
                <MoneyIcon fontSize="small" />
              </Box>
            </Box>
          </Card>
          <Card
            sx={{
              flex: 1,
              bgcolor: "surfaceVariant.main",
              color: "onSurfaceVariant.main",
              borderRadius: 6,
              display: "flex",
              padding: 3,
            }}
            elevation={0}
          >
            <Box
              sx={{
                position: "relative",
              }}
              flex="1"
            >
              <Typography
                variant="body2"
                color="text.secondary"
                fontWeight={700}
              >
                总负债
              </Typography>

              <Typography
                variant="h6"
                sx={{ fontWeight: 700 }}
                color="text.secondary"
                mt={1}
              >
                $2123
              </Typography>
              <Box
                sx={{
                  height: 32,
                  width: 32,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "secondary.main",
                  color: "onSecondary.main",
                  position: "absolute",
                  borderRadius: "50%",
                  right: -8,
                  top: -8,
                }}
              >
                <AccountBalanceIcon fontSize="small" />
              </Box>
            </Box>
          </Card>
        </Box>
        <Typography mt={2}>储蓄账户</Typography>
        <Box display="flex" gap={"2px"} flexDirection="column" mt={1}>
          <Item
            data={{
              primary: "钱包",
              secondary: "现金",
              id: "001",
              type: "收入",
              amount: 998,
            }}
          ></Item>
          <Item
            data={{
              primary: "支付宝",
              secondary: "储蓄卡",
              id: "001",
              type: "收入",
              amount: 998,
            }}
          ></Item>
          <Item
            data={{
              primary: "招商银行",
              secondary: "储蓄卡",
              id: "001",
              type: "收入",
              amount: 9887432,
            }}
          ></Item>
        </Box>
        <Typography mt={2}>信用账户</Typography>
        <Box display="flex" gap={"2px"} flexDirection="column" mt={1}>
          <Item
            data={{
              primary: "花呗",
              secondary: "信用卡",
              id: "001",
              type: "income",
              amount: 998,
            }}
          ></Item>
          <Item
            data={{
              primary: "白条",
              secondary: "信用卡",
              id: "001",
              type: "income",
              amount: 998,
            }}
          ></Item>
          <Item
            data={{
              primary: "招商信用卡",
              secondary: "信用卡",
              id: "001",
              type: "income",
              amount: 9887432,
            }}
          ></Item>
        </Box>
        <Typography mt={2}>投资账户</Typography>
        <Box display="flex" gap={"2px"} flexDirection="column" mt={1}>
          <Item
            data={{
              primary: "蚂蚁基金",
              secondary: "投资",
              id: "001",
              type: "收入",
              amount: 998,
            }}
          ></Item>
          <Item
            data={{
              primary: "股票",
              secondary: "投资",
              id: "001",
              type: "收入",
              amount: 998,
            }}
          ></Item>
        </Box>
      </Box>
    </PageTransition>
  );
}
