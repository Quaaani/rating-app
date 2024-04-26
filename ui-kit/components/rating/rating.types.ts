import {DetailedHTMLProps, HTMLAttributes} from 'react'

export interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isReadonly?: boolean
  rating: number
  setRating?: (rating: number) => void
}
