import { ReduxWrapper } from '@/wrapper'
import { Metadata } from 'next'

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
        <ReduxWrapper>{children}</ReduxWrapper>
      </body>
    </html>
  )
}
