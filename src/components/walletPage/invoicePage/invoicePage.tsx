import React from 'react'
import { StyledInvoice } from '@components/walletPage/components/styles/invoice.styled'
import { AccountsWidget } from '@components/walletPage/invoicePage/components/accounts'
import { NotationsWidget } from '@components/walletPage/invoicePage/components/notations'

export function InvoicePage() {
  return (
    <StyledInvoice>
      <AccountsWidget />
      <NotationsWidget />
    </StyledInvoice>
  )
}
