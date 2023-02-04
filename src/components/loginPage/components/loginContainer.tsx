import React, { useState } from 'react'
import { StyledLoginContainer } from '@components/loginPage/components/styles/loginContainer.styled'
import { Button } from '@mui/material'
import { Login } from '@components/loginPage/components/login'
import { SignUp } from '@components/loginPage/components/signUp'

export function LoginContainer() {
  const [activeButton, setActiveButton] = useState('Login')

  const buttonToggle = (buttonStatus: 'Login' | 'SignUp') => {
    setActiveButton(buttonStatus)
  }

  return (
    <StyledLoginContainer className='card-container'>
      <div className='portrait'>
        <div className='login-input'>
          {activeButton === 'Login' && <Login />}
          {activeButton === 'SignUp' && <SignUp />}
        </div>

        <div className='login-buttons'>
          <Button
            onClick={() => buttonToggle('Login')}
            className={activeButton === 'Login' ? 'active' : 'passive'}
            variant={activeButton === 'Login' ? 'contained' : 'outlined'}
          >
            Login
          </Button>

          <Button
            onClick={() => buttonToggle('SignUp')}
            className={activeButton === 'SignUp' ? 'active' : 'passive'}
            variant={activeButton === 'SignUp' ? 'contained' : 'outlined'}
          >
            Sign Up
          </Button>
        </div>
      </div>

      <div className='landscape'>
        <h3>Please turn your device over</h3>
      </div>
    </StyledLoginContainer>
  )
}
