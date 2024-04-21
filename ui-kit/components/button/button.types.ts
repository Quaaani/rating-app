import {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  mode?: 'primary' | 'ghost'
  iconPosition?: 'right' | 'down'
}
