<script setup lang="ts" generic="NavigationTarget">
import { useRouter } from 'vue-router'
import { type NavigationBarVM, ReturnNavigationTarget } from '../view-models'
import NavigationSubBar from './NavigationSubBar.vue';
import IconButton from '../buttons/IconButton.vue'
import CloseButton from '../buttons/CloseButton.vue';

defineProps<{
  vm: NavigationBarVM<NavigationTarget>,
}>()

const router = useRouter()

function onTargetSelected(target: NavigationTarget) {
  router.push(`${target}`)
}

function onBackOrCloseClicked() {
  router.back()
}
</script>

<template>
  <nav>
    <IconButton 
      v-if="vm.returnItem?.target === ReturnNavigationTarget.Back" 
      :icon="vm.returnItem.icon"
      class="back"
      @click="onBackOrCloseClicked" 
    />
    
    <NavigationSubBar 
      v-if="vm.leftBarItems.length > 0" 
      :itemVMs="vm.leftBarItems" 
      class="left"
      @target-selected="onTargetSelected" 
    />

    <span class="title" v-if="vm.title">{{ vm.title }}</span>

    <div class="spacer"></div>

    <CloseButton 
      v-if="vm.returnItem?.target === ReturnNavigationTarget.Close" 
      @click="onBackOrCloseClicked" 
    />
    
    <NavigationSubBar 
      v-if="vm.rightBarItems.length > 0" 
      :itemVMs="vm.rightBarItems" 
      class="right"
      @target-selected="onTargetSelected" 
    />
  </nav>
</template>

<style scoped lang="scss">
@use '../styles/bars';
@use '@design-tokens/typography';

nav {
  @extend .item-bar;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1000;

  :deep(.icon-button.back .svg-icon) {
    width: 1.5em;
    height: 1.5em;
  }

  .title {
    @extend .strong;
    left: 50%;
    position: absolute;
    text-align: center;
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
