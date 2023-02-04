import { Link, useLocation } from 'react-router-dom'
import React from 'react'
import { StyledNavigation } from '@components/walletPage/components/styles/navigation.styled'

export function Navigation() {
  const location = useLocation()

  return (
    <StyledNavigation>
      <Link className={location.pathname === '/wallet/invoice' ? 'link active' : 'link'} to='invoice'>
        Invoice
      </Link>

      <Link className={location.pathname === '/wallet/expenses' ? 'link active' : 'link'} to='expenses'>
        Expenses
      </Link>

      <Link className={location.pathname === '/wallet/exchange' ? 'link active' : 'link'} to='exchange'>
        Exchange
      </Link>
    </StyledNavigation>
  )
}
