'use client'

import {FC, useContext} from 'react'
import {Metadata} from 'next'

import {AliasViewProps} from './alias-view.types'

import styles from './alias-view.module.css'
import {topPageApiService} from '@api'
import {notFound} from 'next/navigation'
import {AppContext} from '@context'

export const AliasViewMetadata: Metadata = {
  title: 'AliasView Title',
  description: 'AliasView Description',
}

export const generateStaticParams = async () => {
  const sideBarItems = await topPageApiService.getAllMenus()
  const pregeneratedParams = []

  for (const sideBarItem of sideBarItems) {
    for (const child of sideBarItem.children) {
      pregeneratedParams.push({
        type: sideBarItem.label,
        alias: child.label,
      })
    }
  }

  return pregeneratedParams
}

export const AliasView: FC<AliasViewProps> = ({params}) => {
  const {type, alias} = params
  const {menuItems} = useContext(AppContext)

  if (!menuItems.find(item => item.label === type)) {
    notFound()
  }

  return (
    <div className={styles.root}>
      AliasView {params.type} {params.alias}
    </div>
  )
}
