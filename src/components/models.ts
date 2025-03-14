import type { IconKey } from "@/assets/design-tokens/iconography";

export interface IKeypadKey {
  label: string | IconKey
  value: string | number
  isEnabled: boolean
}

export interface ITool<Key> {
  key: Key
  icon: IconKey
  isEnabled: boolean
  label?: string
}
