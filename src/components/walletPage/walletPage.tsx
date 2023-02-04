import React from 'react'
import { Navigation } from '@components/walletPage/components/navigation'
import { ExpensesPage } from '@components/walletPage/expensesPage/expensesPage'
import { ExchangePage } from '@components/walletPage/exchangePage/exchangePage'
import { Link, Route, Routes } from 'react-router-dom'
import { InvoicePage } from '@components/walletPage/invoicePage/invoicePage'

export function WalletPage() {
  return (
    <div>
      <Navigation />

      <Link className='link' to='/'>
        <h2>Go to login</h2>
      </Link>

      <Routes>
        <Route path='invoice' element={<InvoicePage />} />
        <Route path='expenses' element={<ExpensesPage />} />
        <Route path='exchange' element={<ExchangePage />} />
      </Routes>
    </div>
  )
}
