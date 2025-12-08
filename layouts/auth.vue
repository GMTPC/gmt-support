<template>
  <div class="layout-auth d-flex align-center justify-center h-screen">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.layout-auth {
  background-color: rgb(var(--v-theme-background));
  min-height: 100vh;
}
</style>
