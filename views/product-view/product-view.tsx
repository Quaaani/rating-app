import {topPageApiModel} from '@api'
import {notFound} from 'next/navigation'
import {ProductViewProps} from './product-view.types'
import {FC} from 'react'

export const generateStaticParams = async () => {
  const menu = await topPageApiModel.getMenu(JSON.stringify({firstCategory: 0}))
  const result = menu.flatMap(item => item.pages.map(page => ({slug: page.alias})))

  return result
}

export const ProductView: FC<ProductViewProps> = async ({params}) => {
  const page = await topPageApiModel.getPageByAlias(params!.slug)

  if (!page) {
    notFound()
  }

  return (
    <div>
      {params!.slug}
      <div>{page.title}</div>
    </div>
  )
}
