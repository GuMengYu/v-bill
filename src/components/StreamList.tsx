import { List } from '@mui/material'
import { Flow } from '../types'
import StreamItem from './StreamItem'
import { groupBy } from 'lodash-es'
import dayjs from 'dayjs'
import { useMemo } from 'react'
export default function StreamList({ list }: { list: Flow[] }) {
  const items = useMemo(() => {
    return groupBy(list, i => {
      return dayjs(i.createTime).format('MM-DD')
    })
  }, [list])
  return (
    <List
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        // maxHeight: 'calc(100vh - 300px)',
        // overflow: 'auto',
      }}
    >
      {Object.entries(items).map(([date, val]) => {
        return <StreamItem key={date} list={val} date={date} />
      })}
    </List>
  )
}
