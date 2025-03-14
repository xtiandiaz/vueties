import type { IconKey } from "@/assets/design-tokens/iconography";

export interface IKeypadKey {
  label: string | IconKey
  value: string | number
  isEnabled: boolean
}
