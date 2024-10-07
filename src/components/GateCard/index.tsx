import React from 'react'

import { CiGlobe } from 'react-icons/ci'
import { FaExternalLinkAlt } from 'react-icons/fa'

import styles from './styles.module.css'
import type { IGateCardProps } from './types'

export function GateCard({ link, title, description }: IGateCardProps) {
  return (
    <a href={link} className={styles.card_container}>
      <div className={styles.card_info}>
        <div className={styles.card_icon}>
          <CiGlobe size={24} color='#EE6942' />
        </div>

        <span className={styles.card_title}>{title}</span>
        <span className={styles.card_description}>{description}</span>
      </div>

      <div className={styles.card_icon_footer}>
        <FaExternalLinkAlt size={16} color='#EE6942' />
      </div>
    </a>
  )
}
