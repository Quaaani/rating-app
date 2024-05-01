import {FC} from 'react'
import {Metadata} from 'next'

import {ProductListViewProps} from './product-list-view.types'

import styles from './product-list-view.module.css'

export const ProductListViewMetadata: Metadata = {
  title: 'ProductListView Title',
}

export const ProductListView: FC<ProductListViewProps> = () => {
  return <div className={styles.root}>ProductListView</div>
}
