<template>
  <v-app id="fresh">
    <slot name="the-header">
      <the-header
        :hasSearch="true"
        :hasChat="false"
        :hasNotifications="false"/>
    </slot>
    <v-flex row>
      <slot name='the-sidebar'/>
      <slot/>
    </v-flex>
  </v-app>
</template>

<script>
import TheHeader from './TheHeader';
export default {
  name: 'FrontendComponents',
  components: { TheHeader },
};
</script>
