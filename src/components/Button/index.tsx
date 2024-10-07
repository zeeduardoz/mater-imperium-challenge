import React from 'react'

import styles from './styles.module.css'
import type { IButtonProps } from './types'
import { BiChevronRight } from 'react-icons/bi'

export function Button({ title, onClick }: IButtonProps) {
  return (
    <button className={styles.button_container} onClick={onClick}>
      {title}

      <BiChevronRight size={24} />
    </button>
  )
}
