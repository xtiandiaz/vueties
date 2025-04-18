import { Icon } from "@design-tokens/iconography"

// Pads ----------

export interface KeypadKeyVM {
  isDimmed: boolean
  isEnabled: boolean
  label: string | Icon
  value: string | number
  icon?: Icon
}

// Bars ----------

export interface ToolBarButtonVM<Tool> {
  tool: Tool
  icon: Icon
  isEnabled: boolean
  label?: string
}

export interface NavigationBarItemVM {
  icon: Icon
  isEnabled: boolean
  routeKey: string
  label?: string
}

export enum NavigationReturnMode {
  Back = 'back',
  Close = 'close'
}

export interface NavigationBarVM {
  isVisible: boolean
  leftBarItems?: NavigationBarItemVM[]
  rightBarItems?: NavigationBarItemVM[]
  returnMode?: NavigationReturnMode
}

// Form ----------

export interface FormOptionRowVM<Value> {
  isSelected: boolean
  title: string
  value: Value
  icon?: Icon
  subtitle?: string
}

export interface FormSectionVM<RowVM> {
  rowVMs: RowVM[]
  title?: string
  subtitle?: string
  footnote?: string
}

export interface FormChoiceSectionVM<Value> extends FormSectionVM<FormOptionRowVM<Value>> {
  selectedValue?: Value
}
