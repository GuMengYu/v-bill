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
      <Box py={2}>
        {/* <Typography
          variant="h5"
          noWrap
          color="onSurface.main"
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            fontWeight: 700,
            flexGrow: 1,
          }}
        >
          资产
        </Typography> */}
        <Box display="flex" gap={1}>
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
        <Box display="flex" gap={1} flexDirection="column" mt={1}>
          <Item
            data={{
              classification: "现金",
              id: "001",
              type: "income",
              amount: 998,
            }}
          ></Item>
          <Item
            data={{
              classification: "现金",
              id: "001",
              type: "income",
              amount: 998,
            }}
          ></Item>
          <Item
            data={{
              classification: "现金",
              id: "001",
              type: "income",
              amount: 998,
            }}
          ></Item>
        </Box>
      </Box>
    </PageTransition>
  );
}
