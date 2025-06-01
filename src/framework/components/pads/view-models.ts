import { Icon } from '@design-tokens/iconography'

export interface VuetyKeypadKeyVM {
  isDimmed: boolean
  isEnabled: boolean
  label: string | Icon
  value: string | number
  
  icon?: Icon
}
