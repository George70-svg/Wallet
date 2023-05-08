import { FieldError } from 'react-hook-form'

export type UserRequest = {
  login: string
  email: string
  password: string
  confirmPassword: string
}

export type UserResponse = {
  user_id: string
  login: string
  email: string
  wallet_currency: string
}

export type LoginRequest = {
  login: string
  password: string
}

export type LoginResponse = {
  access_token: string
  refresh_token: string
}

export type ServerError = {
  loc: any[]
  msg: string
  type: string
}

export const isLoginError = (error: FieldError | ServerError | undefined): boolean => {
  return (error as ServerError).msg !== undefined
}
