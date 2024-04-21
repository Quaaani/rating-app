import {DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren} from 'react'

export interface TextsProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {}

export enum TextFonts {
  Heading = 'Heading',
  Heading2 = 'Heading2',
  Heading3 = 'Heading3',
  Body = 'Body',
  Light = 'Light',
  SemiBold = 'SemiBold',
  Bold = 'Bold',
}

export type TextsExtensions = Record<TextFonts, FC<PropsWithChildren<TextsProps>>>
