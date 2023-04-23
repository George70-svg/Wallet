import React from 'react'
import { Navigation } from '@components/walletPage/components/navigation'
import { ExpensesPage } from '@components/walletPage/expensesPage/expensesPage'
import { ExchangePage } from '@components/walletPage/exchangePage/exchangePage'
import { Route, Routes } from 'react-router-dom'
import { InvoicePage } from '@components/walletPage/invoicePage/invoicePage'
import { StyledWallet } from '@components/walletPage/styles/wallet.styled'

export function WalletPage() {
  return (
    <StyledWallet>
      <Navigation />

      <Routes>
        <Route path='invoice' element={<InvoicePage />} />
        <Route path='expenses' element={<ExpensesPage />} />
        <Route path='exchange' element={<ExchangePage />} />
      </Routes>
    </StyledWallet>
  )
}
