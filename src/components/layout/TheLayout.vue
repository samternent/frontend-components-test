<template>
  <v-app id="fresh">
    <slot name="the-header">
      <the-header
        :hasSearch="true"
        :hasChat="false"
        :hasNotifications="false"/>
    </slot>
    <v-flex row>
      <the-sidebar>
        <slot name='the-sidebar'/>
      </the-sidebar>
      <v-main>
        <slot/>
      </v-main>
    </v-flex>
  </v-app>
</template>

<script>
import TheSidebar from '../layout/TheSidebar';
import TheHeader from './TheHeader';
export default {
  name: 'FrontendComponents',
  components: { TheHeader, TheSidebar },
};
</script>
