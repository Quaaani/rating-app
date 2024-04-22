import {DetailedHTMLProps, HTMLAttributes} from 'react'

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  mode?: 'small' | 'medium'
  color?: 'ghost' | 'gray' | 'green' | 'red' | 'primary'
  href?: string
}
