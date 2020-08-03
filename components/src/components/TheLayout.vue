<template>
  <v-app>
    <slot name="header">
      <the-header/>
    </slot>
    <slot>
      body
    </slot>
  </v-app>
</template>

<script>
import TheHeader from './TheHeader';
export default {
  name: 'FrontendComponents',
  components: { TheHeader },
};
</script>
