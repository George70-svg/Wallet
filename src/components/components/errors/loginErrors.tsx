import React from 'react'
import { FieldError } from 'react-hook-form'
import { StyledLoginErrors } from '@components/components/styles/loginErrors.styled'

type Field = 'login' | 'email' | 'password' | 'confirmPassword'

interface LoginErrorsType {
  validationErrors: FieldError | undefined
  dataErrors?: boolean
  field: Field
}

export function LoginErrors(props: LoginErrorsType) {
  type ErrorMessages = {
    loginRequired: string
    loginMinLength: string
    passwordRequired: string
    passwordMinLength: string
    passwordPattern: string
    emailRequired: string
    invalidEmail: string
    invalidLoginOrPassword: string
    passwordsNotEqual: string
    default: string
  }

  const errorMessages: ErrorMessages = {
    loginRequired: 'Login is a required field',
    loginMinLength: 'Login must be at least 5 characters',
    passwordRequired: 'Password is a required field',
    passwordMinLength: 'Password must be at least 8 characters',
    passwordPattern: 'The password must contain latin characters, numbers and special characters',
    emailRequired: 'Email is a required field',
    invalidEmail: 'Email is invalid',
    invalidLoginOrPassword: 'Password or login is invalid',
    passwordsNotEqual: 'Your passwords do not match',
    default: '',
  }

  return (
    <StyledLoginErrors>
      {props.field === 'login' && props.validationErrors?.type === 'required' && (
        <p className='error-text'>{errorMessages.loginRequired}</p>
      )}

      {props.field === 'login' && props.validationErrors?.type === 'minLength' && (
        <p className='error-text'>{errorMessages.loginMinLength}</p>
      )}

      {props.field === 'password' && props.validationErrors?.type === 'required' && (
        <p className='error-text'>{errorMessages.passwordRequired}</p>
      )}

      {props.field === 'password' && props.validationErrors?.type === 'minLength' && (
        <p className='error-text'>{errorMessages.passwordMinLength}</p>
      )}

      {props.field === 'password' && props.validationErrors?.type === 'pattern' && (
        <p className='error-text'>{errorMessages.passwordPattern}</p>
      )}

      {props.field === 'email' && props.validationErrors?.type === 'required' && (
        <p className='error-text'>{errorMessages.emailRequired}</p>
      )}

      {props.field === 'email' && props.validationErrors?.type === 'pattern' && <p className='error-text'>{errorMessages.invalidEmail}</p>}

      {props.field === 'confirmPassword' && props.validationErrors?.type === 'required' && (
        <p className='error-text'>{errorMessages.passwordRequired}</p>
      )}

      {props.field === 'confirmPassword' && props.validationErrors?.type === 'minLength' && (
        <p className='error-text'>{errorMessages.passwordMinLength}</p>
      )}

      {props.field === 'confirmPassword' && props.validationErrors?.type === 'pattern' && (
        <p className='error-text'>{errorMessages.passwordPattern}</p>
      )}

      {props.field === 'confirmPassword' && props.dataErrors && <p className='error-text'>{errorMessages.passwordsNotEqual}</p>}

      {props.field === 'password' && props.dataErrors && <p className='error-text'>{errorMessages.invalidLoginOrPassword}</p>}
    </StyledLoginErrors>
  )
}
