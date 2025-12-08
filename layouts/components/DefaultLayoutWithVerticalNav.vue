<script setup>
import Footer from '@/layouts/components/Footer.vue'
import NavItems from '@/layouts/components/NavItems.vue'
import UserProfile from '@/layouts/components/UserProfile.vue'
import { useAuthStore } from '@/stores/auth'
import logo from '@images/logo.svg?raw'
import VerticalNavLayout from '@layouts/components/VerticalNavLayout.vue'

const authStore = useAuthStore()
</script>

<template>
  <VerticalNavLayout>
    <!-- 👉 navbar -->
    <template #navbar="{ toggleVerticalOverlayNavActive, toggleVerticalNavCollapsed, isVerticalNavCollapsed }">
      <div class="d-flex h-100 align-center">
        <!-- 👉 Desktop: collapse/expand vertical nav -->
        <IconBtn class="d-none d-lg-inline me-2" @click="toggleVerticalNavCollapsed()"
          :title="isVerticalNavCollapsed ? 'Expand navigation' : 'Collapse navigation'">
          <VIcon :icon="isVerticalNavCollapsed ? 'bx-chevron-right' : 'bx-chevron-left'" />
        </IconBtn>
        <!-- 👉 Vertical nav toggle in overlay mode -->
        <IconBtn class="ms-n3 d-lg-none" @click="toggleVerticalOverlayNavActive(true)">
          <VIcon icon="bx-menu" />
        </IconBtn>

        <!-- 👉 Search -->
        <div class="d-flex align-center cursor-pointer ms-lg-n3" style="user-select: none;">
          <!-- 👉 Search Trigger button -->
          <!-- <IconBtn>
            <VIcon icon="bx-search" />
          </IconBtn>

          <span class="d-none d-md-flex align-center text-disabled ms-2">
            <span class="me-2">Search</span>
            <span class="meta-key">&#8984;K</span>
          </span> -->
        </div>

        <VSpacer />

        <!-- <NavbarThemeSwitcher class="me-1" /> -->

        <div class="d-flex align-center me-3" v-if="authStore.user">
          <span class="text-body-2 font-weight-medium me-2">
            {{ authStore.user.name || authStore.user.username }}
          </span>
        </div>

        <UserProfile />
      </div>
    </template>

    <template #vertical-nav-header="{ toggleIsOverlayNavActive }">
      <NuxtLink to="/" class="app-logo app-title-wrapper">
        <!-- eslint-disable vue/no-v-html -->
        <div class="d-flex" v-html="logo" />
        <!-- eslint-enable -->

        <h1 class="app-logo-title">
          sneat
        </h1>
      </NuxtLink>

      <IconBtn class="d-block d-lg-none" @click="toggleIsOverlayNavActive(false)">
        <VIcon icon="bx-x" />
      </IconBtn>
    </template>

    <template #vertical-nav-content>
      <NavItems />
    </template>

    <!-- 👉 Pages -->
    <slot />

    <!-- 👉 Footer -->
    <template #footer>
      <Footer />
    </template>
  </VerticalNavLayout>
</template>

<style lang="scss" scoped>
.meta-key {
  border: thin solid rgba(var(--v-border-color), var(--v-border-opacity));
  border-radius: 6px;
  block-size: 1.5625rem;
  line-height: 1.3125rem;
  padding-block: 0.125rem;
  padding-inline: 0.25rem;
}

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
</style>
