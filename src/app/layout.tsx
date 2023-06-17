import pool from '@/pool'
import { Metadata } from 'next'
import { Provider } from 'react-redux'

export const metadata: Metadata = {
  title: 'NextSaga | Kholsi',
  description:
    'React 18 + Next.js 13 + Redux + RTK Query + Redux Saga + Styled Component + AntD Framework',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Provider store={pool}>{children}</Provider>
      </body>
    </html>
  )
}
