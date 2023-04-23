import React, { useEffect } from 'react'
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom'
import { CircularProgress } from '@mui/material'
import { LoginPage } from '@components/loginPage/loginPage'
import { WalletPage } from '@components/walletPage/walletPage'
import { ExpensesPage } from '@components/walletPage/expensesPage/expensesPage'
import { ExchangePage } from '@components/walletPage/exchangePage/exchangePage'
import { InvoicePage } from '@components/walletPage/invoicePage/invoicePage'
import { useAppDispatch } from '@store/store'
import { getUserThunk } from '@store/authStore'

import { Styles } from './styles'

/*
Алгоритм аутентификации:
При запуске приложения в первую очердь идёт запрос на endpoint user (через вызов thunk getUserThunk)
Этот запрос может идти по трём различным сценариям
  1) Нет access токена
     a) Запрос на эндпоинт user -> ошибка
     b) Если пользователь находится на неосновной страницы произойдёт редирект на страницу логинизации.
     c) Иначе пользователь уже на странице логинизации.
     d) Необходимо залогиниться вручную

  2) Access токен просрочен
     a) Запрос на эндпоинт user -> ошибка
     b) Если пользователь находится на неосновной страницы произойдёт редирект на страницу логинизации.
     c) Иначе пользователь уже на странице логинизации.
     d) Необходимо залогиниться вручную

  3) Access токен валиден
     a) Запрос на эндпоинт user -> OK
     b) Вызов reducer login с данными из endpoint (установка state).
     c) Редирект на кошелёк.
*/

//На страницу wallet можно попасть по url
function App() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { pathname } = useLocation()

  const [isLoading, setLoading] = React.useState(true)

  //Need for one first request
  useEffect(() => {
    dispatch(getUserThunk())
      .then((response) => {
        setLoading(false)
        if ('error' in response) {
          throw response.error
        } else {
          if (pathname === '/') {
            navigate('wallet/invoice')
          }
        }
      })
      .catch(error => {
        console.error(error)
        setLoading(false)
        if (pathname !== '/') {
          navigate('/')
        }
      })
  }, [])

  return (
    <>
      <Styles />

      {isLoading && (
        <div className="loading-container">
          <CircularProgress />
        </div>
      )}

      {!isLoading &&
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='wallet' element={<WalletPage />}>
              <Route path='invoice' element={<InvoicePage />} />
              <Route path='expenses' element={<ExpensesPage />} />
              <Route path='exchange' element={<ExchangePage />} />
            </Route>
          </Routes>
      }
    </>
  )
}

export default App
