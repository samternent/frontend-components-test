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
          v-if="hasSearch"
          flat
          solo-inverted
          dense
          hide-details
          clearable
          prepend-inner-icon="mdi-magnify"
          class="mr-5"
          label="Search"
        />
      <v-menu transition="scroll-x-transition" offset-y v-if="hasMenu">>
        <template v-slot:activator="{ on }">
          <v-btn small icon class="mr-3" v-on="on">
            <v-icon size="20px">mdi-plus</v-icon>
          </v-btn>
        </template>
      </v-menu>

      <v-btn small icon class="mr-3" v-if="hasChat">
        <v-icon size="20px">mdi-comment-processing</v-icon>
      </v-btn>
      <v-btn small icon class="mr-3" v-if="hasAppSwitcher">
        <v-icon size="20px">mdi-apps</v-icon>
      </v-btn>
      <v-badge dot content="12" color="green" overlap offset-x="22" offset-y="22" v-if="hasNotifications">
        <v-btn small icon class="mr-3">
          <v-icon size="20px">mdi-bell</v-icon>
        </v-btn>
      </v-badge>

      <template>
        <v-menu transition="scroll-x-transition" offset-y>
          <template v-slot:activator="{ on }">
            <v-btn class="tw-app__top-navbar__btn-profile" text v-on="on">
              <v-avatar size="32px" item class="ml-2">
                <v-img
                  :src="user.avatarUrl"
                  :alt="user.name"
                />
              </v-avatar>
              <v-icon>mdi-menu-down</v-icon>
            </v-btn>
          </template>

          <v-list dense class="v-list--teamwork">
            <v-list-item two-line :href="'#/people/1'">
              <v-list-item-avatar>
                <img :src="user.avatarUrl" />
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>
                  {{ user.name }}
                </v-list-item-title>
                <v-list-item-subtitle>View Profile</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-app-bar>
  </header>
</template>

<script>
import PageNavigationTabs from '../navigation/PageNavigationTabs';

export default {
  name: 'TheHeader',
  components: {
    PageNavigationTabs,
  },
  data: () => ({
    selectedTab: null,
  }),
  props: {
    navItems: { type: Array, default: () => ([]) },
    hasSearch: { type: Boolean, default: true, },
    hasChat: { type: Boolean, default: true, },
    hasMenu: { type: Boolean, default: true, },
    hasNotifications: { type: Boolean, default: true, },
    hasAppSwitcher: { type: Boolean, default: true, },
    user: { type: Object, default: () => ({
      name: 'Ozsu Akan',
      avatarUrl: 'https://avatars.dicebear.com/v2/female/d004f91f8e9c6aad0e60748b72a50d3c.svg',
    })}
  },
};
</script>
<style>
</style>
