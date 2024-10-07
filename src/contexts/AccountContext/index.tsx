'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

import { faker } from '@faker-js/faker'

import type { AccountContextType, AccountProviderProps } from './types'

import type { AccountProps } from '@/interfaces/account'

export const AccountContext = createContext<AccountContextType>({} as AccountContextType)

export default function AccountProvider({ children }: AccountProviderProps) {
  const [account, setAccount] = useState<AccountProps>({} as AccountProps)

  useEffect(() => {
    if (!account.id) {
      setAccount({
        id: faker.string.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
      })
    }
  }, [])

  return (
    <AccountContext.Provider
      value={{
        account,
      }}
    >
      {children}
    </AccountContext.Provider>
  )
}

export const useAccount = () => {
  const context = useContext(AccountContext)
  return context
}
