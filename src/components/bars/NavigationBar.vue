<script setup lang="ts" generic="NavigationTarget">
import { type NavigationBarVM, ReturnNavigationTarget } from '@vueties/view-models'
import { useRouter } from 'vue-router'
import IconButton from '../buttons/IconButton.vue'
import NavigationSubBar from './NavigationSubBar.vue';

defineProps<{
  vm: NavigationBarVM<NavigationTarget>
}>()

const router = useRouter()

function onTargetSelected(target: NavigationTarget) {
  router.push(`${target}`)
}
function onBackwardTargetSelected() {
  router.back()
}
</script>

<template>
  <nav>
    <IconButton class="back" v-if="vm.returnItem?.target === ReturnNavigationTarget.Back" :icon="vm.returnItem.icon"
      @click="onBackwardTargetSelected" />
    <NavigationSubBar v-if="vm.leftBarItems.length > 0" :itemVMs="vm.leftBarItems" class="left"
      @target-selected="onTargetSelected" />

    <span class="title" v-if="vm.title">{{ vm.title }}</span>

    <div class="spacer"></div>

    <IconButton class="close" v-if="vm.returnItem?.target === ReturnNavigationTarget.Close" :icon="vm.returnItem.icon"
      @click="onBackwardTargetSelected" />
    <NavigationSubBar v-if="vm.rightBarItems.length > 0" :itemVMs="vm.rightBarItems" class="right"
      @target-selected="onTargetSelected" />
  </nav>
</template>

<style scoped lang="scss">
@use '@/assets/design-tokens/typography';
@use '@vueties/styles/bars';

nav {
  @extend .item-bar;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1000;

  :deep(.icon-button) {
    &.back, &.close {
      .svg-icon {
        width: 1.5em;
        height: 1.5em;
      }
    }
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
