import React from 'react'
import { useSelector } from 'react-redux'
import Drawer from '@mui/material/Drawer'
import Icons from '@icons/icons'
import { Switch } from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import Box from '@mui/material/Box'
import { yellow } from '@mui/material/colors'
import { StyledUserMenuInner, StyledUserMenuOuter } from '@components/walletPage/components/styles/styled.userMenu'
import { IStore, useAppDispatch } from '@store/store'
import { logoutUser } from '@store/authStore'
import { limitString } from '@components/utils/common'
import { changeTheme } from '@store/colorThemeStore'

export function UserMenu() {
  const dispatch = useAppDispatch()

  const [toggleMenu, setMenu] = React.useState(false)

  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)
  const userName = useSelector((state: IStore) => state.auth.login) || 'UNKNOWN'
  const walletCurrency = useSelector((state: IStore) => state.auth.walletCurrency) || 'UNKNOWN'

  const toggleDrawer = () => {
    setMenu(!toggleMenu)
  }

  const logout = () => {
    dispatch(logoutUser())
  }

  const switchTheme = () => {
    dispatch(changeTheme())
  }

  const list = () => (
    <StyledUserMenuInner colorTheme={colorTheme}>
      <Box sx={{ width: 350 }} role='presentation' onKeyDown={toggleDrawer}>
        <div className='menu'>
          <div className='header'>

          </div>

          <div className='main'>
            <div className='currency'>
              <p>Currency</p>
              <p>{walletCurrency}</p>
            </div>

            <div className='theme'>
              <p>Switch theme</p>
              <Switch
                onChange={switchTheme}
                checked={colorTheme === 'darkTheme'}
                color='primary'
                icon={<Brightness7Icon fontSize='medium' sx={{ color: yellow[800] }} />}
                checkedIcon={<DarkModeIcon fontSize='medium' sx={{ color: yellow[100] }} />}
              />
            </div>
          </div>

          <div className='footer'>
            <div className='profile'>
              <Icons name='profile' color='#fff' size='32' className='icon'/>
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
