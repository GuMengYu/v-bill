import * as React from 'react'
import { useMemo, useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'
import FaceIcon from '@mui/icons-material/Face'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import CurrencyYenIcon from '@mui/icons-material/CurrencyYen'
import { Box, Chip, Divider, Drawer, Tab, Tabs } from '@mui/material'
import { AMOUNTTYPE, Category, INPUT_KEY } from '@/types'
import { allIconsMap, StyledSvgIcon } from '@/utils/icons'
import Keyboard from '../../components/Keyboard'
import { appState } from '@/valtio'
import { useSnapshot } from 'valtio'
import AccountsDrawer from './AccountsDrawer'
import DateTimePicker from '@/pages/components/DateTimePicker'
import { NavLink } from 'react-router-dom'
import { useSnackbar } from 'notistack'
import { createFlow } from '@/api'
import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'
export default function NewBill({
  open = false,
  onClose,
  onReload,
}: {
  open?: boolean
  onClose?: () => void
  onReload?: () => void
}) {
  const { enqueueSnackbar } = useSnackbar()
  const snap = useSnapshot(appState)
  const [recordType, setRecordType] = useState<AMOUNTTYPE>(AMOUNTTYPE.expenses)

  const [amount, setAmount] = useState<string>('0')
  const [currentCat, setCurrentCat] = useState<Category | null>(null)
  const [accountsDrawer, setAccountDrawer] = useState(false)
  const [time, setTime] = useState<Dayjs>(dayjs())
  const [selectedAccount, setSelectedAccount] = useState(snap.accounts[0])
  const categories = useMemo(() => {
    return snap.category[recordType] ?? []
  }, [recordType, snap.category])
  const onAmountChange = (val: string) => {
    console.log(val)
    setAmount(val)
  }
  const onTap = (keycode: INPUT_KEY) => {
    console.log(keycode)
    if (keycode === INPUT_KEY.confirm) {
      if (!currentCat) {
        enqueueSnackbar('????????????', {
          autoHideDuration: 1000,
          anchorOrigin: { vertical: 'top', horizontal: 'center' },
        })
      } else {
        handleSave().then(res => {
          console.log(res)
        })
      }
      // todo handle validate and save
    }
  }

  async function handleSave() {
    const data = {
      amount: parseFloat(amount),
      catId: currentCat!.id,
      recType: recordType,
      accountId: selectedAccount.id,
      comment: '', // todo comment
    }
    const res = await createFlow(data)
    onReload && onReload()
    onClose && onClose()
    return res
  }
  function handleCatSelect(cat: Category) {
    setCurrentCat(cat)
  }

  function CatList({
    cats,
    value,
  }: {
    cats: readonly Category[]
    value: string | null | undefined
  }) {
    return (
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gridTemplateRows: 'auto',
          justifyItems: 'center',
          maxHeight: '168px',
          minHeight: '168px',
          overflowY: 'auto',
        }}
      >
        {cats.map(cat => {
          return <Cat cat={cat} key={cat.id} activated={cat.id === value}></Cat>
        })}
        <Box display='flex' flexDirection='column'>
          <IconButton>
            <MoreHorizIcon></MoreHorizIcon>
          </IconButton>
          <Typography
            variant='caption'
            sx={{
              '& a': {
                textDecoration: 'none',
                color: 'tertiary.main',
              },
            }}
          >
            <NavLink to='/cats'>????????????&gt;</NavLink>
          </Typography>
        </Box>
      </Box>
    )
  }

  function Cat({
    cat,
    activated = false,
  }: {
    cat: Category
    activated?: boolean
  }) {
    const icon = cat.icon ? allIconsMap[cat.icon] : allIconsMap.defaultIcon
    return (
      <Box
        display='flex'
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          height: 56,
          // width: 50,
        }}
      >
        <IconButton
          sx={{
            bgcolor: activated ? 'tertiaryContainer.main' : 'inherit',
            '&:hover': {
              bgcolor: activated ? 'tertiaryContainer.main' : 'inherit',
            },
          }}
          onClick={handleCatSelect.bind(null, cat)}
        >
          <StyledSvgIcon
            color={(activated ? 'tertiary' : 'inherit') as 'primary'}
            component={icon.component}
            title={icon.importName}
          ></StyledSvgIcon>
        </IconButton>
        <Typography variant='caption'>{cat.name}</Typography>
      </Box>
    )
  }

  return (
    <Drawer anchor='bottom' open={open} onClose={onClose}>
      <AppBar
        elevation={0}
        sx={{
          position: 'relative',
          bgcolor: 'surface.main',
          color: 'onSurface.main',
        }}
      >
        <Toolbar>
          <IconButton
            edge='start'
            color='inherit'
            onClick={onClose}
            aria-label='close'
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box bgcolor='surface.main' flex={1}>
        <Tabs
          variant='fullWidth'
          value={recordType}
          onChange={(e, v) => {
            setRecordType(v)
          }}
        >
          <Tab label='??????' value={AMOUNTTYPE.expenses} />
          <Tab label='??????' value={AMOUNTTYPE.income} />
          <Tab label='??????' value={AMOUNTTYPE.transfer} />
        </Tabs>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mx: 2,
            mt: 2,
            borderRadius: 2,
          }}
        >
          <CurrencyYenIcon />
          <Typography
            variant='h4'
            sx={{
              textAlign: 'start',
              ml: 1,
              flex: '2',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              lineClamp: '1',
              WebkitLineClamp: '1',
            }}
          >
            {amount}
          </Typography>
        </Box>
        <Divider
          sx={{
            mx: 2,
            my: 1,
          }}
        />
        <CatList cats={categories} value={currentCat?.id} />

        <Box
          sx={{
            padding: 1,
            my: 1,
            width: 'calc(100% - 16px)',
          }}
        >
          <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
            <Chip
              icon={<FaceIcon />}
              label={selectedAccount?.name}
              onClick={() => {
                setAccountDrawer(true)
              }}
            />
            <DateTimePicker
              value={time}
              onChange={value => {
                value && setTime(value)
              }}
            />
            {/*<Chip icon={<MarkChatUnreadIcon/>} label="??????"/>*/}
          </Box>
          <Keyboard onChange={onAmountChange} value={amount} onTap={onTap} />
        </Box>
      </Box>
      <AccountsDrawer
        open={accountsDrawer}
        onClose={() => setAccountDrawer(false)}
        onSelect={account => {
          setSelectedAccount(account)
        }}
      />
    </Drawer>
  )
}
