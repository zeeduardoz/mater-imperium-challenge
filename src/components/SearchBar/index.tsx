import React from 'react'

import { FaSearch } from 'react-icons/fa'

import styles from './styles.module.css'
import type { ISearchBarProps } from './types'

export function SearchBar({ onChange }: ISearchBarProps) {
  return (
    <div className={styles.search_bar_container}>
      <div className={styles.search_bar_icon}>
        <FaSearch size={16} />
      </div>

      <input placeholder='Pesquisar sistema...' type='search' className={styles.search_bar_input} onChange={onChange} />
    </div>
  )
}
