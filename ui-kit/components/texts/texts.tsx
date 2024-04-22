import {TextFonts, TextsExtensions, TextsProps} from './texts.types'

import styles from './texts.module.css'

import classNames from 'classnames'

import {PropsWithChildren} from 'react'
import {getObjectKeys} from '@utils'

const textFontStyles: Record<TextFonts, string> = {
  [TextFonts.Heading]: styles.heading,
  [TextFonts.Heading2]: styles.heading2,
  [TextFonts.Heading3]: styles.heading3,
  [TextFonts.Body]: styles.body,
  [TextFonts.Light]: styles.light,
  [TextFonts.SemiBold]: styles.semiBold,
  [TextFonts.Bold]: styles.bold,
}

const generateTextComponents = (): TextsExtensions => {
  const textFontStyleKeys = getObjectKeys(textFontStyles)

  return textFontStyleKeys.reduce<TextsExtensions>(
    (acc, textFontStyleKey) => ({
      ...acc,
      [textFontStyleKey]: ({children, className, ...restProps}: PropsWithChildren<TextsProps>) => (
        <p className={classNames(className, textFontStyles[textFontStyleKey])} {...restProps}>
          {children}
        </p>
      ),
    }),
    {} as TextsExtensions,
  )
}

export const Texts: TextsExtensions = generateTextComponents()
