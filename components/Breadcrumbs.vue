<template>
  <nav aria-label="breadcrumb" class="breadcrumbs">
    <ol>
      <li v-if="showHome">
        <NuxtLink to="/" class="d-flex align-center">
          <VIcon icon="bx-home" size="20" class="me-1" />
          <span>หน้าแรก</span>
        </NuxtLink>
        <VIcon icon="bx-chevron-right" size="20" class="separator" />
      </li>
      <li v-for="(item, idx) in items" :key="idx" :class="{ 'is-last': idx === items.length - 1 }">
        <template v-if="item.to && idx !== items.length - 1">
          <NuxtLink :to="item.to" class="d-flex align-center">
            <VIcon v-if="item.icon" :icon="item.icon" size="20" class="me-1" />
            <span>{{ item.text }}</span>
          </NuxtLink>
        </template>
        <template v-else>
          <div class="d-flex align-center">
            <VIcon v-if="item.icon" :icon="item.icon" size="20" class="me-1" />
            <span>{{ item.text }}</span>
          </div>
        </template>
        <VIcon v-if="idx !== items.length - 1" icon="bx-chevron-right" size="20" class="separator" />
      </li>
      <slot />
    </ol>
  </nav>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  showHome: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped lang="scss">
.breadcrumbs {
  display: block;
  font-size: 0.9rem;
  margin-block-end: 1rem;

  ol {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0;
    margin: 0;
    gap: 0.25rem;
    list-style: none;
  }

  li {
    display: flex;
    align-items: center;
  }

  .separator {
    color: rgba(var(--v-theme-on-surface), 0.38);
    margin-block: 0;
    margin-inline: 0.25rem;
  }

  a {
    display: flex;
    align-items: center;
    color: rgba(var(--v-theme-on-surface), 0.6);
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: rgb(var(--v-theme-primary));
    }
  }

  li.is-last {

    span,
    div {
      color: rgb(var(--v-theme-on-surface));
      font-weight: 500;
    }
  }
}
</style>
