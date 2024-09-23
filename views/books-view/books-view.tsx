import {FC} from 'react'
import {Metadata} from 'next'

import {BooksViewProps} from './books-view.types'

import styles from './books-view.module.css'

export const BooksViewMetadata: Metadata = {
  title: 'BooksView Title',
  description: 'BooksView Description',
}

export const BooksView: FC<BooksViewProps> = () => {
  return <div className={styles.root}>BooksView</div>
}
