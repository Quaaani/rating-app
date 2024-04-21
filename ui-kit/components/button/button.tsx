import {FC, PropsWithChildren} from 'react'
import {ButtonProps} from './button.types'

import ArrowIcon from '../../assets/icons/arrow.svg'

import styles from './button.module.css'
import cn from 'classnames'

export const Button: FC<PropsWithChildren<ButtonProps>> = ({children, mode = 'primary', iconPosition}) => {
  const buttonClassNames = cn(styles.button, {
    [styles.primary]: mode === 'primary',
    [styles.ghost]: mode === 'ghost',
  })

  const iconClassNames = cn(styles.arrow, {
    [styles.down]: iconPosition === 'down',
  })

  return (
    <button className={buttonClassNames}>
      {children}
      {iconPosition ? (
        <span className={iconClassNames}>
          <ArrowIcon />
        </span>
      ) : undefined}
    </button>
  )
}
