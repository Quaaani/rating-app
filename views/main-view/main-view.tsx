'use client'

import {FC} from 'react'
import {MainViewProps} from './main-view.types'

import styles from './main-view.module.css'

export const MainView: FC<MainViewProps> = () => {
  return <div className={styles.root}></div>
}
