import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Box, Button, TextField } from '@mui/material'
import { StyledLogin } from '@components/loginPage/components/styles/login.styled'
import { AccountCircle, Lock, Email } from '@mui/icons-material'
import { LoginErrors } from '@components/components/errors/loginErrors'

interface IFormInput {
  login: string
  email: string
  password: string
  confirmPassword: string
}

export function SignUp() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IFormInput>()

  const [passwordsNotEqual, setPasswordsNotEqual] = useState(false)

  const navigate = useNavigate()

  const onSubmit = () => {
    const password1 = getValues('password')
    const password2 = getValues('confirmPassword')

    if (password1 !== password2) {
      setPasswordsNotEqual(true)
      return
    }

    navigate('wallet/invoice')
  }

  return (
    <StyledLogin>
      <h3>Creat an account</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='input-container'>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-end',
              marginBottom: '1rem',
            }}
          >
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField label='Login' variant='standard' {...register('login', { required: true, minLength: 5 })} />
          </Box>
          <LoginErrors validationErrors={errors.login} field='login' />

          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-end',
              marginBottom: '1rem',
            }}
          >
            <Email sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField
              label='Email'
              variant='standard'
              {...register('email', {
                //Email pattern
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
                required: true,
              })}
            />
          </Box>
          <LoginErrors validationErrors={errors.email} field='email' />

          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-end',
              marginBottom: '1rem',
            }}
          >
            <Lock sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField
              label='Password'
              type='password'
              autoComplete='current-password'
              variant='standard'
              {...register('password', {
                //The password must contain latin characters, numbers and special characters
                pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*~()_+-={};:<>,./?])(?=.*[0-9])(?=.*[a-z]).{8,}$/,
                required: true,
                minLength: 8,
              })}
            />
          </Box>
          <LoginErrors validationErrors={errors.password} field='password' />

          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-end',
              marginBottom: '1rem',
            }}
          >
            <Lock sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField
              label='Confirm password'
              type='password'
              autoComplete='current-password'
              variant='standard'
              {...register('confirmPassword', {
                //The password must contain latin characters, numbers and special characters
                pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*~()_+-={};:<>,./?])(?=.*[0-9])(?=.*[a-z]).{8,}$/,
                required: true,
                minLength: 8,
              })}
            />
          </Box>
          <LoginErrors
            validationErrors={errors.confirmPassword}
            dataErrors={passwordsNotEqual}
            field='confirmPassword'
          />
        </div>

        <Button className='enter-button' variant='contained' type='submit'>
          Ok
        </Button>
      </form>
    </StyledLogin>
  )
}
