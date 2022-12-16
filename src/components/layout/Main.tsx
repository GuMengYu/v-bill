import { Container } from '@mui/material'
import { Outlet } from 'react-router-dom'
export default function Main() {
  return (
    <Container
      sx={{
        height: '100vh',
        pb: '56px',
      }}
    >
      <Outlet />
    </Container>
  )
}
