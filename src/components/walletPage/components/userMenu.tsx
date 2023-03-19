import React from 'react'
import { useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Icons from '@icons/icons'
import { StyledUserMenu } from '@components/walletPage/components/styles/styled.userMenu'
import { IStore } from '@store/store'

export function UserMenu() {
  const [toggleMenu, setMenu] = React.useState(false)

  const userName = useSelector((state: IStore) => state.auth.login) || 'UNKNOWN'

  const toggleDrawer = () => () => {
    setMenu(!toggleMenu)
  }

  const list = () => (
    <Box sx={{ width: 400 }} role='presentation' onClick={toggleDrawer()} onKeyDown={toggleDrawer()}>
      <div>{userName}</div>
    </Box>
  )

  return (
    <StyledUserMenu>
      <div onClick={toggleDrawer()}>
        <Icons name='profile' color='#fff' size='32' className='icon' />
      </div>
      <Drawer anchor='right' open={toggleMenu} onClose={toggleDrawer()}>
        {list()}
      </Drawer>
    </StyledUserMenu>
  )
}
