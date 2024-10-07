'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

import { faker } from '@faker-js/faker'

import type { SystemContextType, SystemProviderProps } from './types'

import type { SystemsProps } from '@/interfaces/system'

export const SystemContext = createContext<SystemContextType>({} as SystemContextType)

export default function SystemProvider({ children }: SystemProviderProps) {
  const [systems, setSystems] = useState<SystemsProps[]>([] as SystemsProps[])

  function onLoadMore() {
    setSystems(prev => [
      ...prev,
      ...faker.helpers.multiple(createRandomSystem, {
        count: 6,
      }),
    ])
  }

  function createRandomSystem() {
    return {
      id: faker.string.uuid(),
      title: faker.company.name(),
      description: faker.lorem.sentence({ min: 8, max: 20 }),
      link: faker.internet.url(),
      updatedAt: faker.date.past(),
    }
  }

  useEffect(() => {
    if (!systems.length) {
      setSystems(
        faker.helpers.multiple(createRandomSystem, {
          count: 6,
        }),
      )
    }
  }, [])

  return (
    <SystemContext.Provider
      value={{
        systems,
        onLoadMore,
      }}
    >
      {children}
    </SystemContext.Provider>
  )
}

export const useSystems = () => {
  const context = useContext(SystemContext)
  return context
}
