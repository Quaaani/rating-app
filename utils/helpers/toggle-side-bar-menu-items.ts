import {SideBarItem} from '@interfaces'

export const toggleSideBarMenuItems = (menuItems: SideBarItem[], menuItemId: string): SideBarItem[] => {
  return menuItems.map(menu => {
    if (menu.id === menuItemId) {
      return {
        ...menu,
        isOpen: !menu.isOpen,
      }
    }

    const children = menu.children.map(child => {
      if (child.id === menuItemId) {
        return {
          ...child,
          isOpen: !child.isOpen,
        }
      }

      return child
    })

    return {
      ...menu,
      children,
    }
  })
}
