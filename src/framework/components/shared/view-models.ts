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
  icon: Icon
  key: Key
  
  isEnabled?: boolean
  label?: string
}

export interface VuetyNavigationBarItem<Key> extends VuetyToolbarItem<Key> {
  position: number,
  
  path?: string
}
