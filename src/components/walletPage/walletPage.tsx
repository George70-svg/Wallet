import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { InvoicePage } from '@components/walletPage/invoicePage/invoicePage'
import { ExpensesPage } from '@components/walletPage/expensesPage/expensesPage'
import { ExchangePage } from '@components/walletPage/exchangePage/exchangePage'
import { Navigation } from '@components/walletPage/components/Navigation'

export function WalletPage() {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route path='invoice' element={<InvoicePage />} />
        <Route path='expenses' element={<ExpensesPage />} />
        <Route path='exchange' element={<ExchangePage />} />
      </Routes>
    </div>
  )
}
