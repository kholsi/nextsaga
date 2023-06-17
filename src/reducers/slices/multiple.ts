import { createSlice } from '@reduxjs/toolkit'

export interface IMultipleData {
  userId: number
  id: number
  title: string
  completed: boolean
}

export interface IMultipleState {
  loading: boolean
  error: any
  data: IMultipleData[] | []
}

export const initialMultipleState: IMultipleState = {
  loading: false,
  error: null,
  data: [],
}

export const multipleSlice = createSlice({
  name: 'multiple',
  initialState: initialMultipleState,
  reducers: {
    fetchMultiple: (state) => {
      state.loading = true
    },
    fetchMultipleSuccess: (state, action) => {
      state.loading = false
      state.data = action.payload
    },
    fetchMultipleFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})
