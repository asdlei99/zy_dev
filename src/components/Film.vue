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
    <div class="body">
      <div class="img">
        <waterfall :line-gap="200" :watch="items">
          <waterfall-slot v-for="(i, j) in items" :key="j" :order="j" :width="200" :height="400"></waterfall-slot>
        </waterfall>
      </div>
      <div class="table"></div>
      <div class="control"></div>
    </div>
  </div>
</template>
<script>
import Waterfall from 'vue-waterfall/lib/waterfall'
import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'
import { sites, getSite } from '../lib/site/sites'
import zy from '../lib/site/tools'
export default {
  name: 'film',
  data () {
    return {
      show: {
        site: false,
        type: false,
        search: false
      },
      sites: sites,
      site: {},
      types: [],
      type: {},
      items: []
    }
  },
  components: {
    Waterfall,
    WaterfallSlot
  },
  methods: {
    siteClick (e) {
      this.site = e
      getSite(e)
      zy.type(e.key).then(res => {
        this.types = res
        this.type = res[0]
      })
    },
    typeClick (e) {
      this.type = e
      const key = this.site.key
      zy.list(key, 1).then(res => {
        console.log(res, 'res type click')
        this.items = res.list
      })
    }
  },
  created () {
    this.site = this.sites[0]
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
  }
  .body{
    margin-top: 20px;
    flex: 1;
    width: 100%;
    background-color: var(--d-bgc-1);
    border-radius: 0 0 5px 5px;
  }
}
</style>
