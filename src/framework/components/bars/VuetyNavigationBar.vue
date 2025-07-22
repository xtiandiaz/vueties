<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router';
import type { VuetyNavigationBarVM } from './view-models'
import NavigationSubBar from './VuetyNavigationSubBar.vue';
import IconButton from '../buttons/VuetyIconButton.vue'
import CloseButton from '../buttons/VuetyCloseButton.vue';
import { Icon } from '@design-tokens/iconography';
import '@/assets/tungsten/extensions/array.extensions'

type NavigationTrace = { path: string, isModal: boolean }

const { viewModel } = defineProps<{
  viewModel: VuetyNavigationBarVM,
  barShadeOpacity?: number
  controlsModal?: boolean
  title?: string
}>()

const router = useRouter()

const traces = ref<NavigationTrace[]>([])
const controlsModal = viewModel.controlsModal === true

const showsBackButton = computed(() =>
  traces.value.filter(t => controlsModal && t.isModal || !t.isModal).length > 1
)

function goBack() {
  router.back()
}

function closeModal() {
  router.go(-traces.value.length)
}

watch(router.currentRoute, (currentRoute) => {
  const newPath = currentRoute.path
  const isModal = currentRoute.meta.isModal
  
  const index = traces.value.findIndex(t => t.path === newPath && t.isModal === isModal)
  if (index >= 0) {
    traces.value.splice(index)
  }
  
  traces.value.push({ path: newPath, isModal })
  // console.log([...traces.value].map(t => t.path).join('\n'))
}, { immediate: true })
</script>

<template>
  <nav v-if="viewModel.isVisible ?? true" class="vuety-navigation-bar">
    <div class="vuety-scroll-shade" :style="{ opacity: barShadeOpacity ?? 0 }"></div>
    
    <div class="content-wrapper">
      <IconButton
        v-if="showsBackButton"
        class="back"
        :icon="Icon.ChevronLeft"
        @click="goBack()"
      />
      
      <NavigationSubBar 
        v-if="viewModel.leftBarItems && !showsBackButton" 
        class="left"
        :itemVMs="viewModel.leftBarItems" 
      />

      <span 
        v-if="title"
        id="vnb-title"
        class="title"
        :style="{ opacity: $route.meta._showsLargeTitle?.value ? (barShadeOpacity ?? 0) : 1 }"
      >
        {{ title }}
      </span>

      <div class="spacer"></div>

      <CloseButton 
        v-if="controlsModal"
        @click="closeModal()"
      />
      
      <NavigationSubBar 
        v-if="viewModel.rightBarItems" 
        :itemVMs="viewModel.rightBarItems" 
        class="right"
      />
    </div>
  </nav>
</template>

<style scoped lang="scss">
@use 'styles';
@use '../../styles/mixins';
@use '@design-tokens/palette';
@use '@design-tokens/typography';

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
      width: 1.75em;
      height: 1.75em;
    }

    .title {
      @extend .strong;
      display: inline-block;
      left: 50%;
      pointer-events: none;
      position: absolute;
      text-align: center;
      top: 50%;
      transform: translate(-50%, -50%);
      white-space: nowrap;
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
  @include mixins.position(absolute, 0, 0, 0, 0);
  @include palette.color-attributes((
    'background-color': 'background',
    'border-color': 'tertiary-background'
  ));
}
</style>
