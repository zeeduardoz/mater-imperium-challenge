'use client'

import { ReactNode } from 'react'

import AccountProvider from './AccountContext'
import SystemProvider from './SystemsContext'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <AccountProvider>
      <SystemProvider>{children}</SystemProvider>
    </AccountProvider>
  )
}
