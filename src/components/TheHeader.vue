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
export default {
  name: 'TheHeader',
};
</script>
<style>
</style>
