import React from 'react'

import Image from 'next/image'
import { FaSignOutAlt } from 'react-icons/fa'

import styles from './styles.module.css'
import type { IProfileSignedProps } from './types'

export function ProfileSigned({ avatar, name, email }: IProfileSignedProps) {
  return (
    <div className={styles.profile_container}>
      <Image src={avatar} className={styles.profile_avatar} alt={'Avatar image'} width={40} height={40} />

      <div className={styles.profile_info}>
        <span className={styles.profile_name}>{name}</span>
        <span className={styles.profile_email}>{email}</span>
      </div>

      <a className={styles.profile_sign_out}>
        <FaSignOutAlt size={16} color='#EE6942' />
      </a>
    </div>
  )
}
