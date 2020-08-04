<template>
  <v-card>
    <v-navigation-drawer
      v-model="drawer"
      permanent
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
        // right: null
      }
    }
  }
</script>
