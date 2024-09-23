import {categoryIcons, categoryLabels} from '@constants'
import {MenuItem} from '@contracts'
import {SideBarItem} from '@interfaces'
import {toLowerCase} from '@utils'

export const transformMenuToSideBarMenuItems = (menu: MenuItem[][]): SideBarItem[] => {
  return menu.map((firstLevelMenu, index) => {
    const firstLevelChildren: SideBarItem[] = firstLevelMenu.map(secondLevelMenu => {
      const secondLevelChildren: SideBarItem[] = secondLevelMenu.pages.map(thirdLevelMenu => ({
        id: thirdLevelMenu._id,
        label: thirdLevelMenu.category,
        isOpen: false,
        alias: thirdLevelMenu.alias,
        children: [],
      }))

      return {
        id: secondLevelMenu._id.secondCategory,
        label: secondLevelMenu._id.secondCategory,
        isOpen: false,
        children: secondLevelChildren,
      }
    })

    return {
      id: categoryLabels[index],
      label: categoryLabels[index],
      icon: categoryIcons[index],
      route: toLowerCase(categoryLabels)[index],
      isOpen: false,
      children: firstLevelChildren,
    }
  })
}
