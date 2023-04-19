import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { endpoints } from '@endpoints/endpoints'
import { LoginRequest, UserRequest } from '@endpoints/endpoints/auth/type'

export interface IAuthState {
  isAuth: boolean
  login: string | null
  walletCurrency: string | null
}

const initialState: IAuthState = {
  isAuth: false,
  login: null,
  walletCurrency: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const { login, wallet_currency } = action.payload
      state.login = login
      state.walletCurrency = wallet_currency
      state.isAuth = true
    },
    logoutUser: (state) => {
      state.login = null
      state.walletCurrency = null
      state.isAuth = false
      localStorage.removeItem('access_token')
      window.location.reload()
    },
  },
})

export const loginThunk = createAsyncThunk(
  'auth/login',
  async ({ login, password }: LoginRequest) => {
    try {
      const response = await endpoints.auth.login({ login, password })
      localStorage.setItem('access_token', response.access_token)
      window.location.reload()
    } catch (error) {
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
      throw error
    }
  },
)

export const { loginUser, logoutUser } = authSlice.actions

export default authSlice.reducer
