<template>
  <div class="frame">
    <span class="min" @click="frameClickEvent('winMin')"></span>
    <span class="max" @click="frameClickEvent('winMax')"></span>
    <span class="close" @click="frameClickEvent('winClose')"></span>
  </div>
</template>
<script>
const { remote } = require('electron')
export default {
  name: 'frame',
  methods: {
    frameClickEvent (e) {
      const win = remote.getCurrentWindow()
      if (e === 'winMin') {
        win.minimize()
      }
      if (e === 'winMax') {
        if (win.isMaximized()) {
          win.unmaximize()
        } else {
          win.maximize()
        }
      }
      if (e === 'winClose') {
        win.destroy()
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.frame{
  width: 100%;
  height: 40px;
  display: flex;
  user-select: none;
  align-items: center;
  justify-content: flex-end;
  -webkit-app-region: drag;
  span{
    width: 14px;
    height: 14px;
    cursor: pointer;
    margin-left: 10px;
    border-radius: 50%;
    display: inline-block;
    -webkit-app-region: no-drag;
  }
}
</style>
