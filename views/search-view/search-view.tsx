import {FC} from 'react'
import {Metadata} from 'next'

import {SearchViewProps} from './search-view.types'

import styles from './search-view.module.css'

export const SearchViewMetadata: Metadata = {
  title: 'SearchView Title',
  description: 'SearchView Description',
}

export const SearchView: FC<SearchViewProps> = () => {
  return <div className={styles.root}>SearchView</div>
}
