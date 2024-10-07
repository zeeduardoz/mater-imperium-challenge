import React from 'react'

import styles from './styles.module.css'
import type { IContainerProps } from './types'

export function Container({ children }: IContainerProps) {
  return <div className={styles.container}>{children}</div>
}
