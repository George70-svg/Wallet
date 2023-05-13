import React from 'react'
import { StyledAccounts } from '@components/walletPage/invoicePage/components/styles/accounts.styled'
import { useSelector } from 'react-redux'
import { IStore } from '@store/store'

export function AccountsWidget() {
  const colorTheme = useSelector((state: IStore) => state.theme.colorTheme)

  return (
    <StyledAccounts colorTheme={colorTheme}>
      123
    </StyledAccounts>
  )
}
