import type { PoolDispatch, PoolState } from '@/pool'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useReduxDispatch: () => PoolDispatch = useDispatch
export const useReduxSelector: TypedUseSelectorHook<PoolState> = useSelector
