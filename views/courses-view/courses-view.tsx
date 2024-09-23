import {FC} from 'react'
import {Metadata} from 'next'

import {CoursesViewProps} from './courses-view.types'

import styles from './courses-view.module.css'

export const CoursesViewMetadata: Metadata = {
  title: 'CoursesView Title',
  description: 'CoursesView Description',
}

export const CoursesView: FC<CoursesViewProps> = () => {
  return <div className={styles.root}>CoursesView</div>
}
