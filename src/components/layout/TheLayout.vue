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
      <main>
        <slot/>
      </main>
    </v-flex>
  </v-app>
</template>

<script>
import TheHeader from './TheHeader';
import TheSidebar from './TheSidebar';
export default {
  name: 'FrontendComponents',
  components: { TheHeader, TheSidebar },
};
</script>
