import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { appState } from '@/valtio'
import { useSnapshot } from 'valtio'
import { Account } from '@/types'
import FaceIcon from '@mui/icons-material/Face'

export default function AccountDrawer({
  open = false,
  onClose,
  onSelect,
}: {
  open: boolean
  onClose?: () => void
  onSelect?: (account: Account) => void
}) {
  const appSnap = useSnapshot(appState)

  function handleSelect(account: Account) {
    onSelect && onSelect(account)
    onClose && onClose()
  }
  const list = () => (
    <Box
      sx={{ width: 'auto' }}
      role='presentation'
      // onClick={toggleDrawer(false)}
      // onKeyDown={toggleDrawer(false)}
    >
      <List>
        {appSnap.accounts.map((account, index) => (
          <ListItem
            key={account.id}
            disablePadding
            onClick={() => {
              handleSelect(account)
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <FaceIcon />
              </ListItemIcon>
              <ListItemText primary={account.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <Drawer anchor='bottom' open={open} onClose={onClose}>
      {list()}
    </Drawer>
  )
}
