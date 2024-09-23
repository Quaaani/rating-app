import {FC} from 'react'
import {Metadata} from 'next'

import {ServicesViewProps} from './services-view.types'

import styles from './services-view.module.css'

export const ServicesViewMetadata: Metadata = {
  title: 'ServicesView Title',
  description: 'ServicesView Description',
}

export const ServicesView: FC<ServicesViewProps> = () => {
  return <div className={styles.root}>ServicesView</div>
}
