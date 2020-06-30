<template>
  <div class="detail">
    <div class="detail-content">
      <div class="detail-header">
        <span class="detail-title">详情</span>
        <span class="detail-close zy-svg" @click="close">
          <svg role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-labelledby="closeIconTitle">
            <title id="closeIconTitle">关闭</title>
            <path d="M6.34314575 6.34314575L17.6568542 17.6568542M6.34314575 17.6568542L17.6568542 6.34314575"></path>
          </svg>
        </span>
      </div>
      <div class="detail-body zy-scroll">
        <div class="info">
          <div class="info-left">
            <img :src="detail.info.pic" alt="">
          </div>
          <div class="info-right">
            <div class="name">{{detail.info.name}}</div>
            <div class="director" v-show="detail.info.director">导演: {{detail.info.director}}</div>
            <div class="actor" v-show="detail.info.actor">主演: {{detail.info.actor}}</div>
            <div class="type" v-show="detail.info.type">类型: {{detail.info.type}}</div>
            <div class="area" v-show="detail.info.area">地区: {{detail.info.area}}</div>
            <div class="lang" v-show="detail.info.lang">语言: {{detail.info.lang}}</div>
            <div class="year" v-show="detail.info.year">上映: {{detail.info.year}}</div>
            <div class="note" v-show="detail.info.note">备注: {{detail.info.note}}</div>
          </div>
        </div>
        <div class="operate">
          <span>播放</span>
          <span>收藏</span>
          <span @click="downloadEvent">下载</span>
          <span>分享</span>
        </div>
        <div class="desc" v-show="detail.info.des">{{detail.info.des}}</div>
        <div class="m3u8">
          <div class="box">
            <span v-for="(i, j) in m3u8List" :key="j" @click="playEvent(j)">{{i | ftName}}</span>
          </div>
        </div>
        <div class="mp4"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import zy from '../lib/site/tools'
const { clipboard } = require('electron')
export default {
  name: 'detail',
  data () {
    return {
      m3u8List: []
    }
  },
  filters: {
    ftName (e) {
      const name = e.split('$')[0]
      return name
    }
  },
  computed: {
    detail: {
      get () {
        return this.$store.getters.getDetail
      },
      set (val) {
        this.SET_DETAIL(val)
      }
    }
  },
  methods: {
    ...mapMutations(['SET_VIEW', 'SET_VIDEO', 'SET_DETAIL']),
    close () {
      this.detail.show = false
    },
    m3u8Parse (e) {
      const text = e.dl.dd._t
      if (text) {
        this.m3u8List = text.split('#')
      }
    },
    playEvent (e) {
      console.log(e)
    },
    downloadEvent () {
      zy.down(this.detail.key, this.detail.info.id).then(res => {
        if (res) {
          const text = res.dl.dd._t
          if (text) {
            const list = text.split('#')
            let downloadUrl = ''
            for (const i of list) {
              const url = encodeURI(i.split('$')[1])
              downloadUrl += (url + '\n')
            }
            clipboard.writeText(downloadUrl)
            this.$message.success('『MP4』格式的链接已复制, 快去下载吧!')
          } else {
            this.$message.warning('没有查询到下载链接.')
          }
        } else {
          const list = [...this.m3u8List]
          let downloadUrl = ''
          for (const i of list) {
            const url = encodeURI(i.split('$')[1])
            downloadUrl += (url + '\n')
          }
          clipboard.writeText(downloadUrl)
          this.$message.success('『M3U8』格式的链接已复制, 快去下载吧!')
        }
      })
    }
  },
  created () {
    this.m3u8Parse(this.detail.info)
  }
}
</script>
<style lang="scss" scoped>
.detail{
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: calc(100% - 40px);
  z-index: 999;
  .detail-content{
    height: calc(100% - 10px);
    padding: 0 60px;
    position: relative;
    .detail-header{
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .detail-title{
        font-size: 16px;
      }
      .detail-close{
        cursor: pointer;
      }
    }
  }
  .detail-body{
    height: calc(100% - 50px);
    overflow-y: auto;
    .info{
      width: 100%;
      padding: 10px;
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: flex-start;
      border: 1px solid;
      border-radius: 2px;
      margin-bottom: 10px;
      height: auto;
      .info-left{
        width: 200px;
        height: 100%;
        img{
          width: 100%;
          height: auto;
        }
      }
      .info-right{
        flex: 1;
        margin-left: 20px;
        .name{
          font-size: 20px;
          margin-bottom: 10px;
          font-weight: bold;
        }
        .director, .actor, .type, .area, .lang, .year, .note{
          font-size: 14px;
          line-height: 26px;
        }
      }
    }
    .operate{
      border: 1px solid;
      padding: 10px;
      width: 100%;
      margin-bottom: 10px;
      border-radius: 2px;
      span{
        margin-right: 20px;
        font-size: 14px;
        cursor: pointer;
        user-select: none;
      }
    }
    .desc{
      border: 1px solid;
      padding: 10px;
      width: 100%;
      margin-bottom: 10px;
      border-radius: 2px;
      font-size: 14px;
      line-height: 20px;
    }
    .m3u8{
      border: 1px solid;
      padding: 10px;
      width: 100%;
      margin-bottom: 10px;
      border-radius: 2px;
      .box{
        width: 100%;
        span{
          display: inline-block;
          font-size: 12px;
          border: 1px solid;
          border-radius: 2px;
          cursor: pointer;
          margin: 6px 10px 0px 0px;
          padding: 8px 22px;
        }
      }
    }
  }
}
</style>
