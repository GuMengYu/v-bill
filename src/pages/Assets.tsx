import { Box, Card, Divider, Fab, Typography, Zoom } from '@mui/material'
import PageTransition from '../components/PageTransition'
import NewAssets from './components/NewAssets'
import { useRequest } from 'ahooks'
import { CardGiftcard, Money as MoneyIcon } from '@mui/icons-material'
import { Item } from '@/components/Item'
import Header from '@/components/layout/Header'
import { useNavigate } from 'react-router-dom'
import Welcome from './components/Welcome'
import { assetsInfo } from '@/api'
import { useMemo } from 'react'
import { groupBy } from 'lodash-es'
import { Account, AccountTypes } from '@/types'
import { allIconsMap } from '@/utils/icons'

export default function Assets() {
  const navigate = useNavigate()

  const { data, loading, error } = useRequest(assetsInfo)
  const accountsList = data?.data.accounts
  const accountSummary = data?.data.accountsSummary
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
      <Header height={64} title='资产' back={false} more={<Welcome />}></Header>
      <Box>
        <Box display='flex' gap={1} mt={2}>
          <Card
            sx={{
              flex: 1,
              bgcolor: 'surfaceVariant.main',
              color: 'onSurfaceVariant.main',
              borderRadius: 6,
              display: 'flex',
              padding: 2,
            }}
            elevation={0}
          >
            <Box
              sx={{
                position: 'relative',
              }}
              flex='1'
            >
              <Typography
                variant='subtitle2'
                color='text.secondary'
                fontWeight={600}
              >
                净资产
              </Typography>
              <Typography
                variant='h5'
                sx={{ fontWeight: 700 }}
                my={'4px'}
                color='text.secondary'
              >
                {accountSummary?.netAssets}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <Typography
                  variant='subtitle2'
                  sx={{ fontWeight: 600 }}
                  color='text.secondary'
                >
                  总资产: {accountSummary?.netAssets}
                </Typography>
                <Divider orientation='vertical' variant='middle' flexItem />
                <Typography
                  variant='subtitle2'
                  sx={{ fontWeight: 600 }}
                  color='text.secondary'
                >
                  负债: {accountSummary?.liabilities}
                </Typography>
              </Box>

              <Box
                sx={{
                  height: 32,
                  width: 32,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: 'primary.main',
                  color: 'onPrimary.main',
                  position: 'absolute',
                  borderRadius: '50%',
                  right: -4,
                  top: -4,
                }}
              >
                <MoneyIcon fontSize='small' />
              </Box>
            </Box>
          </Card>
        </Box>
        <AssetCard accounts={accounts.saving} title='储蓄账户'></AssetCard>
        <AssetCard accounts={accounts.credit} title='信用账户'></AssetCard>
        <AssetCard accounts={accounts.investment} title='投资账户'></AssetCard>
      </Box>
      <Zoom in={true} unmountOnExit>
        <Fab
          size='medium'
          sx={{
            position: 'fixed',
            bottom: 64,
            right: 24,
            borderRadius: 4,
          }}
          aria-label='new'
          color='primaryContainer'
          onClick={() => {
            navigate('../settings/classification1')
          }}
        >
          <CardGiftcard fontSize='small'></CardGiftcard>
        </Fab>
      </Zoom>
    </PageTransition>
  )
}

function AssetCard({
  accounts = [],
  title = '',
}: {
  accounts: Account[]
  title: string
}) {
  return accounts.length ? (
    <>
      <Typography mt={2}>{title}</Typography>
      <Box display='flex' gap={'2px'} flexDirection='column' mt={1}>
        {accounts?.map(i => {
          const icon = allIconsMap[i.icon ?? 'defaultIcon']
          const color = {
            [AccountTypes.credit]: {
              textColor: 'rgb(183, 33, 54)',
                bgColor: 'rgba(255, 72, 66, 0.16)',
            },
            [AccountTypes.investment]: {
              textColor: 'rgb(205, 129, 18)',
              bgColor: 'rgba(205, 129, 18, 0.16)',
            },
            [AccountTypes.saving]: {
              textColor: 'rgb(34, 154, 22)',
                bgColor: 'rgba(84, 214, 44, 0.16)',
            },


          }[i.type]
          return (
            <Item
              key={i.id}
              data={{
                color,
                icon,
                primary: i.name,
                type: i.type,
                amount: i.balanceMoney,
              }}
            ></Item>
          )
        })}
      </Box>
    </>
  ) : (
    <></>
  )
}
