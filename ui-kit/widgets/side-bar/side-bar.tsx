'use client'

import {FC, Fragment} from 'react'
import {SideBarProps} from './side-bar.types'

import styles from './side-bar.module.css'
import classNames from 'classnames'
import {Texts} from '../../components'
import {useAppContext} from '@context'
import {SideBarItem} from '@interfaces'
import Link from 'next/link'

export const SideBar: FC<SideBarProps> = ({className}) => {
  const rootClassNames = classNames(className, styles.root)

  const {menuItems, toggleMenu} = useAppContext()

  const renderThirdLevel = (thirdLevelItems: SideBarItem[], route: string) => {
    return (
      <div className={styles.thirdLevelMenuWrapper}>
        {thirdLevelItems.map(thirdLevelItem => {
          return (
            <div key={thirdLevelItem.id} className={styles.thirdLevelMenu}>
              <Link href={`/${route}/${thirdLevelItem.alias}`}>
                <Texts.SmallBold>{thirdLevelItem.label}</Texts.SmallBold>
              </Link>
            </div>
          )
        })}
      </div>
    )
  }

  const renderSecondLevel = (secondLevelItems: SideBarItem[], route: string) => {
    return (
      <div className={styles.secondLevelMenuWrapper}>
        {secondLevelItems.map(secondLevelItem => {
          return (
            <Fragment key={secondLevelItem.id}>
              <div className={styles.secondLevelMenu} onClick={() => toggleMenu?.(secondLevelItem.id)}>
                <Texts.Small>{secondLevelItem.label}</Texts.Small>
              </div>
              {secondLevelItem.isOpen ? renderThirdLevel(secondLevelItem.children, route) : undefined}
            </Fragment>
          )
        })}
      </div>
    )
  }

  const firstLevel = menuItems.map(firstLevelItem => (
    <Fragment key={firstLevelItem.id}>
      <div className={styles.firstLevelMenu} onClick={() => toggleMenu?.(firstLevelItem.id)}>
        <span>{firstLevelItem.icon}</span>
        <Texts.Paragraph2>{firstLevelItem.label}</Texts.Paragraph2>
      </div>
      {firstLevelItem.isOpen && firstLevelItem.children.length
        ? renderSecondLevel(firstLevelItem.children, firstLevelItem.route!)
        : undefined}
    </Fragment>
  ))

  return <div className={rootClassNames}>{firstLevel}</div>
}
