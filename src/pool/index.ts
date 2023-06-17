import reducers from '@/reducers'
import rootSaga from '@/saga'
import { apiBuilder } from '@/services'
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

const pool = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware, apiBuilder.middleware),
})

sagaMiddleware.run(rootSaga)

export type PoolState = ReturnType<typeof pool.getState>
export type PoolDispatch = typeof pool.dispatch

export default pool
