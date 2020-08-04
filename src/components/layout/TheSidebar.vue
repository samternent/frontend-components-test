<template>
  <section class="sidebar">
    <slot/>
  </section>
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
<style scoped>
.sidebar {
  height: 100%;
  background-color: #f5f6f7;
  width: 300px;
}
</style>
