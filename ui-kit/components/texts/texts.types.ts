import {DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren} from 'react'

export interface TextsProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {}

export enum TextFonts {
  Heading = 'Heading',
  Heading2 = 'Heading2',
  Heading2Bold = 'Heading2Bold',
  Paragraph = 'Paragraph',
  Paragraph2 = 'Paragraph2',
  Paragraph2Bold = 'Paragraph2Bold',
  Small = 'Small',
  SmallBold = 'SmallBold',
}

export type TextsExtensions = Record<TextFonts, FC<PropsWithChildren<TextsProps>>>
