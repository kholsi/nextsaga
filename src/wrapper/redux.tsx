'use client'

import pool from '@/pool'
import { Provider } from 'react-redux'

export default function Redux({ children }: { children: React.ReactNode }) {
  return <Provider store={pool}>{children}</Provider>
}
