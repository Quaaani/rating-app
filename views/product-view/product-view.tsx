'use client'

import {topPageApiModel} from '@api'
import {useAppContext} from '@context'
import {FC} from 'react'
import {ProductViewProps} from './product-view.types'

export const generateStaticParams = async () => {
  const menu = await topPageApiModel.getMenu(JSON.stringify({firstCategory: 0}))
  const result = menu.flatMap(item => item.pages.map(page => ({slug: page.alias})))

  return result
}

export const ProductView: FC<ProductViewProps> = async () => {
  const {firstCategory} = useAppContext()

  return <div>ProductView - {firstCategory}</div>
}
