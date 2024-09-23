import {FC} from 'react'
import {Metadata} from 'next'

import {ProductsViewProps} from './products-view.types'

import styles from './products-view.module.css'

export const ProductsViewMetadata: Metadata = {
  title: 'ProductsView Title',
  description: 'ProductsView Description',
}

export const ProductsView: FC<ProductsViewProps> = () => {
  return <div className={styles.root}>ProductsView</div>
}
