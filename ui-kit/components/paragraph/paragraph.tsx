import {FC, PropsWithChildren} from 'react'
import {ParagraphProps} from './paragraph.types'

import styles from './paragraph.module.css'
import classNames from 'classnames'

export const Paragraph: FC<PropsWithChildren<ParagraphProps>> = ({
  children,
  className,
  mode = 'medium',
  ...restProps
}) => {
  const paragraphClassNames = classNames(className, {
    [styles.small]: mode === 'small',
    [styles.medium]: mode === 'medium',
    [styles.large]: mode === 'large',
  })

  return (
    <p className={paragraphClassNames} {...restProps}>
      {children}
    </p>
  )
}
