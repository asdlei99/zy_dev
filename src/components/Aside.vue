<template>
  <div class="aside"></div>
</template>
<script>
export default {
  name: 'Aside'
}
</script>
<style lang="scss" scoped>
.aside{
  width: 60px;
  height: 100%;
  display: flex;
  user-select: none;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  -webkit-app-region: drag;
  span{
    width: 60px;
    height: 60px;
    cursor: pointer;
    -webkit-app-region: no-drag;
  }
}
</style>
