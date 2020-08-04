<template>
  <v-card height="100%">
    <v-navigation-drawer
      v-model="drawer"
      permanent
      absolute
    >
      <slot/>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ],
        right: null
      }
    }
  }
</script>
