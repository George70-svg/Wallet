import React from 'react'
import { StyledLoginPage } from '@components/loginPage/styles/loginPage.styled'
import { LoginContainer } from '@components/loginPage/components/loginContainer'

export function LoginPage() {
  return (
    <StyledLoginPage>
      <LoginContainer />
      <div className='no-view'></div>
    </StyledLoginPage>
  )
}
