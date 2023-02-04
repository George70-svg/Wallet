import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '@components/loginPage/loginPage'
import { WalletPage } from '@components/walletPage/walletPage'
import { ExpensesPage } from '@components/walletPage/expensesPage/expensesPage'
import { ExchangePage } from '@components/walletPage/exchangePage/exchangePage'
import { InvoicePage } from '@components/walletPage/invoicePage/invoicePage'

import { Styles } from './styles'

function App() {
  return (
    <>
      <Styles />
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='wallet' element={<WalletPage />}>
          <Route path='invoice' element={<InvoicePage />} />
          <Route path='expenses' element={<ExpensesPage />} />
          <Route path='exchange' element={<ExchangePage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
