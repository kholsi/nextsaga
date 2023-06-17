import { apiBuilder } from '@/services'
import { multipleSlice, singleSlice } from './slices'

export const { fetchSingle, fetchSingleSuccess, fetchSingleFailure } =
  singleSlice.actions
export const { fetchMultiple, fetchMultipleSuccess, fetchMultipleFailure } =
  multipleSlice.actions

const reducers = {
  // Uncomment this if otherBuilder is used. See @/services/builders for more detail.
  // [otherBuilder.reducerPath]: otherBuilder.reducer
  [apiBuilder.reducerPath]: apiBuilder.reducer,

  single: singleSlice.reducer,
  multiple: multipleSlice.reducer,
}

export default reducers
