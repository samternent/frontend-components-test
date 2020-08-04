<template>
  <v-app id="fresh">
    <slot name="header">
      <the-header
        :navItems="[
          { path: '/components', name: 'Components' },
          { path: '/data-loader', name: 'Data Loader' },
        ]"
        :search="false"/>
    </slot>
    <v-main>
      <slot/>
    </v-main>
  </v-app>
</template>

<script>
import TheHeader from './TheHeader';
export default {
  name: 'FrontendComponents',
  components: { TheHeader },
};
</script>
