import {
  Card,
  CardActions,
  IconButton,
  Button,
  Toolbar,
  Typography,
  Divider,
} from '@mui/material'
import { useLoaderData } from 'react-router-dom'
import PageTransition from '@/components/PageTransition'
import ArrowBack from '@mui/icons-material/ArrowBack'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import EditAttributes from '@mui/icons-material/Edit'

import { AMOUNTTYPE, Flow } from '@/types'
import { allIconsMap, StyledSvgIcon } from '@/utils/icons'
import dayjs from 'dayjs'
import EditFlow from '../components/New'
import { useState } from 'react'

export default function FlowDetail() {
  const flow = useLoaderData() as Flow

  const [open, setOpen] = useState(false)
  return (
    <PageTransition>
      <Toolbar
        sx={{
          padding: 0,
          alignItems: 'initial',
          justifyContent: 'space-between',
        }}
      >
        <IconButton
          size={'small'}
          onClick={() => {
            history.back()
          }}
        >
          <ArrowBack />
        </IconButton>
      </Toolbar>
      <Card
        elevation={0}
        sx={{
          bgcolor: 'surfaceVariant.main',
          color: 'onSurfaceVariant.main',
          borderRadius: 4,
          padding: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button
          variant='text'
          sx={{
            gap: 0.5,
          }}
        >
          <StyledSvgIcon
            component={
              allIconsMap[flow.category.icon ?? 'defaultIcon'].component
            }
            title={flow.category.name}
          ></StyledSvgIcon>
        </Button>
        <Typography variant={'h4'}>
          {flow.recType === AMOUNTTYPE.income ? '+' : '-'}
          {flow.amount}
        </Typography>
        <Typography variant={'caption'}>类型: {flow.recType}</Typography>
        <Typography variant={'caption'}>分类: {flow.category.name}</Typography>
        <Typography variant={'caption'}>账户: {flow.account.name}</Typography>
        <Typography variant={'caption'}>
          时间: {dayjs(flow.createTime).format('YYYY-MM-dd h:m')}
        </Typography>
        <Typography variant={'caption'}>备注: {flow.comments}</Typography>
        <Divider flexItem></Divider>

        <CardActions
          sx={{
            width: '100%',
            justifyContent: 'space-around',
            flex: 1,
          }}
        >
          <Button
            sx={{ flex: '1' }}
            onClick={() => {
              // todo delete
            }}
          >
            删除
          </Button>
          <Divider orientation='vertical' variant='middle' flexItem></Divider>
          <Button
            sx={{ flex: '1' }}
            onClick={() => {
              setOpen(true)
            }}
          >
            修改
          </Button>
        </CardActions>
      </Card>
      <EditFlow
        open={open}
        onClose={() => {
          setOpen(false)
        }}
      />
    </PageTransition>
  )
}
