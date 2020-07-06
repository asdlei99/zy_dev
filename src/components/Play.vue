<template>
  <div class="play">
    <div class="box">
      <div class="title">
        {{name}}
      </div>
      <div class="player">
        <div id="xg"></div>
      </div>
      <div class="more">
        <span class="zy-svg" @click="nextEvent" v-show="showNext">
          <svg role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-labelledby="forwardIconTitle">
            <title id="forwardIconTitle">下一集</title>
            <path d="M10 14.74L3 19V5l7 4.26V5l12 7-12 7v-4.26z"></path>
          </svg>
        </span>
        <!-- <span class="zy-svg" @click="listEvent" :class="right.type === 'list' ? 'active' : ''" v-show="right.list.length > 0"> -->
        <span class="zy-svg" @click="listEvent" :class="right.type === 'list' ? 'active' : ''">
          <svg role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-labelledby="dashboardIconTitle">
            <title id="dashboardIconTitle">播放列表</title>
            <rect width="20" height="20" x="2" y="2"></rect>
            <path d="M11 7L17 7M11 12L17 12M11 17L17 17"></path>
            <line x1="7" y1="7" x2="7" y2="7"></line>
            <line x1="7" y1="12" x2="7" y2="12"></line>
            <line x1="7" y1="17" x2="7" y2="17"></line>
          </svg>
        </span>
        <span class="zy-svg" @click="historyEvent" :class="right.type === 'history' ? 'active' : ''">
          <svg role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-labelledby="timeIconTitle">
            <title id="timeIconTitle">历史记录</title>
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 5 12 12 16 16"></polyline>
          </svg>
        </span>
        <span class="zy-svg" @click="starEvent" :class="isStar ? 'active' : ''" v-show="right.list.length > 0">
          <svg role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-labelledby="favouriteIconTitle">
            <title id="favouriteIconTitle">收藏</title>
            <path d="M12,21 L10.55,19.7051771 C5.4,15.1242507 2,12.1029973 2,8.39509537 C2,5.37384196 4.42,3 7.5,3 C9.24,3 10.91,3.79455041 12,5.05013624 C13.09,3.79455041 14.76,3 16.5,3 C19.58,3 22,5.37384196 22,8.39509537 C22,12.1029973 18.6,15.1242507 13.45,19.7149864 L12,21 Z"></path>
          </svg>
        </span>
        <span class="zy-svg" @click="detailEvent" v-show="right.list.length > 0">
          <svg role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-labelledby="feedIconTitle">
            <title id="feedIconTitle">详情</title>
            <circle cx="7.5" cy="7.5" r="2.5"></circle>
            <path d="M22 13H2"></path>
            <path d="M18 6h-5m5 3h-5"></path>
            <path d="M5 2h14a3 3 0 0 1 3 3v17H2V5a3 3 0 0 1 3-3z"></path>
          </svg>
        </span>
        <span class="zy-svg" @click="smallEvent" v-show="right.list.length > 0">
          <svg role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-labelledby="tvIconTitle">
            <title id="tvIconTitle">精简模式</title>
            <polygon points="20 8 20 20 4 20 4 8"></polygon>
            <polyline stroke-linejoin="round" points="8 4 12 7.917 16 4"></polyline>
          </svg>
        </span>
        <span class="zy-svg" @click="shareEvent" v-show="right.list.length > 0">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-labelledby="qrIconTitle">
            <title id="qrIconTitle">分享</title>
            <rect x="10" y="3" width="7" height="7" transform="rotate(90 10 3)"></rect>
            <rect width="1" height="1" transform="matrix(-1 0 0 1 7 6)"></rect>
            <rect x="10" y="14" width="7" height="7" transform="rotate(90 10 14)"></rect>
            <rect x="6" y="17" width="1" height="1"></rect>
            <rect x="14" y="20" width="1" height="1"></rect>
            <rect x="17" y="17" width="1" height="1"></rect>
            <rect x="14" y="14" width="1" height="1"></rect>
            <rect x="20" y="17" width="1" height="1"></rect>
            <rect x="20" y="14" width="1" height="1"></rect>
            <rect x="20" y="20" width="1" height="1"></rect>
            <rect x="21" y="3" width="7" height="7" transform="rotate(90 21 3)"></rect>
            <rect x="17" y="6" width="1" height="1"></rect>
          </svg>
        </span>
      </div>
    </div>
    <transition name="slideX">
      <div v-if="right.show" class="list">
        <div class="list-top">
          <span class="list-top-title">{{ right.type === 'list' ? '播放列表' : '历史记录' }}</span>
          <span class="list-top-close zy-svg" @click="closeListEvent">
            <svg role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-labelledby="closeIconTitle">
              <title id="closeIconTitle">关闭</title>
              <path d="M6.34314575 6.34314575L17.6568542 17.6568542M6.34314575 17.6568542L17.6568542 6.34314575"></path>
            </svg>
          </span>
        </div>
        <div class="list-body zy-scroll" :style="{overflowY:scroll? 'auto' : 'hidden',paddingRight: scroll ? '0': '5px' }" @mouseenter="scroll = true" @mouseleave="scroll = false">
          <ul v-show="right.type === 'list'" class="list-item">
            <li v-show="right.list.length === 0">无数据</li>
            <li @click="listItemEvent(j)" :class="video.index === j ? 'active' : ''" v-for="(i, j) in right.list" :key="j">{{i | ftName}}</li>
          </ul>
          <ul v-show="right.type === 'history'" class="list-history">
            <li v-show="right.history.length > 1" @click="clearAllHistory">清空</li>
            <li v-show="right.history.length === 0">无数据</li>
            <li @click="historyItemEvent(m)" :class="video.detail === m.detail ? 'active' : ''" v-for="(m, n) in right.history" :key="n"><span class="title">{{m.name}}</span><span @click.stop="removeHistoryItem(m)" class="detail-delete">删除</span></li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import history from '../lib/dexie/history'
import 'xgplayer'
import Hls from 'xgplayer-hls.js'
import mt from 'mousetrap'
export default {
  name: 'play',
  data () {
    return {
      xg: null,
      right: {
        show: false,
        type: '',
        list: [],
        history: []
      },
      config: {
        id: 'xg',
        lang: 'zh-cn',
        url: '',
        width: '100%',
        height: '100%',
        autoplay: false,
        videoInit: true,
        screenShot: true,
        keyShortcut: 'on',
        crossOrigin: true,
        cssFullscreen: true,
        defaultPlaybackRate: 1,
        playbackRate: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 3, 4, 5]
      },
      name: '',
      length: 0,
      timer: null,
      scroll: false,
      showNext: true,
      isStar: false,
      isTop: false
    }
  },
  computed: {
    view: {
      get () {
        return this.$store.getters.getView
      },
      set (val) {
        this.SET_VIEW(val)
      }
    },
    video: {
      get () {
        return this.$store.getters.getVideo
      },
      set (val) {
        this.SET_VIDEO(val)
      }
    },
    detail: {
      get () {
        return this.$store.getters.getDetail
      },
      set (val) {
        this.SET_DETAIL(val)
      }
    },
    share: {
      get () {
        return this.$store.getters.getShare
      },
      set (val) {
        this.SET_SHARE(val)
      }
    }
  },
  methods: {
    ...mapMutations(['SET_VIEW', 'SET_DETAIL', 'SET_VIDEO', 'SET_SHARE']),
    nextEvent () {},
    listEvent () {
      if (this.right.type === 'list') {
        this.right.show = false
        this.right.type = ''
      } else {
        this.right.show = true
        this.right.type = 'list'
      }
    },
    historyEvent () {
      if (this.right.type === 'history') {
        this.right.show = false
        this.right.type = ''
      } else {
        this.right.show = true
        this.right.type = 'history'
      }
      history.all().then(res => {
        this.right.history = res.reverse()
      })
    },
    starEvent () {},
    detailEvent () {},
    smallEvent () {},
    shareEvent () {},
    closeListEvent () {},
    clearAllHistory () {},
    listItemEvent () {},
    historyItemEvent () {},
    removeHistoryItem () {}
  },
  mounted () {
    this.xg = new Hls(this.config)
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
  .box{
    width: 100%;
    height: 100%;
    display: flex;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .title{
      width: 100%;
      height: 40px;
      line-height: 40px;
      padding: 0 10px;
    }
    .player{
      width: 100%;
      flex: 1;
      padding: 0 10px;
    }
    .more{
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 0 10px;
      span{
        display: flex;
        margin-right: 10px;
        cursor: pointer;
      }
    }
  }
  .list{
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
    height: 100%;
    z-index: 555;
    border-radius: 3px;
    padding: 6px;
    display: flex;
    flex-direction: column;
    .list-top{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 30px;
      .list-top-title{
        font-size: 16px;
      }
      .list-top-close{
        display: inline-block;
        cursor: pointer;
      }
    }
    .list-body{
      flex: 1;
      overflow-y: auto;
      ul{
        margin: 0;
        padding: 0;
        list-style: none;
        li{
          position: relative;
          height: 28px;
          width: 100%;
          line-height: 28px;
          padding-left: 10px;
          font-size: 14px;
          cursor: pointer;
          .title{
            display: inline-block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 231px;
          }
          .detail-delete{
            display: none;
            position: absolute;
            right: 0;
            height: 28px;
            width: 50px;
            text-align: center;
          }
        }
      }
    }
  }
  .slideX-enter-active, .slideX-leave-active{
    transition: all .5s ease-in-out;
  }
  .slideX-enter, .slideX-leave-to{
    transform: translateX(100%);
    opacity: 0;
  }
}
</style>
