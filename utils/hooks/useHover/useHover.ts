'use client'

import {useState} from 'react'
import {UseHoverResult} from './useHover.types'

export const useHover = (): UseHoverResult => {
  const [isHovered, setIsHovered] = useState(false)

  const onMouseEnter = () => {
    setIsHovered(true)
  }

  const onMouseLeave = () => {
    setIsHovered(false)
  }

  return [isHovered, {onMouseEnter, onMouseLeave}]
}
