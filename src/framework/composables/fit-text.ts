import { valueAndUnitFromString, pxValue } from '@/assets/tungsten/css'
import '@/assets/tungsten/extensions/css.extensions'

export default function fitText(
  textElement: HTMLElement,
  maxFontSize: number,
  minFontSize: number = 1,
  unit: string = 'em',
  shrinkingStep: number = 0.25
 ) {
  const container = textElement.parentNode as HTMLElement
  const horizontalPadding = container
    .getCssValueStrings('padding-left', 'padding-right')
    .map(vs => pxValue(valueAndUnitFromString(vs)))
    .reduce((acc, v) => acc + v, 0)
  
  // console.log('horizontalPadding: ', horizontalPadding)
  
  const isOverflown = () => {
    const containerViewportWidth = container.clientWidth - horizontalPadding;
    // console.log("textElement.clientWidth:", textElement.clientWidth, "containerViewportWidth:", containerViewportWidth, "container.clientWidth:", container.clientWidth)
    return textElement.clientWidth > containerViewportWidth
  }

  let fontSize = maxFontSize
  
  while(fontSize >= minFontSize) {
    textElement.style.fontSize = `${fontSize}${unit}`
    
    if (!isOverflown()) {
      break
    }
    
    fontSize -= shrinkingStep
  }
}
