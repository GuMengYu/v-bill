import {Box, Chip, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';

import {useState} from 'react'
import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker';
import FaceIcon from "@mui/icons-material/Face";
import * as React from "react";

export default function DateTimePickerChip({ value, onChange }: {
    value: string
    onChange: (value: string | null) => void
}) {

    // const [value, setValue] = useState();

    return <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
            label="日期"
            value={value}
            onChange={onChange}
            renderInput={(params) => {
                return <Chip icon={<FaceIcon/>} label={params.inputProps.value} onClick={params.onClick}/>
            }}
        />
    </LocalizationProvider>
}

