import {FC} from 'react'
import {Metadata} from 'next'

import {TypeViewProps} from './type-view.types'

import styles from './type-view.module.css'

export const TypeViewMetadata: Metadata = {
  title: 'TypeView Title',
  description: 'TypeView Description',
}

export const TypeView: FC<TypeViewProps> = () => {
  return <div className={styles.root}>TypeView</div>
}
