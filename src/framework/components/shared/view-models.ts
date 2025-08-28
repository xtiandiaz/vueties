import { Icon } from '@design-tokens/iconography'

export interface VuetyKeypadKey<Value> {
  label: string
  value: Value
  
  icon?: Icon
  isEnabled?: boolean
}

export const deleteKey = <Value>(value: Value, isEnabled: boolean): VuetyKeypadKey<Value> => {
  return {
    icon: Icon.Delete,
    isEnabled,
    label: '',
    value
  }
}

export interface VuetySelectionOption<Value> {
  title: string
  value: Value
  
  icon?: Icon
  subtitle?: string
}

export interface VuetyToolbarItem<Key> {
  key: Key
  
  icon?: Icon
  isEnabled?: boolean
  label?: string
  
  action?: () => void
}

export enum VuetyNavigationBarItemKind {
  back,
  close, 
  custom
}

export interface VuetyNavigationBarItem extends VuetyToolbarItem<string> {
  kind: VuetyNavigationBarItemKind
  path: string
  position: number
}

export const backNavBarItem = (label?: string): VuetyNavigationBarItem => {
  return {
    key: 'back',
    kind: VuetyNavigationBarItemKind.back,
    label,
    path: 'back',
    position: -100,
  }
}
export const closeNavBarItem = (path: string, label?: string): VuetyNavigationBarItem => {
  return {
    key: 'close',
    kind: VuetyNavigationBarItemKind.close,
    path, 
    position: 100,
    label
  }
}
export const navBarItem = (
  path: string, 
  position: number, 
  label?: string, 
  icon?: Icon
): VuetyNavigationBarItem => {
  return {
    icon,
    key: path,
    kind: VuetyNavigationBarItemKind.custom,
    label,
    path, 
    position,
  }
}
