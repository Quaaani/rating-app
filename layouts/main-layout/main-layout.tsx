import {Noto_Sans} from 'next/font/google'

import {FC, PropsWithChildren} from 'react'
import {MainLayoutProps} from './main-layout.types'

import {topPageApiService} from '@api'
import {AppContextProvider} from '@context'
import {Widgets} from '@ui-kit'
import classNames from 'classnames'
import {Metadata} from 'next'
import styles from './main-layout.module.css'

const inter = Noto_Sans({
  subsets: ['latin'],
})

export const MainLayoutMetadata: Metadata = {
  title: 'Main Layout Title',
  description: 'Rating App',
}

export const MainLayout: FC<PropsWithChildren<MainLayoutProps>> = async ({children}) => {
  const rootClassNames = classNames(inter.className, styles.root)

  const sideBarItems = await topPageApiService.getAllMenus()

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
