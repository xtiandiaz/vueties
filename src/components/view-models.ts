import { Icon } from "@/assets/design-tokens/iconography";

// Pads ----------

export interface KeypadKeyVM {
  label: string | Icon
  value: string | number
  isEnabled: boolean
  icon?: Icon
}

// Bars ----------

export interface ToolBarButtonVM<Tool> {
  tool: Tool
  icon: Icon
  isEnabled: boolean
  label?: string
}

export interface NavigationBarItemVM<Target> {
  target: Target
  icon: Icon
  isEnabled: boolean
  label?: string
}

export enum NavigationReturnForm {
  Back = 'back',
  Close = 'close'
}

export interface NavigationBarVM<Target> {
  leftBarItems: NavigationBarItemVM<Target>[]
  rightBarItems: NavigationBarItemVM<Target>[]
  returnForm?: NavigationReturnForm
  title?: string
}

export const pushedViewNavigationBarItems = <BarItemKey>(
  rightBarItems: NavigationBarItemVM<BarItemKey>[],
  title?: string
): NavigationBarVM<BarItemKey> => {
  return {
    leftBarItems: [],
    rightBarItems: rightBarItems,
    returnForm: NavigationReturnForm.Back,
    title: title
  }
}

export const modalViewNavigationBarItems = <BarItemKey>(
  leftBarItems: NavigationBarItemVM<BarItemKey>[],
  title?: string
): NavigationBarVM<BarItemKey> => {
  return {
    leftBarItems: leftBarItems,
    rightBarItems: [],
    returnForm: NavigationReturnForm.Close,
    title: title
  }
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
