<script setup>
import VerticalNavSectionTitle from "@/@layouts/components/VerticalNavSectionTitle.vue";
import VerticalNavGroup from "@layouts/components/VerticalNavGroup.vue";
import VerticalNavLink from "@layouts/components/VerticalNavLink.vue";
</script>

<template>
  <!-- 👉 Dashboards -->
  <VerticalNavGroup :item="{
    title: 'Dashboards',
    badgeContent: '5',
    badgeClass: 'bg-error',
    icon: 'bx-home-smile',
  }">
    <VerticalNavLink :item="{
      title: 'Analytics',
      to: '/dashboard',
    }" />
  </VerticalNavGroup>

  <!-- 👉 Front Pages -->
  <VerticalNavGroup :item="{
    title: 'Front Pages',
    icon: 'bx-file',
  }">
    <VerticalNavLink :item="{
      title: 'Landing',
      href: 'https://demos.themeselection.com/sneat-vuetify-nuxtjs-admin-template/demo-1/front-pages/landing-page',
      target: '_blank',
    }" />
    <VerticalNavLink :item="{
      title: 'Pricing',
      href: 'https://demos.themeselection.com/sneat-vuetify-nuxtjs-admin-template/demo-1/front-pages/pricing',
      target: '_blank',
    }" />
    <VerticalNavLink :item="{
      title: 'Payment',
      href: 'https://demos.themeselection.com/sneat-vuetify-nuxtjs-admin-template/demo-1/front-pages/payment',
      target: '_blank',
    }" />
    <VerticalNavLink :item="{
      title: 'Checkout',
      href: 'https://demos.themeselection.com/sneat-vuetify-nuxtjs-admin-template/demo-1/front-pages/checkout',
      target: '_blank',
    }" />
    <VerticalNavLink :item="{
      title: 'Help Center',
      href: 'https://demos.themeselection.com/sneat-vuetify-nuxtjs-admin-template/demo-1/front-pages/help-center',
      target: '_blank',
    }" />
  </VerticalNavGroup>

  <!-- 👉 Apps & Pages -->
  <VerticalNavSectionTitle :item="{
    heading: 'Apps & Pages',
  }" />
  <VerticalNavLink :item="{
    title: 'แจ้งซ่อม',
    icon: 'bx-wrench',
    to: '/it-service-request',
  }" />
  <!-- Removed Pro-only app links -->

  <VerticalNavLink :item="{
    title: 'Account Settings',
    icon: 'bx-user',
    to: '/account-settings',
  }" />

  <VerticalNavLink :item="{
    title: 'Login',
    icon: 'bx-log-in',
    to: '/login',
  }" />
  <VerticalNavLink :item="{
    title: 'Register',
    icon: 'bx-user-plus',
    to: '/register',
  }" />

  <!-- 👉 User Interface -->
  <VerticalNavSectionTitle :item="{
    heading: 'User Interface',
  }" />
  <VerticalNavLink :item="{
    title: 'Typography',
    icon: 'bx-text',
    to: '/typography',
  }" />
  <VerticalNavLink :item="{
    title: 'Icons',
    icon: 'bx-package',
    to: '/icons',
  }" />
  <VerticalNavLink :item="{
    title: 'Cards',
    icon: 'bx-credit-card',
    to: '/cards',
  }" />

  <!-- 👉 Forms & Tables -->
  <VerticalNavSectionTitle :item="{
    heading: 'Forms & Tables',
  }" />
  <VerticalNavLink :item="{
    title: 'Form Layouts',
    icon: 'bx-layout',
    to: '/form-layouts',
  }" />
  <!-- Removed Pro-only form links -->
  <VerticalNavLink :item="{
    title: 'Tables',
    icon: 'bx-table',
    to: '/tables',
  }" />

  <!-- 👉 Others -->
  <VerticalNavSectionTitle :item="{
    heading: 'Others',
  }" />
  <!-- Removed Pro-only others -->
  <VerticalNavLink :item="{
    title: 'Documentation',
    icon: 'bx-file',
    href: 'https://demos.themeselection.com/sneat-vuetify-vuejs-admin-template/documentation/',
    target: '_blank',
  }" />
  <VerticalNavLink :item="{
    title: 'Raise Support',
    href: 'https://github.com/themeselection/sneat-vuetify-nuxtjs-admin-template-free/issues',
    icon: 'bx-phone',
    target: '_blank',
  }" />
</template>
