<template>
  <div class="setting">
    <button @click="openMini">mini</button>
  </div>
</template>
<script>
import { setting } from '../lib/dexie'
const { BrowserView, remote } = require('electron')
export default {
  name: 'setting',
  methods: {
    openMini () {
      const win = remote.getCurrentWindow()
      const view = new BrowserView()
      win.setBrowserView(view)
      view.webContents.loadURL('app://./mini.html')
    }
  },
  created () {
    setting.find().then(res => {
      console.log(res, 'setting')
    })
  }
}
</script>
<style lang="scss" scoped>
.setting{
  position: relative;
  height: calc(100% - 40px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
}
</style>
