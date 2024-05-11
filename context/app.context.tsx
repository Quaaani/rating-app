'use client'

import {SideBarItem} from '@interfaces'
import {toggleSideBarMenuItems} from '@utils'
import {FC, PropsWithChildren, createContext, useContext, useState} from 'react'

export interface AppContextData {
  menuItems: SideBarItem[]
  toggleMenu?: (menuItemId: string) => void
}

const defaultAppContextData: AppContextData = {
  menuItems: [],
}

const AppContext = createContext<AppContextData>(defaultAppContextData)

export const AppContextProvider: FC<PropsWithChildren<AppContextData>> = ({children, menuItems}) => {
  const [contextMenu, setContextMenu] = useState<SideBarItem[]>(menuItems)

  const toggleMenu = (menuItemId: string) => {
    const updatedMenu = toggleSideBarMenuItems(contextMenu, menuItemId)
    setContextMenu(updatedMenu)
  }

  return (
    <AppContext.Provider
      value={{
        menuItems: contextMenu,
        toggleMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
