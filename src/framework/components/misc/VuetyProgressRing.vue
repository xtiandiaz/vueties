<script setup lang="ts">
const { progress, size, strokeWidth } = defineProps<{
  progress: number,
  size: number,
  strokeWidth: number
}>()

const halfSize = size / 2
const halfStrokeWidth = strokeWidth / 2
const radius = halfSize - halfStrokeWidth

const progressAngle = 2 * Math.PI * progress - Math.PI / 2

const progressPoint = {
  x: radius * (1 + Math.cos(progressAngle)) + halfStrokeWidth,
  y: radius * (1 + Math.sin(progressAngle)) + halfStrokeWidth,
}
</script>

<template>
  <div class="vuety-progress-ring">
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      xmlns:xlink="http://www.w3.org/1999/xlink" 
      :height="size"
      :viewBox="`0 0 ${size} ${size}`"
      :width="size"
    >
      <circle id="base" :r="radius" :cx="halfSize" :cy="halfSize" />
      <path 
        v-if="progress > 0 && progress < 1"
        id="progress"
        :d="`
        M ${radius} ${halfStrokeWidth} 
        A ${radius} ${radius} 0 
          ${progress >= 0.5 ? 1 : 0} 1
          ${progressPoint.x} ${progressPoint.y}
        `"
      />
      <circle v-else-if="progress >= 1" id="progress" :r="radius" :cx="halfSize" :cy="halfSize" />
    </svg>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/varties';
@use '../../styles/mixins';
@use '@design-tokens/palette';

svg {
  display: block;
  margin: auto;
  
  * {
    fill: none;
    stroke-width: v-bind(strokeWidth);
  }
}

#base {
  @include palette.color-attribute('stroke', 'secondary-background');
}

#progress {
  stroke-linecap: round;
  @include palette.color-attribute('stroke', varties.$tint-color);
}
</style>
