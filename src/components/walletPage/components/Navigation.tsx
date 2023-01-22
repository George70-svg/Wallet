import { Link } from 'react-router-dom'
import React from 'react'
import { StyledNavigation } from '@components/walletPage/components/styles/Navigation.styled'

export function Navigation() {
  return (
    <StyledNavigation>
      <Link className='link' to='invoice'>
        Invoice
      </Link>
      <Link className='link' to='expenses'>
        Expenses
      </Link>
      <Link className='link' to='exchange'>
        Exchange
      </Link>
      <Link className='link' to={'/'}>
        Go to login
      </Link>
    </StyledNavigation>
  )
}
