import Header from '@/components/layout/Header'
import PageTransition from '@/components/PageTransition'
import { Box, Typography } from '@mui/material'

export default function Classification() {
  return (
    <PageTransition>
      <Box mt={8}>
        <Typography variant='h5' noWrap color='onSurface.main'>
          分类
        </Typography>
      </Box>
    </PageTransition>
  )
}

export function ChooseClassStep1() {
  return (
    <PageTransition>
      <Header title='添加新的账户' back></Header>
    </PageTransition>
  )
}

export function ChooseClassStep2() {
  return (
    <PageTransition>
      <Header title='添加储蓄卡' back></Header>
    </PageTransition>
  )
}
export function ChooseClassStep3() {
  return (
    <PageTransition>
      <Header title='添加储蓄卡' back></Header>
    </PageTransition>
  )
}
