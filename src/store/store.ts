import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import notationsReducer, { INotationState } from '@store/notationsStore'
import authReducer, { IAuthState } from '@store/authStore'
import themeReducer, { IColorThemeState } from '@store/colorThemeStore'

export interface IStore {
  notations: INotationState
  auth: IAuthState
  theme: IColorThemeState
}

export const store = configureStore({
  reducer: {
    notations: notationsReducer,
    auth: authReducer,
    theme: themeReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
