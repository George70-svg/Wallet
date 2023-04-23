import React from 'react'
import { useForm } from 'react-hook-form'
import { Box, Button, Checkbox, FormControlLabel, TextField } from '@mui/material'
import { AccountCircle, Lock } from '@mui/icons-material'
import { StyledLogin } from '@components/loginPage/components/styles/login.styled'
import { LoginErrors } from '@components/components/errors/loginErrors'
import { loginThunk } from '@store/authStore'
import { LoginRequest } from '@endpoints/endpoints/auth/type'
import { useAppDispatch } from '@store/store'

interface IFormInput {
  login: string
  password: string
  remember: boolean
}

/*
Алгоритм логинизации
  1) Ввод логина и пароля
  2) Отправка thunk loginThunk
  3) При успехе получение токена и запись его в хранилище
  4) Перезагрузка страницы чтобы собрать фронт с новым токеном (См. "Алгоритм аутентификации")
*/

export function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>()
  const dispatch = useAppDispatch()

  const onSubmit = async (data: IFormInput) => {
    const user: LoginRequest = {
      login: data.login,
      password: data.password
    }

    dispatch(loginThunk(user))
  }

  return (
    <StyledLogin>
      <h3>Login</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='input-container'>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: '1rem' }}>
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField label='Login' type='text' variant='standard' {...register('login', { required: true, minLength: 5 })} />
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
