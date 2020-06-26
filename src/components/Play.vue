<template>
  <div class="play">play</div>
</template>
<script>
import mt from 'mousetrap'
export default {
  name: 'play',
  data () {
    return {}
  },
  computed: {
    view () {
      return this.$store.getters.getView
    }
  },
  mounted () {
    mt.bind('m', () => {
      if (this.view === 'Play') {
        console.log('click m')
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.play{}
</style>
