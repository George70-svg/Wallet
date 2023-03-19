import { createSlice } from '@reduxjs/toolkit'

export interface IAuthState {
  isAuth: boolean
  login: string | null
}

const initialState: IAuthState = {
  isAuth: false,
  login: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.login = action.payload
    }
  }
})

export const { setLogin } = authSlice.actions

export default authSlice.reducer
