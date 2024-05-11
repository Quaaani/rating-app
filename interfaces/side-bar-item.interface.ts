export interface SideBarItem {
  id: string
  label: string
  isOpen?: boolean
  icon?: JSX.Element
  alias?: string
  children: SideBarItem[]
}
