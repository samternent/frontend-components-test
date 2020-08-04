<template>
  <v-app id="fresh">
    <slot name="the-header">
      <the-header
        :hasSearch="true"
        :hasChat="false"
        :hasNotifications="false"/>
    </slot>
    <v-main>
      <the-sidebar>
        <slot name='the-sidebar'/>
      </the-sidebar>
      <slot/>
    </v-main>
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
