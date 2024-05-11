import {Noto_Sans} from 'next/font/google'

import {FC, PropsWithChildren} from 'react'
import {MainLayoutProps} from './main-layout.types'

import styles from './main-layout.module.css'
import classNames from 'classnames'
import {Metadata} from 'next'
import {AppContextProvider} from '@context'
import {topPageApiModel} from '@api'
import {GetMenuParamsRequest} from '@contracts'
import {transformMenuToSideBarMenuItems} from '@utils'
import {Widgets} from '@ui-kit'
import {categoryLevels} from '@constants'

const inter = Noto_Sans({
  subsets: ['latin'],
})

export const MainLayoutMetadata: Metadata = {
  title: 'Main Layout Title',
  description: 'Rating App',
}

export const MainLayout: FC<PropsWithChildren<MainLayoutProps>> = async ({children}) => {
  const rootClassNames = classNames(inter.className, styles.root)

  const menuPromises = categoryLevels.map(categoryLevel => {
    const requestParams: GetMenuParamsRequest = {
      firstCategory: categoryLevel,
    }

    return topPageApiModel.getMenu(JSON.stringify(requestParams))
  })

  const menuResults = await Promise.all(menuPromises)

  const sideBarItems = transformMenuToSideBarMenuItems(menuResults)

  return (
    <html lang="en">
      <body className={rootClassNames}>
        <AppContextProvider menuItems={sideBarItems}>
          <Widgets.Header className={styles.header} />
          <Widgets.SideBar className={styles.sidebar} />
          <div className={styles.content}>{children}</div>
          <Widgets.Footer className={styles.footer} />
        </AppContextProvider>
      </body>
    </html>
  )
}
