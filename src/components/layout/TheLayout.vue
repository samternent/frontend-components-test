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

      <VDataTable/>
      <slot/>
    </v-flex>
  </v-app>
</template>

<script>
import { VDataTable } from 'vuetify/lib';
import TheHeader from './TheHeader';
export default {
  name: 'FrontendComponents',
  components: { TheHeader, VDataTable },
};
</script>
