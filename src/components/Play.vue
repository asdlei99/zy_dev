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
.play{
  position: relative;
  height: calc(100% - 40px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
}
</style>
