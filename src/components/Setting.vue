<template>
  <div class="setting">setting</div>
</template>
<script>
import setting from '../lib/dexie/setting'
export default {
  name: 'setting',
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
