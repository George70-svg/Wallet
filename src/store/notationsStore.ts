import { createSlice } from '@reduxjs/toolkit'

type Notation = {
  iconColor: string
  category: string
  date: string
  value: number
  currency: string
}

export interface INotationState {
  notations: Notation[]
}

const initialState: INotationState = {
  notations: []
}

export const notationsSlice = createSlice({
  name: 'notations',
  initialState,
  reducers: {
    addNotation: (state) => {
      state.notations.push({
        iconColor: '#fff',
        category: 'taxi',
        date: '19.03.23',
        value: -10.26,
        currency: '$',
      })
    }
  }
})

export const { addNotation } = notationsSlice.actions

export default notationsSlice.reducer
