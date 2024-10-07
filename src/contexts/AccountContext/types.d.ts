import type { ReactNode } from 'react'

import type { AccountProps } from '@/interfaces/account'

export type AccountProviderProps = {
  children: ReactNode
}

export type AccountContextType = {
  account: AccountProps
}
