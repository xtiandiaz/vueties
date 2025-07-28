import { Icon } from '@design-tokens/iconography'

export interface VuetySelectionOption<Value> {
  title: string
  value: Value
  
  icon?: Icon
  subtitle?: string
}
