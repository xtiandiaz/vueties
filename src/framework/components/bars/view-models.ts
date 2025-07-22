import { Icon } from '@design-tokens/iconography'

export enum VuetyNavigationReturnMode {
  Back, 
  Close
}

export interface VuetyToolBarButtonVM<Tool> {
  tool: Tool
  icon: Icon
  isEnabled: boolean

  label?: string
}

export interface VuetyNavigationBarItemVM {
  icon: Icon
  path: string
  
  isEnabled?: boolean
  label?: string
}

export interface VuetyNavigationBarVM {
  isVisible: boolean
  
  leftBarItems?: VuetyNavigationBarItemVM[]
  rightBarItems?: VuetyNavigationBarItemVM[]
  returnMode?: VuetyNavigationReturnMode
}
