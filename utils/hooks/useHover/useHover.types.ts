import {DetailedHTMLProps, HTMLAttributes} from 'react'

type UseHoverHandlers = Pick<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  'onMouseEnter' | 'onMouseLeave'
>

export type UseHoverResult = [boolean, UseHoverHandlers]
