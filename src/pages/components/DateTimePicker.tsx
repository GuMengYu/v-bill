import {
  Box,
  Chip,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import * as React from 'react'
import type { Dayjs } from 'dayjs'

export default function DateTimePickerChip({
  value,
  onChange,
}: {
  value: Dayjs
  onChange: (value: Dayjs | null) => void
}) {
  // const [value, setValue] = useState();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        label='日期'
        value={value}
        onChange={onChange}
        renderInput={params => {
          return (
            <Chip
              icon={<AccessTimeIcon />}
              label={params.inputProps?.value}
              onClick={params.onClick}
            />
          )
        }}
      />
    </LocalizationProvider>
  )
}
