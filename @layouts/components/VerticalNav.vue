<script setup>
import logo from '@images/logo.svg?raw'
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import { useDisplay } from 'vuetify'

const isCollapsed = useState('verticalNavCollapsed', () => false)
const toggleCollapsed = () => { isCollapsed.value = !isCollapsed.value }

const props = defineProps({
  tag: {
    type: null,
    required: false,
    default: 'aside',
  },
  isOverlayNavActive: {
    type: Boolean,
    required: true,
  },
  toggleIsOverlayNavActive: {
    type: Function,
    required: true,
  },
})

const { mdAndDown } = useDisplay()
const refNav = ref()

/*ℹ️ Close overlay side when route is changed
Close overlay vertical nav when link is clicked
*/
const route = useRoute()

watch(() => route.path, () => {
  props.toggleIsOverlayNavActive(false)
})

const isVerticalNavScrolled = ref(false)
const updateIsVerticalNavScrolled = val => isVerticalNavScrolled.value = val

const handleNavScroll = evt => {
  isVerticalNavScrolled.value = evt.target.scrollTop > 0
}
</script>

<template>
  <Component :is="props.tag" ref="refNav" data-allow-mismatch class="layout-vertical-nav" :class="[
    {
      'visible': isOverlayNavActive,
      'scrolled': isVerticalNavScrolled,
      'overlay-nav': mdAndDown,
    },
  ]">
    <!-- 👉 Header -->
    <div class="nav-header">
      <slot name="nav-header">
        <NuxtLink to="/" class="app-logo app-title-wrapper">
          <div class="d-flex" v-html="logo" />

          <h1 class="leading-normal">
            sneat
          </h1>
        </NuxtLink>
        <button type="button" class="nav-toggle" @click="toggleCollapsed" :aria-pressed="isCollapsed"
          title="Toggle navigation">
          <span v-if="!isCollapsed">«</span>
          <span v-else>»</span>
        </button>
      </slot>
    </div>
    <slot name="before-nav-items">
      <div class="vertical-nav-items-shadow" />
    </slot>
    <slot name="nav-items" :update-is-vertical-nav-scrolled="updateIsVerticalNavScrolled">
      <PerfectScrollbar tag="ul" class="nav-items" :options="{ wheelPropagation: false }"
        @ps-scroll-y="handleNavScroll">
        <slot />
      </PerfectScrollbar>
    </slot>
    <slot name="after-nav-items" />
  </Component>
</template>

<style lang="scss" scoped>
.app-logo {
  display: flex;
  align-items: center;
  column-gap: 0.75rem;

  .app-logo-title {
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.75rem;
    text-transform: uppercase;
  }
}

.nav-toggle {
  margin-inline-start: 0.5rem;
  background: transparent;
  border: 0;
  cursor: pointer;
  font-size: 1rem;
  line-height: 1;
  padding: 0.25rem 0.5rem;
  color: inherit;
}

.nav-toggle:focus {
  outline: 2px solid rgba(0, 0, 0, 0.12);
  outline-offset: 2px;
}
</style>

<style lang="scss">
@use "@configured-variables" as variables;
@use "@layouts/styles/mixins";

// 👉 Vertical Nav
.layout-vertical-nav {
  position: fixed;
  z-index: variables.$layout-vertical-nav-z-index;
  display: flex;
  flex-direction: column;
  block-size: 100%;
  inline-size: variables.$layout-vertical-nav-width;
  inset-block-start: 0;
  inset-inline-start: 0;
  transition: inline-size 0.25s ease-in-out, box-shadow 0.25s ease-in-out;
  will-change: transform, inline-size;

  .nav-header {
    display: flex;
    align-items: center;

    .header-action {
      cursor: pointer;

      @at-root {
        #{variables.$selector-vertical-nav-mini} .nav-header .header-action {

          &.nav-pin,
          &.nav-unpin {
            display: none !important;
          }
        }
      }
    }
  }

  .app-title-wrapper {
    margin-inline-end: auto;
  }

  .nav-items {
    block-size: 100%;

    // ℹ️ We no loner needs this overflow styles as perfect scrollbar applies it
    // overflow-x: hidden;

    // // ℹ️ We used `overflow-y` instead of `overflow` to mitigate overflow x. Revert back if any issue found.
    // overflow-y: auto;
  }

  .nav-item-title {
    overflow: hidden;
    margin-inline-end: auto;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  // 👉 Collapsed
  .layout-vertical-nav-collapsed & {
    &:not(.hovered) {
      inline-size: variables.$layout-vertical-nav-collapsed-width;
    }
  }
}

// Small screen vertical nav transition
@media (max-width: 1279px) {
  .layout-vertical-nav {
    &:not(.visible) {
      transform: translateX(-#{variables.$layout-vertical-nav-width});

      @include mixins.rtl {
        transform: translateX(variables.$layout-vertical-nav-width);
      }
    }

    transition: transform 0.25s ease-in-out;
  }
}
</style>
