import { Icon } from '@design-tokens/iconography'

export interface VuetyToolbarButtonVM<Tool> {
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
  isVisible?: boolean
  controlsModal?: boolean
  leftBarItems?: VuetyNavigationBarItemVM[]
  rightBarItems?: VuetyNavigationBarItemVM[]
}
