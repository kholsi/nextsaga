import apiBuilder from './builders'

export const singleApi = apiBuilder.injectEndpoints({
  endpoints: (build) => ({
    single: build.query({
      query: () => '/todos/1',
    }),
  }),

  // Tip: If you inject an endpoint that already exists and don't explicitly specify overrideExisting: true, the endpoint will not be overridden. In development mode, you will get a warning about this.
  // Uncomment if you really need this.
  // overrideExisting: false,
})

export const { useSingleQuery } = singleApi
