import {Noto_Sans} from 'next/font/google'

import {FC, PropsWithChildren} from 'react'
import {MainLayoutProps} from './main-layout.types'

import styles from './main-layout.module.css'
import classNames from 'classnames'
import {Footer, Header, Sidebar} from '@widgets'

const inter = Noto_Sans({
  subsets: ['latin'],
})

export const MainLayout: FC<PropsWithChildren<MainLayoutProps>> = ({children}) => {
  const rootClassNames = classNames(inter.className, styles.root)

  return (
    <html lang="en">
      <body className={rootClassNames}>
        <Header className={styles.header} />
        <Sidebar className={styles.sidebar} />
        <div className={styles.content}>{children}</div>
        <Footer className={styles.footer} />
      </body>
    </html>
  )
}
