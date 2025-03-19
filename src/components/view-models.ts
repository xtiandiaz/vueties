import { Icon } from "@/assets/design-tokens/iconography";

// PADS ----------

export interface KeypadKeyVM {
  label: string | Icon
  value: string | number
  isEnabled: boolean
  icon?: Icon
}

// BARS ----------

export interface ToolBarButtonVM<Tool> {
  tool: Tool
  icon: Icon
  isEnabled: boolean
  label?: string
}

export enum ReturnNavigationTarget {
  Back = 'back',
  Close = 'close'
}

export interface NavigationBarItemVM<Target> {
  target: Target
  icon: Icon
  isEnabled: boolean
  label?: string
}

export interface NavigationBarVM<Target> {
  leftBarItems: NavigationBarItemVM<Target>[]
  rightBarItems: NavigationBarItemVM<Target>[]
  returnItem?: NavigationBarItemVM<ReturnNavigationTarget>
  title?: string
}

const backNavigationBarItemVM: NavigationBarItemVM<ReturnNavigationTarget> = {
  target: ReturnNavigationTarget.Back,
  icon: Icon.ChevronLeft,
  isEnabled: true
}

const closeNavigationBarItemVM: NavigationBarItemVM<ReturnNavigationTarget> = {
  target: ReturnNavigationTarget.Close,
  icon: Icon.Xmark,
  isEnabled: true
}

export const pushedViewNavigationBarItems = <BarItemKey>(
  rightBarItems: NavigationBarItemVM<BarItemKey>[],
  title?: string
): NavigationBarVM<BarItemKey> => {
  return {
    leftBarItems: [],
    rightBarItems: rightBarItems,
    returnItem: backNavigationBarItemVM,
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
    returnItem: closeNavigationBarItemVM,
    title: title
  }
}
