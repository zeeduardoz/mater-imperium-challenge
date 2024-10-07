import React from 'react'

import styles from './styles.module.css'
import type { IFooterProps } from './types'

export function Footer({}: IFooterProps) {
  return (
    <footer className={styles.footer_container}>
      <p className={styles.footer_copyright}>© 2024 - Challenge, Mater Imperium</p>
    </footer>
  )
}
