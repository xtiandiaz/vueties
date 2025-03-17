<script setup lang="ts" generic="NavigationItemKey">
import { type INavigationBarItems, BackwardNavigationBarItemKey } from '../models'
import { useRouter } from 'vue-router'
import ToolBar from './ToolBar.vue'
import IconButton from '../buttons/IconButton.vue'

defineProps<{
  items: INavigationBarItems<NavigationItemKey>,
  title?: string
}>()

const router = useRouter()

function onForwardItemSelected(key: NavigationItemKey) {
  router.push(`${key}`)
}
function onBackwardItemSelected() {
  router.back()
}
</script>

<template>
  <nav>
    <IconButton 
      class="back"
      v-if="items.backwardItem?.key === BackwardNavigationBarItemKey.Back" 
      :icon="items.backwardItem.icon"
      @click="onBackwardItemSelected"
    />
    <ToolBar 
      class="left" 
      :tools="items.leftBarItems" 
      @tool-selected="onForwardItemSelected"
    />
    
    <span class="title" v-if="title">{{ title }}</span>
    
    <div class="spacer"></div>
    
    <IconButton 
      class="close"
      v-if="items.backwardItem?.key === BackwardNavigationBarItemKey.Close" 
      :icon="items.backwardItem.icon"
      @click="onBackwardItemSelected"
    />
    <ToolBar 
      class="right" 
      :tools="items.rightBarItems" 
      @tool-selected="onForwardItemSelected"
    />
  </nav>
</template>

<style scoped lang="scss">
@use '@/assets/design-tokens/typography';
@use '../assets/bars';

nav {
  @extend .bar;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  
  :deep(.icon-button) {
    &.back, &.close {
      .svg-icon {
        width: 1.5em;
        height: 1.5em;
      }
    }
  }
  
  .title {
    font-family: 'Inter Medium';
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  
  .tool-bar {
    &.left {
      justify-content: left;
    }
    &.right {
      justify-content: right;
    }
  }
}
</style>
