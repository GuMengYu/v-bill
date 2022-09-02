import { Box, Card, Fab, Typography, Zoom } from "@mui/material";
import PageTransition from "../components/PageTransition";
import NewAssets from './components/NewAssets'
import { useRequest } from "ahooks";
import {
  CardGiftcard,
  Money as MoneyIcon,
  AccountBalance as AccountBalanceIcon,
} from "@mui/icons-material";
import { Item } from "../components/Item";
import Header from "@/components/layout/Header";
import { useNavigate } from "react-router-dom";
import Welcome from "./components/Welcome";
import { assetsInfo } from "@/api";
import { useMemo } from "react";
import { groupBy } from 'lodash-es'
import { Account, AccountTypes } from "@/types";
export default function Assets() {
  const navigate = useNavigate()


  const { data, loading, error } = useRequest(assetsInfo)
  const accountsList = data?.data.accountList
  const accountSummary = data?.data.accountSummary
  const accounts = useMemo(() => {
    const group = groupBy(accountsList, 'type')
    return {
      credit: group[AccountTypes.credit],
      saving: group[AccountTypes.saving],
      investment: group[AccountTypes.investment],
    }
  }, [accountsList])
  return (
    <PageTransition>
      <Header height={64} title="资产" back={false} more={ <Welcome/>}></Header>
      <Box>
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
                { accountSummary?.assets }
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
               { accountSummary?.liabilities }
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
        <Asset accounts={ accounts.saving } title="储蓄账户"></Asset>
        <Asset accounts={ accounts.credit } title="信用账户"></Asset>
        <Asset accounts={ accounts.investment } title="投资账户"></Asset>
      </Box>
      <Zoom in={true} unmountOnExit>
          <Fab
            size="medium"
            sx={{
              position: "fixed",
              bottom: 64,
              right: 24,
              borderRadius: 4,
            }}
            aria-label="new"
            color="primaryContainer"
            onClick={() => {
              navigate('../settings/classification1')
            }}
          >
            <CardGiftcard fontSize="small"></CardGiftcard>
          </Fab>
        </Zoom>
    </PageTransition>
  );
}

function Asset({
  accounts =  [],
  title = '',
} : {
  accounts: Account[]
  title: string
}) {
  return ( accounts.length ?  <><Typography mt={2}>{ title }</Typography>
  <Box display="flex" gap={"2px"} flexDirection="column" mt={1}>
    {
      accounts?.map((i) => {
        return (<Item
          key={i.id}
          data={{
            primary: i.name,
            secondary: i.type,
            type: i.type,
            amount: i.balanceMoney,
          }}
        ></Item>)
      })
    }
  </Box></> : '')
}
