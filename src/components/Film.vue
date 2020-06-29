<template>
  <div class="film">
    <div class="header">
      <div class="zy-select" @mouseleave="show.site = false">
        <div class="vs-placeholder" @click="show.site = true">{{site.name}}</div>
        <div class="vs-options" v-show="show.site">
          <ul class="zy-scroll">
            <li :class="site.key === i.key ? 'active' : ''" v-for="i in sites" :key="i.key" @click="siteClick(i)">{{ i.name }}</li>
          </ul>
        </div>
      </div>
      <div class="zy-select" @mouseleave="show.type = false" v-if="types.length > 0">
        <div class="vs-placeholder" @click="show.type = true">{{type.name}}</div>
        <div class="vs-options" v-show="show.type">
          <ul class="zy-scroll">
            <li :class="type.tid === i.tid ? 'active' : ''" v-for="i in types" :key="i.tid" @click="typeClick(i)">{{ i.name }}</li>
          </ul>
        </div>
      </div>
      <div class="zy-select">
        <div class="input"></div>
        <span class="zy-svg">
          <svg role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-labelledby="searchIconTitle">
            <title id="searchIconTitle">Search</title>
            <path d="M14.4121122,14.4121122 L20,20"></path>
            <circle cx="10" cy="10" r="6"></circle>
          </svg>
        </span>
      </div>
    </div>
    <div class="body zy-scroll" infinite-wrapper>
      <div class="show-img" v-if="show.img">
        <Waterfall :list="list" :gutter="20" :width="240"
        :breakpoints="{ 1200: { rowPerView: 4 } }"
        animationEffect="fadeInUp"
        backgroundColor="rgba(0, 0, 0, 0)"
        ref="waterfall">
          <template slot="item" slot-scope="props">
            <div class="card">
              <div class="img">
                <img style="width: 100%" :src="props.data.pic" alt="" @load="$refs.waterfall.refresh()" @click="detailEvent(props.data)">
                <div class="operate">
                  <div class="operate-wrap">
                    <span class="o-play">播放</span>
                    <span class="o-star">收藏</span>
                    <span class="o-share">分享</span>
                  </div>
                </div>
              </div>
              <div class="name" @click="detailEvent(props.data)">{{props.data.name}}</div>
              <div class="info">
                <span>{{props.data.year}}</span>
                <span>{{props.data.type}}</span>
              </div>
            </div>
          </template>
        </Waterfall>
        <infinite-loading force-use-infinite-wrapper :identifier="infiniteId" @infinite="infiniteHandler"></infinite-loading>
      </div>
      <div class="show-table" v-if="!show.img">
        <div class="zy-table">
          <div class="tBody">
            <ul>
              <li v-for="(i, j) in list" :key="j" @click="detailEvent(i)">
                <span class="name">{{i.name}}</span>
                <span class="type">{{i.type}}</span>
                <span class="time">{{i.last}}</span>
                <span class="operate">
                  <span class="btn" @click.stop="playEvent(i)">播放</span>
                  <span class="btn" @click.stop="starEvent(i)">收藏</span>
                  <span class="btn" @click.stop="shareEvent(i)">分享</span>
                </span>
              </li>
            </ul>
            <infinite-loading force-use-infinite-wrapper="tBody" :identifier="infiniteId" @infinite="infiniteHandler"></infinite-loading>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import Waterfall from 'vue-waterfall-plugin'
import InfiniteLoading from 'vue-infinite-loading'
import { sites } from '../lib/site/sites'
import zy from '../lib/site/tools'
export default {
  name: 'film',
  data () {
    return {
      show: {
        site: false,
        type: false,
        search: false,
        img: true
      },
      sites: sites,
      site: {},
      types: [],
      type: {},
      page: 1,
      list: [],
      pg: {},
      infiniteId: +new Date()
    }
  },
  components: {
    Waterfall,
    InfiniteLoading
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
    ...mapMutations(['SET_VIEW', 'SET_SITE', 'SET_DETAIL', 'SET_VIDEO', 'SET_SHARE']),
    siteClick (e) {
      this.list = []
      this.page = 1
      this.types = []
      this.type = {}
      this.site = e
      this.getType()
      setTimeout(() => {
        this.infiniteId += 1
      }, 1000)
    },
    typeClick (e) {
      this.list = []
      this.page = 1
      this.type = e
      setTimeout(() => {
        this.infiniteId += 1
      }, 1000)
    },
    getType () {
      const key = this.site.key
      zy.type(key).then(res => {
        this.types = res
        this.type = {
          name: '所有',
          tid: null
        }
      })
    },
    infiniteHandler ($state) {
      const key = this.site.key
      const type = this.type.tid
      zy.list(key, this.page, type).then(res => {
        if (res.list) {
          this.page += 1
          this.list.push(...res.list)
          $state.loaded()
        } else {
          $state.complete()
        }
      })
    },
    detailEvent (e) {
      this.detail = {
        show: true,
        key: this.site.key,
        info: e
      }
    },
    playEvent (e) {},
    starEvent (e) {},
    shareEvent (e) {},
    downloadEvent (e) {}
  },
  created () {
    this.site = this.sites[1]
    this.getType()
  }
}
</script>
<style lang="scss" scoped>
.film{
  height: calc(100% - 40px);
  width: 100%;
  display: flex;
  flex-direction: column;
  .header{
    height: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 10;
  }
  .body{
    margin-top: 20px;
    flex: 1;
    width: 100%;
    background-color: var(--d-bgc-1);
    border-radius: 0 0 5px 5px;
    overflow-y: scroll;
    &::-webkit-scrollbar{
      width: 5px;
      height: 1px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      position: absolute;
    }
    &::-webkit-scrollbar-track {
      border-radius: 10px;
      position: absolute;
    }
    .show-img{
      height: 100%;
      width: 100%;
      padding: 10px;
      .card{
        color: var(--d-fc-1);
        background-color: #1c1c1c;
        border-radius: 6px;
        overflow: hidden;
        .img{
          position: relative;
          min-height: 40px;
          img{
            width: 100%;
            height: auto;
            cursor: pointer;
          }
          .operate{
            display: none;
            position: absolute;
            left: 0;
            bottom: 0;
            background-color: #111111aa;
            width: 100%;
            font-size: 13px;
            .operate-wrap{
              display: flex;
              justify-content: space-between;
              .o-play, .o-star, .o-share{
                cursor: pointer;
                display: inline-block;
                width: 80px;
                height: 36px;
                text-align: center;
                line-height: 36px;
                color: #cdcdcd;
                &:hover{
                  background-color: #111;
                }
              }
            }
          }
        }
        .name{
          font-size: 16px;
          padding: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          cursor: pointer;
        }
        .info{
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          padding: 10px;
        }
        &:hover{
          box-shadow: var(--d-bsc-hover);
          .operate{
            display: block;
          }
        }
      }
    }
  }
}
</style>
