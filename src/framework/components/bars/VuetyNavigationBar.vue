<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router';
import IconButton from '../buttons/VuetyIconButton.vue'
import CloseButton from '../buttons/VuetyCloseButton.vue';
import { Icon } from '@design-tokens/iconography';
import { VuetyNavigationBarItemKind, type VuetyNavigationBarItem } from '../shared/view-models';
import Toolbar from './VuetyToolbar.vue';
import '@/assets/tungsten/extensions/array.extensions'

const router = useRouter()

const { barItems } = defineProps<{
  barItems: VuetyNavigationBarItem[]
  
  barShadeOpacity?: number
  title?: string
}>()

const leftBarItems = computed(() => barItems.filter(it => it.position < 0))
const backItem = computed(() => leftBarItems.value.find(it => it.kind === VuetyNavigationBarItemKind.back))

const rightBarItems = computed(() => barItems.filter(it => it.position >= 0))
const closeItem = computed(() => leftBarItems.value.find(it => it.kind === VuetyNavigationBarItemKind.close))
</script>

<template>
  <nav class="vuety-navigation-bar">
    <div class="vuety-scroll-shade" :style="{ opacity: barShadeOpacity ?? 0 }"></div>
    
    <div class="content-wrapper">
      <IconButton
        v-if="backItem"
        class="back"
        :icon="Icon.ChevronLeft"
        :label="backItem.label"
        @click="router.back()"
      />
      
      <Toolbar
        v-else-if="leftBarItems" 
        class="left"
        :items="leftBarItems"
        @select-item="item => router.push(item.key)"
      />

      <span v-if="title" id="vnb-title" class="title">
        {{ title }}
      </span>

      <div class="flex-spacer"></div>

      <CloseButton 
        v-if="closeItem"
        @click="router.replace(closeItem.path!)"
      />
      
      <Toolbar
        v-else-if="rightBarItems" 
        class="left"
        :items="rightBarItems" 
        @select-item="item => router.push(item.key)"
      />
    </div>
  </nav>
</template>

<style scoped lang="scss">
@use '@vueties/utils/vuetystrap' as vs;
@use 'styles';

.vuety-navigation-bar {
  height: styles.$nav-bar-height;
  position: relative;
  z-index: styles.$nav-bar-z-index;
  
  .content-wrapper {
    @extend .item-bar;
    gap: 0;
    height: 100%;
    padding: 0 styles.$nav-bar-h-padding;
    position: relative;
    
    :deep(.vuety-icon-button.back .svg-icon) {
      @include vs.size(1.75rem);
    }

    .title {
      @extend %strong;
      display: inline-block;
      pointer-events: none;
      text-align: center;
      transform: translate(-50%, -50%);
      white-space: nowrap;
      @include vs.position(absolute, 50%, null, null, 50%);
      @include vs.strong();
    }

    .vuety-toolbar {
      &.left {
        justify-content: left;
      }

      &.right {
        justify-content: right;
      }
    }
  }
}

.vuety-scroll-shade {
  border-bottom: 1px solid;
  @include vs.position(absolute, 0, 0, 0, 0);
  @include vs.color-attributes((
    'background-color': vs.$background-color,
    'border-color': vs.$tertiary-background-color
  ));
}
</style>
