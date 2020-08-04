<template>
  <header>
    <v-app-bar
      color="#181631"
      dense
      dark
      flat
    >
      <v-toolbar-title class="tw-app__top-navbar__title">
        <a href="/#">
          <v-img src="@/assets/teamwork-short-white-pink-dot.png" alt="Teamwork" width="20" />
        </a>
      </v-toolbar-title>

      <PageNavigationTabs
        v-if="$vuetify.breakpoint.mdAndUp"
        v-model="selectedTab"
        :items="navItems"
        :border-bottom="false"
        item-path="path"
        item-text="name"
        slider-color="#ff22b1"
        tab-color="#fff"
      />

      <v-spacer />
        <v-text-field
          id="searchField"
          flat
          solo-inverted
          dense
          hide-details
          clearable
          prepend-inner-icon="mdi-magnify"
          class="mr-5"
          label="Search"
        />
    </v-app-bar>
  </header>
</template>

<script>
import PageNavigationTabs from './PageNavigationTabs';

export default {
  name: 'TheHeader',
  components: {
    PageNavigationTabs,
  },
  data: () => ({
    selectedTab: null,
  }),
  props: {
    navItems: {type: Array, default: () => ([
      { path: '/home', name: 'Home' },
      { path: '/projects', name: 'Projects' },
      { path: '/planning', name: 'Planning' },
      { path: '/reports', name: 'Reports' },
      { path: '/calendar', name: 'Calendar' },
      { path: '/people', name: 'People' }
    ])},
  },
};
</script>
<style>
</style>
