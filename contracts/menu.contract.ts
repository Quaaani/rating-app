import {CategoryLevel} from './enums'

export interface PageItem {
  alias: string
  title: string
  _id: string
  category: string
}

export interface MenuItem {
  _id: {
    secondCategory: string
  }
  pages: PageItem[]
}

// TODO: Remove from this dir
export interface FirstLevelMenuItem {
  route: string
  name: string
  icon: JSX.Element
  id: CategoryLevel
}
