import { configureStore } from '@reduxjs/toolkit'

import notationsReducer, { INotationState } from './notationsStore'
import authReducer, { IAuthState } from './authStore'

export interface IStore {
  notations: INotationState,
  auth: IAuthState,
}

export const store = configureStore({
  reducer: {
    notations: notationsReducer,
    auth: authReducer,
  },
})
