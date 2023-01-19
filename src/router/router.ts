import { createBrowserRouter } from 'react-router-dom'
import { LoginPage } from '@components/loginPage/loginPage'
import { WalletPage } from '@components/walletPage/walletPage'
import { InvoicePage } from '@components/walletPage/invoicePage/invoicePage'
import { ExpensesPage } from '@components/walletPage/expensesPage/expensesPage'
import { ExchangePage } from '@components/walletPage/exchangePage/exchangePage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: LoginPage(),
    //errorElement: ErrorPage(),
  },
  {
    path: '/wallet/*',
    element: WalletPage(),
    //errorElement: ErrorPage(),
    children: [
      {
        path: 'invoice',
        element: InvoicePage(),
        //errorElement: ErrorPage(),
      },
      {
        path: 'expenses',
        element: ExpensesPage(),
        //errorElement: ErrorPage(),
      },
      {
        path: 'exchange',
        element: ExchangePage(),
        //errorElement: ErrorPage(),
      },
    ],
  },
])
