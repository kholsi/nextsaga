import apiBuilder from './builders'

export const multipleApi = apiBuilder.injectEndpoints({
  endpoints: (build) => ({
    multiple: build.query({
      query: () => '/todos',
    }),
  }),
})

export const { useMultipleQuery } = multipleApi
