import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Box, Button, Checkbox, FormControlLabel, TextField } from '@mui/material'
import { AccountCircle, Lock } from '@mui/icons-material'
import { StyledLogin } from '@components/loginPage/components/styles/login.styled'
import { LoginErrors } from '@components/components/errors/loginErrors'

interface IFormInput {
  login: string
  password: string
  remember: boolean
}

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>()

  const navigate = useNavigate()

  const onSubmit = (data: any) => {
    console.log(data)
    navigate('wallet/invoice')
  }

  return (
    <StyledLogin>
      <h3>Login</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='input-container'>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: '1rem' }}>
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField
              label='Login'
              type='text'
              variant='standard'
              {...register('login', { required: true, minLength: 5 })}
            />
          </Box>
          <LoginErrors validationErrors={errors.login} field='login' />

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
                pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&~*()_+-={};:<>,./?])(?=.*[0-9])(?=.*[a-z]).{8,}$/,
                required: true,
                minLength: 8,
              })}
            />
          </Box>
          <LoginErrors validationErrors={errors.password} field='password' />

          <div className='login-setting'>
            <FormControlLabel
              className='label'
              control={<Checkbox defaultChecked size='small' {...register('remember')} />}
              label='Remember me?'
            />
            <p>Forgot password?</p>
          </div>
        </div>

        <Button className='enter-button' variant='contained' type='submit'>
          Ok
        </Button>
      </form>
    </StyledLogin>
  )
}
