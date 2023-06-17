import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import api from './api'

// other api builder
// Uncomment and customize if you need further api builder.
// Basically, you just need to replace baseUrl.
/*
export const otherBuilder = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://example.other.com' }),
  endpoints: () => ({}),
})
*/

// Default api builder
const builder = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: api.defaults.baseURL }),
  endpoints: () => ({}),
})

export default builder
