import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import notationsReducer, { INotationState } from './notationsStore'
import authReducer, { IAuthState } from './authStore'

export interface IStore {
  notations: INotationState
  auth: IAuthState
}

export const store = configureStore({
  reducer: {
    notations: notationsReducer,
    auth: authReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
