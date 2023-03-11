import React from 'react'
import { StyledLoginPage } from '@components/loginPage/styles/loginPage.styled'
import { LoginContainer } from '@components/loginPage/components/loginContainer'

export function LoginPage() {
  return (
    <StyledLoginPage>
      <div className='landscape'>
        <h3>Sorry, please turn your device</h3>
      </div>

      <div className='portrait'>
        <LoginContainer />
      </div>
    </StyledLoginPage>
  )
}
