import { useNavigate } from 'react-router-dom'
import React from 'react'
import { StyledNavigation } from '@components/walletPage/components/styles/navigation.styled'
import { Box, Tabs, Tab } from '@mui/material'
import { UserMenu } from '@components/walletPage/components/userMenu'

type LinkTabProps = {
  label?: string
  href?: string
}

export function Navigation() {
  const navigate = useNavigate()

  const [page, setPage] = React.useState(0)

  function LinkTab(props: LinkTabProps) {
    const path = props.label
    return (
      <Tab
        component='a'
        onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
          event.preventDefault()
          if (path) {
            navigate(path)
          } else {
            navigate('invoice')
          }
        }}
        {...props}
      />
    )
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setPage(newValue)
  }

  return (
    <StyledNavigation>
      <Box sx={{ borderColor: 'transparent', color: 'white' }}>
        <Tabs value={page} className='links' onChange={handleChange} aria-label='secondary tabs example'>
          <LinkTab label='invoice' href='/inactive' />
          <LinkTab label='expenses' href='/expenses' />
          <LinkTab label='exchange' href='/exchange' />
        </Tabs>
      </Box>
      <UserMenu />
    </StyledNavigation>
  )
}
