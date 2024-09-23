/* eslint-disable @typescript-eslint/no-unused-vars */
export interface SideBarItem {
  id: string
  label: string
  isOpen?: boolean
  icon?: JSX.Element
  route?: string
  alias?: string
  children: SideBarItem[]
}

const data: SideBarItem = {
  id: 'c5e8e03c-5380-420f-8e3b-229bf3b00627',
  label: 'Label',
  children: [],
}

type A = keyof SideBarItem

type B = typeof data

const a: B = {
  id: '{t(TranslationKey[])}',
  label: 'dwq',
  children: [],
}

const b: A = 'id'

const dumb = {
  car: 'bwm',
  model: 'm5',
  type: 'f90',
}

type DumbType = keyof typeof dumb
