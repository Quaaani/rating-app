import {FC} from 'react'
import {SidebarProps} from './sidebar.types'

import styles from './sidebar.module.css'
import classNames from 'classnames'

export const Sidebar: FC<SidebarProps> = ({className}) => {
  const rootClassNames = classNames(className, styles.root)

  return <div className={rootClassNames}>Sidebar Component</div>
}
