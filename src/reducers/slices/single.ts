import { createSlice } from '@reduxjs/toolkit'

export interface ISingleData {
  userId: number
  id: number
  title: string
  completed: boolean
}

export interface ISingleState {
  loading: boolean
  error: any
  data: ISingleData | null
}

export const initialSingleState: ISingleState = {
  loading: false,
  error: null,
  data: null,
}

export const singleSlice = createSlice({
  name: 'single',
  initialState: initialSingleState,
  reducers: {
    fetchSingle: (state) => {
      state.loading = true
    },
    fetchSingleSuccess: (state, action) => {
      state.loading = false
      state.data = action.payload
    },
    fetchSingleFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})
