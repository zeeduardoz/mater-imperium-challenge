import type { ReactNode } from 'react'

import type { SystemsProps } from '@/interfaces/system'

export type SystemProviderProps = {
  children: ReactNode
}

export type SystemContextType = {
  systems: SystemsProps[]
  onLoadMore: () => void
}
