'use client'

import { useState } from 'react'

import { useAccount } from '@/contexts/AccountContext'
import { useSystems } from '@/contexts/SystemsContext'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { GateCard } from '@/components/GateCard'
import { ProfileSigned } from '@/components/ProfileSigned'
import { SearchBar } from '@/components/SearchBar'

import styles from './page.module.css'

export default function Home() {
  const { account } = useAccount()
  const { systems, onLoadMore } = useSystems()

  const [search, setSearch] = useState('')

  // Filter systems by search
  const filteredSystems = systems.filter(system => system.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className={styles.page_container}>
      <Container>
        <div className={styles.page_head}>
          <ProfileSigned avatar={account.avatar} name={account.username} email={account.email} />
        </div>
      </Container>

      <main className={styles.page_main}>
        <Container>
          <div className={styles.page_list_header}>
            <div>
              <h1 className={styles.page_title}>Sistemas</h1>
              <p className={styles.page_description}>Escolha um sistema listado para acessar</p>
            </div>

            <SearchBar onChange={e => setSearch(e.target.value)} />
          </div>

          <div className={styles.page_list_container}>
            {!filteredSystems.length ? (
              <p className={styles.page_empty}>Nenhum sistema encontrado para &apos;{search}&apos;</p>
            ) : (
              <div className={styles.page_list_grid}>
                {filteredSystems.map(system => (
                  <GateCard key={system.id} link={system.link} title={system.title} description={system.description} />
                ))}
              </div>
            )}

            <Button title='Carregar mais' onClick={onLoadMore} />
          </div>
        </Container>
      </main>

      <Container>
        <Footer />
      </Container>
    </div>
  )
}
