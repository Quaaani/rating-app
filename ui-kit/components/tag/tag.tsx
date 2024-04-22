import {FC, PropsWithChildren} from 'react'
import {TagProps} from './tag.types'

import styles from './tag.module.css'
import classNames from 'classnames'

export const Tag: FC<PropsWithChildren<TagProps>> = ({
  children,
  className,
  mode = 'small',
  color = 'ghost',
  href,
  ...restProps
}) => {
  const tagClassNames = classNames(className, styles.tag, {
    [styles.small]: mode === 'small',
    [styles.medium]: mode === 'medium',
    [styles.ghost]: color === 'ghost',
    [styles.gray]: color === 'gray',
    [styles.green]: color === 'green',
    [styles.red]: color === 'red',
    [styles.primary]: color === 'primary',
  })

  return (
    <div className={tagClassNames} {...restProps}>
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  )
}
