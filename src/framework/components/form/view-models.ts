import { Icon } from '@design-tokens/iconography'

export interface VuetyFormOptionRowVM<Value> {
  isSelected: boolean
  title: string
  value: Value
  icon?: Icon
  subtitle?: string
}

export interface VuetyFormSectionVM<RowVM> {
  rowVMs: RowVM[]
  footnote?: string
  title?: string
  subtitle?: string
}

export interface VuetyFormChoiceSectionVM<Value> extends VuetyFormSectionVM<VuetyFormOptionRowVM<Value>> {
  selectedValue?: Value
}
