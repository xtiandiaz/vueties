<script setup lang="ts" generic="NavigationTarget">
import { type NavigationBarVM, NavigationReturnForm } from '../view-models'
import { Icon } from '@design-tokens/iconography';
import NavigationSubBar from './NavigationSubBar.vue';
import IconButton from '../buttons/IconButton.vue'
import CloseButton from '../buttons/CloseButton.vue';

const { vm } = defineProps<{
  vm: NavigationBarVM<NavigationTarget>,
}>()

const emits = defineEmits<{
  backButtonClicked: [void],
  closeButtonClicked: [void],
  targetSelected: [NavigationTarget]
}>()

function onTargetSelected(target: NavigationTarget) {
  emits('targetSelected', target)
}
</script>

<template>
  <nav>
    <IconButton 
      v-if="vm.returnForm === NavigationReturnForm.Back" 
      :icon="Icon.ChevronLeft"
      class="back"
      @click="emits('backButtonClicked')" 
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
      v-if="vm.returnForm === NavigationReturnForm.Close" 
      @click="emits('closeButtonClicked')" 
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
