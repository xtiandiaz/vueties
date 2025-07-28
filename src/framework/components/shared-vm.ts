import { Icon } from '@design-tokens/iconography'

export interface VuetyChoiceOption<Value> {
  title: string
  value: Value
  
  icon?: Icon
  subtitle?: string
}
