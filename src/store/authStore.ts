import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { endpoints } from '@endpoints/endpoints'
import { ServerError, LoginRequest, UserRequest } from '@endpoints/endpoints/auth/type'

export interface IAuthState {
  isAuth: boolean
  login: string | null
  walletCurrency: string | null
  email: string | null
  loginServerErrors: ServerError[]
  signUpServerErrors: ServerError[]
}

const initialState: IAuthState = {
  isAuth: false,
  login: null,
  walletCurrency: null,
  email: null,
  loginServerErrors: [],
  signUpServerErrors: [],
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const { login, wallet_currency, email } = action.payload
      state.login = login
      state.email = email
      state.walletCurrency = wallet_currency
      state.isAuth = true
      state.loginServerErrors = []
      state.signUpServerErrors = []
    },
    logoutUser: () => {
      localStorage.removeItem('access_token')
      window.location.reload()
    },
    setLoginErrors: (state, action) => {
      const errors = action.payload
      state.loginServerErrors = errors.response.data.detail
    },
    setSignUpErrors: (state, action) => {
      const errors = action.payload
      state.signUpServerErrors = errors.response.data.detail
    }
  },
})

export const loginThunk = createAsyncThunk(
  'auth/login',
  async ({ login, password }: LoginRequest, { dispatch }) => {
    try {
      const response = await endpoints.auth.login({ login, password })
      localStorage.setItem('access_token', response.access_token)
      window.location.reload()
    } catch (error) {
      console.error(error)
      dispatch(setLoginErrors(error))
      throw error
    }
  },
)

export const getUserThunk = createAsyncThunk(
  'auth/getUser',
  async(_,{ dispatch }) => {
    try {
      const response = await endpoints.auth.getMe()
      dispatch(loginUser(response))
    } catch (error) {
      console.error(error)
      throw error
    }
  },
)

export const signUpThunk = createAsyncThunk(
  'auth/signUp',
  async(user: UserRequest, { dispatch }) => {
    try {
      await endpoints.auth.signUp(user)
      dispatch(loginThunk(user))
    } catch (error) {
      console.error(error)
      dispatch(setSignUpErrors(error))
      throw error
    }
  },
)

export const { loginUser, logoutUser, setLoginErrors, setSignUpErrors } = authSlice.actions

export default authSlice.reducer
