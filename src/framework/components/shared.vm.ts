import { Icon } from '@design-tokens/iconography'

export interface VuetyToolbarItem<Key> {
  icon: Icon
  key: Key
  
  isEnabled?: boolean
  label?: string
}

export interface VuetySelectionOption<Value> {
  title: string
  value: Value
  
  icon?: Icon
  subtitle?: string
}
