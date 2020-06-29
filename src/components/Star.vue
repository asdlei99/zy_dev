<template>
  <div class="star">
    <div class="body zy-scroll">
      <div class="zy-table">
        <div class="tBody">
          <ul>
            <li v-for="(i, j) in list" :key="j" @click="detailEvent(i)">
              <span class="name">资源名称</span>
              <span class="type">类型</span>
              <span class="time">更新时间</span>
              <span class="from">{{i.key | ftSite}}</span>
              <span class="operate" style="width: 220px">
                <span class="btn" @click.stop="playEvent(i)">播放</span>
                <span class="btn" @click.stop="deleteEvent(i)">删除</span>
                <span class="btn" @click.stop="shareEvent(i)">分享</span>
                <span class="btn" @click.stop="updateEvent(i)">同步</span>
                <span class="btn" @click.stop="downloadEvent(i)">下载</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'star',
  data () {
    return {
      list: []
    }
  },
  methods: {
    playEvent (e) {},
    deleteEvent (e) {},
    shareEvent (e) {},
    updateEvent (e) {},
    downloadEvent (e) {}
  }
}
</script>
<style lang="scss" scoped>
.star{
  position: relative;
  height: calc(100% - 40px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
}
</style>
