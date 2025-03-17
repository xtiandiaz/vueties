import { IconKey } from "@/assets/design-tokens/iconography";

// PADS ----------

export interface IKeypadKey {
  label: string | IconKey
  value: string | number
  isEnabled: boolean
}

// BARS ----------

export interface ITool<Key> {
  key: Key
  icon: IconKey
  isEnabled: boolean
  label?: string
}

export enum BackwardNavigationBarItemKey {
  Back = 'back',
  Close = 'close'
}

export interface INavigationBarItem<Key> {
  key: Key
  icon: IconKey
  isEnabled: boolean
  label?: string
}

export interface INavigationBarItems<ItemKey> {
  leftBarItems: INavigationBarItem<ItemKey>[]
  rightBarItems: INavigationBarItem<ItemKey>[]
  backwardItem?: INavigationBarItem<BackwardNavigationBarItemKey>
  title?: string
}

const backNavigationBarItem: INavigationBarItem<BackwardNavigationBarItemKey> = {
  key: BackwardNavigationBarItemKey.Back,
  icon: IconKey.ChevronLeft,
  isEnabled: true
}

const closeNavigationBarItem: INavigationBarItem<BackwardNavigationBarItemKey> = {
  key: BackwardNavigationBarItemKey.Close,
  icon: IconKey.Xmark,
  isEnabled: true
}

export const pushedViewNavigationBarItems = <BarItemKey>(
  rightBarItems: INavigationBarItem<BarItemKey>[],
  title?: string
): INavigationBarItems<BarItemKey> => {
  return {
    leftBarItems: [],
    rightBarItems: rightBarItems,
    backwardItem: backNavigationBarItem,
    title: title
  }
}

export const modalViewNavigationBarItems = <BarItemKey>(
  leftBarItems: INavigationBarItem<BarItemKey>[],
  title?: string
): INavigationBarItems<BarItemKey> => {
  return {
    leftBarItems: leftBarItems,
    rightBarItems: [],
    backwardItem: closeNavigationBarItem,
    title: title
  }
}
