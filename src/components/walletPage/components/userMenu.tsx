import React from 'react'
import { useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Icons from '@icons/icons'
import { StyledUserMenuInner, StyledUserMenuOuter } from '@components/walletPage/components/styles/styled.userMenu'
import { IStore, useAppDispatch } from '@store/store'
import { logoutUser } from '@store/authStore'
import { limitString } from '@components/utils/common'

export function UserMenu() {
  const [toggleMenu, setMenu] = React.useState(false)

  const userName = useSelector((state: IStore) => state.auth.login) || 'UNKNOWN'
  const walletCurrency = useSelector((state: IStore) => state.auth.walletCurrency) || 'UNKNOWN'
  const dispatch = useAppDispatch()

  const toggleDrawer = () => {
    setMenu(!toggleMenu)
  }

  const logout = () => {
    dispatch(logoutUser())
  }

  const list = () => (
    <StyledUserMenuInner >
      <Box sx={{ width: 350 }} role='presentation' onKeyDown={toggleDrawer}>
        <div className='menu'>
          <div className='header'>

          </div>

          <div className='main'>
            <div className='currency'>
              <p>Currency</p>
              <p>{walletCurrency}</p>
            </div>
          </div>

          <div className='footer'>
            <div className='profile'>
              <Icons name='profile' color='#fff' size='32' className='icon' />
              <p>{limitString(userName, 20)}</p>
            </div>

            <div className='logout' onClick={logout}>
              <Icons name='logout' color='#fff' size='32' className='icon'/>
            </div>
          </div>
        </div>
      </Box>
    </StyledUserMenuInner>
  )

  return (
    <StyledUserMenuOuter>
      <div onClick={toggleDrawer}>
        <Icons name='menu' color='#fff' size='32' className='icon' />
      </div>
      <Drawer anchor='right' open={toggleMenu} onClose={toggleDrawer}>
        {list()}
      </Drawer>
    </StyledUserMenuOuter>
  )
}
