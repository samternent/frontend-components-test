<template>
  <v-tabs
    :value="activeTab"
    :color="tabColor"
    class="tw-tabs__page"
    :class="{ 'tw-tabs__page-border--bottom': borderBottom  }"
    @change="$emit('input', $event)"
  >
    <v-tabs-slider :color="sliderColor" />
    <v-tab
      v-for="item in items"
      :key="item[itemPath]"
      :to="item[itemPath]"
      :ripple="false"
    >{{ item[itemText] }}</v-tab>
  </v-tabs>
</template>

<script>
export default {
  name: 'PageNavigationTabs',
  props: {
    tabColor: {
      type: String,
      default: '#000'
    },
    sliderColor: {
      type: String,
      default: '#59c894'
    },
    items: {
      type: Array,
      default: () => []
    },
    itemPath: {
      type: String,
      default: 'to'
    },
    itemText: {
      type: String,
      default: 'text'
    },
    borderBottom: {
      type: Boolean,
      default: true
    },
    activeTab: {
      type: String,
      default: ''
    }
  },
  watch: {
    activeTab: {
      immediate: true,
      handler: 'validateProps'
    }
  },
  methods: {
    validateProps () {
      const valid = this.items.some(tab => tab[this.itemPath] === this.activeTab)
      if (!valid) this.$emit('invalid')
    }
  }
}
</script>

<style lang="scss" scoped>
.tw-tabs__page {
  margin: 0;
  padding: 0 0 0 20px;
}

.tw-tabs__page-border--bottom {
  border-bottom: 1px solid #eee;
}
</style>
