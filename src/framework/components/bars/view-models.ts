import { VuetyNavigationReturnMode } from '../../models/navigation'
import { Icon } from '@design-tokens/iconography'

export interface VuetyToolBarButtonVM<Tool> {
  tool: Tool
  icon: Icon
  isEnabled: boolean
  label?: string
}

export interface VuetyNavigationBarItemVM {
  icon: Icon
  isEnabled: boolean
  routeKey: string
  label?: string
}

export interface VuetyNavigationBarVM {
  isVisible: boolean
  leftBarItems?: VuetyNavigationBarItemVM[]
  title?: string,
  rightBarItems?: VuetyNavigationBarItemVM[]
  returnMode?: VuetyNavigationReturnMode
}
