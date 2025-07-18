import { Icon } from "@/assets/design-tokens/iconography"

export interface VuetySegmentedButtonSegment<Key> {
  key: Key
  label: string
  
  icon?: Icon
}
