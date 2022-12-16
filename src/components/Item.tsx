import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Box,
  Link,
} from '@mui/material'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import { useMemo } from 'react'
import { AMOUNTTYPE } from '@/types'
import { allIconsMap, StyledSvgIcon } from '@/utils/icons'
import * as React from 'react'
import { Link as RLink } from 'react-router-dom'

interface Color {
  textColor: string
  bgColor: string
}

function Text(props: { text: string | number; color?: Color }) {
  return (
    <Box
      component={'span'}
      sx={{
        height: '22px',
        minWidth: '22px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0px 8px',
        color: props.color?.textColor,
        bgcolor: props.color?.bgColor,
        fontSize: '0.875rem',
        fontWeight: 700,
        borderRadius: '6px',
        paddingX: 1,
        textAlign: 'end',
      }}
    >
      {props.text}
    </Box>
  )
}

export function Item({
  dense,
  data,
  listRounded = true,
  onClick,
  to,
}: {
  dense?: boolean
  data: {
    primary: string
    secondary?: string
    type?: AMOUNTTYPE
    amount?: number
    color?: Color
    icon?: any
  }
  listRounded?: boolean
  onClick?: () => void
  to: string
}) {
  return (
    <Link
      component={RLink}
      to={to}
      sx={{
        textDecoration: 'none',
        bgcolor: 'surfaceVariant.main',
        borderRadius: 1,
        ...(listRounded
          ? {
              '&:first-of-type': {
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
              },
              '&:last-of-type': {
                borderBottomLeftRadius: 16,
                borderBottomRightRadius: 16,
              },
            }
          : {}),
      }}
    >
      <ListItem onClick={onClick} dense={dense} sx={{ px: dense ? '10px' : '8px' }}>
        <ListItemAvatar>
          <Avatar
            sx={{
              bgcolor: data.color?.bgColor,
              color: data.color?.textColor,
            }}
          >
            <StyledSvgIcon
              component={data.icon?.component}
              title={data.icon?.importName}
            ></StyledSvgIcon>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={data.primary} secondary={data.secondary} />
        {data.amount ? <Text text={data.amount} color={data.color}></Text> : ''}
      </ListItem>
    </Link>
  )
}
