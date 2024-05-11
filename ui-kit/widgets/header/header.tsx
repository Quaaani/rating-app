import {FC} from 'react'
import {HeaderProps} from './header.types'

import styles from './header.module.css'
import classNames from 'classnames'

export const Header: FC<HeaderProps> = ({className}) => {
  const rootClassNames = classNames(className, styles.root)

  return <div className={rootClassNames}>Header Component</div>
}
