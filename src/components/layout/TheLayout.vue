<template>
  <v-app id="fresh">
    <slot name="the-header">
      <the-header
        :hasSearch="true"
        :hasChat="false"
        :hasNotifications="false"/>
    </slot>
    <div class="flex">
      <the-sidebar>
        <slot name='the-sidebar'/>
      </the-sidebar>
      <main class="content">
        <slot/>
      </main>
    </div>
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
<style lang="scss" scoped>
.flex {
  display: flex;
}
.content {
  height: calc(100vh - 50px);
  flex: 1;
}
</style>
