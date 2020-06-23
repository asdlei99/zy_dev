<template>
  <div id="app" class="theme-dark">
    <Aside />
    <div class="zy-body">
      <Frame />
      <Film v-show="view === 'Film'" />
      <Play v-show="view === 'Play'" />
      <Star v-show="view === 'Star'" />
      <Setting v-show="view === 'Setting'" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      view: 'Star'
    }
  },
  components: {
  }
}
</script>

<style lang="scss">
@import './assets/scss/theme.scss';
html, body, #app{
  height: 100%;
  border-radius: 6px;
}
#app {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', SimSun, sans-serif;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  .zy-body{
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    padding: 0 20px 20px;
  }
}
</style>
