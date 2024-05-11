'use client'

import {FC, useEffect, useState, KeyboardEvent} from 'react'
import {RatingProps} from './rating.types'

import StarIcon from '@assets/icons/star.svg'

import styles from './rating.module.css'
import classNames from 'classnames'

const starsCount = new Array(5).fill(0)

export const Rating: FC<RatingProps> = ({className, isReadonly, rating, setRating, ...restProps}) => {
  const [currentRating, setCurrentRating] = useState(0)

  useEffect(() => {
    setCurrentRating(rating)
  }, [rating])

  const onSelect = (starIndex: number) => () => {
    if (isReadonly) {
      return
    }

    setCurrentRating(starIndex + 1)
    setRating?.(starIndex + 1)
  }

  const onHover = (starIndex: number) => () => {
    if (isReadonly) {
      return
    }

    setCurrentRating(starIndex + 1)
  }

  const onLeave = () => {
    if (isReadonly) {
      return
    }

    setCurrentRating(rating)
  }

  const onKeyPress = (starIndex: number) => (event: KeyboardEvent<SVGElement>) => {
    if (event.code !== 'Space' || isReadonly) {
      return
    }

    setCurrentRating(starIndex + 1)
    setRating?.(starIndex + 1)
  }

  return (
    <div className={className} {...restProps}>
      {starsCount.map((_, index) => {
        const starWrapperStyles = classNames(styles.base, {
          [styles.selected]: index < currentRating,
          [styles.readonly]: isReadonly,
        })

        return (
          <span
            key={index}
            className={starWrapperStyles}
            onClick={onSelect(index)}
            onMouseEnter={onHover(index)}
            onMouseLeave={onLeave}
          >
            <StarIcon onKeyDown={onKeyPress(index)} tabIndex={0} />
          </span>
        )
      })}
    </div>
  )
}
